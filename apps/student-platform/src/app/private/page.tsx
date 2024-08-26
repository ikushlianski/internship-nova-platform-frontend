import { cookies } from "next/headers";

export default async function PrivatePage() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_V1_URL}/users/1`,
    {
      headers: { Cookie: cookies().toString() },
      cache: "no-store",
    },
  );

  if (!response.ok) {
    return (
      <div>Failed to fetch user data. Error code is {response.status}</div>
    );
  }

  const data = await response.json();

  return (
    <div>
      <h1>Private Page</h1>
      {data && (
        <>
          <h3>User data</h3>
          <p>Name: {data.author}</p>
          <p>Title: {data.title}</p>
        </>
      )}
    </div>
  );
}
