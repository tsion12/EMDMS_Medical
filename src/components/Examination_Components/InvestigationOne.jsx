import React, { useState } from "react";
import Select from "react-select";
const InvestigationOne = ({ setCurrentTab }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  return (
    <>
      <div className="flex flex-col  space-y-1 text-new ">
        <div className="font-bold">Section 1: Laboratory</div>
      </div>
      <div className="py-2 flex h-[70vh] overflow-y-auto noscrollBar  flex-col pt-5 space-y-8 text-xs w-full ">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4 w-full">
          <div className="flex flex-col space-y-4 ">
            <div>
              Blood Group <span className="text-red-500">*</span>
            </div>

            <div className="md:w-1/2 w-full">
              <Select
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={options}
              />
            </div>
          </div>
          <div className="flex flex-col space-y-4 ">
            <div>
              WBC <span className="text-red-500">*</span>
            </div>
            <input
              type="text"
              className="border rounded-md placeholder:text-xs   md:w-1/2 w-full  p-2"
              placeholder="120/70"
            />
          </div>
          <div className="flex flex-col space-y-4 ">
            <div>
              RBC <span className="text-red-500">*</span>
            </div>
            <input
              type="text"
              className="border rounded-md placeholder:text-xs   md:w-1/2 w-full  p-2"
              placeholder="120/70"
            />
          </div>
          <div className="flex flex-col space-y-4 ">
            <div>
              Platelets <span className="text-red-500">*</span>
            </div>
            <input
              type="text"
              className="border rounded-md placeholder:text-xs   md:w-1/2 w-full  p-2"
              placeholder="120/70"
            />
          </div>
          <div className="flex flex-col space-y-4 ">
            <div>
              Hemoglobin <span className="text-red-500">*</span>
            </div>
            <input
              type="text"
              className="border rounded-md placeholder:text-xs   md:w-1/2 w-full  p-2"
              placeholder="120/70"
            />
          </div>
          <div className="flex flex-col space-y-4 ">
            <div>
              Serum HCG <span className="text-red-500">*</span>
            </div>
            <div className="flex items-center  justify-start space-x-4">
              <button className="border border-[#00565640] py-1 rounded-md w-20 ">
                Negative
              </button>
              <button className="border border-[#00565640] py-1 rounded-md w-20 ">
                Positive
              </button>
            </div>
          </div>
          <div className="flex flex-col space-y-4 ">
            <div>
              F.B.S <span className="text-red-500">*</span>
            </div>
            <input
              type="text"
              className="border rounded-md placeholder:text-xs   md:w-1/2 w-full  p-2"
              placeholder="120/70"
            />
          </div>
        </div>

        <div className="border border-dashed border-Emdms/20  w-[90%]"></div>
        <div className="text-new">BIOCHEMISTRY</div>
        <div className="italic">Liver Function Test</div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4 w-full">
          <div className="flex flex-col space-y-4 ">
            <div>
              SGOT <span className="text-red-500">*</span>
            </div>
            <input
              type="text"
              className="border rounded-md placeholder:text-xs   md:w-1/2 w-full  p-2"
              placeholder="120/70"
            />
          </div>
          <div className="flex flex-col space-y-4 ">
            <div>
              SGPT <span className="text-red-500">*</span>
            </div>
            <input
              type="text"
              className="border rounded-md placeholder:text-xs   md:w-1/2 w-full  p-2"
              placeholder="120/70"
            />
          </div>
          <div className="flex flex-col space-y-4 ">
            <div>
              ALP <span className="text-red-500">*</span>
            </div>
            <input
              type="text"
              className="border rounded-md placeholder:text-xs   md:w-1/2 w-full  p-2"
              placeholder="120/70"
            />
          </div>
        </div>
        <div className="italic">Renal Function Test</div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4 w-full">
          <div className="flex flex-col space-y-4 ">
            <div>
              Creatinine <span className="text-red-500">*</span>
            </div>
            <input
              type="text"
              className="border rounded-md placeholder:text-xs   md:w-1/2 w-full  p-2"
              placeholder="120/70"
            />
          </div>
          <div className="flex flex-col space-y-4 ">
            <div>
              Bun <span className="text-red-500">*</span>
            </div>
            <input
              type="text"
              className="border rounded-md placeholder:text-xs   md:w-1/2 w-full  p-2"
              placeholder="120/70"
            />
          </div>
          <div className="flex flex-col space-y-4 col-span-2 ">
            <div>Other Biochemistry done (specify)</div>
            <textarea
              type="text"
              className="border rounded-md placeholder:text-xs w-[90%]   h-20  p-2"
              placeholder="120/70"
            />
          </div>
        </div>
        <div className="border border-dashed border-Emdms/20  w-[90%]"></div>
        <div className="text-new">SEROLOGY</div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4 w-full">
          <div className="flex flex-col space-y-4 ">
            <div>
              HIV l & ll <span className="text-red-500">*</span>
            </div>

            <div className="md:w-1/2 w-full">
              <Select
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={options}
              />
            </div>
          </div>
          <div className="flex flex-col space-y-4 ">
            <div>
              Hbs Ag <span className="text-red-500">*</span>
            </div>

            <div className="md:w-1/2 w-full">
              <Select
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={options}
              />
            </div>
          </div>
          <div className="flex flex-col space-y-4 ">
            <div>
              HCV <span className="text-red-500">*</span>
            </div>

            <div className="md:w-1/2 w-full">
              <Select
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={options}
              />
            </div>
          </div>
          <div className="flex flex-col space-y-4 ">
            <div>
              VDRL <span className="text-red-500">*</span>
            </div>

            <div className="md:w-1/2 w-full">
              <Select
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={options}
              />
            </div>
          </div>
          <div className="flex flex-col space-y-4 ">
            <div>
              TPHA <span className="text-red-500">*</span>
            </div>

            <div className="md:w-1/2 w-full">
              <Select
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={options}
              />
            </div>
          </div>
        </div>

        <div className="text-new">THICK FILM FOR</div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4 w-full">
          <div className="flex flex-col space-y-4 ">
            <div>
              Malaria <span className="text-red-500">*</span>
            </div>

            <div className="md:w-1/2 w-full">
              <Select
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={options}
              />
            </div>
          </div>
          <div className="flex flex-col space-y-4 ">
            <div>
              Micro Filaria <span className="text-red-500">*</span>
            </div>

            <div className="md:w-1/2 w-full">
              <Select
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={options}
              />
            </div>
          </div>
        </div>

        <div>Other (specify)</div>

        <div>
          <textarea
            type="text"
            className="border rounded-md placeholder:text-xs h-20  w-[90%]  p-2"
            placeholder="type here"
          />
        </div>
        <div className="flex w-[90%] justify-end items-center space-x-6 text-xs  ">
          <div
            onClick={() => {
              setCurrentTab("medicalTwo");
            }}
            className="text-new border cursor-pointer border-new bg-[#F0F7F7] font-bold px-6 rounded-md py-1">
            {" "}
            Previous
          </div>
          <div
            onClick={() => {
              setCurrentTab("investigationTwo");
            }}
            className="text-white border border-new bg-new px-6 cursor-pointer rounded-md py-1">
            {" "}
            Continue
          </div>
        </div>
      </div>
    </>
  );
};

export default InvestigationOne;
