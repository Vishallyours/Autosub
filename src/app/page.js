
  export default function Home() {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-10 bg-white ">
        
        <div  className="Navbar flex flex-col justify-center border-navbarColor h-24 w-full bg-navbarColor rounded-full">
              
              <div className="Navbar-group flex flex-row justify-between items-center text-textColor mx-10">
                    
                    <div className="logo flex text-4xl tracking-[4px]items-center">
                         <a href="#" className="text-textColor font-custom">AUTOSUB</a>
                    
                    </div>
                          <ul className="nav-links flex items-center gap-2">
                                
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
      </main>
    );
  }
