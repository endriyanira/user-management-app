import React from "react";
import { ImFilesEmpty } from "react-icons/im";

const EmptyData = ({ message }) => {
  return (
    <div className="w-full h-min flex justify-center items-center py-10px-8 my-20">
      <div className="flex flex-col gap-4 items-center justify-center">
        <ImFilesEmpty size={50} className="text-gray-600" />
        <p className="text-lg text-gray-500 font-semibold">{message}</p>
      </div>
    </div>
  );
};

export default EmptyData;
