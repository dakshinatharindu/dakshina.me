import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface CollegeProps {
  logo: StaticImageData;
  logoAlt?: string;
  name: string;
  degree: string;
  duration: string;
  description?: string;
}

// Optional detailed education information interface
// interface DetailedEducationInfo extends CollegeProps {
//   gpa?: number;
//   location?: string;
//   awards?: string[];
//   relevantCourses?: string[];
//   activities?: string[];
// }

const College: React.FC<CollegeProps> = ({ 
  logo, 
  logoAlt,
  name, 
  degree, 
  duration, 
  description 
}) => {
  return (
    <div className="flex items-start space-x-4 p-2 rounded-lg btn-ghost transition-colors duration-200">
      {/* Logo Container */}
      <div className="flex-shrink-0">
        <div className="relative w-20 h-20 rounded-lg flex items-center justify-center overflow-hidden">
          <Image
            src={logo}
            alt={logoAlt || `${name} logo`}
            width={240}
            height={240}
            className="object-cover"
            priority={false}
            unoptimized
          />
        </div>
      </div>

      {/* Content Container */}
      <div className="flex-grow">
        {/* College Name */}
        <h3 className="text-lg font-semibold">
          {name}
        </h3>

        {/* Degree */}
        <p className="text-base">
          {degree}
        </p>

        {/* Duration */}
        <p className="text-sm mt-1">
          {duration}
        </p>

        {/* Description */}
        {description && (
          <p className="text-sm mt-2 leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </div>
  );
};


export default College;