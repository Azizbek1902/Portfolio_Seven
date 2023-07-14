import React from "react";
import ContactForm from "../../components/views/Contact";

function Quote() {
  return (
    <div>
      <div className="flex justify-center bg-[#f3f6f8]">
        <div className="xl:w-[1320px] w-full  bg-white  pb-40 ">
          <div className=" bg-[#00B98E]  py-24">
            <div className="text-center text-white">
              <h1 className="pb-2 text-[40px] Inter font-bold">Free Quote</h1>
              <h1 className="flex  gap-10 text-base Hebo justify-center">
                Home / Pages / Free Quote
              </h1>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default Quote;
