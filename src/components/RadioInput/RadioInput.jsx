import React from "react";

const RadioInput = ({
  label,
  data,
  name,
  handleOnClick,
  defaultCheckedVal,
}) => {
  return (
    <div className="flex flex-wrap -mx-3 mb-8">
      <div className="w-full px-3">
        <label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          htmlFor="grid-gender"
        >
          {label}
        </label>
        <div className="flex flex-row gap-4">
          {data.map((data) => (
            <label
              className="inline-flex items-center"
              key={`radioInputKey-${data.id}`}
            >
              <input
                type="radio"
                className="form-radio"
                name={name}
                value={data.value}
                defaultChecked={defaultCheckedVal === data.value}
                onClick={(e) => handleOnClick(e, name)}
              />
              <span className="ml-2">{data.name}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RadioInput;
