"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Navbar() {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div>
      {pathname !== "/login/loginteacher" ? (
        <ul className="navbar-login">
          <li>
            <h4>Login Navbar</h4>
          </li>
          <li>
            <Link href="/login">Login Main</Link>
          </li>
          <li>
            <Link href="/login/loginstudent">Student Login </Link>
          </li>
          <li>
            <Link href="/login/loginteacher">Teacher Login </Link>
          </li>
        </ul>
      ) : null}
    </div>
  );
}

export default Navbar;
