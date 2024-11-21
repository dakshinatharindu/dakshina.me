"use client";
import React from "react";
import { useState } from "react";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";

const ThemeToggleButton = () => {
  const [theme, setTheme] = useState("cupcake");

  const toggleTheme = () => {
    document.documentElement.setAttribute("data-theme", theme);
    setTheme(theme === "cupcake" ? "dracula" : "cupcake");
  };

  return (
    <button
      onClick={toggleTheme}
      className="btn btn-ghost flex items-center gap-2"
    >
      {theme == "dracula" ? (
        <MdOutlineDarkMode size={25}/>
      ) : (
        <MdOutlineLightMode size={25}/>
      )}
    </button>
  );
};

export default ThemeToggleButton;
