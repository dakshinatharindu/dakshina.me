"use client";
import React from "react";
import { useState } from "react";

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
        <span className="material-symbols-outlined">dark_mode</span>
      ) : (
        <span className="material-symbols-outlined">light_mode</span>
      )}
    </button>
  );
};

export default ThemeToggleButton;
