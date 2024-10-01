// import Link from "next/link";
import "./login.css";
import Navbar from "../Components/Navbar";

export default function Layout({ children }) {
  return (
    <div>
      <Navbar /> {children}
    </div>
  );
}
