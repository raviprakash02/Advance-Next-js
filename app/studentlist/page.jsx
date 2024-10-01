import React from "react";
import Link from "next/link";

function studentlist() {
  return (
    <div>
      <h1>Student List</h1>
      <ul>
        <li>
          <Link href="/studentlist/Ravi">Ravi</Link>
        </li>
        <li>
          <Link href="/studentlist/Dhiraj">Dhiraj</Link>
        </li>
        <li>
          <Link href="/studentlist/Aman">Aman</Link>
        </li>
        <li>
          <Link href="/studentlist/Akash">Akash</Link>
        </li>
      </ul>
    </div>
  );
}

export default studentlist;
