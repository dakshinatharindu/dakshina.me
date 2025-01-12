'use client'
import React, {useState} from 'react';
import Image, {StaticImageData} from 'next/image';
import {RiArrowDropDownLine, RiArrowDropUpLine} from "react-icons/ri";

// Base interface for common props
interface BaseEducationProps {
    /** StaticImageData for the college logo */
    logo: StaticImageData;
    /** Alt text for the logo image */
    logoAlt?: string;
    /** Name of the educational institution */
    name: string;
    /** Degree or certification obtained */
    degree: string;
    /** Time period of study (e.g., "2020 - 2024") */
    duration: string;
    /** Optional description of studies, achievements, etc. */
    description?: string;
}

// Basic College Props interface
interface CollegeProps extends BaseEducationProps {
    detailed?: false;
}

// Detailed Education Information interface
interface DetailedEducationInfo extends BaseEducationProps {
    detailed: true;
    /** Grade Point Average */
    gpa?: string;
    result?: string;
    /** Location of the institution */
    location?: string;
    /** List of awards and honors */
    awards?: string[];
    /** List of relevant courses */
    relevantCourses?: string[];
    /** List of extracurricular activities */
    activities?: string[];
    /** Field of study or major */
    fieldOfStudy?: string;
    /** Minor subjects if any */
    minor?: string;
}

// Combined type for the component
type CombinedCollegeProps = CollegeProps | DetailedEducationInfo;

const College: React.FC<CombinedCollegeProps> = (props) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className=" rounded-lg hover:bg-primary transition-colors duration-200 mb-3">
            <div className="flex items-start space-x-4 p-4">
                {/* Logo Container */}
                <div className="flex-shrink-0">
                    <div className="relative w-16 h-16 rounded-lg flex items-center justify-center overflow-hidden">
                        <Image
                            src={props.logo}
                            alt={props.logoAlt || `${props.name} logo`}
                            width={64}
                            height={64}
                            className="object-cover"
                            priority={false}
                            unoptimized
                        />
                    </div>
                </div>

                {/* Content Container */}
                <div className="flex-grow">
                    {/* Primary Information */}
                    <div className="flex justify-between items-start w-full">
                        <div>
                            <h3 className="text-lg font-semibold">
                                {props.name}
                            </h3>
                            <p className="text-base">
                                {props.degree}
                            </p>
                            <p className="text-sm">
                                {props.duration}
                            </p>
                        </div>
                        <div className="flex items-center space-x-4">

                            {props.detailed && (
                                <button
                                    onClick={toggleExpand}
                                    className="p-1 rounded-full transition-colors duration-200"
                                    aria-label={isExpanded ? "Collapse details" : "Expand details"}
                                >
                                    {isExpanded ? (
                                        <RiArrowDropUpLine className="w-10 h-10"/>
                                    ) : (
                                        <RiArrowDropDownLine className="w-10 h-10"/>
                                    )}
                                </button>
                            )}
                        </div>
                    </div>

                    {/* Description */}
                    {props.description && (
                        <p className="text-sm mt-2 leading-relaxed">
                            {props.description}
                        </p>
                    )}
                </div>
            </div>

            {/* Detailed Information Section */}
            {props.detailed && isExpanded && (
                <div className="px-4 pb-4 space-y-3 border-t pt-3">

                    {/*/!* Location and GPA *!/*/}
                    {/*<div className="flex items-center space-x-4 text-sm italic">*/}
                    {/*  {props.location && (*/}
                    {/*      <span>📍 {props.location}</span>*/}
                    {/*  )}*/}
                    {/*</div>*/}

                    {props.gpa && (
                        <div className="text-sm">
                    <span><span className="font-bold">GPA:</span> <span
                        className="italic">{props.gpa}</span></span>
                        </div>
                    )}

                    {props.result && (
                        <div className="text-sm">
                        <span><span className="font-bold">Result:</span> <span
                            className="italic">{props.result}</span></span>
                        </div>
                    )}

                    {/* Awards */}
                    {props.awards && props.awards.length > 0 && (
                        <div className="text-sm">
                            <h4 className="font-bold">Awards & Honors</h4>
                            <ul className="mt-1 list-disc list-inside space-y-1 italic">
                                {props.awards.map((award, index) => (
                                    <li key={index}>{award}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Relevant Courses */}
                    {props.relevantCourses && props.relevantCourses.length > 0 && (
                        <div className="text-sm">
                            <h4 className="font-bold">Relevant Courses</h4>
                            <p className="mt-1 italic">
                                {props.relevantCourses.join(" • ")}
                            </p>
                        </div>
                    )}

                    {/* Activities */}
                    {props.activities && props.activities.length > 0 && (
                        <div className="text-sm">
                            <h4 className="font-bold">Activities</h4>
                            <ul className="mt-1 list-disc list-inside space-y-1 italic">
                                {props.activities.map((activity, index) => (
                                    <li key={index}>{activity}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default College;