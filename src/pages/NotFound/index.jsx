import { BsExclamationTriangle } from "react-icons/bs";
import React from "react";

function NotFound() {
  return (
    <div>
      <div className="flex justify-center bg-[#f3f6f8]">
        <div className="xl:w-[1320px] w-full  bg-white   ">
          <div className=" bg-[#00B98E]  py-24">
            <div className="text-center text-white">
              <h1 className="pb-2 text-[40px] Inter font-bold">Free Quote</h1>
              <h1 className="flex  gap-10 text-base Hebo justify-center">
                Home / Pages / Free Quote
              </h1>
            </div>
          </div>
          <div className="flex justify-center my-32">
            <div className="text-center xl:w-[50%]">
              <div className="flex justify-center">
                <BsExclamationTriangle color="#00B98E" size={80} />
              </div>
              <h1 className="mt-3 text-[#0E2E50] text-[80px] font-extrabold Inter">
                404
              </h1>
              <h3 className="mt-3 text-[#0E2E50] text-[40px] font-bold Inter">
                Page Not Found
              </h3>
              <p className="mt-3 text-[#666565] text-base Hebo font-normal">
                We’re sorry, the page you have looked for does not exist in our
                website! Maybe go to our home page or try to use a search?
              </p>
              <button className="mt-5 bg-[#00B98E] text-white text-base Hebo py-4 px-10 rounded-full">
                Go Back To Home
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
