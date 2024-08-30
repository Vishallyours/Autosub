export default function Box ({ className ,children}){
    return(
                      
        <div className= {`flex flex-col self-center items-center mt-20 md:w-144 md:h-80 border border-black border-opacity-20  rounded-3xl boxshadow-custom xs:w-auto xs:h-auto ${className}`}>
                {children}
        </div>
    );  
}
