import Link from "next/link";
import React from "react";
import ThemeToggleButton from "./components/navbar/ThemeToggleButton";

const NavBar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <Link href="/" className="btn btn-ghost text-xl ml-10">Dakshina Tharindu</Link>
      </div>
      <div className="navbar-end">
        <ul className="menu menu-horizontal items-center px-3">
          <li>
            <Link href="/">Publications</Link>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <Link href="/">Blog</Link>
          </li>
          <li>
            <ThemeToggleButton />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
