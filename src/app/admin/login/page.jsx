"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { supabase } from "../../../lib/supabaseClient";

export default function TassenLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    (async () => {
      try {
        // Prüfen, ob bereits eine Session existiert
        const { data: sessionData } = await supabase.auth.getSession();
        if (sessionData.session) {
          router.push("/admin/dashboard");
          return;
        }
        setLoading(false);

        // Username aus Query übernehmen
        const queryUsername = searchParams?.get?.("username");
        if (queryUsername) {
          setUsername(queryUsername);

          // Prüfen, ob First Login nötig ist
          const { data: adminData } = await supabase
            .from("admins")
            .select("email")
            .eq("username", queryUsername)
            .single();

          if (adminData && !adminData.email) {
            router.push(`/admin/first-login?username=${queryUsername}`);
          }
        }
      } catch (err) {
        console.error("Fehler beim Login-Check:", err);
        setLoading(false);
      }
    })();
  }, [router, searchParams]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      // Username auf Email in Supabase-Tabelle "admins" nachschlagen
      const { data, error: fetchError } = await supabase
        .from("admins")
        .select("email")
        .eq("username", username)
        .single();

      if (fetchError || !data?.email) {
        setError("Benutzername nicht gefunden oder First Login noch nicht abgeschlossen!");
        return;
      }

      const { data: sessionData, error: loginError } = await supabase.auth.signInWithPassword({
        email: data.email,
        password,
      });

      if (loginError) {
        setError(loginError.message);
      } else if (sessionData.session) {
        router.push("/admin/dashboard");
      }
    } catch (err) {
      setError(err.message);
    }
  };

  if (loading) return <p className="text-center mt-10">Lade...</p>;

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <form
        onSubmit={handleLogin}
        className="bg-gray-800 p-8 rounded-lg shadow-lg w-80 text-gray-100"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-emerald-300">
          Admin Login
        </h2>

        <input
          type="text"
          placeholder="Benutzername"
          value={username}
          readOnly
          className="w-full mb-4 p-2 border border-gray-600 rounded bg-gray-700 text-gray-100 placeholder-gray-400"
        />

        <input
          type="password"
          placeholder="Passwort"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-4 p-2 border border-gray-600 rounded bg-gray-700 text-gray-100 placeholder-gray-400"
          required
        />

        {error && <p className="text-red-400 mb-4">{error}</p>}

        <button
          type="submit"
          className="w-full bg-emerald-500 hover:bg-emerald-600 py-2 rounded font-semibold transition"
        >
          Login
        </button>
      </form>
    </div>
  );
}
