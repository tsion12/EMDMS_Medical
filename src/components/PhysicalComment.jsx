import React, { useState } from "react";
import Select from "react-select";
const PhysicalComment = ({ setCurrentTab }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  return (
    <>
      {" "}
      <div className="py-2 flex h-[70vh] overflow-y-auto noscrollBar  flex-col pt-5 space-y-8 text-xs w-full ">
        <div className="grid grid-cols-2 gap-4 w-full">
          <div className="col-span-2 flex flex-col space-y-4 ">
            <div>
              Remark <span className="text-red-500">*</span>
            </div>
            <div className="w-full ">
              <textarea
                type="text"
                className="border rounded-md placeholder:text-xs h-40 w-[90%]  p-2"
                placeholder="comment here"
              />
            </div>
          </div>
          <div className="flex flex-col space-y-4 ">
            <div>
              Epithelial Cell/LPF <span className="text-red-500">*</span>
            </div>
            <textarea
              type="text"
              className="border rounded-md placeholder:text-xs h-20 w-1/2  p-2"
              placeholder="comment here"
            />
          </div>
          <div></div>
        </div>
        <div className="flex flex-col space-y-1 w-[90%]">
          <div className="text-new font-bold">Signature</div>
          <div className="text-[#9898A3] max-w-xl">Dear Sir/Madam,</div>
          <div className="text-[#9898A3] max-w-2xl">
            Dear Sir/Madam, On the basis of the examinee’s clinical examination
            and the diagnostic test result recorded above, the GHC declare that,
            for the above mentioned job according to the GCC criteria.
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 w-full">
          <div className="flex flex-col space-y-4 ">
            <div>
              Blood Group <span className="text-red-500">*</span>
            </div>

            <div className="w-1/2">
              <Select
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={options}
              />
            </div>
          </div>
        </div>

        <div className="flex w-[90%] justify-end items-center space-x-6 text-xs  ">
          <div
            onClick={() => {
              setCurrentTab("investigationThree");
            }}
            className="text-new border border-new cursor-pointer bg-[#F0F7F7] font-bold px-6 rounded-md py-1">
            {" "}
            Previous
          </div>
          <div
            onClick={() => {
              setCurrentTab("");
            }}
            className="text-white border border-new bg-new px-6 rounded-md py-1 cursor-pointer">
            {" "}
            Submit
          </div>
        </div>
      </div>
    </>
  );
};

export default PhysicalComment;
