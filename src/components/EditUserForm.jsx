import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { IoArrowBack } from "react-icons/io5";

import { convertDateToISO, notify } from "../utils";
import CustomDate from "./CustomDate";
import ButtonLink from "./Button/ButtonLink";
import Button from "./Button/Button";
import ButtonLoading from "./Button/ButtonLoading";
import Loading from "./Loading/Loading";
import EmptyData from "./EmptyData";
import TextInput from "./TextInput/TextInput";

const EditUserForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const userId = location.state.userId;
  const [loadingFetchUser, setLoadingFetchUser] = useState(false);
  const [userData, setUserData] = useState({
    name: "",
    address: "",
    gender: null,
    birth_date: null,
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

  const handleFetchDetailUser = async () => {
    setLoadingFetchUser(true);
    try {
      const response = await axios({
        url: `http://localhost:3030/users/${userId}`,
        method: "GET",
      });
      const data = response.data;
      setUserData({
        ...userData,
        name: data.name,
        address: data.address,
        gender: data.gender,
        birth_date: data.birth_date,
      });
      setLoadingFetchUser(false);
    } catch (error) {
      setLoadingFetchUser(false);
      console.error("Error while fetching user: ", error);
      notify("error while fetching user", "error");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoadingSubmit(true);
    try {
      const response = await axios({
        url: `http://localhost:3030/users/${userId}`,
        method: "PATCH",
        data: userData,
      });
      if (response.status === 200) {
        notify("sucess edit user", "success");
      }
      setTimeout(() => {
        navigate("/");
        setLoadingSubmit(false);
      }, 500);
    } catch (error) {
      setLoadingSubmit(false);
      console.error("Error while updating a user: ", error);
      notify("error while editing user", "error");
    }
  };

  useEffect(() => {
    handleFetchDetailUser();
  }, []);
  return (
    <div className="add form container card w-full h-full justify-center flex px-8">
      <div className="flex flex-col py-10 bg-white px-8 my-20 rounded-xl sm:w-[450px] md:w-[500px] border-2">
        <button className="pb-5" onClick={() => navigate("/")}>
          <IoArrowBack size={20} />
        </button>
        <h3 className="text-lg leading-6 font-medium text-gray-900 mb-8">
          Edit User Info
        </h3>
        {loadingFetchUser && <Loading />}
        {userData.name && !loadingFetchUser && (
          <form className="w-full max-w-lg" onSubmit={handleSubmit}>
            {/* Name */}
            <TextInput
              label={"Name"}
              htmlFor={"grid-name"}
              placeholder={"Your name"}
              value={userData.name}
              handleOnChange={handleChangeData}
              key={"name"}
              required={true}
            />

            {/* Address */}
            <TextInput
              label={"Address"}
              htmlFor={"grid-address"}
              placeholder={"Your address"}
              value={userData.address}
              handleOnChange={handleChangeData}
              key={"name"}
              required={false}
            />

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
                      defaultChecked={userData.gender === "0"}
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
                      defaultChecked={userData.gender === "1"}
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
                  value={userData.birth_date}
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
        )}
        {!userData.name && <EmptyData message={"Error get user details"} />}
      </div>
    </div>
  );
};

export default EditUserForm;
