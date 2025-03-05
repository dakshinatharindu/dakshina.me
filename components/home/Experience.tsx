import UFLogo from "@/public/uflorida_logo.png";
import lsegLogo from "@/public/lseg.png";
import pqLogo from "@/public/pq.jpg";
import ExperienceCard from "@/components/home/ExperienceCard";
import {HomePageContent} from "@/content/HomePage";

const Experience = () => {
    return (
        <>
            <h2>{HomePageContent.experience.title}</h2>
            <ExperienceCard
                title={HomePageContent.experience.details.uf.title}
                companyName={HomePageContent.experience.details.uf.companyName}
                duration={HomePageContent.experience.details.uf.duration}
                logo={UFLogo}
            />
            <ExperienceCard
                title={HomePageContent.experience.details.lseg.title}
                companyName={HomePageContent.experience.details.lseg.companyName}
                duration={HomePageContent.experience.details.lseg.duration}
                logo={lsegLogo}
            />
            <ExperienceCard
                title={HomePageContent.experience.details.pq.title}
                companyName={HomePageContent.experience.details.pq.companyName}
                duration={HomePageContent.experience.details.pq.duration}
                logo={pqLogo}
            />
        </>
    );
}

export default Experience;