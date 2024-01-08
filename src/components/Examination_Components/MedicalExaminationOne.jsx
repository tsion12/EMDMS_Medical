import React from "react";

const MedicalExaminationOne = ({ setCurrentTab }) => {
  return (
    <>
      {" "}
      <div className="flex flex-col  space-y-1 text-new ">
        <div className="font-bold">Section 1: General</div>
      </div>
      <div className="py-2 flex h-[70vh] overflow-y-auto noscrollBar  flex-col pt-5 space-y-8 text-xs w-full ">
        <div className="text-new">vital sigh</div>
        <div className="grid md:grid-cols-2 grid-cols-1  gap-4 w-full">
          <div className="flex flex-col space-y-4 ">
            <div>
              B.P <span className="text-red-500">*</span>
            </div>
            <input
              type="text"
              className="border rounded-md placeholder:text-xs  md:w-1/2 w-full  p-2"
              placeholder="120/70"
            />
          </div>
          <div className="flex flex-col space-y-4 ">
            <div>
              Temperature <span className="text-red-500">*</span>
            </div>
            <input
              type="text"
              className="border rounded-md placeholder:text-xs  md:w-1/2 w-full  p-2"
              placeholder="type result here"
            />
          </div>
          <div className="flex flex-col space-y-4 ">
            <div>
              Spo2 <span className="text-red-500">*</span>
            </div>
            <input
              type="text"
              className="border rounded-md placeholder:text-xs  md:w-1/2 w-full  p-2"
              placeholder="type result here"
            />
          </div>
        </div>
        <div className="text-new font-bold">Pulse Rate</div>
        <div className="grid md:grid-cols-2 grid-cols-1  gap-4 w-full">
          <div className="flex flex-col space-y-4 ">
            <div>
              PR <span className="text-red-500">*</span>
            </div>
            <input
              type="text"
              className="border rounded-md placeholder:text-xs  md:w-1/2 w-full  p-2"
              placeholder="in min"
            />
          </div>
          <div className="flex flex-col space-y-4 ">
            <div>
              Volume <span className="text-red-500">*</span>
            </div>
            <input
              type="text"
              className="border rounded-md placeholder:text-xs  md:w-1/2 w-full  p-2"
              placeholder="type here"
            />
          </div>
          <div className="flex flex-col space-y-4 ">
            <div>
              Rhythm <span className="text-red-500">*</span>
            </div>
            <input
              type="text"
              className="border rounded-md placeholder:text-xs  md:w-1/2 w-full  p-2"
              placeholder="text"
            />
          </div>
        </div>
        <div className="border border-dashed border-Emdms/20  w-[90%]"></div>
        <div className="grid md:grid-cols-2 grid-cols-1  gap-4 w-full">
          <div className="flex flex-col space-y-4 ">
            <div>
              Height <span className="text-red-500">*</span>
            </div>
            <input
              type="text"
              className="border rounded-md placeholder:text-xs  md:w-1/2 w-full  p-2"
              placeholder="in min"
            />
          </div>
          <div className="flex flex-col space-y-4 ">
            <div>
              Weight <span className="text-red-500">*</span>
            </div>
            <input
              type="text"
              className="border rounded-md placeholder:text-xs  md:w-1/2 w-full  p-2"
              placeholder="type here"
            />
          </div>
          <div className="flex flex-col space-y-4 ">
            <div>
              BMI <span className="text-red-500">*</span>
            </div>
            <input
              type="text"
              className="border rounded-md placeholder:text-xs  md:w-1/2 w-full  p-2"
              placeholder="text"
            />
          </div>
        </div>
        <div className="border border-dashed border-Emdms/20  w-[90%]"></div>
        <div className="text-new">Visual Acuity (Unaided)</div>
        <div className="grid md:grid-cols-2 grid-cols-1  gap-4 w-full">
          <div className="flex flex-col space-y-4 ">
            <div>
              Distant Rt. Eye <span className="text-red-500">*</span>
            </div>
            <input
              type="text"
              className="border rounded-md placeholder:text-xs  md:w-1/2 w-full  p-2"
              placeholder="in min"
            />
          </div>
          <div className="flex flex-col space-y-4 ">
            <div>
              Distant Lt. Eye <span className="text-red-500">*</span>
            </div>
            <input
              type="text"
              className="border rounded-md placeholder:text-xs  md:w-1/2 w-full  p-2"
              placeholder="type here"
            />
          </div>
          <div className="flex flex-col space-y-4 ">
            <div>
              Near Rt. Eye <span className="text-red-500">*</span>
            </div>
            <input
              type="text"
              className="border rounded-md placeholder:text-xs  md:w-1/2 w-full  p-2"
              placeholder="text"
            />
          </div>
          <div className="flex flex-col space-y-4 ">
            <div>
              Near Lt. Eye <span className="text-red-500">*</span>
            </div>
            <input
              type="text"
              className="border rounded-md placeholder:text-xs  md:w-1/2 w-full  p-2"
              placeholder="text"
            />
          </div>
        </div>
        <div>
          <input
            type="text"
            className="w-[75%] border rounded-md h-20 p-2"
            placeholder="Remark"
          />
        </div>
        <div className="border border-dashed border-Emdms/20  w-[90%]"></div>
        <div className="text-new">Color Vision</div>
        <div className="flex space-x-4 items-center justify-start">
          <div className="px-4 py-2 border rounded-md">Normal</div>
          <div className="px-4 py-2 border rounded-md">Doubtful</div>
          <div className="px-4 py-2 border rounded-md">Defective</div>
        </div>

        <div className="flex w-[90%] justify-end items-center space-x-6 text-xs  ">
          <div
            onClick={() => {
              setCurrentTab("past");
            }}
            className="text-new cursor-pointer border  border-new bg-[#F0F7F7] font-bold px-6 rounded-md py-1">
            {" "}
            Previous
          </div>
          <div
            onClick={() => {
              setCurrentTab("medicalTwo");
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

export default MedicalExaminationOne;
