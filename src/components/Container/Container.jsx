import React from "react";

const Container = ({ children, className }) => {
  return (
    <div className="container card w-full h-[100vh] sm:h-full justify-center flex sm:px-8">
      <div
        className={`flex flex-col py-10 bg-white px-6 sm:px-8 sm:my-20 rounded-xl w-[100vw] sm:w-[450px] md:w-[500px] sm:border-2 ${className}`}
      >
        {children}
      </div>
    </div>
  );
};

export default Container;
