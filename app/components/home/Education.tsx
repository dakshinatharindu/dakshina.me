import College from "./College";
import { StaticImageData } from "next/image";
import UoMPhoto from "../../../public/uom.png";

interface CollegeProps {
  logo: StaticImageData;
  logoAlt?: string;
  name: string;
  degree: string;
  duration: string;
  description?: string;
}

const Education = () => {
  const myEducation: CollegeProps = {
    name: "University of Moratuwa, Sri Lanka",
    degree: "Honours Degree of Bachelor of Science of Engineering",
    duration: "2020 - 2024",
    logo: UoMPhoto,
    description: "Specialisation: Electronic and Telecommunication Engineering",
  };

  return (
    <div>
      <College {...myEducation} />
    </div>
  );
};

export default Education;
