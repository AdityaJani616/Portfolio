// import React from "react";
// import Image from "next/image";
// import html from "../assets/html.png";
// import css from "../assets/css.png";
// import javascript from "../assets/javascript.png";
// import reactImage from "../assets/react.png";
// import nextjs from "../assets/nextjs.png";
// import java from "../assets/java.png";
// import github from "../assets/github.png";
// import tailwind from "../assets/tailwind.png";
// import python from "../assets/python.webp";

// const Experience = () => {
//   const techs = [
//     {
//       id: 1,
//       src: html,
//       title: "HTML",
//       style: "shadow-orange-500",
//     },
//     {
//       id: 2,
//       src: css,
//       title: "CSS",
//       style: "shadow-blue-500",
//     },
//     {
//       id: 3,
//       src: javascript,
//       title: "JavaScript",
//       style: "shadow-yellow-500",
//     },
//     {
//       id: 4,
//       src: reactImage,
//       title: "React",
//       style: "shadow-blue-600",
//     },
//     {
//       id: 5,
//       src: tailwind,
//       title: "Tailwind",
//       style: "shadow-sky-400",
//     },
//     {
//       id: 6,
//       src: nextjs,
//       title: "Next JS",
//       style: "shadow-gray-400",
//     },
//     {
//       id: 7,
//       src: python,
//       title: "Python",
//       style: "shadow-yellow-400",
//     },
//     {
//       id: 8,
//       src: java,
//       title: "Java",
//       style: "shadow-amber-500",
//     },
//     {
//       id: 9,
//       src: github,
//       title: "GitHub",
//       style: "shadow-slate-400",
//     },
//   ];

//   return (
//     <div
//       name="experience"
//       className="dark:bg-gradient-to-b from-gray-800 to-black w-full h-screen"
//     >
//       <div className="max-w-screen-lg mx-auto lg:py-20 p-4 flex flex-col justify-center w-full h-full dark:text-white">
//         <div>
//           <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
//             Experience
//           </p>
//           <p className="py-6">These are the technologies I've worked with</p>
//         </div>

//         <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8  px-12 sm:px-0">
//           {techs.map(({ id, src, title, style }) => (
//             <div
//               key={id}
//               className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
//             >
//               <Image src={src} alt="" className="w-20 mx-auto" />
//               <p className="mt-4">{title}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Experience;


import React from "react";
import Image from "next/image";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import nextjs from "../assets/nextjs.png";
import java from "../assets/java.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import python from "../assets/python.webp";
import nodejs from "../assets/nodejs.png";
import api from "../assets/api.png";
import postman from "../assets/postman.png"
const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },{
      id: 3,
      src: javascript,
      title: (
        <>
          <span className="block md:hidden">JS</span> {/* Mobile view */}
          <span className="hidden md:block">JavaScript</span> {/* Larger screens */}
        </>
      ),
      style: "shadow-yellow-500",
    }
,    
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: nextjs,
      title: "Next.js",
      style: "shadow-gray-400",
    },
    {
      id: 7,
      src: nodejs,
      title: "Node.js",
      style: "shadow-green-400",
    },
  
    {
      id: 8,
      src: python,
      title: "Python",
      style: "shadow-yellow-400",
    },
    {
      id: 9,
      src: java,
      title: "Java",
      style: "shadow-amber-500",
    },
    {
      id: 10,
      src: github,
      title: "GitHub",
      style: "shadow-slate-400",
    },  {
      id: 11,
      src: api,
      title: "APIs",
      style: "shadow-indigo-400",
    },
    {
      id: 12,
      src: postman,
      title: "Postman",
      style: "shadow-orange-500",
    },
   

  ];

  return (
    <div
      name="experience"
      className="dark:bg-gradient-to-b from-gray-800 to-black w-full min-h-screen"
    >
      <div className="max-w-screen-lg mx-auto lg:py-16 p-4 flex flex-col justify-center w-full h-full dark:text-white">
        <div className="animate-fade-in-down">
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0 animate-fade-in-up">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <Image src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
