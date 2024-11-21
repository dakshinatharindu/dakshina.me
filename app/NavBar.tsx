"use client";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import ThemeToggleButton from "./components/navbar/ThemeToggleButton";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    // Add event listener when menu is open
    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    // Cleanup the event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <div className="navbar bg-base-100" ref={menuRef}>
      {/* Navbar Start: Hamburger Icon & Brand */}
      <div className="navbar-start flex items-center">
        {/* Hamburger Menu Button */}
        <button
          className="btn btn-ghost text-xl lg:hidden"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined">menu</span>
        </button>
        {/* Brand */}
        <Link href="/" className="btn btn-ghost text-xl lg:ml-10">
          Dakshina Tharindu
        </Link>
      </div>

      {/* Navbar End: Links and Theme Toggle */}
      <div className="navbar-end">
        <div className="lg:flex hidden">
          <ul className="menu menu-horizontal items-center">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/">Publications</Link>
            </li>
            <li>
              <Link href="/projects">Projects</Link>
            </li>
            <li>
              <Link href="/">Blog</Link>
            </li>
          </ul>
        </div>
        <ThemeToggleButton />
      </div>

      {/* Dropdown Menu for Small Screens */}
      {isMenuOpen && (
        <div className="absolute top-16 left-4 bg-base-200 shadow-md rounded-lg z-50 w-52">
          <ul className="menu menu-vertical p-2">
            <li>
              <Link href="/" onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/" onClick={toggleMenu}>
                Publications
              </Link>
            </li>
            <li>
              <Link href="/projects" onClick={toggleMenu}>
                Projects
              </Link>
            </li>
            <li>
              <Link href="/" onClick={toggleMenu}>
                Blog
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavBar;
