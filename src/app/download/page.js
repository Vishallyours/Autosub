import Box from "../components/Box";
import InteractiveText from "../components/InteractiveText"; 
import Button from "../components/Button";

export default function DownloadPage() {
    return (
      <main className="flex min-h-screen flex-col p-10 bg-white">
             
             
                <InteractiveText 
                textArray={[
                  <>
                    YOUR FILE IS <span className="font-custom font-normal">READY</span>
                  </>, 
                ]} 
                stylesArray={[
                    "text-black whitespace-nowrap xs:text-2xl md:text-4xl",  // Apply the general style to the whole first line
            
                ]}
             />
<div className="flex flex-col items-center">
        
<div className="flex md:-ml-16 md:mt-20 justify-normal items-center gap-4">
                <span className="cursor-pointer md:flex xs:hidden">
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M24 16L16 24M16 24L24 32M16 24L32 24M24 4C35.0457 4 44 12.9543 44 24C44 35.0457 35.0457 44 24 44C12.9543 44 4 35.0457 4 24C4 12.9543 12.9543 4 24 4Z" stroke="#1E1E1E" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </span>
                
        <Box className="md:w-auto md:h-auto md:mt-0 xs:mt-20 justify-center hover:bg-red-600 cursor-pointer ">

                 
                    <div className="flex gap-4 m-2 md:p-6 
                    xs:p-4 font-medium md:text-4xl xs:text-2xl">
                        
                        <span className="md:hidden xs:flex">
                              <svg width="36" height="36" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M42 30V38C42 39.0609 41.5786 40.0783 40.8284 40.8284C40.0783 41.5786 39.0609 42 38 42H10C8.93913 42 7.92172 41.5786 7.17157 40.8284C6.42143 40.0783 6 39.0609 6 38V30M14 20L24 30M24 30L34 20M24 30V6" stroke="#1E1E1E" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                              </svg>                      

                        </span>
                        <span className="md:flex xs:hidden">
                              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M42 30V38C42 39.0609 41.5786 40.0783 40.8284 40.8284C40.0783 41.5786 39.0609 42 38 42H10C8.93913 42 7.92172 41.5786 7.17157 40.8284C6.42143 40.0783 6 39.0609 6 38V30M14 20L24 30M24 30L34 20M24 30V6" stroke="#1E1E1E" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                              </svg>                      

                        </span>
                       
                        <span className="flex whitespace-nowrap">
                          Download File
                        </span>
                        </div>
                
        </Box>     
</div>

              <div className="flex flex-col mt-20 items-center">
              
              <Box className="md:hidden px-4 rounded-md xs:-mt-16 text-lg  font-normal hover:bg-black hover:text-white cursor-pointer">return</Box>
            
                <span className=" md:mt-0 xs:mt-8 text-xl font-medium xs:text-center  whitespace-break-spaces">How can you thank us? Spread the word! 
                </span>
                
                <span className="md:mt-0 xs:text-center xs:mt-4">Please share the tool to inspire more productive people!
                </span>
              
              </div>
             
              <div className="grid grid-cols-2 md:grid-cols-4 place-items-center md:gap-2 xs:gap-8 xs:gap-y-4 text-xs mt-4">  
                <Button className="">Instagram</Button>
                <Button className="">LinkedIn</Button>
                <Button className="">facebook</Button>
                <Button className="">Twitter</Button>
              </div>

</div>
             
      </main>
    );
  }
