"use client";
import { useRouter } from "next/navigation";

const Aboutstudent = () => {
  const router = useRouter();
  return (
    <div>
      <h1>About student</h1>
      <button onClick={() => router.push("/about")}> about</button>
    </div>
  );
};

export default Aboutstudent;
