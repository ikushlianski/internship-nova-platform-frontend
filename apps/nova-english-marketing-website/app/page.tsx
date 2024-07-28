import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <p>
        This is the home page of the app. You can navigate to the login page by
        clicking <Link href={"/login"}>here</Link>.
      </p>
    </div>
  );
}
