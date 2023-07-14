import React from "react";
import Team from "../../components/views/home/Team";

function Teames() {
  return (
    <div>
      <div className="flex justify-center bg-[#f3f6f8]">
        <div className="xl:w-[1320px] w-full  bg-white pb-36">
          <div className=" bg-[#00B98E]  py-24">
            <div className="text-center text-white">
              <h1 className="pb-2 text-[40px] Inter font-bold">Our Team</h1>
              <h1 className="flex  gap-4 text-base Hebo justify-center">
                Home / Pages / Our Team
              </h1>
            </div>
          </div>
          <br />
          <br />
          <br />
          <br />
          <Team />
        </div>
      </div>
    </div>
  );
}

export default Teames;
