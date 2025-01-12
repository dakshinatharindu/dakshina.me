import ProfilePhoto from "./components/home/ProfilePhoto";
import SocialLinks from "./components/home/SocialLinks";
import {HomePageContent} from "../content/HomePage";
import Education from "./components/home/Education";

export default function Home() {
    return (
        <>
            <ProfilePhoto/>
            <SocialLinks/>
            <p className="mt-3">{HomePageContent.introduction.text}</p>
            <h2>{HomePageContent.education.title}</h2>
            <Education/>
            <h2>{HomePageContent.experience.title}</h2>
        </>
    );
}
