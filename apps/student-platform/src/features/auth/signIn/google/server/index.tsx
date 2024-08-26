"use client";
import { useState } from "react";

export default function HomePage() {
  const [accepted, setAccepted] = useState(false);
  const [error, setError] = useState(null);

  async function handleSubmit(e: MouseEvent) {
    e.preventDefault();

    if (!accepted) {
      setError("You must read and accept Privacy Policy");
      return;
    }

    const response = await fetch("/api/authenticate", {
      method: "POST",
      body: JSON.stringify({ accepted }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json();

    if (result.error) {
      setError(result.error);
    } else if (result.redirect) {
      window.location.href = result.redirect;
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="checkbox"
        id="privacy-policy"
        name="accepted"
        checked={accepted}
        onChange={() => setAccepted(!accepted)}
      />
      <label htmlFor="privacy-policy">
        I accept the{" "}
        <a href="/privacy-policy" target="_blank">
          Privacy Policy
        </a>
      </label>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <button type="submit">Sign in with Google</button>
    </form>
  );
}
