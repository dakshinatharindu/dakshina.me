import React from 'react';
import Image, {StaticImageData} from 'next/image';

interface ExperienceCardProps {
    title: string;
    companyName: string;
    duration: string;
    logo: StaticImageData;
}

const ExperienceCard = ({title, companyName, duration, logo}: ExperienceCardProps) => {
    return (
        <div className="flex items-start gap-4 rounded-lg p-4 hover:bg-primary transition-colors">
            {/* Company Logo */}
            <div className="flex-shrink-0">
                <Image
                    src={logo}
                    alt={`${companyName} logo`}
                    width={48}
                    height={48}
                    className="object-cover"
                    unoptimized
                />
            </div>

            {/* Content */}
            <div className="flex flex-col">
                <h3 className="font-bold">
                    {title}
                </h3>
                <span>
          {companyName}
        </span>
                <span className="text-gray-500 text-sm">
          {duration}
        </span>
            </div>
        </div>
    );
};

export default ExperienceCard;