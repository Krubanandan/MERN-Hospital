import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Doctors = () => {
  const { speciality } = useParams();
  const [filterDoc, setFilterDoc] = useState([]);
  const { doctors } = useContext(AppContext);
  const navigate = useNavigate();

  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter((doc) => doc.speciality === speciality));
    } else {
      setFilterDoc(doctors);
    }
  };


  useEffect(() => {
    applyFilter();
  }, [doctors, speciality]);
  return (
    <div>
      <div>
        <p>Browse through the doctors specialist.</p>
        <div className="flex flex-col sm:flex-row items-start gap-5 mt-5">
          <div>
          <p
              className={`w-[94vw] m-2 sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality==undefined?"bg-indigo-100 text-black":""}`}
              onClick={() =>{ navigate("/doctors/"); console.log(speciality)}}
            >
              All Doctors
            </p>
            <p
              className={`w-[94vw] m-2 sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality==="General physician"?"bg-indigo-100 text-black":""}`}
            
              onClick={() => navigate("/doctors/General physician")}
            >
              General physician
            </p>
            <p
              className={`w-[94vw] m-2 sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality==="Gynecologist"?"bg-indigo-100 text-black":""}`}
              onClick={() => navigate("/doctors/Gynecologist")}
            >
              Gynecologist
            </p>
            <p
              className={`w-[94vw] m-2 sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality==="Pediatricians"?"bg-indigo-100 text-black":""}`}
        
              onClick={() => navigate("/doctors/Pediatricians")}
            >
              Pediatricians
            </p>
            <p
              className={`w-[94vw] m-2 sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality==="Neurologist"?"bg-indigo-100 text-black":""}`}
              onClick={() => navigate("/doctors/Neurologist")}
            >
              Neurologist
            </p>
            <p
              className={`w-[94vw] m-2 sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality==="Gastroenterologist"?"bg-indigo-100 text-black":""}`}
              onClick={() => navigate("/doctors/Gastroenterologist")}
            >
              Gastroenterologist
            </p>
          </div>
          <div className="w-full grid grid-cols-auto gap-4 gap-y-6">
            {filterDoc.map((item, index) => (
              <div
                onClick={() => navigate(`/appointment/${item._id}`)} // Navigate to appointment page
                className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
                key={index}
              >
                <img className="bg-blue-50 " src={item.image} alt="" />
                <div className="p-4">
                  <div className="flex items-center gap-2 text-sm text-center text-green-500">
                    <p className="w-2 h-2 bg-green-500 rounded-full"></p>
                    <p>Available</p>
                  </div>
                  <p className="text-gray-900 text-lg font-medium">
                    {item.name}
                  </p>
                  <p className="text-gray-600">{item.speciality}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctors;
