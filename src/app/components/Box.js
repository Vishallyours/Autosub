export default function Box ({ className ,children}){
    return(
                      
        <div className= {`flex flex-col self-center items-center mt-20 w-144 h-80 border border-black border-opacity-20  rounded-3xl boxshadow-custom ${className}`}>
                {children}
        </div>
    );  
}
