"use client";

import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faLinkedin, 
  faGithub, 
  faGoogleScholar, 
  faResearchgate 
} from '@fortawesome/free-brands-svg-icons';

const SocialLinks = () => {
  const socialLinks = [
    {
      name: "LinkedIn",
      icon: faLinkedin,
      url: "https://www.linkedin.com/in/dakshinatharindu"
    },
    {
      name: "GitHub",
      icon: faGithub,
      url: "https://github.com/dakshinatharindu"
    },
    {
      name: "GScholar",
      icon: faGoogleScholar,
      url: "https://scholar.google.com/citations?user=youruserid"
    },
    {
      name: "ResearchGate",
      icon: faResearchgate,
      url: "https://www.researchgate.net/profile/yourusername"
    }
  ];

  return (
    <div className="flex space-x-4 mt-2">
      {socialLinks.map((link) => (
        <Link 
          key={link.name}
          href={link.url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-sm hover:text-primary transition-colors "
        >
          <FontAwesomeIcon icon={link.icon} />
          <span className="ml-1 font-semibold">{link.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default SocialLinks;