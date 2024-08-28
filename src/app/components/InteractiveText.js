import React from "react";

const InteractiveText = ({ textArray, stylesArray }) => {
  return (
    <div className="flex flex-col w-auto h-auto items-center justify-end text-5xl tracking-[4px] text-shadow-custom">
      {textArray.map((text, index) => (
        <span
          key={index}
          className={`${stylesArray[index] || ""}`}
        >
          {text}
        </span>
      ))}
    </div>
  );
};

export default InteractiveText;
