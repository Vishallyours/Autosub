import Box from "../components/Box";
import InteractiveText from "../components/InteractiveText";

export default function EditPage() {
    return (
      <main className="flex min-h-screen flex-col p-10 bg-white ">
              <InteractiveText 
                textArray={[
                  <>
                    EDIT SUBTITLES
                  </>, 
                  
                ]} 
                stylesArray={[
                    "text-black",  // Apply the general style to the whole first line
            
                ]}
             />
             
<Box className="flex justify-center items-center">
  <div className="flex gap-8 justify-evenly">
    
  <div className="flex flex-col w-48 self-start justify-center gap-4">

    <button className="border p-1 border-black rounded-md ">
  <div className="flex px-2 items-center justify-between">
           <span className="text-2xl font-medium">
          Language
          </span>
  <div className="pl-10 mt-0.5">
  <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 2L8 8L14 2" stroke="#1E1E1E" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

  </div>
  
  </div>
    </button>

    <button className="border p-1 border-black rounded-md ">
  <div className="flex px-2 items-center justify-between">
           <span className="text-2xl font-medium">
          Color
          </span>
  <div className="pl-10 mt-0.5">
  <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 2L8 8L14 2" stroke="#1E1E1E" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

  </div>
  
  </div>
    </button>

    <button className="border p-1 border-black rounded-md ">
  <div className="flex px-2 items-center justify-between">
           <span className="text-2xl font-medium">
          Style
          </span>
  <div className="pl-10 mt-0.5">
  <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 2L8 8L14 2" stroke="#1E1E1E" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

  </div>
  
  </div>
    </button>

  </div>              




  <div className="Group 4 flex w-auto h-auto justify-evenly border border-black rounded-lg ">



        <div className="fileIconName flex flex-col p-4 justify-center items-center">
              <div className="icon">

                    <svg width="72" height="96" viewBox="0 0 90 112"  fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M50.3335 2.66675H13.0002C10.1712 2.66675 7.45808 3.79055 5.45769 5.79094C3.4573 7.79133 2.3335 10.5044 2.3335 13.3334V98.6668C2.3335 101.496 3.4573 104.209 5.45769 106.209C7.45808 108.21 10.1712 109.333 13.0002 109.333H77.0002C79.8291 109.333 82.5422 108.21 84.5426 106.209C86.543 104.209 87.6668 101.496 87.6668 98.6668V40.0001M50.3335 2.66675L87.6668 40.0001M50.3335 2.66675V40.0001H87.6668" stroke="#1E1E1E" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
          
              </div>                  
          
             <div>
                file_name.mov
              </div> 
    
        </div>        

  
        <div className="cross flex h-4 border-gray-700 rounded-full  pt-2 pr-2 -ml-4">
          
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="0.5" width="17" height="17" rx="8.5" stroke="black" stroke-opacity="0.5"/>
<path d="M5.26683 13.6666L4.3335 12.7333L8.06683 8.99992L4.3335 5.26659L5.26683 4.33325L9.00016 8.06659L12.7335 4.33325L13.6668 5.26659L9.9335 8.99992L13.6668 12.7333L12.7335 13.6666L9.00016 9.93325L5.26683 13.6666Z" fill="#1D1B20"/>
                </svg>

        </div>
      </div>

  </div>  
</Box>
      </main>
    );
  }
