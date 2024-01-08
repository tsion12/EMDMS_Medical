import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

const TopCandidatesCard = () => {
  return (
    <>
      <div className="text-sm font-medium">Top Scored Candidates</div>
      {[1, 2, 3].map((item) => (
        <>
          <div className="w-full px-2 py-4 text-sm border  border-[#DFEFFF] rounded-md flex items-center justify-around ">
            <div className="w-5 h-5 rounded-full bg-red-100"></div>
            <div className="text-[#DFEFFF]">Abebe Kebede</div>
            <div className="font-bold">100%</div>
            <div className="text-[#DFEFFF]">12 Subjects</div>
            <div className="text-yellow-500">+Gold</div>
            <div>
              <BsThreeDotsVertical className="text-lg " />
            </div>
          </div>
        </>
      ))}
    </>
  );
};

export default TopCandidatesCard;
