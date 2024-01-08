import React from "react";

import Uppercards from "../components/Dashboard_Components/Uppercards";
import TopCandidatesCard from "../components/Dashboard_Components/TopCandidatesCard";

import PieChartCard from "../components/Dashboard_Components/PieChartCard";
import BarChartCard from "../components/Dashboard_Components/BarChartCard";


const Dashboard = () => {
  return (
    <div className="flex flex-col h-full  space-y-10 w-full">
      <div className="w-full h-[20%] px-5 grid  grid-cols-4 gap-4">
        <Uppercards />
      </div>
      <div className="w-full h-[40%] px-5 grid  grid-cols-4 gap-4">
        <div className="bg-white rounded-md flex flex-col shadow-lg  justify-center ">
          <PieChartCard />
        </div>
        <div className="col-span-3 bg-white shadow-lg rounded-md ">
          <BarChartCard />
        </div>
      </div>
      <div className="w-full h-[40%] overflow-y-auto noscrollBar  ">
        {" "}
        <div className="col-span-2 bg-white rounded-md flex flex-col space-y-6 p-5 ">
          <TopCandidatesCard />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
