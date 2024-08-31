import React from "react";
import HamburgerMenu from "./Navbar/HamburgerMenu";
import NavbarLinks from "./Navbar/navbarLinks";

const Header = () =>{
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
       
                  <div className="
                  md:hidden 
                  xs:flex 
                  border-2
                  border-black 
                  rounded-full 
                  items-center
                  my-6 
                  mx-1">

                  <HamburgerMenu className="xs:flex md:hidden"/>
                  </div>
 </div>
 </div>
            );
      };

export default Header;