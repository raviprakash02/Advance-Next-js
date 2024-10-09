"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const navigate = (name) => {
    router.push(name);
  };
  return (
    <main>
      <h1>Basic Routing</h1>
      <Link href="/login">Go to Login Page</Link>
      <br />
      <br />
      <Link href="/about">Go to About Page</Link>
      <br />
      <br />
      <ul className="flex flex-row">
        <li>
          <button className="bg-green p-6 " onClick={() => navigate("/login")}>
            Login
          </button>
        </li>
        <li>
          <button onClick={() => navigate("/about")}>About</button>
        </li>
      </ul>
      <br />
      <br />
      <button onClick={() => navigate("/productlist")}>productlist </button>
    </main>
  );
}
