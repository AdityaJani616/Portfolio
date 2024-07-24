"use client";
import {useState} from "react";
import About from "./components/About";
import Footer from "./components/footer";
import Experience  from "./components/Experience";
import PortFolio from "./components/portfolio.jsx";
import Image from "next/image";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
  AiFillGithub,
  AiFillMail,
} from "react-icons/ai";
import profile from "./public/profile.png";

export default function Home() {
  const [darkMode,setDarkMode]=useState(false);
  return (
    <div className={darkMode ? "dark":""}>
      <main className="bg-white px-10 md:px-20  lg:px-40 dark:bg-gray-900 dark:text-white select-none">
   {/* <Navbar/> */}
            <section className="lg:min-h-screen md:min-h-screen sm:py-1">

         <nav className="py-10 mb-12 flex justify-between">
            <a  href="/"className="text-5xl font-signature ml-2">aditya</a>
            <ul className="flex items-center">
           
              <a href="#portfolio"className="pr-5 text-xl">Projects</a>
           
              <li>
                <BsFillMoonStarsFill onClick={()=>setDarkMode(!darkMode)} className="cursor-pointer text-2xl" />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                  href="https://drive.google.com/file/d/16GiIhZy6CE7q-yv2Er8kmhDYUXIlhIs0/view?usp=drive_link" target="_blank" rel="noopener noreferrer"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
      

          <div className="text-center p-10 ">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
              Aditya Jani
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl ">
             Web Developer
            </h3>
            <p className="text-md py-3 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-white">
            Hello , I'm a recent graduate with a degree in Information Technology, passionate about frontend development.I have a strong foundation in web technologies and a flair for creating intuitive, visually appealing user interfaces. Explore my portfolio to see my projects and skills in action.
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-1 text-gray-600 dark:text-white ">
      <a href="https://github.com/AdityaJani616" target="_blank" rel="noopener noreferrer" className="cursor-pointer hover:text-teal-500">
        <AiFillGithub />
      </a>
      <a href="https://www.linkedin.com/in/adityajani616" target="_blank" rel="noopener noreferrer" className="cursor-pointer hover:text-teal-500">
        <AiFillLinkedin />
      </a>
      <a href="mailto:adityajani616@gmail.com" target="_blank" className="cursor-pointer hover:text-teal-500">
        <AiFillMail />
      </a>
      
    </div>
      
        </section>
        {/* <About/> */}
 
        <Experience />
        <PortFolio />
        {/*new section below */}
          
        <Footer />
      </main>
    </div>
  );
}
