import InteractiveText from "./components/InteractiveText";
import Box from "./components/Box";

export default function Home() {
    return (
      <main className="flex min-h-screen flex-col p-10 bg-white ">
              <InteractiveText 
                textArray={[
                  <span className="md:block xs:flex flex-col items-center">
                    GENERATE <span className="font-custom text-black xs:font-normal">SUBTITLES</span>
                  </span>, 
                   "FOR YOUR VIDEOS"
                      
                ]} 
                stylesArray={[
                    "text-black",
                    "whitespace-nowrap md:text-4xl xs:text-2xl xs:font-medium",  // Apply the general style to the whole first line
        
                ]}
             />
<Box>  
  {/* Container for icon and upload text */}
  <div className="flex items-center w-full h-12 p-4 m-4 ml-6 ">
    
    <div className="flex items-center justify-center">

          {/* upload icon */}
          <svg width="48" height="48" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M34.4605 34.4605L29.3128 29.3128M29.3128 29.3128L24.165 34.4605M29.3128 29.3128V40.8953M40.1102 37.5363C41.3654 36.852 42.357 35.7692 42.9285 34.4588C43.4999 33.1483 43.6187 31.6849 43.2661 30.2995C42.9135 28.914 42.1095 27.6854 40.9811 26.8077C39.8527 25.9299 38.4641 25.4529 37.0344 25.4519H35.4129C35.0233 23.9452 34.2973 22.5464 33.2894 21.3607C32.2814 20.175 31.0178 19.2332 29.5934 18.6062C28.1691 17.9791 26.6212 17.6831 25.066 17.7404C23.5108 17.7977 21.9888 18.2068 20.6145 18.937C19.2402 19.6672 18.0493 20.6994 17.1313 21.956C16.2134 23.2127 15.5922 24.6611 15.3146 26.1924C15.037 27.7237 15.1102 29.298 15.5286 30.7969C15.947 32.2959 16.6997 33.6805 17.7303 34.8466M58.269 29.6345C58.269 45.4489 45.4489 58.269 29.6345 58.269C13.8201 58.269 1 45.4489 1 29.6345C1 13.8201 13.8201 1 29.6345 1C45.4489 1 58.269 13.8201 58.269 29.6345Z" stroke="#1E1E1E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          
          {/*upload text*/ }
          <div className="flex flex-col ml-4">
      <span className=" text-black text-xl font-semibold">Upload File</span>
      <span className=" md:flex xs:hidden text-gray-700 text-xs">select or drop the file of your choice  </span>
      
      <span className="md:hidden xs:flex text-gray-700 text-xs">select a file </span>
      
      </div>
    </div>
    
  </div>

  {/* Horizontal rule */}
  <hr className="w-full border-t border-gray-400 md:flex xs:hidden "/>

  {/* Container for text lines and button */}
  <div className="flex flex-col items-center justify-center border border-dashed border-black w-96 h-44 p-4 m-8 rounded-3xl xs:hidden md:flex">    {/* dotted box */}
    <div className="text-center mb-4">  
      <p className="text-lg">Choose or drag & drop it here</p>
      <p className="text-xs opacity-50">MP4,MPEG4,WebM, and MOV, up to 50MB</p>
    </div>
    <button className="mt-2  px-6 py-2 bg-white text-black font-medium border-2 border-grey-500 rounded-full hover:bg-black hover:text-white">
      Browse File
    </button>
  </div>
</Box>

 
      </main>
    );
  }
