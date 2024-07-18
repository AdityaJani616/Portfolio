import React from "react";
import Image from "next/image";
import java from "../assets/java.png";
import blog2 from "../assets/blog2.jpg";
import mario from "../assets/mario.png"
import foodies from "../assets/logo.png"
import ToDo from "../assets/ToDo.png"
function PortFolio() {
  const cardItem = [
    {
      id: 1,
      logo: mario,
      name: "Mario's Whack-A-Mole  ",
      description: "An Amazing game developed using HTML,CSS and JS",
      reference:"https://github.com/AdityaJani616/Mario-s-Whack-a-Mole-Adventure",
      referenceLive:"https://adityajani616.github.io/Mario-s-Whack-a-Mole-Adventure/"
    },
    {
      id: 2,
      logo: foodies,
      name: "Foodie's Paradise",
      description: "An Amazing Web Application Developed in MERN",
      reference:"https://github.com/AdityaJani616/Foodies_Paradise_MERN",
      referenceLive:"https://github.com/AdityaJani616/Foodies_Paradise_MERN"
    },
    {
      id: 3,
      logo:ToDo ,
      name: "To Do List",
      description: "A responsive TO DO LIST app with add/delete features, built with React and Vite",
      reference:"https://github.com/AdityaJani616/ToDoList",
      referenceLive:"https://adityajani616.github.io/ToDoList/"
    },
  ];

  return (
    <div
      name="Portfolio"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
      id="portfolio"
    >
      <div>
      <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline ">
            Portfolio
          </p>
          <p className="py-6">These are the Projects I've worked On</p>
          </div>      
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 my-5 ">
          {cardItem.map(({ id, logo, name, description,reference,referenceLive }) => (
            <div
              className="w-full border-2 rounded-lg shadow-lg p-4 cursor-pointer hover:scale-105 duration-300  " 
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
                <button  className="bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-teal-500 hover:to-teal-700 text-white font-bold px-3 py-1 rounded text-sm sm:text-base">
                  <a href={reference}target="_blank"> Source Code</a>
                </button>
                <button className="bg-gradient-to-r  from-cyan-500 to-teal-500   hover:from-teal-500 hover:to-teal-700 text-white font-bold px-3 py-1 rounded text-sm sm:text-base">
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
