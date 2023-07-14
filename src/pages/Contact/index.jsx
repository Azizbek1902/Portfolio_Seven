import React from "react";
import ContactForm from '../../components/views/Contact'
function Contact() {
  return (
    <div>
      <div className="flex justify-center bg-[#f3f6f8]">
        <div className="xl:w-[1320px] w-full">
          <div className=" bg-[#00B98E]  py-24">
            <div className="text-center text-white">
              <h1 className="pb-2 text-[40px] Inter font-bold">Contact Us</h1>
              <h1 className="flex  gap-4 text-base Hebo justify-center">
                Home / Pages / Contact
              </h1>
            </div>
          </div>
          <div className="bg-white pb-20">
            <ContactForm active={true}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
