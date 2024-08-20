// import React from "react";
// import Image from "next/image";
// import java from "../assets/java.png";
// import blog2 from "../assets/blog2.jpg";
// import mario from "../assets/mario.png"
// import foodies from "../assets/logo.png"
// import ToDo from "../assets/ToDo.png"
// import budget from "../assets/budget.png"
// import Contactapp from "../assets/contactapp.png"
// function PortFolio() {
//   const cardItem = [
  
//     {
//       id: 1,
//       logo: foodies,
//       name: "Foodie's Paradise",
//       description: " A MERN stack food ordering app with AI chatbot, authentication,Order Management, food gallery, and Stripe payments integrated for a complete experience.",
//       reference:"https://github.com/AdityaJani616/Foodies_Paradise_MERN",
//       referenceLive:"https://github.com/AdityaJani616/Foodies_Paradise_MERN"
//     },
//     {
//       id: 2,
//       logo: Contactapp,
//       name: "Contact App",
//       description: " A responsive contact management app with real-time updates, form validation, and CRUD operations using React, Vite, Tailwind CSS, Material UI, and Firebase.",
//       reference:"https://github.com/AdityaJani616/Contact-App",
//       referenceLive:"https://adityajani616.github.io/Contact-App/"
//     },
    
//     {
//       id: 3,
//       logo: budget,
//       name: "Multi Step Budget Planner",
//       description: "A comprehensive budget planner app with multi-step forms, dynamic income and expense tracking, real-time currency conversion, and data persistence via local storage for smooth user experience.",
//       reference:"https://github.com/AdityaJani616/multi-step-budget-planner",
//       referenceLive:"https://multi-step-budget-planner.vercel.app/"
//     },
//       {
//       id: 4,
//       logo: mario,
//       name: "Mario's Whack-A-Mole  ",
//       description: " Enjoy a Mario-themed twist on the classic Whac-A-Mole game. Whack moles and piranha plants in a fast-paced 50-second challenge and beat your high score!",
//       reference:"https://github.com/AdityaJani616/Mario-s-Whack-a-Mole-Adventure",
//       referenceLive:"https://adityajani616.github.io/Mario-s-Whack-a-Mole-Adventure/"
//     },
//     {
//       id: 5,
//       logo:ToDo ,
//       name: "To Do List",
//       description: "A responsive React.js app for managing tasks efficiently. Add, delete, and track your to-do items with a user-friendly interface and seamless performance!",
//       reference:"https://github.com/AdityaJani616/ToDoList",
//       referenceLive:"https://adityajani616.github.io/ToDoList/"
//     },
//   ];

//   return (
//     <div
//       name="Portfolio"
//       className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
//       id="portfolio"
//     >
//       <div>
//       <div>
//           <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline ">
//             Portfolio
//           </p>
//           <p className="py-6">These are the Projects I've worked On</p>
//           </div>      
//           <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 my-5 ">
//           {cardItem.map(({ id, logo, name, description,reference,referenceLive }) => (
//             <div
//               className="w-full border-2 rounded-lg shadow-lg p-4 cursor-pointer hover:scale-105 duration-300  " 
//               key={id}
//             >
//               <Image
//                 src={logo}
//                 className="w-full h-56 mx-auto object-cover rounded-lg border-2"
//                 alt={name}
//               />
//               <div className="text-center mt-4">
//                 <div className="font-bold text-xl mb-2">{name}</div>
//                 <p className="text-gray-700 dark:text-white">{description}</p>
//               </div>
//               <div className="mt-4 flex justify-center space-x-3">
//                 <button  className="bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-teal-500 hover:to-teal-700 text-white font-bold px-3 py-1 rounded text-sm sm:text-base">
//                   <a href={reference}target="_blank"> Source Code</a>
//                 </button>
//                 <button className="bg-gradient-to-r  from-cyan-500 to-teal-500   hover:from-teal-500 hover:to-teal-700 text-white font-bold px-3 py-1 rounded text-sm sm:text-base">
//                  <a href={referenceLive} target="_blank"> Live </a> 
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default PortFolio;
import React from "react";
import Image from "next/image";
import java from "../assets/java.png";
import mario from "../assets/mario.png";
import foodies from "../assets/logo.png";
import ToDo from "../assets/ToDo.png";
import budget from "../assets/budget.png";
import Contactapp from "../assets/contactapp.png";

function PortFolio() {
  const cardItem = [
    {
      id: 1,
      logo: foodies,
      name: "Foodie's Paradise",
      description:
        "A MERN stack food ordering app with AI chatbot, authentication, Order Management, food gallery, and Stripe payments integrated for a complete experience.",
      reference: "https://github.com/AdityaJani616/Foodies_Paradise_MERN",
      referenceLive: "https://github.com/AdityaJani616/Foodies_Paradise_MERN",
    },
    {
      id: 2,
      logo: Contactapp,
      name: "Contact App",
      description:
        "A responsive contact management app with real-time updates, form validation, and CRUD operations using React, Vite, Tailwind CSS, Material UI, and Firebase.",
      reference: "https://github.com/AdityaJani616/Contact-App",
      referenceLive: "https://adityajani616.github.io/Contact-App/",
    },
    {
      id: 3,
      logo: budget,
      name: "Multi Step Budget Planner",
      description:
        "A comprehensive budget planner app with multi-step forms, dynamic income and expense tracking, real-time currency conversion, and data persistence via local storage for smooth user experience.",
      reference: "https://github.com/AdityaJani616/multi-step-budget-planner",
      referenceLive: "https://multi-step-budget-planner.vercel.app/",
    },
    {
      id: 4,
      logo: mario,
      name: "Mario's Whack-A-Mole  ",
      description:
        "Enjoy a Mario-themed twist on the classic Whac-A-Mole game. Whack moles and piranha plants in a fast-paced 50-second challenge and beat your high score!",
      reference: "https://github.com/AdityaJani616/Mario-s-Whack-a-Mole-Adventure",
      referenceLive: "https://adityajani616.github.io/Mario-s-Whack-a-Mole-Adventure/",
    },
    {
      id: 5,
      logo: ToDo,
      name: "To Do List",
      description:
        "A responsive React.js app for managing tasks efficiently. Add, delete, and track your to-do items with a user-friendly interface and seamless performance!",
      reference: "https://github.com/AdityaJani616/ToDoList",
      referenceLive: "https://adityajani616.github.io/ToDoList/",
    },
  ];

  return (
    <div
      name="portfolio"
      className="dark:bg-gradient-to-b from-gray-800 to-black w-full min-h-screen"
    id="portfolio"
    >
      <div className="max-w-screen-lg mx-auto lg:py-16 p-4 flex flex-col justify-center w-full h-full dark:text-white">
        <div className="animate-fade-in-down">
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Portfolio
          </p>
          <p className="py-6">These are the Projects I've worked on</p>
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 my-5 animate-fade-in-up">
          {cardItem.map(({ id, logo, name, description, reference, referenceLive }) => (
            <div
              className="w-full border-2 rounded-lg shadow-lg p-4 cursor-pointer hover:scale-105 duration-300 transform transition-all"
              key={id}
            >
              <Image
                src={logo}
                className="w-full h-56 mx-auto object-cover rounded-lg border-2"
                alt={name}
              />
              <div className="text-center mt-4">
                <div className="font-bold text-xl mb-2">{name}</div>
                <p className="text-gray-700 dark:text-white">{description}</p>
              </div>
              <div className="mt-4 flex justify-center space-x-3">
                <button className="bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-teal-500 hover:to-teal-700 text-white font-bold px-3 py-1 rounded text-sm sm:text-base">
                  <a href={reference} target="_blank"> Source Code</a>
                </button>
                <button className="bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-teal-500 hover:to-teal-700 text-white font-bold px-3 py-1 rounded text-sm sm:text-base">
                  <a href={referenceLive} target="_blank"> Live </a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PortFolio;
