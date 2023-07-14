import React from "react";
import img from "../../../../assets/img/hero.png";

function Header() {
  return (
    <div>
      <div className="flex lg:items-center header justify-center relative py-28 bg-[#00B98E]">
        <div className="xl:w-full w-[90%]">
          <div className="flex lg:flex-row lg:justify-start justify-center  flex-col lg:gap-10 items-center">
            <div className="flex items-center lg:justify-start justify-center">
              <div className="lg:text-start text-center lg:pl-5 xl:w-[650px] lg:w-[500px]"  data-aos="zoom-in">
                <h1 className="text-white text-[40px] font-bold Inter lg:mb-0 mb-10">
                  We Help To Push Your Business To The Top Level
                </h1>
                <p className="text-white text-base Hebo font-normal pt-4 leading-7">
                  Tempor rebum no at dolore lorem clita rebum rebum ipsum rebum
                  stet dolor sed justo kasd. Ut dolor sed magna dolor sea diam.
                  Sit diam sit justo amet ipsum vero ipsum clita lorem
                </p>
                <button className="bg-transparent border-2 transition-all mt-10 border-[#F3F6F8] font-semibold py-4 px-10 rounded-full hover:bg-[#F3F6F8] hover:text-black text-white text-base Hebo ">
                  Learn More
                </button>
              </div>
            </div>
            <div className="flex  lg:justify-start  justify-center lg:mt-0 mt-20" data-aos="zoom-in">
              <img src={img} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
