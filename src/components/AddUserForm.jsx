import React from "react";

const AddUserForm = () => {
  return (
    <div className="add form container card w-full h-full justify-center flex px-8">
      <div className="flex flex-col py-10 bg-white px-8 my-20 rounded-xl sm:w-[450px] md:w-[500px] border-2">
        <form className="w-full max-w-lg">
          {/* Name */}
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-name"
              >
                Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-name"
                type="text"
                placeholder="Doe"
              />
            </div>
          </div>

          {/* Address */}
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-address"
              >
                Address
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-address"
                type="text"
                placeholder="Rawamangun"
              />
            </div>
          </div>

          {/* Gender */}
          <div className="flex flex-wrap -mx-3 mb-10">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-gender"
              >
                Gender
              </label>
              <div className="flex flex-row gap-4">
                <label class="inline-flex items-center">
                  <input
                    type="radio"
                    className="form-radio"
                    name="gender"
                    value={0}
                  />
                  <span class="ml-2">Male</span>
                </label>
                <label class="inline-flex items-center">
                  <input
                    type="radio"
                    className="form-radio"
                    name="gender"
                    value={1}
                  />
                  <span class="ml-2">Female</span>
                </label>
              </div>
            </div>
          </div>

          {/* Address */}
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-birthday"
              >
                Address
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-address"
                type="text"
                placeholder="Rawamangun"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUserForm;
