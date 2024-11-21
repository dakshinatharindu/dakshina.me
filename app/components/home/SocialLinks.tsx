"use client";

import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaResearchgate } from "react-icons/fa";
import { FaGoogleScholar } from "react-icons/fa6";

const SocialLinks = () => {
  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <FaLinkedin/>,
      url: "https://www.linkedin.com/in/dakshinatharindu"
    },
    {
      name: "GitHub",
      icon: <FaGithub/>,
      url: "https://github.com/dakshinatharindu"
    },
    {
      name: "GoogleScholar",
      icon: <FaGoogleScholar/>,
      url: "https://scholar.google.com/citations?user=youruserid"
    },
    {
      name: "ResearchGate",
      icon: <FaResearchgate/>,
      url: "https://www.researchgate.net/profile/yourusername"
    }
  ];

  return (
    <div className="flex flex-wrap items-center space-x-4 mt-2">
  {socialLinks.map((link) => (
    <Link 
      key={link.name}
      href={link.url} 
      target="_blank" 
      rel="noopener noreferrer"
      className="flex items-center text-sm hover:text-primary transition-colors"
    >
      <span className="text-xl sm:mr-1">{link.icon}</span>
      <span className="hidden sm:inline font-semibold">{link.name}</span>
    </Link>
  ))}
</div>
  );
};

export default SocialLinks;