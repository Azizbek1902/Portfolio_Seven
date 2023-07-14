import React from "react";
import Service from "../../components/views/home/Service";
import CardCarousel from "../../components/views/home/CardCarousel";
function Services() {
  return (
    <div>
      <div className="flex justify-center bg-[#f3f6f8]">
        <div className="xl:w-[1320px] w-full">
          <div className=" bg-[#00B98E]  py-24">
            <div className="text-center text-white">
              <h1 className="pb-2 text-[40px] Inter font-bold">Services</h1>
              <h1 className="flex  gap-4 text-base Hebo justify-center">
                Home / Pages / Services
              </h1>
            </div>
          </div>
          <Service />
          <div className="bg-white py-20">
            <div className="flex justify-center">
              <div className="text-center mb-14 lg:w-[500px] md:w-[400px]">
                <button className="text-[#00B98E] Hebo text-base mb-4 px-6 rounded-full border border-[#dee4e6]">
                  Testimonial
                </button>
                <h1 className="text-[32px] Inter font-bold text-[#0E2E50]">
                  What Our Clients Say!
                </h1>
              </div>
            </div>
            <CardCarousel />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
