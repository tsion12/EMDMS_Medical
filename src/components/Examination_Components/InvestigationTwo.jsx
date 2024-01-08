import React from "react";

const InvestigationTwo = ({ setCurrentTab }) => {
  return (
    <>
      {" "}
      <div className="flex flex-col  space-y-1 text-new ">
        <div className="font-bold">Section 2: Laboratory</div>
      </div>
      <div className="py-2 flex h-[70vh] overflow-y-auto noscrollBar  flex-col pt-5 space-y-8 text-xs w-full ">
        <div className="flex flex-col space-y-1">
          <div className="text-new">URINE ANALYSIS</div>
          <div className="italic text-[#586166]">
            Urine Physical Examination
          </div>
        </div>

        <div className="grid md:grid-cols-2 grid-cols-1 gap-4 w-full">
          <div className="flex flex-col space-y-4 ">
            <div>
              Appearance <span className="text-red-500">*</span>
            </div>
            <textarea
              type="text"
              className="border rounded-md placeholder:text-xs h-20 w-full md:w-1/2  p-2"
              placeholder="comment here"
            />
          </div>
          <div className="flex flex-col space-y-4 ">
            <div>
              Color <span className="text-red-500">*</span>
            </div>
            <textarea
              type="text"
              className="border rounded-md placeholder:text-xs h-20 w-full md:w-1/2  p-2"
              placeholder="comment here"
            />
          </div>
          <div className="flex flex-col space-y-4 ">
            <div>
              PH <span className="text-red-500">*</span>
            </div>
            <textarea
              type="text"
              className="border rounded-md placeholder:text-xs h-20 w-full md:w-1/2  p-2"
              placeholder="comment here"
            />
          </div>
          <div className="flex flex-col space-y-4 ">
            <div>
              Specific Gravity <span className="text-red-500">*</span>
            </div>
            <textarea
              type="text"
              className="border rounded-md placeholder:text-xs h-20 w-full md:w-1/2  p-2"
              placeholder="comment here"
            />
          </div>
        </div>
        <div className="italic text-[#586166]">Urine Chemical Examination</div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4 w-full">
          <div className="flex flex-col space-y-4 ">
            <div>
              Ketone <span className="text-red-500">*</span>
            </div>
            <textarea
              type="text"
              className="border rounded-md placeholder:text-xs h-20 w-full md:w-1/2  p-2"
              placeholder="comment here"
            />
          </div>
          <div className="flex flex-col space-y-4 ">
            <div>
              Albumin <span className="text-red-500">*</span>
            </div>
            <textarea
              type="text"
              className="border rounded-md placeholder:text-xs h-20 w-full md:w-1/2  p-2"
              placeholder="comment here"
            />
          </div>
          <div className="flex flex-col space-y-4 ">
            <div>
              Glucose <span className="text-red-500">*</span>
            </div>
            <textarea
              type="text"
              className="border rounded-md placeholder:text-xs h-20 w-full md:w-1/2  p-2"
              placeholder="comment here"
            />
          </div>
          <div className="flex flex-col space-y-4 ">
            <div>
              Nitrate <span className="text-red-500">*</span>
            </div>
            <textarea
              type="text"
              className="border rounded-md placeholder:text-xs h-20 w-full md:w-1/2  p-2"
              placeholder="comment here"
            />
          </div>
          <div className="flex flex-col space-y-4 ">
            <div>
              Leukocyte <span className="text-red-500">*</span>
            </div>
            <textarea
              type="text"
              className="border rounded-md placeholder:text-xs h-20 w-full md:w-1/2  p-2"
              placeholder="comment here"
            />
          </div>
          <div className="flex flex-col space-y-4 ">
            <div>
              Blood/Haemoglobin <span className="text-red-500">*</span>
            </div>
            <textarea
              type="text"
              className="border rounded-md placeholder:text-xs h-20 w-full md:w-1/2  p-2"
              placeholder="comment here"
            />
          </div>
        </div>
        <div className="italic text-[#586166]">
          Urine Microscopic Examination
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4 w-full">
          <div className="flex flex-col space-y-4 ">
            <div>
              RBC/HPF <span className="text-red-500">*</span>
            </div>
            <textarea
              type="text"
              className="border rounded-md placeholder:text-xs h-20 w-full md:w-1/2  p-2"
              placeholder="comment here"
            />
          </div>
          <div className="flex flex-col space-y-4 ">
            <div>
              WBC/HPF <span className="text-red-500">*</span>
            </div>
            <textarea
              type="text"
              className="border rounded-md placeholder:text-xs h-20 w-full md:w-1/2  p-2"
              placeholder="comment here"
            />
          </div>
          <div className="flex flex-col space-y-4 ">
            <div>
              Epithelial Cell/LPF <span className="text-red-500">*</span>
            </div>
            <textarea
              type="text"
              className="border rounded-md placeholder:text-xs h-20 w-full md:w-1/2  p-2"
              placeholder="comment here"
            />
          </div>
          <div></div>
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
        </div>

        <div className="border border-dashed border-Emdms/20  w-[90%]"></div>
        <div className="flex flex-col space-y-1">
          <div className="text-new">STOOL EXAMINATION</div>
          <div className="italic text-[#586166]">Stool Examination</div>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1  gap-4 w-full">
          <div className="flex flex-col space-y-4 ">
            <div className="flex flex-col space-y-1">
              <div>
                {" "}
                Stool Physical Examination{" "}
                <span className="text-red-500">*</span>
              </div>

              <div className="italic text-[#586166]">
                Note: Appearance, Consistency
              </div>
            </div>
            <textarea
              type="text"
              className="border rounded-md placeholder:text-xs h-20 w-full md:w-1/2  p-2"
              placeholder="comment here"
            />
          </div>
          <div className="flex flex-col space-y-4 ">
            <div className="flex flex-col space-y-1">
              <div>
                {" "}
                Stool Microscopic Examination{" "}
                <span className="text-red-500">*</span>
              </div>

              <div className="italic text-[#586166]">
                Note: RBC, WBC, Bacteria... if significant please specify
              </div>
            </div>
            <textarea
              type="text"
              className="border rounded-md placeholder:text-xs h-20 w-full md:w-1/2  p-2"
              placeholder="comment here"
            />
          </div>
          <div className="flex flex-col space-y-4 ">
            <div>
              Haemoparasite
              <span className="text-red-500">*</span>
            </div>
            <textarea
              type="text"
              className="border rounded-md placeholder:text-xs h-20 w-full md:w-1/2  p-2"
              placeholder="comment here"
            />
          </div>
          <div></div>
          <div className="flex flex-col space-y-4 ">
            <div>Other (specify)</div>
            <div className="w-full ">
              <textarea
                type="text"
                className="border rounded-md placeholder:text-xs h-20 w-[90%]  p-2"
                placeholder="comment here"
              />
            </div>
          </div>
        </div>

        <div className="flex w-[90%] justify-end items-center space-x-6 text-xs  ">
          <div
            onClick={() => {
              setCurrentTab("investigationOne");
            }}
            className="text-new border cursor-pointer border-new bg-[#F0F7F7] font-bold px-6 rounded-md py-1">
            {" "}
            Previous
          </div>
          <div
            onClick={() => {
              setCurrentTab("investigationThree");
            }}
            className="text-white border  border-new bg-new px-6 rounded-md py-1 cursor-pointer">
            {" "}
            Continue
          </div>
        </div>
      </div>
    </>
  );
};

export default InvestigationTwo;
