import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import axios from "axios";

import { convertDateToISO, notify } from "../utils";
import { genderList } from "../data/constants";
import CustomDate from "./CustomDate";
import Button from "./Button/Button";
import ButtonLink from "./Button/ButtonLink";
import ButtonLoading from "./Button/ButtonLoading";
import TextInput from "./TextInput/TextInput";
import RadioInput from "./RadioInput/RadioInput";
import TextArea from "./TextArea/TextArea";
import Container from "./Container/Container";

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
      const response = await axios({
        url: "http://localhost:3030/users",
        method: "POST",
        data: userData,
      });
      if (response.status === 201) {
        notify("Success add new user", "success");
      }
      setTimeout(() => {
        navigate("/");
        setLoadingSubmit(false);
      }, 500);
    } catch (error) {
      setLoadingSubmit(false);
      console.error("Error while create new user: ", error);
      notify("Error while adding new user", "error");
    }
  };

  return (
    <Container>
      <button className="pb-5" onClick={() => navigate("/")}>
        <IoArrowBack size={20} />
      </button>
      <h3 className="text-lg leading-6 font-medium text-gray-900 mb-8">
        Add User
      </h3>
      <form className="w-full max-w-lg" onSubmit={handleSubmit}>
        {/* Name */}
        <TextInput
          label={"Name"}
          htmlFor={"grid-name"}
          placeholder={"Your name"}
          handleOnChange={handleChangeData}
          name="name"
          required={true}
          type={"text"}
        />

        {/* Address */}
        <TextArea
          label={"Address"}
          htmlFor={"grid-address"}
          placeholder={"Your address"}
          handleOnChange={handleChangeData}
          name={"address"}
          required={false}
        />

        {/* Gender */}
        <RadioInput
          label={"Gender"}
          data={genderList}
          name="gender"
          handleOnClick={handleChangeData}
          defaultCheckedVal={userData.gender}
        />

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
    </Container>
  );
};

export default AddUserForm;
