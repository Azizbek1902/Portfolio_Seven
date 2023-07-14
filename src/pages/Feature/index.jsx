import React from "react";
import Features from "../../components/views/home/Feature";
function Feature() {
  return (
    <div>
      <div className="flex justify-center bg-[#f3f6f8]">
        <div className="xl:w-[1320px] w-full  bg-white ">
          <div className=" bg-[#00B98E]  py-24">
            <div className="text-center text-white">
              <h1 className="pb-2 text-[40px] Inter font-bold">Features</h1>
              <h1 className="flex  gap-4 text-base Hebo justify-center">
                Home / Pages / Features
              </h1>
            </div>
          </div>
          <Features />
        </div>
      </div>
    </div>
  );
}

export default Feature;
