import { FaHeadset } from "react-icons/fa"; 
import { FaUserAlt } from "react-icons/fa"; 
import { FaSmileBeam } from "react-icons/fa"; 
import { FaAward } from "react-icons/fa"; 
import { FaPercent } from "react-icons/fa"; 
import { FaCubes } from "react-icons/fa"; 
import React from "react";

function Feature() {
    const data = [
        {
            id: 1,
            icon : <FaCubes color="white" size={22}/>,
            title: "Best In Industry"
        },
        {
            id: 2,
            icon : <FaPercent color="white" size={22}/>,
            title: "99% Success Rate"
        },
        {
            id: 3,
            icon : <FaAward color="white" size={22}/>,
            title: "Award Winning"
        },
        {
            id: 4,
            icon : <FaSmileBeam color="white" size={22}/>,
            title: "100% Happy Client"
        },
        {
            id: 5,
            icon : <FaUserAlt color="white" size={22}/>,
            title: "Professional Advisors"
        },
        {
            id: 6,
            icon : <FaHeadset color="white" size={22}/>,
            title: "24/7 Customer Support"
        }
    ]
  return (
    <div>
      <div className="flex justify-center bg-white pt-32 pb-32">
        <div className="w-[95%]">
          <div className="flex lg:flex-row flex-col lg:gap-10">
            <div className="text-start lg:w-[800px]">
              <button className="text-[#00B98E] px-7 border border-[#dee2e6] rounded-full">
                Feature
              </button>
              <h1 className="text-[32px] text-[#0E2E50] mt-4 pb-5 font-bold Inter">
                Why People Choose Us? We Are Trusted & Award Wining Agency
              </h1>
              <p className="pb-7 text-base text-[#666565] Hebo font-normal">
                Clita nonumy sanctus nonumy et clita tempor, et sea amet ut et
                sadipscing rebum amet takimata amet, sed accusam eos eos dolores
                dolore et. Et ea ea dolor rebum invidunt clita eos. Sea accusam
                stet stet ipsum, sit ipsum et ipsum kasd
              </p>
              <p className="pb-7 text-base text-[#666565] Hebo font-normal">
                Et ea ea dolor rebum invidunt clita eos. Sea accusam stet stet
                ipsum, sit ipsum et ipsum kasd
              </p>
              <button className="mt-10 mb-20 lg:mb-0 text-white text-base rounded-full Hebo font-semibold py-4 px-12 bg-[#009472] hover:bg-[#1ac099] transition-all">
                Read More
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-14">
              {data.map((elem) => (
                <div className="text-start mb-12 md:mb-0" key={elem.id}>
                  <div className="flex gap-5 mb-5 items-center">
                    <div className="bg-[#00B98E] p-3 rounded-full">
                      {elem.icon}
                    </div>
                    <h1 className="Inter text-base text-[#0E2E50] font-bold">
                      {elem.title}
                    </h1>
                  </div>
                  <p className="text-[#666565] text-base Hebo font-normal">
                    Magna sea eos sit dolor, ipsum amet ipsum lorem diam eos
                    diam dolor
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feature;
