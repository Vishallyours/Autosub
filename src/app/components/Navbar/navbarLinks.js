'use client'

export default function NavbarLinks({className}){
    return (
       
       <div className={`flex md:flex-col xs:flex-col relative md:items-center xs:items-stretch text-lg ${className}`}>
       
       <ul className="md:flex"> 
                  
        <li className="
                       px-3
                       py-2
                       xs:hover:bg-opacity-20
                      xs:hover:bg-white
                      xs:hover:text-white
                      xs:rounded-md
                      md:hover:bg-slate-800
                      md:hover:text-white 
                      md:rounded-full">
          <a href="#">Solutions</a> 
        </li>
        <li className="
                       px-3
                       py-2
                       xs:hover:bg-opacity-20
                      xs:hover:bg-white
                      xs:hover:text-white
                      xs:rounded-md
                      md:hover:bg-slate-800
                      md:hover:text-white 
                      md:rounded-full"> 
          <a href="#" >Community</a>
        </li>   
        <li className="
                        px-3
                       py-2
                       xs:hover:bg-opacity-20
                      xs:hover:bg-white
                      xs:hover:text-white
                      xs:rounded-md
                      md:hover:bg-slate-800
                      md:hover:text-white 
                      md:rounded-full">
          <a href="#">Resource</a>
        </li>
        <li className="
                      px-3
                       py-2
                       xs:hover:bg-opacity-20
                      xs:hover:bg-white
                      xs:hover:text-white
                      xs:rounded-md
                      md:hover:bg-slate-800
                      md:hover:text-white 
                      md:rounded-full"> 
          <a href="#">Contact</a>
        </li>
  </ul>
  </div>
       
    );
}