import React from "react";
import AboutTwo from "../../components/views/home/About";
import Feature from "../../components/views/home/Feature";
import Team from "../../components/views/home/Team";
function About() {
  return (
    <div>
      <div className="flex justify-center bg-[#f3f6f8]">
        <div className="xl:w-[1320px] w-full">
          <div className=" bg-[#00B98E]  py-24">
            <div className="text-center text-white">
              <h1 className="pb-2 text-[40px] Inter font-bold">About Us</h1>
              <h1 className="flex  gap-4 text-base Hebo justify-center">
                Home / Pages / About
              </h1>
            </div>
          </div>
          <AboutTwo />
          <Feature />
          <div className="bg-white pb-20">
          <Team />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
