import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import axios from "axios";

import { convertDateToISO } from "../utils";
import CustomDate from "./CustomDate";
import Button from "./Button/Button";
import ButtonLink from "./Button/ButtonLink";
import ButtonLoading from "./Button/ButtonLoading";

const AddUserForm = () => {
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    name: "",
    address: "",
    gender: null,
    birth_date: null,
    input_date: convertDateToISO(new Date()),
  });

  const [loadingSubmit, setLoadingSubmit] = useState(false);

  const [showBirthdayDatePicker, setShowBirthdayDatePicker] = useState(false);

  const handleChangeData = (e, key) => {
    setUserData({ ...userData, [key]: e.target.value });
  };

  const handleBirthdayDate = (selectedDate) => {
    const date = convertDateToISO(selectedDate);
    setUserData({ ...userData, birth_date: date });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoadingSubmit(true);
    try {
      await axios({
        url: "http://localhost:3030/users",
        method: "POST",
        data: userData,
      });
      setTimeout(() => {
        navigate("/");
        setLoadingSubmit(false);
      }, 500);
    } catch (error) {
      setLoadingSubmit(false);
      console.error("Error while create new user: ", error);
    }
  };

  return (
    <div className="add form container card w-full h-full justify-center flex px-8">
      <div className="flex flex-col py-10 bg-white px-8 my-20 rounded-xl sm:w-[450px] md:w-[500px] border-2">
        <button className="pb-5" onClick={() => navigate("/")}>
          <IoArrowBack size={20} />
        </button>
        <h3 className="text-lg leading-6 font-medium text-gray-900 mb-8">
          Add User
        </h3>
        <form className="w-full max-w-lg" onSubmit={handleSubmit}>
          {/* Name */}
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-name"
              >
                Name <span className="text-red-600">*</span>
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-name"
                type="text"
                placeholder="Endriyani"
                onChange={(e) => handleChangeData(e, "name")}
                required
              />
            </div>
          </div>

          {/* Address */}
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-address"
              >
                Address
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-address"
                type="text"
                placeholder="Rawamangun"
                onChange={(e) => handleChangeData(e, "address")}
              />
            </div>
          </div>

          {/* Gender */}
          <div className="flex flex-wrap -mx-3 mb-8">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-gender"
              >
                Gender
              </label>
              <div className="flex flex-row gap-4">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    className="form-radio"
                    name="gender"
                    value={0}
                    onClick={(e) => handleChangeData(e, "gender")}
                  />
                  <span className="ml-2">Male</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    className="form-radio"
                    name="gender"
                    value={1}
                    onClick={(e) => handleChangeData(e, "gender")}
                  />
                  <span className="ml-2">Female</span>
                </label>
              </div>
            </div>
          </div>

          {/* Birth Date */}
          <div className="flex flex-wrap -mx-3 mb-8">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-birthday"
              >
                Birthday Date
              </label>
              <CustomDate
                handleChange={handleBirthdayDate}
                show={showBirthdayDatePicker}
                handleClose={setShowBirthdayDatePicker}
              />
            </div>
          </div>

          <div className="flex flex-wrap  -mx-3 mb-3">
            <div className="w-full px-3 flex justify-end gap-2">
              <ButtonLink
                type={"button"}
                text={"Cancel"}
                className={
                  "h-[40px] px-3 hover:bg-gray-100 text-gray-700 font-medium rounded-md before:ease-in-out after:ease-in-out"
                }
                path={"/"}
              />
              {loadingSubmit ? (
                <ButtonLoading
                  type={"button"}
                  text={"Submit"}
                  className="h-[40px] px-3 bg-blue-500  text-white font-medium rounded-md before:ease-in-out after:ease-in-out "
                />
              ) : (
                <Button
                  type={"submit"}
                  text={"Submit"}
                  className="h-[40px] px-3 bg-blue-500 hover:bg-blue-700 text-white font-medium rounded-md before:ease-in-out after:ease-in-out shadow-blue-300 shadow-md"
                />
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUserForm;
