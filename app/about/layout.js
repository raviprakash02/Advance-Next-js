import Link from "next/link";
import Navbar from "../Components/Aboutnav";
import Aboutnav from "../Components/Aboutnav";
import "./about.css";

export default function Layout({ children }) {
  return (
    <div>
      {/* <ul className="login-menu">
        <li>
          <h4>About Navbar</h4>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/about">About Student</Link>
        </li>
        <li>
          <Link href="/about">About Teacher </Link>
        </li>
      </ul> */}
      {children}
      <Aboutnav />
    </div>
  );
}
