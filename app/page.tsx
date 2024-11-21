import ProfilePhoto from "./components/home/ProfilePhoto";
import SocialLinks from "./components/home/SocialLinks";
import { HomePageContent } from "../content/HomePage";

export default function Home() {
  return (
    <>
      <ProfilePhoto />
      <SocialLinks />
      <p className="text-lg mt-3">{HomePageContent.introduction.text}</p>
      <h2>{HomePageContent.education.title}</h2>
    </>
  );
}
