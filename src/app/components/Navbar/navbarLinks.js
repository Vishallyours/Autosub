'use client'

export default function NavbarLinks({className}){
    return (
       
       <div className={`flex md:flex-col xs:flex-col relative md:items-center xs:items-stretch text-lg ${className}`}>
       
       <ul className="md:flex"> 
                  
        <li className="nav-link p-1 hover:bg-white hover:bg-opacity-10 hover:text-white px-3 py-2 rounded-md">
          <a href="#">Solutions</a> 
        </li>
        <li className="nav-link  hover:bg-white hover:bg-opacity-10 hover:text-white px-3 py-2 rounded-md"> 
          <a href="#" >Community</a>
        </li>   
        <li className="nav-link p-1 hover:bg-white hover:bg-opacity-10 hover:text-white px-3 py-2 rounded-md">
          <a href="#">Resource</a>
        </li>
        <li className="nav-link p-1 hover:bg-white hover:bg-opacity-10 hover:text-white px-3 py-2 rounded-md"> 
          <a href="#">Contact</a>
        </li>
  </ul>
  </div>
       
    );
}