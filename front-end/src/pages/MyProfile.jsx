import React, { useState } from "react";
import { assets } from "../assets/assets";

const MyProfile = () => {
  const [userData, setUserData] = useState({
    name: "Edward Vincent",
    image: assets.profile_pic,
    email: "richardjamesew@gmail.com",
    phone: "+1 123 456 7890",
    address: {
      line1: "57th Cross, Richmond",
      line2: "Circle, Church Road, London",
    },
    gender: "Male", // Default gender
    dob: "2000-01-20",
  });

  const [isEdit, setIsEdit] = useState(false);

  // Handle changes in the user data
  const handleChange = (e, field) => {
    setUserData((prev) => ({
      ...prev,
      [field]: e.target.value,
    }));
  };

  // Handle address changes
  const handleAddressChange = (e, field) => {
    setUserData((prev) => ({
      ...prev,
      address: {
        ...prev.address,
        [field]: e.target.value,
      },
    }));
  };

  // Save changes
  const saveChanges = () => {
    setIsEdit(false);
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-lg shadow-md">
      <img
        src={userData.image}
        alt="Profile Picture"
        className="w-32 h-32 rounded-full mx-auto mb-4"
      />

      <div className="mb-4">
        {isEdit ? (
          <input
            type="text"
            value={userData.name}
            onChange={(e) => handleChange(e, "name")}
            className="border-2 border-gray-300 rounded-md p-2 w-full mb-2"
          />
        ) : (
          <p className="text-2xl font-semibold text-center">{userData.name}</p>
        )}
      </div>

      <div className="mb-4">
        {isEdit ? (
          <input
            type="email"
            value={userData.email}
            onChange={(e) => handleChange(e, "email")}
            className="border-2 border-gray-300 rounded-md p-2 w-full mb-2"
          />
        ) : (
          <p>Email: {userData.email}</p>
        )}
      </div>

      <div className="mb-4">
        {isEdit ? (
          <input
            type="text"
            value={userData.phone}
            onChange={(e) => handleChange(e, "phone")}
            className="border-2 border-gray-300 rounded-md p-2 w-full mb-2"
          />
        ) : (
          <p>Phone: {userData.phone}</p>
        )}
      </div>

      <div className="mb-4">
        {isEdit ? (
          <input
            type="text"
            value={userData.address.line1}
            onChange={(e) => handleAddressChange(e, "line1")}
            className="border-2 border-gray-300 rounded-md p-2 w-full mb-2"
            placeholder="Address Line 1"
          />
        ) : (
          <p>{userData.address.line1}</p>
        )}
      </div>

      <div className="mb-4">
        {isEdit ? (
          <input
            type="text"
            value={userData.address.line2}
            onChange={(e) => handleAddressChange(e, "line2")}
            className="border-2 border-gray-300 rounded-md p-2 w-full mb-2"
            placeholder="Address Line 2"
          />
        ) : (
          <p>{userData.address.line2}</p>
        )}
      </div>

      <div className="mb-4">
        {isEdit ? (
          <select
            value={userData.gender}
            onChange={(e) => handleChange(e, "gender")}
            className="border-2 border-gray-300 rounded-md p-2 w-full mb-2"
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        ) : (
          <p>Gender: {userData.gender}</p>
        )}
      </div>

      <div className="mb-4">
        {isEdit ? (
          <input
            type="date"
            value={userData.dob}
            onChange={(e) => handleChange(e, "dob")}
            className="border-2 border-gray-300 rounded-md p-2 w-full mb-2"
          />
        ) : (
          <p>Date of Birth: {userData.dob}</p>
        )}
      </div>

      <div className="text-center">
        {isEdit ? (
          <button
            onClick={saveChanges}
            className="bg-blue-500 text-white py-2 px-4 rounded-md"
          >
            Save
          </button>
        ) : (
          <button
            onClick={() => setIsEdit(true)}
            className="bg-green-500 text-white py-2 px-4 rounded-md"
          >
            Edit
          </button>
        )}
      </div>
    </div>
  );
};

export default MyProfile;
