"use client";
import Link from "next/link";
import {usePathname} from "next/navigation";
import React, {useState, useEffect, useRef} from "react";
import ThemeToggleButton from "./components/navbar/ThemeToggleButton";
import {FiMenu} from "react-icons/fi";

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const pathname = usePathname();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsMenuOpen(false);
            }
        };

        if (isMenuOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isMenuOpen]);

    const isActive = (path: string) => pathname === path;

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
                    <FiMenu/>
                </button>
                {/* Brand */}
                <Link href="/" className="btn btn-ghost text-xl">
                    Dakshina Tharindu
                </Link>
            </div>

            {/* Navbar End: Links and Theme Toggle */}
            <div className="navbar-end">
                <div className="lg:flex hidden">
                    <ul className="menu menu-horizontal items-center">
                        <li>
                            <Link href="/" className={isActive("/") ? "font-bold" : ""}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/publications"
                                className={isActive("/publications") ? "font-bold" : ""}
                            >
                                Publications
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/projects"
                                className={isActive("/projects") ? "font-bold" : ""}
                            >
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link href="/blog" className={isActive("/blog") ? "font-bold" : ""}>
                                Blog
                            </Link>
                        </li>
                    </ul>
                </div>
                <ThemeToggleButton/>
            </div>

            {/* Dropdown Menu for Small Screens */}
            {isMenuOpen && (
                <div className="absolute top-16 left-4 bg-base-200 shadow-md rounded-lg z-50 w-52">
                    <ul className="menu menu-vertical p-2">
                        <li>
                            <Link
                                href="/"
                                onClick={toggleMenu}
                                className={isActive("/") ? "font-bold" : ""}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/publications"
                                onClick={toggleMenu}
                                className={isActive("/publications") ? "font-bold" : ""}
                            >
                                Publications
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/projects"
                                onClick={toggleMenu}
                                className={isActive("/projects") ? "font-bold" : ""}
                            >
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/blog"
                                onClick={toggleMenu}
                                className={isActive("/blog") ? "font-bold" : ""}
                            >
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
