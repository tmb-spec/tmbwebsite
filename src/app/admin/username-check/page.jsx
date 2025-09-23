"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../../../lib/supabaseClient";

export default function UsernameCheck() {
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleUsernameSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      // Prüfen, ob Username existiert in der "admins"-Tabelle
      const { data, error: fetchError } = await supabase
        .from("admins")
        .select("*")
        .eq("username", username)
        .single();

      if (fetchError && fetchError.code !== "PGRST116") {
        setError(fetchError.message);
        setLoading(false);
        return;
      }

      if (!data) {
        setError("Ungültiger Benutzername!");
        setLoading(false);
        return;
      }

      // Prüfen, ob Email schon hinterlegt ist → normaler Login
      if (!data.email) {
        // First Login: weiterleiten
        router.push(`/admin/first-login?username=${username}`);
      } else {
        // Normal Login
        router.push(`/admin/login?username=${username}`);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <form
        onSubmit={handleUsernameSubmit}
        className="bg-gray-800 p-8 rounded-lg shadow-lg w-80 text-gray-100"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-emerald-300">
          Admin Username
        </h2>

        <input
          type="text"
          placeholder="Benutzername"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full mb-4 p-2 border border-gray-600 rounded bg-gray-700 text-gray-100 placeholder-gray-400"
          required
        />

        {error && <p className="text-red-400 mb-4">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-2 rounded font-semibold transition ${
            loading ? "bg-gray-400 cursor-not-allowed" : "bg-emerald-500 hover:bg-emerald-600"
          }`}
        >
          {loading ? "Prüfe..." : "Weiter"}
        </button>
      </form>
    </div>
  );
}
