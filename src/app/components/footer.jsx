import React from 'react'
import {
    AiFillTwitterCircle,
    AiFillLinkedin,
    AiFillYoutube,
    AiFillGithub,
    AiFillMail,
  } from "react-icons/ai";
const footer = () => {
  return (
    <div>
      <footer class="bg-white-900 p-10  tracking-wide">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 lg:justify-end">
        <div class="lg:flex lg:items-center">
          <a href="javascript:void(0)">
          <h1  className="text-xl font-poppins">Devloped By AJ </h1>
          </a>
        </div>

        <div class="lg:flex lg:items-right  justify-end">
          <ul class="flex space-x-6 text-4xl">
          <li>
              <a href="javascript:void(0)">
              <a href="https://github.com/AdityaJani616" target="_blank" rel="noopener noreferrer" className="  cursor-pointer hover:text-teal-500">
        <AiFillTwitterCircle />
      </a>
     
              </a>
            </li>
            <li>
              <a href="javascript:void(0)">
              <a href="https://github.com/AdityaJani616" target="_blank" rel="noopener noreferrer" className="  cursor-pointer hover:text-teal-500">
        <AiFillGithub />
      </a>
     
              </a>
            </li>
            <li>
              <a href="javascript:void(0)">
              <a href="https://www.linkedin.com/in/adityajani616" target="_blank" rel="noopener noreferrer" className="cursor-pointer hover:text-teal-500">
        <AiFillLinkedin />
      </a>
   
               </a>
            </li>
            <li>
              <a href="javascript:void(0)">
              <a href="mailto:adityajani616@gmail.com" target="_blank" className="cursor-pointer hover:text-teal-500">
        <AiFillMail />
      </a>             </a>
            </li>
          </ul>
        </div>


      </div>

     
    </footer>
    </div>
  )
}

export default footer
