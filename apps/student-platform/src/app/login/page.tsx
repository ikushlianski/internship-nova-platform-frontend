"use client";

export default function Login() {

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
