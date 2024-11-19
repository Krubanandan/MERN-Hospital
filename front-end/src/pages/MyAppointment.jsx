import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const MyAppointment = () => {
  const { doctors } = useContext(AppContext);
  return (
    <div>
      <p className="pb-3 mt-12 text-lg font-medium text-gray-600 border-b">My Appointments</p>
      <div>
        {doctors.slice(0, 2).map((item, index) => (
          <div className='grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-4 border-b' key={index}>
            <div>
              <img className="w-36 bg-[#EAEFFF]" src={item.image} alt={item.name} />
            </div>
            <div className="flex-1 text-sm text-[#5E5E5E]">
              <p className="text-[#262626] text-base font-semibold">{item.name}</p>
              <p>{item.speciality}</p>
              <p>Address:</p>
              <p>{item.address.line1}</p>
              <p>{item.address.line2}</p>
              <p>
                <span>Date & Time:</span> {item.date} | {item.time}
              </p>
            </div>
            
            <div className="flex flex-col gap-2 justify-end text-sm text-center">
              <button className="text-[#696969] sm:min-w-48 py-2 border rounded hover:bg-primary hover:text-white transition-all duration-300">Pay Online</button>
              <button className="text-[#696969] sm:min-w-48 py-2 border rounded hover:bg-primary hover:text-white transition-all duration-300">Cancel</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyAppointment;
