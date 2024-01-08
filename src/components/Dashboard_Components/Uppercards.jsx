import React from "react";
import { TiDocumentText } from "react-icons/ti";
import { GoArrowUpRight } from "react-icons/go";

import { IoPeopleOutline } from "react-icons/io5";
import { LuWarehouse } from "react-icons/lu";
import { PiFileXLight } from "react-icons/pi";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Page A",
    uv: 8000,
    pv: 9400,
    amt: 3400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 4398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 7908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 9300,
    amt: 2100,
  },
];

const Uppercards = () => {
  return (
    <>
      {" "}
      <div className="bg-[#008894] text-xs text-white h-full rounded-xl flex space-x-4 items-center justify-around ">
        <div className="flex flex-col items-start justify-center space-y-1">
          <div className="font-semibold">Total Examined Labor</div>
          <div className="text-3xl font-bold">25.1k</div>
          <div className="flex space-x-2  items-center justify-center">
            <div className="bg-white rounded-full flex items-center justify-center w-4 h-4">
              <GoArrowUpRight className="text-green-300" />
            </div>
            <div className="text-xs">+15% From Yesterday</div>
          </div>
        </div>
        <ResponsiveContainer width="50%" height="70%">
          <BarChart
            barSize={10}
            innerRadius={5}
            outerRadius={10}
            width={10}
            height={60}
            data={data}
            margin={{
              top: 0,
              right: 0,
              left: 0,
              bottom: 5,
            }}>
            <Bar dataKey="pv" stackId="a" fill="#ffffff" radius={10} />
            {/* <Bar dataKey="uv" stackId="a" fill="#F0FEFF26" radius={10} /> */}
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="bg-white border border-[#D3CBFB] h-full rounded-xl flex flex-col space-x-4  justify-around py-5 px-10">
        <div className=" flex space-x-4 items-center justify-between">
          {" "}
          <div className="flex space-x-3 items-center justify-center">
            <div className="flex flex-col items-start justify-center space-y-1">
              <div className="text-sm text-[#797D8C] font-semibold">
                Total Examine Requests
              </div>
              <div className="text-2xl font-bold ">2,435</div>
            </div>
          </div>
          <div className="bg-[#E1F4FC] rounded-full p-2">
            <IoPeopleOutline className="text-lg text-[#0D5EA6]" />
          </div>
        </div>
        <div className="flex justify-end text-new text-xs underline">
          View More
        </div>
      </div>
      <div className="bg-white border border-[#D3CBFB] h-full rounded-xl flex flex-col space-x-4  justify-around py-5 px-10">
        <div className=" flex space-x-4 items-center justify-between">
          {" "}
          <div className="flex space-x-3 items-center justify-center">
            <div className="flex flex-col items-start justify-center space-y-1">
              <div className="text-sm text-[#797D8C] font-semibold">
                Total Request Approved
              </div>
              <div className="text-2xl font-bold ">2,435</div>
            </div>
          </div>
          <div className="bg-[#E1F4FC] rounded-full p-2">
            <IoPeopleOutline className="text-lg text-[#0D5EA6]" />
          </div>
        </div>
        <div className="flex justify-end text-new text-xs underline">
          View More
        </div>
      </div>
      <div className="bg-white border border-[#D3CBFB] h-full rounded-xl flex flex-col space-x-4  justify-around py-5 px-10">
        <div className=" flex space-x-4 items-center justify-between">
          {" "}
          <div className="flex space-x-3 items-center justify-center">
            <div className="flex flex-col items-start justify-center space-y-1">
              <div className="text-sm text-[#797D8C] font-semibold">
                Total Request Rejected
              </div>
              <div className="text-2xl font-bold ">2,435</div>
            </div>
          </div>
          <div className="bg-[#E1F4FC] rounded-full p-2">
            <IoPeopleOutline className="text-lg text-[#0D5EA6]" />
          </div>
        </div>
        <div className="flex justify-end text-new text-xs underline">
          View More
        </div>
      </div>
    </>
  );
};

export default Uppercards;
