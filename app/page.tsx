import ProfilePhoto from "./components/home/ProfilePhoto";
import SocialLinks from "./components/home/SocialLinks";
import {HomePageContent} from "@/content/HomePage";
import Education from "./components/home/Education";
import Experience from "./components/home/Experience";

export default function Home() {
    return (
        <>
            <ProfilePhoto/>
            <SocialLinks/>
            <p className="mt-3">{HomePageContent.introduction.text}</p>
            <Experience/>
            <Education/>
        </>
    );
}
