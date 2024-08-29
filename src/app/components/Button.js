export default function Button ({ className,children}) {
    return (
        <div className={`flex border border-gray-200 w-24 h-8 rounded-md justify-center items-center hover:bg-black hover:text-white`}>
                    {children}
        </div>
    );
}