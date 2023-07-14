import { FaLink } from "react-icons/fa";
import { FaHouseDamage } from "react-icons/fa";
import { FaBalanceScale } from "react-icons/fa";
import { FaChartArea } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";
import { FaChartPie } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import React from "react";

function Service() {
  const data = [
    {
      id: 1,
      title: "Business Research",
      user: <FaUserAlt size={28} color="white" />,
      icon: <FaLink size={28} color="white" />,
      clok: "1000",
    },
    {
      id: 2,
      title: "Stretagic Planning",
      user: <FaChartPie size={28} color="white" />,
      icon: <FaLink size={28} color="white" />,
      clok: 4000,
    },
    {
      id: 3,
      title: "Market Analysis",
      user: <FaChartLine size={28} color="white" />,
      icon: <FaLink size={28} color="white" />,
      clok: 5000,
    },
    {
      id: 4,
      title: "Financial Analaysis",
      user: <FaChartArea size={28} color="white" />,
      icon: <FaLink size={28} color="white" />,
      clok: 6000,
    },
    {
      id: 5,
      title: "legal Advisory",
      user: <FaBalanceScale size={28} color="white" />,
      icon: <FaLink size={28} color="white" />,
      clok: 7000,
    },
    {
      id: 6,
      title: "Tax & Insurance",
      user: <FaHouseDamage size={28} color="white" />,
      icon: <FaLink size={28} color="white" />,
      clok: 8000,
    },
  ];
  return (
    <div>
      <div className="bg-white flex justify-center pt-32">
        <div className="md:w-[95%] w-[92%]">
          <div className="flex justify-center">
            <div className="text-center mb-14 lg:w-[500px] md:w-[400px]">
              <button className="text-[#00B98E] Hebo text-base mb-4 px-6 rounded-full border border-[#dee2e6]">
                Our Services
              </button>
              <h1 className="text-[32px] Inter font-bold text-[#0E2E50]">
                We Provide Solutions On Your Business
              </h1>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-7">
            {data.map((item) => (
              <div
                key={item.id}
                className="relative hoverDiv rounded-md hover:shadow-none p-10 transitionAll pt-28 hover:border hover:border-[#00B98E]"
                data-aos="fade-up"
                data-aos-duration={item.clok}
              >
                <div className="bg-[#00B98E] rounded-ss-md p-4 absolute top-0 left-0 rounded-ee-md">
                  {item.user}
                </div>
                <div className="hoverCart bg-white transitionAll rounded-es-md p-4 absolute top-0 right-0 rounded-se-md">
                  {item.icon}
                </div>
                <div className="text-start">
                  <h1 className="text-[#0E2E50] font-bold Inter text-xl pb-2">
                    {item.title}
                  </h1>
                  <p className="text-base text-[#666565] Hebo font-normal">
                    Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                    lorem sed diam stet diam sed stet lorem.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
