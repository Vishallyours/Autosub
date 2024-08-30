import React from "react";

const Header = () =>{
return (

<div  className="Navbar flex flex-col justify-center border-navbarColor h-24 w-auto bg-navbarColor rounded-full">
              
<div className="Navbar-group  flex flex-row justify-between items-center text-textColor mx-10">
      
      <div className="logo flex text-4xl tracking-[4px] items-center">
           <a href="#" className="text-textColor font-custom">AUTOSUB</a>
      
      </div>
            <ul className="nav-links md:flex xs:hidden relative items-center gap-2">
                  
                  <li className="nav-link p-1">
                    <a href="#">Solutions</a> 
                  </li>
                  <li className="nav-link p-1"> 
                    <a href="#" >Community</a>
                  </li>   
                  <li className="nav-link p-1">
                    <a href="#">Resource</a>
                  </li>
                  <li className="nav-link p-1"> 
                    <a href="#">Contact</a>
                  </li>
            </ul>
</div>
</div>
);
};

export default Header;