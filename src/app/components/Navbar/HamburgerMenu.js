'use client'
import { useState } from "react";
import NavbarLinks from "./navbarLinks";

export default function HamburgerMenu({className}) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return(
        <div className={`relative ${className}`} >
            <button 
             onClick={toggleMenu}
             aria-label="Toggle menu"
             className="p-2 focus:outline-none"
             >
               {isOpen ? (
                <svg width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                  <path
              d="M18 6L6 18"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6 6L18 18"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
               ):(
               <svg
               width="32"
               height="32"
               viewBox="0 0 24 24"
               fill="none"
               xmlns="http://www.w3.org/2000/svg"
             >
               <path
                 d="M4 6H20"
                 stroke="black"
                 strokeWidth="2"
                 strokeLinecap="round"
               />
               <path
                 d="M4 12H20"
                 stroke="black"
                 strokeWidth="2"
                 strokeLinecap="round"
               />
               <path
                 d="M4 18H20"
                 stroke="black"
                 strokeWidth="2"
                 strokeLinecap="round"
               />
             </svg>
           
               )} 
            </button>
        
        <div
        className={`min-w-36 mt-10 -ml-8 pt-2 py-1 absolute top-3/4 -left-full  bg-black bg-opacity-90 md:text-black xs:text-white rounded-xl  transition-all duration-300 ease-in-out ${
          isOpen ? 'block' : 'hidden'
        }`}
      >
       <NavbarLinks></NavbarLinks>
</div>
      </div>
    );
};