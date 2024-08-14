import React from "react";

const TextInput = ({
  label,
  htmlFor,
  id,
  placeholder,
  value,
  handleOnChange,
  name,
  required,
}) => {
  return (
    <div className="flex flex-wrap -mx-3 mb-6">
      <div className="w-full px-3">
        <label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          htmlFor={htmlFor}
        >
          {label} <span className="text-red-600">*</span>
        </label>
        <input
          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id={id}
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={(e) => handleOnChange(e, name)}
          required={required}
        />
      </div>
    </div>
  );
};

export default TextInput;
