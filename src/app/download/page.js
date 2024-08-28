import InteractiveText from "./components/InteractiveText";

export default function DownloadPage() {
    return (
      <main className="flex min-h-screen flex-col p-10 bg-white ">
              <InteractiveText 
                textArray={[
                  <>
                    YOUR FILE IS <span className="font-custom text-red-900">READY</span>
                  </>, 
                ]} 
                stylesArray={[
                    "text-black",  // Apply the general style to the whole first line
            
                ]}
             />
              
      </main>
    );
  }
