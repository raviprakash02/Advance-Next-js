"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";

const About = () => {
  const router = useRouter();
  return (
    <div>
      <h1 className="heading">About Page</h1>
      <Link href="/">Go to Home Page</Link>
      <br /> <br />
      <button onClick={() => navigate("loginstudent")}>Go to About Page</button>
      <br /> <br />
      <button onClick={() => navigate("aboutteacher")}>
        Go to About Page 2
      </button>
    </div>
  );
};

export default About;
