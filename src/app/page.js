import InteractiveText from "./components/InteractiveText";

export default function Home() {
    return (
      <main className="flex min-h-screen flex-col p-10 bg-white ">
              <InteractiveText 
                textArray={[
                  <>
                    GENERATE <span className="font-custom text-red-900">SUBTITLES</span>
                  </>, 
                    "FOR YOUR VIDEOS"
                ]} 
                stylesArray={[
                    "text-black",  // Apply the general style to the whole first line
            
                ]}
             />
              
              <div className="flex flex-col self-center items-center mt-24 border border-black w-96 h-auto rounded-3xl">
  
  {/* Container for icon and upload text */}
  <div className="flex  items-center justify-between w-full h-12 p-4 ">
    
    <div className="flex items-center">

      {/* Example icon */}
      <svg className="w-6 h-6 text-gray-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v8m4-4H8m8 8H8m4 0v-8" />
      </svg>
    
      <span className="text-gray-700">Upload File</span>
    </div>
    
  </div>

  {/* Horizontal rule */}
  <hr className="w-full border-t border-gray-300 my-2" />

  {/* Container for text lines and button */}
  <div className="flex flex-col items-center justify-center border border-dotted border-black w-72 h-36 p-4 m-4  rounded-3xl">    {/* dotted box */}
    <div className="text-center mb-4">  
      <p className="text-lg">Choose or drag & drop it here</p>
      <p className="text-xs opacity-50">MP4,MPEG4,WebM, and MOV, up to 50MB</p>
    </div>
    <button className="mt-4 px-6 py-2 bg-red-900 text-white rounded-full hover:bg-black hover:text-white">
      Browse File
    </button>
  </div>

</div>
 
      </main>
    );
  }
