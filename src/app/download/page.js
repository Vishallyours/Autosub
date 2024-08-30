import Box from "../components/Box";
import InteractiveText from "../components/InteractiveText"; 
import Button from "../components/Button";

export default function DownloadPage() {
    return (
      <main className="flex min-h-screen flex-col p-10 bg-white">
             
             <div className="flex flex-col items-center">
              
              <div>
                <InteractiveText 
                textArray={[
                  <>
                    YOUR FILE IS <span className="font-custom">READY</span>
                  </>, 
                ]} 
                stylesArray={[
                    "text-black",  // Apply the general style to the whole first line
            
                ]}
             />
              </div>
        
<div className="flex -ml-16 mt-20 justify-normal items-center gap-4">
                <div className="cursor-pointer flex">
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M24 16L16 24M16 24L24 32M16 24L32 24M24 4C35.0457 4 44 12.9543 44 24C44 35.0457 35.0457 44 24 44C12.9543 44 4 35.0457 4 24C4 12.9543 12.9543 4 24 4Z" stroke="#1E1E1E" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                
        <Box className="w-auto h-auto justify-center mt-0 hover:bg-red-600 cursor-pointer">

                <div className="flex gap-4 mx-4 my-2 p-4 font-medium text-4xl"> 
                    <div className="flex">
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M42 30V38C42 39.0609 41.5786 40.0783 40.8284 40.8284C40.0783 41.5786 39.0609 42 38 42H10C8.93913 42 7.92172 41.5786 7.17157 40.8284C6.42143 40.0783 6 39.0609 6 38V30M14 20L24 30M24 30L34 20M24 30V6" stroke="#1E1E1E" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>

                    </div>
                        <div className="flex">
                          Download File
                        </div>

                </div>

        </Box>     
        
              </div>
              
              <div className="flex flex-col mt-20 items-center">
              
                <span className="text-xl font-medium">How can you thank us? Spread the word! 
                </span>
                
                <span className="">Please share the tool to inspire more productive people!
                </span>
              
              </div>
             
              <div className="flex gap-2 text-xs mt-4">  
                <Button>Instagram</Button>
                <Button>LinkedIn</Button>
                <Button>facebook</Button>
                <Button>Twitter</Button>
              </div>

</div>
             
      </main>
    );
  }
