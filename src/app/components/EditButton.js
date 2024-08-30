
export default function EditButton({children}){
    
    return (
        
<button className="flex items-center justify-between md:w-48 xs:w-32 md:h-12 xs:h-auto border border-black rounded-md">

        <span className="font-medium md:text-2xl xs:text-lg md:p-2 md:px-4 xs:p-1 xs:px-2">
            {children}
        </span>


       <span className="md:flex xs:hidden mt-0.5 p-4">
            <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 2L8 8L14 2" stroke="#1E1E1E" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
      
       </span>
        
       <span className="md:hidden xs:flex pr-1 mt-0.5 ml-2">
            <svg width="16" height="8" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 2L8 8L14 2" stroke="#1E1E1E" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
      
       </span>
        
</button>

    );
}
