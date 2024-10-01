"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Aboutnav() {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div>
      {pathname !== "/login/loginteacher" ? (
        <ul className="navbar-login">
          <li>
            <h4>About Navbar</h4>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/about/aboutstudent">About Student</Link>
          </li>
          <li>
            <Link href="/about/aboutteacher">About Teacher </Link>
          </li>
        </ul>
      ) : null}
    </div>
  );
}

export default Aboutnav;
