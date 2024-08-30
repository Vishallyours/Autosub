import Box from "../components/Box";
import InteractiveText from "../components/InteractiveText";
import EditButton from "../components/EditButton";

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
                    "whitespace-nowrap",  // Apply the general style to the whole first line
            
                ]}
             />
             
<Box className="flex justify-center items-center xs:w-auto xs:h-108 xs:px-8 xs:mt-10">
  <div className="flex md:flex-row xs:flex-col gap-8 md:justify-evenly xs:my-8 xs:mx-4 ">
    
  <div className="flex flex-col justify-center items-center gap-4">

    <EditButton>
      Language
    </EditButton>
    
    <EditButton>
      Color
    </EditButton>
    
    <EditButton>
      Style
    </EditButton>
    
  </div>              

  <div className="flex xs:w-auto h-auto justify-center  border border-black rounded-lg">

        <div className="
        flex flex-col
        justify-center items-center
        md:p-4 md:pr-2 
        xs:py-4 xs:mx-0
         ">
              
              <span className="xs:hidden md:flex">
                    <svg width="72" height="96" viewBox="0 0 90 112"  fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M50.3335 2.66675H13.0002C10.1712 2.66675 7.45808 3.79055 5.45769 5.79094C3.4573 7.79133 2.3335 10.5044 2.3335 13.3334V98.6668C2.3335 101.496 3.4573 104.209 5.45769 106.209C7.45808 108.21 10.1712 109.333 13.0002 109.333H77.0002C79.8291 109.333 82.5422 108.21 84.5426 106.209C86.543 104.209 87.6668 101.496 87.6668 98.6668V40.0001M50.3335 2.66675L87.6668 40.0001M50.3335 2.66675V40.0001H87.6668" stroke="#1E1E1E" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
          
              </span>                  
          
              <span className="md:hidden flex w-auto pl-2">
                    <svg width="48" height="72" viewBox="0 0 90 112"  fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M50.3335 2.66675H13.0002C10.1712 2.66675 7.45808 3.79055 5.45769 5.79094C3.4573 7.79133 2.3335 10.5044 2.3335 13.3334V98.6668C2.3335 101.496 3.4573 104.209 5.45769 106.209C7.45808 108.21 10.1712 109.333 13.0002 109.333H77.0002C79.8291 109.333 82.5422 108.21 84.5426 106.209C86.543 104.209 87.6668 101.496 87.6668 98.6668V40.0001M50.3335 2.66675L87.6668 40.0001M50.3335 2.66675V40.0001H87.6668" stroke="#1E1E1E" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
              </span>                  
          
              <span className="xs:pl-2 md:pl-0">
                file_name.mov
              </span> 
        </div>        

  
        <div className="flex items-center h-4 pt-2 md:pr-2 xs:pr-0 md:-ml-4 xs:-ml-2 xs:py-4 cursor-pointer">
          
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
