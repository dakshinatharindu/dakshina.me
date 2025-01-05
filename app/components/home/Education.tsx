import College from "./College";
import { StaticImageData } from "next/image";
import UoMPhoto from "../../../public/uom.png";
import UFLPhoto from "../../../public/uflorida_logo.png";
import ThurstanPhoto from "../../../public/Thurstan_College_crest.png";

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
  /** Start date of education */
  startDate?: string;
  /** End date of education */
  endDate?: string;
}

const Education = () => {

  const UFLInfo: DetailedEducationInfo = {
    detailed: true,
    logo: UFLPhoto,
    logoAlt: "UFL Logo",
    name: "University of Florida, USA",
    degree: "Doctor of Philosophy (PhD)",
    duration: "Jan 2025 - Present",
    description: "Specialized in Computer Engineering",
    location: "Gainesville, Florida, USA",
    gpa: "-"
  }

  const UomInfo: DetailedEducationInfo = {
    detailed: true,
    logo: UoMPhoto,
    logoAlt: "UoM Logo",
    name: "University of Moratuwa, Sri Lanka",
    degree: "Bachelor of Science (Hons)",
    duration: "Jan 2020 - Jun 2024",
    description: "Specialized in Electronic and Telecommunication Engineering",
    location: "Moratuwa, Sri Lanka",
    gpa: "4.11/4.2",
    awards: [
      "Dean's List (All Semesters)",
      "Sri Lanka Telecom Scholarship Award for Obtaining Highest GPA in Semester 5"
    ],
    relevantCourses: [
      "Computer System Architecture",
      "Digital Signal Processing",
      "Data Structures and Algorithms",
      "Computer Networks",
      "Embedded Systems"
    ],
    activities: [
      "Tech Lead - Electronic Club ENTC"
    ]
  };

  const ThurstanInfo: DetailedEducationInfo = {
    detailed: true,
    logo: ThurstanPhoto,
    logoAlt: "Thurstan College Logo",
    name: "Thurstan College, Colombo, Sri Lanka",
    degree: "GCE Advanced Level",
    duration: "May 2016 - Aug 2018",
    description: "Specialized in Physical Science Stream",
    location: "Colombo 07, Sri Lanka",
    result: "3A passes in Combined Mathematics, Physics, and Chemistry | 5th in Colombo District | 12th in Country",
    awards: [
        "Mahapola Scholarship for Outstanding Performance in GCE A/L Examination"
        ],
  }

  return (
    <div>
      <College {...UFLInfo} />
      <College {...UomInfo} />
      <College {...ThurstanInfo} />
    </div>
  );
};

export default Education;
