import React, { useState } from "react";
import User from "../assets/image/User.png";
import Icon from "../assets/svg/folderIcon.svg";
import { GoDotFill } from "react-icons/go";

import PastMedical from "../components/PastMedical";
import MedicalExaminationOne from "../components/MedicalExaminationOne";
import MedicalExaminationTwo from "../components/MedicalExaminationTwo";
import InvestigationOne from "../components/InvestigationOne";
import InvestigationTwo from "../components/InvestigationTwo";
import InvestigationThree from "../components/InvestigationThree";
import PhysicalComment from "../components/PhysicalComment";

const MedicalExamination = () => {
  const [currentTab, setCurrentTab] = useState("past");

  return (
    <div className="flex items-start justify-center mx-auto w-full h-full space-4">
      {/* left side */}
      <div className="flex flex-col items-start justify-center w-1/3 space-y-4 px-2">
        <div>
          <div className="text-new text-xl tracking-wider font-bold">
            Medical Examination Application
          </div>
          <div className="text-xs text-Second text-justify ">
            This list will display the medical records obtained by the laborers
            from medical centers here. These records are necessary to obtain
            approval and proceed with their application process.
          </div>
        </div>

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
              Marital Status: <span className=" font-bold">Single</span>
            </div>
            <div className="bg-[#F0FEFF] px-2 py-1 rounded-md">
              DOB: <span className=" font-bold">05 Nov,1991</span>
            </div>
          </div>
          <div className="flex w-full items-center justify-center space-x-2 text-xs text-[#005656]">
            <div className="bg-[#F0FEFF] px-2 py-1 rounded-md">
              Job Title: <span className=" font-bold">House Maid</span>
            </div>
            <div className="bg-[#F0FEFF] px-2 py-1 rounded-md">
              Passport No: <span className=" font-bold"> EP234567</span>
            </div>
          </div>
        </div>

        <div className="text-xs text-[#9898a386] text-center leading-5 max-w-sm mx-auto">
          In order to obtain the labor medical record, we will need to input the
          labor ID to access the laborer's information and initiate the
          examination of the relevant documents.
        </div>
      </div>
      {/* right side */}
      <div className="flex flex-col space-y-4 w-2/3 ">
        {" "}
        <div className="relative flex flex-col items-start space-y-2 h-[80vh] overflow-y-auto noscrollBar   bg-white rounded-md px-10">
          {/* <div className="absolute top-0 right-0">
            <img src={Icon} alt="" />
          </div> */}
          <div className="text-xs text-[#8D8D8D]"> your progress</div>
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
              <div className="text-5xl max-w-xs leading ">
                Past Medical History
              </div>
            ) : currentTab === "medicalOne" || currentTab === "medicalTwo" ? (
              <div className="text-5xl max-w-xs leading ">
                Medical Examination
              </div>
            ) : currentTab === "investigationOne" ||
              currentTab === "investigationTwo" ||
              currentTab === "investigationThree" ? (
              <div className="text-5xl max-w-xs leading ">Investigations</div>
            ) : (
              <div className="text-5xl max-w-xs leading ">Physical Comment</div>
            )}
            <div className="text-sm max-w-xs leading-6 text-[#404040]  ">
              Here the doctor will assess a medical examination is a
              comprehensive to assess a person's overall{" "}
              <span className="text-Emdms font-semibold">health</span> and{" "}
              <span className="text-Emdms font-semibold">well-being</span> .
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
    </div>
  );
};

export default MedicalExamination;
