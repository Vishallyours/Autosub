'use client'

import React, { useState } from "react";
import HamburgerMenu from "./Navbar/HamburgerMenu";
import NavbarLinks from "./Navbar/navbarLinks";

const Header = () => {
      const [isBgBlack, setIsBgBlack] = useState(false);

  const toggleColor = () => {
    setIsBgBlack(true);
    setTimeout(() => {
      setIsBgBlack(false);
    }, 100);
  }; 
      return (

<div className="flex ">
      
      <div className="Navbar
      flex
      w-full
      h-24
      min-w-42
      px-8
      justify-between
      items-center
      border-navbarColor
      bg-navbarColor 
      rounded-full
          ">        
            
                  <div className="logo 
                  flex 
                  md:text-4xl 
                  xs:text-3xl 
                  tracking-[4px] 
                  items-center 
                  text-textColor">

                        <a href="#" className="text-textColor font-custom">AUTOSUB</a>
            
                        </div>
                  
                  <NavbarLinks className="md:flex
                  xs:hidden"></NavbarLinks>
       
                  <div className={`
                  md:hidden 
                  xs:flex 
                  rounded-full 
                  items-center
                  my-6 
                  mx-1
                  bg-opacity-10      
                  ${isBgBlack ? 'bg-black' : 'bg-transparent'}
                  `}
                  onClick={toggleColor}
                  >

                  <HamburgerMenu className="xs:flex md:hidden"/>
                  </div>
 </div>
 </div>
            );
      };

export default Header;