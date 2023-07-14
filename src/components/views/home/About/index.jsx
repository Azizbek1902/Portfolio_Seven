import { FaChartLine } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import React from "react";
import img from "../../../../assets/img/about.png";

function AboutHome() {
  return (
    <div className="bg-white pt-20 pb-32 justify-center flex">
      <div className="pt-20 lg:w-[95%] w-[90%]">
        <div className="flex lg:flex-row flex-col lg:gap-10 items-center lg:justify-between">
          <div className="lg:mb-0 mb-20" data-aos="zoom-in">
            <img src={img} alt="" />
          </div>
          <div className="text-start lg:w-[650px] w-[90%]" data-aos="fade-up">
            <button className="text-base text-[#00B98E] Hebo rounded-full px-7 border-[#dee2e6] border">
              About Us
            </button>
            <h1 className="text-[32px] text-[#0E2E50] font-bold Inter pt-4 pb-7">
              Award Wining Consultancy Agency For Your Business
            </h1>
            <p className="text-base text-[#666565] Hebo font-normal leading-6">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor
              sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem
              et sit, sed stet no labore lorem sit. Sanctus clita duo justo et
              tempor eirmod
            </p>
            <div className="flex mt-10 gap-7 items-start">
              <div className="bg-[#00B98E] rounded-full p-4">
                <FaUserAlt className="text-white" />
              </div>
              <div className="text-start pr-10">
                <h1 className="text-base text-[#0E2E50] font-bold Inter pb-2">
                  Business Planning
                </h1>
                <p className="text-base text-[#666565] Hebo font-normal">
                  Tempor erat elitr rebum at clita. Diam dolor ipsum amet eos
                  erat ipsum lorem et sit sed stet lorem sit clita duo
                </p>
              </div>
            </div>
            <div className="flex mt-10 gap-7 items-start">
              <div className="bg-[#00B98E] rounded-full p-4">
                <FaChartLine className="text-white" />
              </div>
              <div className="text-start pr-10">
                <h1 className="text-base text-[#0E2E50] font-bold Inter pb-2">
                  Business Planning
                </h1>
                <p className="text-base text-[#666565] Hebo font-normal">
                  Tempor erat elitr rebum at clita. Diam dolor ipsum amet eos
                  erat ipsum lorem et sit sed stet lorem sit clita duo
                </p>
              </div>
            </div>
            <button className="mt-10 text-white text-base rounded-full Hebo font-semibold py-4 px-12 bg-[#009472] hover:bg-[#1ac099] transition-all">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutHome;
