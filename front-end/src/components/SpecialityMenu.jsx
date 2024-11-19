import React from "react";
import { specialityData } from "../assets/assets";
import { Link } from "react-router-dom";

const SpecialityMenu = () => {
  return (
    <div className='flex flex-col items-center gap-4 py-16' id="speciality">
      <h1 className="text-black font-medium text-3xl">Find By Speciality</h1>
      <p className="w-1/3 text-center">Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.</p>
        <div className="flex sm:justify-center gap-4 pt-5 w-full overflow-scroll">
            {
                specialityData.map((item,index)=>(
                    <Link onClick={()=>window.scrollTo({ top: 0, left: 0, behavior: "smooth" })} className='flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500' key={index} to={`/doctors/${item.speciality}`}>
                        <img className='w-16 sm:w-24 mb-2' src={item.image} alt=""  />
                        <p>{item.speciality}</p>
                    </Link>
                ))
            }

        </div>
    </div>
  );
};

export default SpecialityMenu;
