import React from 'react';
import profile from "../public/profile.png";
import dots from "../public/dots.png";
import Image from "next/image";
import profileAditya from "../assets/aditya.jpeg"
const About = () => {
  return (
    <div>
<div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-15 md:h-96 md:w-96">
{/* <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-15 md:h-96 md:w-96"> */}
              <Image src={profileAditya} layout="fill" objectFit="cover" />
            </div>

    </div>
  )
}

export default About;
