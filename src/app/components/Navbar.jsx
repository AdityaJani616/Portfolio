import { useState } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = ({ darkMode, setDarkMode }) => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => setNavOpen(!navOpen);

  return (
    <nav className="py-10 mb-12 flex justify-between items-center">
      {/* Logo */}
      <a href="/" className="text-5xl font-signature ml-2">
        aditya
      </a>

      {/* Hamburger Icon for Mobile Only */}
      <div className="sm:block md:hidden" onClick={toggleNav}>
        {navOpen ? (
          <FaTimes className="text-3xl cursor-pointer" />
        ) : (
          <FaBars className="text-3xl cursor-pointer" />
        )}
      </div>

      {/* Menu Links */}
      <ul
        className={`${
          navOpen
            ? "flex bg-teal-400 border-2  h-[60vh] m-4"
            : "hidden"
        } md:flex items-center absolute md:static top-20 left-0 w-[80%] md:w-auto p-8 md:p-0 z-50 md:z-auto transition-all duration-300 ease-in-out md:flex-row flex-col justify-center`}
      >
        <li className="mb-8 md:mb-0 md:mr-5 text-xl">
          <a
            href="#portfolio"
            onClick={toggleNav}
            className="hover:text-white transition-colors duration-300"
          >
            Projects
          </a>
        </li>
        <li className="mb-8 md:mb-0 md:mr-5 text-xl">
          <BsFillMoonStarsFill
            onClick={() => setDarkMode(!darkMode)}
            className="cursor-pointer text-2xl hover:text-white transition-colors duration-300"
          />
        </li>
        <li>
          <a
            className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
            href="https://drive.google.com/file/d/1gEBCWOwe6HyuLoq2A76Ds6QyQT2F0Fvm/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
