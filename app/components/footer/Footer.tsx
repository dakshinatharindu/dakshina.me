import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {CiMail} from "react-icons/ci";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full text-gray-500">
            <div className=" mx-auto px-4 py-6">
                {/* Top border separator */}
                <div className="border-t border-gray-500 w-full"/>

                {/* Content below separator */}
                <div className="mt-4 flex flex-col items-center space-y-4">
                    {/* Social Icons */}
                    <div className="flex justify-center space-x-6">
                        <a
                            href="https://github.com/yourusername"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-gray-900 transition-colors"
                        >
                            <FaGithub size={18}/>
                        </a>
                        <a
                            href="https://linkedin.com/in/yourusername"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-gray-900 transition-colors"
                        >
                            <FaLinkedin size={18}/>
                        </a>
                        <a
                            href="mailto:your.email@example.com"
                            className="hover:text-gray-900 transition-colors"
                        >
                            <CiMail size={18}/>
                        </a>
                    </div>

                    {/* Copyright */}
                    <p className="text-sm">
                        Created by Dakshina Tharindu © {currentYear}. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;