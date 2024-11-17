import React from "react";
import Image from "next/image";

const ProfilePhoto = () => {
  return (
    <div className="ml-10 mb-8 avatar">
      <div className="ring-primary ring-offset-base-100 w-52 rounded-full ring ring-offset-2">
        <Image
          className=""
          src="/profile.jpg"
          alt="Dakshina Tharindu Profile Picture"
          width={1600}
          height={1600}
          priority
        />
      </div>
    </div>
  );
};

export default ProfilePhoto;
