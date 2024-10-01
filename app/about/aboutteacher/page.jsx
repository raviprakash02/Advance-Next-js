"use client";
import { useRouter } from "next/navigation";

const aboutteacher = () => {
  return (
    <div>
      <h1 className="heading">Login Page for Teacher</h1>
      <br />
      <button onClick={() => router.push("/about")}> about</button>
    </div>
  );
};

export default aboutteacher;
