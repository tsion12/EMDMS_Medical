import React from "react";

const MedicalExaminationTwo = ({ setCurrentTab }) => {
  return (
    <>
      {" "}
      <div className="flex flex-col  space-y-1 text-new ">
        <div className="font-bold">Section 2: Systemic</div>
      </div>
      <div className="py-2 flex h-[70vh] overflow-y-auto noscrollBar  flex-col pt-5 space-y-8 text-xs w-full ">
        <div className="text-new">Physical Examination</div>
        <div className="grid grid-cols-2 gap-4 w-full">
          <div className="flex flex-col space-y-4 ">
            <div>
              General Appearance <span className="text-red-500">*</span>
            </div>
            <textarea
              type="text"
              className="border rounded-md placeholder:text-xs h-20  w-1/2  p-2"
              placeholder="120/70"
            />
          </div>
          <div className="flex flex-col space-y-4 ">
            <div>
              H.E.E.NT <span className="text-red-500">*</span>
            </div>
            <textarea
              type="text"
              className="border rounded-md placeholder:text-xs h-20  w-1/2  p-2"
              placeholder="120/70"
            />
          </div>
        </div>
        <div className="text-new font-bold">LGS</div>
        <div className="grid grid-cols-2 gap-4 w-full">
          <div className="flex flex-col space-y-4 ">
            <div>
              Lymph Nodes <span className="text-red-500">*</span>
            </div>
            <textarea
              type="text"
              className="border rounded-md placeholder:text-xs h-20  w-1/2  p-2"
              placeholder="120/70"
            />
          </div>
          <div className="flex flex-col space-y-4 ">
            <div>
              Breast Examination <span className="text-red-500">*</span>
            </div>
            <textarea
              type="text"
              className="border rounded-md placeholder:text-xs  w-1/2 h-20  p-2"
              placeholder="type here"
            />
          </div>
        </div>
        <div className="border border-dashed border-Emdms/20  w-[90%]"></div>
        <div className="grid grid-cols-2 gap-4 w-full">
          <div className="flex flex-col space-y-4 col-span-2 ">
            <div>
              Respiratory System <span className="text-red-500">*</span>
            </div>
            <textarea
              type="text"
              className="border rounded-md placeholder:text-xs  w-[75%] h-20  p-2"
              placeholder="type here"
            />
          </div>
        </div>
        <div className="text-new font-bold">CVS</div>
        <div className="grid grid-cols-2 gap-4 w-full">
          <div className="flex flex-col space-y-4 ">
            <div className="flex flex-col space-y-1">
              <div>
                Vascular Examination <span className="text-red-500">*</span>
              </div>
              <div className="italic text-[#13131380]">Eg. Veins, Arteries</div>
            </div>

            <textarea
              type="text"
              className="border rounded-md placeholder:text-xs h-20  w-1/2  p-2"
              placeholder="type here"
            />
          </div>
          <div className="flex flex-col space-y-4 ">
            <div className="flex flex-col space-y-1">
              <div>
                Precordium
                <span className="text-red-500">*</span>
              </div>
              <div className="italic text-[#13131380]">Eg. Murmur, Gallop</div>
            </div>

            <textarea
              type="text"
              className="border rounded-md placeholder:text-xs h-20  w-1/2  p-2"
              placeholder="type here"
            />
          </div>
        </div>
        <div className="border border-dashed border-Emdms/20  w-[90%]"></div>
        <div className="text-new">GASTRO INTESTINAL SYSTEM</div>
        <div className="grid grid-cols-2 gap-4 w-full">
          <div className="flex flex-col space-y-4 ">
            <div className="flex flex-col space-y-1">
              <div>
                Abdomen
                <span className="text-red-500">*</span>
              </div>
              <div className="italic text-[#13131380]">
                Eg. Mass, Tenderness
              </div>
            </div>

            <textarea
              type="text"
              className="border rounded-md placeholder:text-xs h-20  w-1/2  p-2"
              placeholder="type here"
            />
          </div>
          <div className="flex flex-col space-y-4 ">
            <div className="flex flex-col space-y-1">
              <div>
                Hernia
                <span className="text-red-500">*</span>
              </div>
              <div className="italic text-[#13131380]">
                Eg. measurement the size of the external ring
              </div>
            </div>

            <textarea
              type="text"
              className="border rounded-md placeholder:text-xs h-20  w-1/2  p-2"
              placeholder="type here"
            />
          </div>
        </div>
        <div className="border border-dashed border-Emdms/20  w-[90%]"></div>
        <div className="flex flex-col space-y-4 ">
          <div className="flex flex-col space-y-1">
            <div>
              Genitourinary
              <span className="text-red-500">*</span>
            </div>
            <div className="italic text-[#13131380]">
              Note: if the patient is male, look for hydrocele
            </div>
          </div>

          <textarea
            type="text"
            className="border rounded-md placeholder:text-xs h-20  w-[75%]  p-2"
            placeholder="type here"
          />
        </div>
        <div className="border border-dashed border-Emdms/20  w-[90%]"></div>
        <div className="text-new">MUSCULOSKELETAL SYSTEM</div>
        <div className="grid grid-cols-2 gap-4 w-full">
          <div className="flex flex-col space-y-4 ">
            <div className="flex flex-col space-y-1">
              <div>
                a. Extremities
                <span className="text-red-500">*</span>
              </div>
            </div>

            <textarea
              type="text"
              className="border rounded-md placeholder:text-xs h-20  w-1/2  p-2"
              placeholder="type here"
            />
          </div>
          <div className="flex flex-col space-y-4 ">
            <div className="flex flex-col space-y-1">
              <div>
                b. Back
                <span className="text-red-500">*</span>
              </div>
            </div>

            <textarea
              type="text"
              className="border rounded-md placeholder:text-xs h-20  w-1/2  p-2"
              placeholder="type here"
            />
          </div>
        </div>
        <div className="border border-dashed border-Emdms/20  w-[90%]"></div>
        <div className="flex flex-col space-y-1">
          <div className="uppercase text-new">
            integumentary
            <span className="text-red-500">*</span>
          </div>
          <div className="italic font-bold text-[#13131380]">
            Mental Status Examination
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 w-full">
          <div className="flex flex-col space-y-4 ">
            <div className="flex flex-col space-y-1">
              <div>
                a. Orientation
                <span className="text-red-500">*</span>
              </div>
              <div className="italic text-[#13131380]">
                Note: in person, place and time
              </div>
            </div>

            <input
              type="text"
              className="border rounded-md placeholder:text-xs   w-1/2  p-2"
              placeholder="type here"
            />
          </div>
          <div className="flex flex-col space-y-4 ">
            <div className="flex flex-col space-y-1">
              <div>
                b. Memory
                <span className="text-red-500">*</span>
              </div>
              <div className="italic text-[#13131380]">
                Note: Past, or Present History
              </div>
            </div>

            <input
              type="text"
              className="border rounded-md placeholder:text-xs   w-1/2  p-2"
              placeholder="type here"
            />
          </div>
          <div className="flex flex-col space-y-4 ">
            <div className="flex flex-col space-y-1">
              <div>
                c. Level of Consciousness
                <span className="text-red-500">*</span>
              </div>
              <div className="italic text-[#13131380]">
                Note: if the patient is male, look for hydrocele
              </div>
            </div>

            <input
              type="text"
              className="border rounded-md placeholder:text-xs   w-1/2  p-2"
              placeholder="type here"
            />
          </div>
          <div className="flex flex-col space-y-4 ">
            <div className="flex flex-col space-y-1">
              <div>
                d. Mood
                <span className="text-red-500">*</span>
              </div>
              <div className="italic text-[#13131380]">
                Note: if the patient is male, look for hydrocele
              </div>
            </div>

            <input
              type="text"
              className="border rounded-md placeholder:text-xs   w-1/2  p-2"
              placeholder="type here"
            />
          </div>
          <div className="flex flex-col space-y-4 ">
            <div className="flex flex-col space-y-1">
              <div>
                e. Attentions
                <span className="text-red-500">*</span>
              </div>
              <div className="italic text-[#13131380]">
                Note: if the patient is male, look for hydrocele
              </div>
            </div>

            <input
              type="text"
              className="border rounded-md placeholder:text-xs   w-1/2  p-2"
              placeholder="type here"
            />
          </div>
        </div>
        <div className="border border-dashed border-Emdms/20  w-[90%]"></div>
        <div className="text-new">CRANIAL NERVE EXAMINATION</div>
        <div>
          <textarea
            type="text"
            className="border rounded-md placeholder:text-xs h-20  w-[90%]  p-2"
            placeholder="type here"
          />
        </div>

        <div className="text-new">MOTOR EXAMINATION</div>
        <div>
          <textarea
            type="text"
            className="border rounded-md placeholder:text-xs h-20  w-[90%]  p-2"
            placeholder="type here"
          />
        </div>

        <div className="text-new">SENSORY EXAMINATION</div>
        <div>
          <textarea
            type="text"
            className="border rounded-md placeholder:text-xs h-20  w-[90%]  p-2"
            placeholder="type here"
          />
        </div>
        <div className="text-new">REFLEXES</div>
        <div className="grid grid-cols-2 gap-4 w-full">
          <div className="flex flex-col space-y-4 ">
            <div className="flex flex-col space-y-1">
              <div>
                Superficial Reflexes
                <span className="text-red-500">*</span>
              </div>
            </div>

            <textarea
              type="text"
              className="border rounded-md placeholder:text-xs h-20  w-1/2  p-2"
              placeholder="type here"
            />
          </div>
          <div className="flex flex-col space-y-4 ">
            <div className="flex flex-col space-y-1">
              <div>
                DTR
                <span className="text-red-500">*</span>
              </div>
            </div>

            <textarea
              type="text"
              className="border rounded-md placeholder:text-xs h-20  w-1/2  p-2"
              placeholder="type here"
            />
          </div>
        </div>
        <div className="flex flex-col space-x-1">
          <div className="text-new">OTHER CNS EXAMINATION</div>
          <div className="italic text-[#13131380]">
            Note:if the patient is male, look for hydrocele{" "}
          </div>
        </div>

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
              setCurrentTab("medicalOne");
            }}
            className="text-new border cursor-pointer border-new bg-[#F0F7F7] font-bold px-6 rounded-md py-1">
            Previous
          </div>
          <div
            onClick={() => {
              setCurrentTab("investigationOne");
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

export default MedicalExaminationTwo;
