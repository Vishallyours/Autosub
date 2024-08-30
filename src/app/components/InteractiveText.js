import React, { Children } from "react";

const InteractiveText = ({ textArray, stylesArray }) => {
  return (
    <div className="flex flex-col w-auto h-auto items-center justify-end md:text-5xl xs:text-3xl xs:font-semibold tracking-[4px] text-shadow-custom">
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
