"use client";

export default function Login() {
  console.log(
    "process.env.NEXT_PUBLIC_AUTH_URL",
    process.env.NEXT_PUBLIC_AUTH_URL,
  );

  const handleOauth = async (event: any) => {
    event.preventDefault();
    window.location.href = `${process.env.NEXT_PUBLIC_API_V1_URL}/auth/google/callback`;
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button onClick={handleOauth}>Google Sign In</button>
    </main>
  );
}
