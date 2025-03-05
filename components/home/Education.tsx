import College from "./College";
import UoMPhoto from "../../public/uom.png";
import UFLPhoto from "../../public/uflorida_logo.png";
import ThurstanPhoto from "../../public/Thurstan_College_crest.png";
import {HomePageContent} from "@/content/HomePage";

const Education = () => {
    return (
        <div>
            <h2>{HomePageContent.education.title}</h2>
            < College
                detailed={true}
                name={HomePageContent.education.details.uf.name}
                degree={HomePageContent.education.details.uf.degree}
                duration={HomePageContent.education.details.uf.duration}
                logo={UFLPhoto}
                description={HomePageContent.education.details.uf.description}
                gpa={HomePageContent.education.details.uf.gpa}
            />
            <College
                detailed={true}
                name={HomePageContent.education.details.uom.name}
                degree={HomePageContent.education.details.uom.degree}
                duration={HomePageContent.education.details.uom.duration}
                logo={UoMPhoto}
                description={HomePageContent.education.details.uom.description}
                gpa={HomePageContent.education.details.uom.gpa}
                awards={HomePageContent.education.details.uom.awards}
                relevantCourses={HomePageContent.education.details.uom.relevantCourses}
                activities={HomePageContent.education.details.uom.activities}
            />
            <College
                detailed={true}
                name={HomePageContent.education.details.tc.name}
                degree={HomePageContent.education.details.tc.degree}
                duration={HomePageContent.education.details.tc.duration}
                logo={ThurstanPhoto}
                description={HomePageContent.education.details.tc.description}
                result={HomePageContent.education.details.tc.result}
                awards={HomePageContent.education.details.tc.awards}
            />
        </div>
    );
};

export default Education;
