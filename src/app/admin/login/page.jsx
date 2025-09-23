"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../../../lib/supabaseClient";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
    } else {
      router.push("/admin/dashboard");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <form
        onSubmit={handleLogin}
        className="bg-gray-800 p-8 rounded-lg shadow-lg w-80 text-gray-100"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-emerald-300">
          Tassen Verifizierung
        </h2>
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
