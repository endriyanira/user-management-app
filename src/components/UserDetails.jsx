import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { IoArrowBack } from "react-icons/io5";

import { getBirthdayDateFormat, getGender, notify } from "../utils";

const UserDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const userId = location.state.userId;
  const [userData, setUserData] = useState({
    id: "",
    name: "",
    address: "",
    gender: null,
    birth_date: null,
    input_date: null,
  });
  const [loadingFetchUser, setLoadingFetchUser] = useState(false);

  const fetchUserDetails = async () => {
    setLoadingFetchUser(true);
    try {
      const response = await axios({
        url: `http://localhost:3030/users/${userId}`,
        method: "GET",
      });
      const data = response.data;
      setUserData(data);
      setLoadingFetchUser(false);
    } catch (error) {
      setLoadingFetchUser(false);
      console.error("Error while fetching user: ", error);
      notify("failed get user details", "error");
    }
  };

  useEffect(() => {
    fetchUserDetails();
  }, []);
  return loadingFetchUser ? (
    <div>Loading...</div>
  ) : (
    <div className="adiv form container card w-full h-full justify-center flex px-8">
      <div className="flex flex-col py-10 bg-white px-8 my-20 rounded-xl sm:w-[450px] md:w-[500px] border-2">
        <div className="px-4 pb-5 pt-2 sm:px-6">
          <button className="pb-5" onClick={() => navigate("/")}>
            <IoArrowBack size={20} />
          </button>
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            User Info
          </h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">
            This is some information about the user.
          </p>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
          <div className="sm:divide-y sm:divide-gray-200">
            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <div className="text-sm font-medium text-gray-500">Full name</div>
              <div className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {userData.name}
              </div>
            </div>
            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <div className="text-sm font-medium text-gray-500">Address</div>
              <div className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {userData.address}
              </div>
            </div>
            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <div className="text-sm font-medium text-gray-500">Gender</div>
              <div className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {getGender(userData.gender)}
              </div>
            </div>
            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <div className="text-sm font-medium text-gray-500">Birthday</div>
              <div className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {getBirthdayDateFormat(userData.birth_date)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
