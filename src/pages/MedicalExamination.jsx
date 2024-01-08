import React, { useState } from "react";
import User from "../assets/image/User.png";
import NoRecord from "../assets/svg/NoRecord.svg";
import { GoDotFill } from "react-icons/go";
import { CiFilter } from "react-icons/ci";

import PastMedical from "../components/Examination_Components/PastMedical";
import MedicalExaminationOne from "../components/Examination_Components/MedicalExaminationOne";
import MedicalExaminationTwo from "../components/Examination_Components/MedicalExaminationTwo";
import InvestigationOne from "../components/Examination_Components/InvestigationOne";
import InvestigationTwo from "../components/Examination_Components/InvestigationTwo";
import InvestigationThree from "../components/Examination_Components/InvestigationThree";
import PhysicalComment from "../components/Examination_Components/PhysicalComment";
import { AiOutlineSearch } from "react-icons/ai";

const MedicalExamination = () => {
  const [currentTab, setCurrentTab] = useState("past");
  const [islabor, setIsLabor] = useState(false);

  return (
    <div className=" flex flex-col w-full h-full ">
      <div className="flex flex-col md:flex-row items-center md:justify-end justify-center">
        <form>
          <label
            for="default-search"
            class="mb-2 text-sm font-medium text-third sr-only ">
            Search
          </label>
          <div class="relative">
            <div className=" w-[300px]">
              <input
                type="search"
                id="default-search"
                class="block w-full py-2  ps-10 text-sm text-third placeholder:text-xs placeholder:text-black border   rounded-l-md bg-white "
                placeholder="Search"
                required
              />
            </div>
            <div class="absolute inset-y-0 left-2 flex items-center ps-3 pointer-events-none">
              <AiOutlineSearch className="text-new" />
            </div>
            <div class="absolute inset-y-0 right-0 flex space-x-2 border items-center ps-3 pointer-events-none">
              <CiFilter className="text-new" />
              <div className="text-xs pr-2">Filters</div>
            </div>
          </div>
        </form>{" "}
        <div
          onClick={() => {
            setIsLabor(!islabor);
          }}
          className="bg-new py-3 px-3  mt-3 md:mt-0 md:rounded-r-md text-xs text-white cursor-pointer">
          + Add Labor
        </div>
      </div>

      <div className="flex flex-col  h-[75vh] md:h-[80vh] overflow-y-auto noscrollBar  mx-auto w-full  space-y-4">
        <div className="flex flex-col w-full ">
          {" "}
          <div className="w-full h-full flex flex-col md:flex-row space-y-8 md:space-y-0 md:items-start md:justify-start">
            {/* left side */}
            <div className=" flex flex-col items-start justify-center md:w-1/3 w-full md:space-y-4 space-y-0 px-2">
              <div className=" py-2">
                <div className="text-new text-xl tracking-wider font-bold">
                  Medical Examination Application
                </div>
                <div className="text-xs text-Second text-justify ">
                  This list will display the medical records obtained by the
                  laborers from medical centers here. These records are
                  necessary to obtain approval and proceed with their
                  application process.
                </div>
              </div>

              {islabor && (
                <>
                  <div className="w-[15rem] h-[15rem] rounded-full bg-new/20 flex items-center justify-center mx-auto ">
                    <div className="w-[13rem] h-[13rem] rounded-full bg-new/50 flex items-center justify-center  ">
                      <div className="w-[11rem] h-[11rem] rounded-full ">
                        <img src={User} alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="text-[#035F67] flex mx-auto font-semibold text-lg">
                    Mekonen Leake Belayneh
                  </div>
                  <div className="w-full mx-auto flex flex-col space-y-2">
                    <div className="flex w-full items-center justify-center space-x-2 text-xs text-[#005656]">
                      <div className="bg-[#F0FEFF] px-2 py-1 rounded-md">
                        Gender: <span className=" font-bold">Male</span>
                      </div>
                      <div className="bg-[#F0FEFF] px-2 py-1 rounded-md">
                        Marital Status:{" "}
                        <span className=" font-bold">Single</span>
                      </div>
                      <div className="bg-[#F0FEFF] px-2 py-1 rounded-md">
                        DOB: <span className=" font-bold">05 Nov,1991</span>
                      </div>
                    </div>
                    <div className="flex w-full items-center justify-center space-x-2 text-xs text-[#005656]">
                      <div className="bg-[#F0FEFF] px-2 py-1 rounded-md">
                        Job Title:{" "}
                        <span className=" font-bold">House Maid</span>
                      </div>
                      <div className="bg-[#F0FEFF] px-2 py-1 rounded-md">
                        Passport No:{" "}
                        <span className=" font-bold"> EP234567</span>
                      </div>
                    </div>
                  </div>

                  <div className="text-xs text-[#9898a386] text-center leading-5 max-w-sm mx-auto">
                    In order to obtain the labor medical record, we will need to
                    input the labor ID to access the laborer's information and
                    initiate the examination of the relevant documents.
                  </div>
                </>
              )}
            </div>
            {/* right side */}
            {islabor && (
              <div className="flex flex-col space-y-4  w-full md:w-2/3 ">
                {" "}
                <div className="relative flex flex-col items-start space-y-2 h-[80vh]  overflow-y-auto noscrollBar   bg-white rounded-md px-10">
                  <div className="text-xs text-[#8D8D8D]">
                    {" "}
                    Application progress
                  </div>
                  <div className="text-Primary text-sm">
                    <span className="font-bold">75%</span> to complete
                  </div>
                  {/* status tab */}
                  <div className=" relative h-3 w-[90%] bg-[#CCFCFF] rounded-lg flex justify-between items-center">
                    <div
                      className={`${
                        currentTab === "past"
                          ? " w-1/12 h-2 flex bg-new  rounded-l-lg "
                          : currentTab === "medicalOne"
                          ? " w-3/12 h-2 flex bg-new   rounded-l-lg"
                          : currentTab === "medicalTwo"
                          ? " w-5/12 h-2 flex bg-new   rounded-l-lg"
                          : currentTab === "investigationOne"
                          ? " w-6/12 h-2 flex bg-new   rounded-l-lg"
                          : currentTab === "investigationTwo"
                          ? " w-8/12 h-2 flex bg-new   rounded-l-lg"
                          : currentTab === "investigationThree"
                          ? " w-10/12 h-2 flex bg-new   rounded-l-lg"
                          : currentTab === "physical"
                          ? " w-full h-2 flex bg-new   rounded-lg"
                          : "text-Emdms"
                      }  items-center justify-center absolute  cursor-pointer`}></div>
                    <div className=" text-white absolute w-full flex  justify-around">
                      <div>
                        <GoDotFill />
                      </div>
                      <div>
                        <GoDotFill />
                      </div>
                      <div>
                        <GoDotFill />
                      </div>
                      <div>
                        <GoDotFill />
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-5 py-8 ">
                    {currentTab === "past" ? (
                      <div className="text-lg md:text-5xl max-w-xs leading ">
                        Past Medical History
                      </div>
                    ) : currentTab === "medicalOne" ||
                      currentTab === "medicalTwo" ? (
                      <div className="text-lg md:text-5xl max-w-xs leading ">
                        Medical Examination
                      </div>
                    ) : currentTab === "investigationOne" ||
                      currentTab === "investigationTwo" ||
                      currentTab === "investigationThree" ? (
                      <div className="text-lg md:text-5xl max-w-xs leading ">
                        Investigations
                      </div>
                    ) : (
                      <div className="text-lg md:text-5xl max-w-xs leading ">
                        Physical Comment
                      </div>
                    )}
                    <div className="text-sm max-w-xs leading-6 text-[#404040]  ">
                      Here the doctor will assess a medical examination is a
                      comprehensive to assess a person's overall{" "}
                      <span className="text-Emdms font-semibold">health</span>{" "}
                      and{" "}
                      <span className="text-Emdms font-semibold">
                        well-being
                      </span>{" "}
                      .
                    </div>
                  </div>
                  <div className="border border-dashed border-Emdms/20  w-[90%]"></div>
                  {currentTab === "past" && (
                    <PastMedical setCurrentTab={setCurrentTab} />
                  )}
                  {currentTab === "medicalOne" && (
                    <MedicalExaminationOne setCurrentTab={setCurrentTab} />
                  )}
                  {currentTab === "medicalTwo" && (
                    <MedicalExaminationTwo setCurrentTab={setCurrentTab} />
                  )}
                  {currentTab === "investigationOne" && (
                    <InvestigationOne setCurrentTab={setCurrentTab} />
                  )}
                  {currentTab === "investigationTwo" && (
                    <InvestigationTwo setCurrentTab={setCurrentTab} />
                  )}
                  {currentTab === "investigationThree" && (
                    <InvestigationThree setCurrentTab={setCurrentTab} />
                  )}
                  {currentTab === "physical" && (
                    <PhysicalComment setCurrentTab={setCurrentTab} />
                  )}
                </div>
              </div>
            )}
          </div>
          {islabor === false && (
            <div className=" w-full flex flex-col items-center justify-center ">
              <img src={NoRecord} alt="" />
              <div className="text-xs text-[#9898a386] text-center leading-5 max-w-sm mx-auto">
                In order to obtain the labor medical record, we will need to
                input the labor ID to access the laborer's information and
                initiate the examination of the relevant documents.
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MedicalExamination;
