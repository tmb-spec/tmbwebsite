"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../../../lib/supabaseClient";

export default function FirstLogin() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const allowedUsernames = ["admin1", "admin2", "admin3"]; // Feste Admin-Usernames

  const handleFirstLogin = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    if (!allowedUsernames.includes(username)) {
      setError("Ungültiger Benutzername!");
      setLoading(false);
      return;
    }

    if (password !== passwordRepeat) {
      setError("Passwörter stimmen nicht überein!");
      setLoading(false);
      return;
    }

    try {
      // Prüfen, ob Username schon existiert und first_login_done = true
      const { data: existing, error: fetchError } = await supabase
        .from("admins")
        .select("*")
        .eq("username", username)
        .single();

      if (fetchError && fetchError.code !== "PGRST116") {
        setError(fetchError.message);
        setLoading(false);
        return;
      }

      if (existing && existing.first_login_done) {
        setError("Dieser Benutzername wurde bereits registriert!");
        setLoading(false);
        return;
      }

      // Signup über Supabase Auth
      const { data, error: insertError } = await supabase.auth.signUp({
        email,
        password,
      });

      if (insertError) {
        setError(insertError.message);
        setLoading(false);
        return;
      }

      // Admin-Tabelle aktualisieren
      if (existing) {
        await supabase
          .from("admins")
          .update({ email, first_login_done: true })
          .eq("username", username);
      } else {
        await supabase
          .from("admins")
          .insert([{ username, email, first_login_done: true }]);
      }

      setSuccess("Erfolgreich registriert! Du kannst dich jetzt einloggen.");
      setTimeout(() => router.push("/admin/login"), 2000);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <form
        onSubmit={handleFirstLogin}
        className="bg-gray-800 p-8 rounded-lg shadow-lg w-80 text-gray-100"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-emerald-300">
          Erstlogin Admin
        </h2>

        <input
          type="text"
          placeholder="Benutzername"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full mb-4 p-2 border border-gray-600 rounded bg-gray-700 text-gray-100 placeholder-gray-400"
          required
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 p-2 border border-gray-600 rounded bg-gray-700 text-gray-100 placeholder-gray-400"
          required
        />

        <input
          type="password"
          placeholder="Passwort"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-4 p-2 border border-gray-600 rounded bg-gray-700 text-gray-100 placeholder-gray-400"
          required
        />

        <input
          type="password"
          placeholder="Passwort wiederholen"
          value={passwordRepeat}
          onChange={(e) => setPasswordRepeat(e.target.value)}
          className="w-full mb-4 p-2 border border-gray-600 rounded bg-gray-700 text-gray-100 placeholder-gray-400"
          required
        />

        {error && <p className="text-red-400 mb-4">{error}</p>}
        {success && <p className="text-green-400 mb-4">{success}</p>}

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-2 rounded font-semibold transition ${
            loading ? "bg-gray-400 cursor-not-allowed" : "bg-emerald-500 hover:bg-emerald-600"
          }`}
        >
          {loading ? "Registriere..." : "Registrieren"}
        </button>
      </form>
    </div>
  );
}
