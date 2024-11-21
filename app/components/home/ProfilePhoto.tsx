import React from "react";
import Image from "next/image";
import MyPhoto from "../../../public/profile.jpg"

const ProfilePhoto = () => {
  return (
    <div className="flex flex-col mb-2">
      <div className="mb-4 avatar">
        <div className="ring-primary ring-offset-base-100 w-52 rounded-full ring ring-offset-2">
          <Image
            className=""
            src={MyPhoto}
            alt="Dakshina Tharindu Profile Picture"
            width={1600}
            height={1600}
            priority
            unoptimized
          />
        </div>
      </div>
      <div>
        <p className="text-sm">Engineer | Researcher | Computer Architecture Enthusiast</p>
      </div>
    </div>
  );
};

export default ProfilePhoto;