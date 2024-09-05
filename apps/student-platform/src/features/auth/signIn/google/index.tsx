"use client";

import { useState, FormEvent } from "react";

interface HomePageProps {
  initialAccepted: boolean;
}

interface ApiResponse {
  error?: string;
  redirect?: string;
}

export async function getServerSideProps() {
  return {
    props: {
      initialAccepted: false,
    },
  };
}

export default function HomePage({ initialAccepted }: HomePageProps) {
  const [accepted, setAccepted] = useState<boolean>(initialAccepted);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!accepted) {
      setError("You must read and accept Privacy Policy");
      return;
    }

    try {
      const response = await fetch("/api/authenticate", {
        method: "POST",
        body: JSON.stringify({ accepted }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const result: ApiResponse = await response.json();

      if (result.error) {
        setError(result.error);
      } else if (result.redirect) {
        if (typeof window !== "undefined") {
          window.location.href = result.redirect;
        }
      }
    } catch (err) {
      setError("An error occurred while processing your request.");
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
        I accept the
        <a href="/privacy-policy" target="_blank">
          Privacy Policy
        </a>
      </label>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <button type="submit">Sign in with Google</button>
    </form>
  );
}
