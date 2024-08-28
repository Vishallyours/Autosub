import InteractiveText from "./components/InteractiveText";

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
              
      </main>
    );
  }
