import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
const InvestigationThree = ({ setCurrentTab }) => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <>
      {" "}
      <div className="flex flex-col  space-y-1 text-new ">
        <div className="font-bold">Section 3: Other Investigations</div>
      </div>
      <div className="py-2 flex h-[70vh] overflow-y-auto noscrollBar  flex-col pt-5 space-y-8 text-xs w-full ">
        <div className="flex flex-col space-y-1">
          <div className="">Cheat X-Ray</div>
          <div className="italic text-[#586166]">
            Note: Appearance, Consistency
          </div>
          <div className="w-full py-2 ">
            <textarea
              type="text"
              className="border rounded-md placeholder:text-xs h-20 w-[90%]  p-2"
              placeholder="comment here"
            />
          </div>
        </div>
        <div className=" flex flex-col space-y-4 ">
          <div>Other (specify)</div>
          <div className="w-full ">
            <textarea
              type="text"
              className="border rounded-md placeholder:text-xs h-20 w-[90%]  p-2"
              placeholder="comment here"
            />
          </div>
        </div>
        <div className="border border-dashed border-Emdms/20  w-[90%]"></div>

        <div className="text-new">VACCINATION STATUS</div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
          <div className="flex flex-col space-y-4 ">
            <div>
              Polio <span className="text-red-500">*</span>
            </div>
            <input
              type="text"
              className="border rounded-md placeholder:text-xs w-full md:w-1/2  p-2"
              placeholder="comment here"
            />
          </div>
          <div className="flex flex-col space-y-4 ">
            <div>
              Date <span className="text-red-500">*</span>
            </div>

            <DatePicker
              className=" border border-gray-200 p-2 rounded-md w-full md:w-1/2 "
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              placeholder="Select date"
            />
          </div>
          <div className="flex flex-col space-y-4 ">
            <div>
              MMR 1 <span className="text-red-500">*</span>
            </div>
            <input
              type="text"
              className="border rounded-md placeholder:text-xs w-full md:w-1/2  p-2"
              placeholder="comment here"
            />
          </div>
          <div className="flex flex-col space-y-4 ">
            <div>
              Date <span className="text-red-500">*</span>
            </div>

            <DatePicker
              className=" border border-gray-200 p-2 rounded-md w-full md:w-1/2 "
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              placeholder="Select date"
            />
          </div>
          <div className="flex flex-col space-y-4 ">
            <div>
              MMR 2 <span className="text-red-500">*</span>
            </div>
            <input
              type="text"
              className="border rounded-md placeholder:text-xs w-full md:w-1/2  p-2"
              placeholder="comment here"
            />
          </div>
          <div className="flex flex-col space-y-4 ">
            <div>
              Date <span className="text-red-500">*</span>
            </div>

            <DatePicker
              className=" border border-gray-200 p-2 rounded-md w-full md:w-1/2 "
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              placeholder="Select date"
            />
          </div>
          <div className="flex flex-col space-y-4 ">
            <div>
              Meningococcal <span className="text-red-500">*</span>
            </div>
            <input
              type="text"
              className="border rounded-md placeholder:text-xs w-full md:w-1/2  p-2"
              placeholder="comment here"
            />
          </div>
          <div className="flex flex-col space-y-4 ">
            <div>
              Date <span className="text-red-500">*</span>
            </div>

            <DatePicker
              className=" border border-gray-200 p-2 rounded-md w-full md:w-1/2 "
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              placeholder="Select date"
            />
          </div>
          <div className="flex flex-col space-y-4 ">
            <div>
              Covid 19 <span className="text-red-500">*</span>
            </div>
            <input
              type="text"
              className="border rounded-md placeholder:text-xs w-full md:w-1/2  p-2"
              placeholder="comment here"
            />
          </div>
          <div className="flex flex-col space-y-4 ">
            <div>
              Date <span className="text-red-500">*</span>
            </div>

            <DatePicker
              className=" border border-gray-200 p-2 rounded-md w-full md:w-1/2 "
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              placeholder="Select date"
            />
          </div>
        </div>

        <div className="flex w-[90%] justify-end items-center space-x-6 text-xs  ">
          <div
            onClick={() => {
              setCurrentTab("investigationTwo");
            }}
            o
            className="text-new border cursor-pointer border-new bg-[#F0F7F7] font-bold px-6 rounded-md py-1">
            {" "}
            Previous
          </div>
          <div
            onClick={() => {
              setCurrentTab("physical");
            }}
            className="text-white border border-new bg-new px-6 rounded-md py-1 cursor-pointer">
            {" "}
            Continue
          </div>
        </div>
      </div>
    </>
  );
};

export default InvestigationThree;
