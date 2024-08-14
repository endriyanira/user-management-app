import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiEdit2 } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import { VscOpenPreview } from "react-icons/vsc";

import data from "../data/api.json";
import { getGender } from "../utils";
import Modal from "./Modal";
import DeleteConfirm from "./DeleteConfirm";

const UserTable = () => {
  const [loadingUsers, setLoadingUsers] = useState(false);
  const [users, setUsers] = useState(data.users);
  const [showDeleteConfirmationModal, setShowDeleteConfirmationModal] =
    useState(false);
  const [selectedUserToDelete, setSelectedUserToDelete] = useState(null);

  const filterUser = (userId) => {
    const filteredUsers = users.filter((user) => user.id !== userId);
    setUsers(filteredUsers);
    setShowDeleteConfirmationModal(false);
  };

  const handleDeleteUser = (userId) => {
    setShowDeleteConfirmationModal(true);
    setSelectedUserToDelete(userId);
  };

  useEffect(() => {
    setLoadingUsers(true);
    setUsers(data.users);
    setTimeout(() => {
      setLoadingUsers(false);
    }, 500);
  }, []);
  return loadingUsers ? (
    <div>Loading...</div>
  ) : (
    <div className="card w-full h-full justify-center flex px-8">
      <Modal
        shouldShow={showDeleteConfirmationModal}
        onRequestClose={() => setShowDeleteConfirmationModal((prev) => !prev)}
      >
        <DeleteConfirm
          confirmDelete={() => filterUser(selectedUserToDelete)}
          cancelDelete={() => setShowDeleteConfirmationModal((prev) => !prev)}
        />
      </Modal>
      <div className="flex flex-col py-10 bg-white px-8 my-20 rounded-xl">
        <div className="add user title desc button flex flex-col lg:flex-row items-start gap-4 lg:items-center justify-start lg:justify-between">
          <div className="title desc">
            <h2 className="text-md font-semibold text-gray-900 pb-2 text-wrap">
              Users
            </h2>
            <p className="text-gray-800 font-light text-sm">
              A list of all the users in your account including their name,
              address, gender, birthday date, and input date.
            </p>
          </div>
          <Link to={"/add-user"}>
            <button
              type="button"
              className="h-[40px] px-3 bg-blue-500 hover:bg-blue-700 text-white font-medium rounded-md before:ease-in-out after:ease-in-out shadow-blue-300 shadow-md"
            >
              <p className="text-sm">Add user</p>
            </button>
          </Link>
        </div>
        <table className="table-auto rounded mt-8">
          <thead className="bg-white rounded border-b-[1px]">
            <tr className="text-gray-950 text-left">
              <th className="px-2 py-3 text-sm text-center">
                <p className="font-semibold">No</p>
              </th>
              <th className="px-4 py-2 text-sm">
                <p className="font-semibold">Name</p>
              </th>
              <th className="px-4 py-2 text-sm">
                <p className="font-semibold">Address</p>
              </th>
              <th className="px-4 py-2 text-sm">
                <p className="font-semibold">Gender</p>
              </th>
              <th className="px-4 py-2 text-sm">
                <p className="font-semibold">Birthday</p>
              </th>
              <th className="px-4 py-2 text-sm">
                <p className="font-semibold">Input Date</p>
              </th>
              <th className="px-4 py-2 text-sm">
                <p className="font-semibold">Operations</p>
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => (
              <tr
                key={`userKey-${user.id}`}
                className={`bg-white text-gray-600 text-left border-b-[1px]`}
              >
                <td className=" px-4 py-2">{i + 1}</td>
                <td className=" px-4 py-2 text-black font-normal">
                  <p className="text-sm">{user.name}</p>
                </td>
                <td className=" px-4 py-2">
                  <p className="text-sm text-gray-500">{user.address}</p>
                </td>
                <td className=" px-4 py-2 text-center">
                  <p className="text-sm text-gray-500">
                    {getGender(user.gender).toString()}
                  </p>
                </td>
                <td className=" px-4 py-2">
                  <p className="text-sm text-gray-500">{user.birth_date}</p>
                </td>
                <td className=" px-4 py-2">
                  <p className="text-sm text-gray-500">{user.input_date}</p>
                </td>
                <td className=" px-4 py-2 flex flex-row gap-3 items-center justify-center">
                  <button className="p-2">
                    <VscOpenPreview size={20} color="blue" />
                  </button>
                  <button className="p-2">
                    <FiEdit2 size={20} color="blue" />
                  </button>
                  <button
                    className="p-2"
                    onClick={() => handleDeleteUser(user.id)}
                  >
                    <AiOutlineDelete size={20} color="blue" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserTable;
