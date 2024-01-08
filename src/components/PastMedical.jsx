import React, { useState } from "react";

const PastMedical = ({ setCurrentTab }) => {
  const [medicalIlliness, setMedicalIllnes] = useState(false);
  const [allergy, setAllergy] = useState(false);
  const [disability, setDisability] = useState(false);
  const [hospitalization, setHospitalization] = useState(false);
  return (
    <div className="py-2 flex h-[70vh] overflow-y-auto noscrollBar  flex-col pt-5 space-y-8 text-xs w-full ">
      <div className="flex flex-col space-y-3">
        <div>
          1. Any known medical illness? <span className="text-red-500">*</span>
        </div>
        <div className="flex items-center  justify-start space-x-4">
          <button
            onClick={() => {
              setMedicalIllnes(false);
            }}
            className="border border-[#00565640] py-1 rounded-md w-20 ">
            No
          </button>
          <button
            onClick={() => {
              setMedicalIllnes(true);
            }}
            className="border border-[#00565640] py-1 rounded-md w-20 ">
            Yes
          </button>
        </div>

        {medicalIlliness && (
          <div className="flex flex-col space-y-3">
            {" "}
            <div>
              Diagnosis? <span className="text-red-500">*</span>
            </div>
            <input
              type="text"
              className="border w-[25%] focus:outline-Emdms/20 h-24 rounded-lg text-left placeholder:px-2  "
              placeholder="Type here"
            />
            <div>
              Duration of illness? <span className="text-red-500">*</span>
            </div>
            <input
              type="text"
              className="border w-[25%] focus:outline-Emdms/20 h-24 rounded-lg text-left placeholder:px-2  "
              placeholder="Type here"
            />
            <div>
              On Medication? <span className="text-red-500">*</span>
            </div>
            <input
              type="text"
              className="border w-[25%] focus:outline-Emdms/20 h-24 rounded-lg text-left placeholder:px-2  "
              placeholder="Type here"
            />
          </div>
        )}
      </div>
      <div className="flex flex-col space-y-3">
        <div>
          2. Any Allergy? <span className="text-red-500">*</span>
        </div>
        <div className="flex items-center  justify-start space-x-4">
          <button
            onClick={() => {
              setAllergy(false);
            }}
            className="border border-[#00565640] py-1 rounded-md w-20 ">
            No
          </button>
          <button
            onClick={() => {
              setAllergy(true);
            }}
            className="border border-[#00565640] py-1 rounded-md w-20 ">
            Yes
          </button>
        </div>

        {allergy && (
          <div className="flex flex-col space-y-3">
            {" "}
            <div>
              Comment <span className="text-red-500">*</span>
            </div>
            <input
              type="text"
              className="border w-[25%] focus:outline-Emdms/20 h-24 rounded-lg text-left placeholder:px-2  "
              placeholder="Type here"
            />
          </div>
        )}
      </div>
      <div className="flex flex-col space-y-3">
        <div>
          3. Any known disability? <span className="text-red-500">*</span>
        </div>
        <div className="flex items-center  justify-start space-x-4">
          <button
            onClick={() => {
              setDisability(false);
            }}
            className="border border-[#00565640] py-1 rounded-md w-20 ">
            No
          </button>
          <button
            onClick={() => {
              setDisability(true);
            }}
            className="border border-[#00565640] py-1 rounded-md w-20 ">
            Yes
          </button>
        </div>

        {disability && (
          <div className="flex flex-col space-y-3">
            {" "}
            <div>
              Comment <span className="text-red-500">*</span>
            </div>
            <input
              type="text"
              className="border w-[25%] focus:outline-Emdms/20 h-24 rounded-lg text-left placeholder:px-2  "
              placeholder="Type here"
            />
          </div>
        )}
      </div>
      <div className="flex flex-col space-y-3">
        <div>
          3. Any previous admission/hospitalization or previous accident?{" "}
          <span className="text-red-500">*</span>
        </div>
        <div className="flex items-center  justify-start space-x-4">
          <button
            onClick={() => {
              setHospitalization(false);
            }}
            className="border border-[#00565640] py-1 rounded-md w-20 ">
            No
          </button>
          <button
            onClick={() => {
              setHospitalization(true);
            }}
            className="border border-[#00565640] py-1 rounded-md w-20 ">
            Yes
          </button>
        </div>

        {hospitalization && (
          <div className="flex flex-col space-y-3">
            {" "}
            <div>
              Comment <span className="text-red-500">*</span>
            </div>
            <input
              type="text"
              className="border w-[25%] focus:outline-Emdms/20 h-24 rounded-lg text-left placeholder:px-2  "
              placeholder="Type here"
            />
          </div>
        )}
      </div>{" "}
      <div className="flex w-[90%] pt-24 justify-end items-center space-x-6 text-xs  ">
        <div className="text-new border border-new cursor-pointer bg-[#F0F7F7] font-bold px-6 rounded-md py-1">
          {" "}
          Previous
        </div>
        <div
          onClick={() => {
            setCurrentTab("medicalOne");
          }}
          className="text-white border border-new bg-new px-6 rounded-md py-1 cursor-pointer">
          {" "}
          Continue
        </div>
      </div>
    </div>
  );
};

export default PastMedical;
