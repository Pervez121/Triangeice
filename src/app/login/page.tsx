"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setLoading(true);
    setMessage("");

    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    let data: { error?: string } = {};
    try {
      data = await response.json();
    } catch {
      data = {};
    }

    if (!response.ok) {
      setLoading(false);
      setMessage(data.error || "Could not sign in.");
      return;
    }

    setLoading(false);
    router.push("/dashboard");
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 px-6 py-16 text-slate-100">
      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-slate-900 p-8 shadow-2xl shadow-black/30">
        <p className="text-sm uppercase tracking-[0.3em] text-sky-300">Triangeice</p>
        <h1 className="mt-3 text-3xl font-semibold">Secure admin access</h1>
        <p className="mt-3 text-slate-400">Sign in to access the protected NGO dashboard.</p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <label className="block text-sm">
            <span className="mb-2 block text-slate-300">Email</span>
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="w-full rounded-2xl border border-white/10 bg-slate-800 px-4 py-3 outline-none ring-0"
              placeholder="admin@triangeice.org"
            />
          </label>
          <label className="block text-sm">
            <span className="mb-2 block text-slate-300">Password</span>
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="w-full rounded-2xl border border-white/10 bg-slate-800 px-4 py-3 outline-none ring-0"
              placeholder="••••••••"
            />
          </label>
          <button type="submit" disabled={loading} className="w-full rounded-2xl bg-sky-600 px-4 py-3 font-semibold text-white transition hover:bg-sky-500 disabled:cursor-not-allowed disabled:opacity-70">
            {loading ? "Signing in..." : "Continue to dashboard"}
          </button>
        </form>

        {message ? <p className="mt-4 text-sm text-slate-400">{message}</p> : null}
      </div>
    </div>
  );
}
