import React from "react";

function ContactForm({ active }) {
  return (
    <div>
      <div className="flex justify-center items-center pt-32">
        <div className="lg:w-[60%] w-[90%]">
          <div className="text-center">
            <button className="text-base text-[#00B98E] border border-[#dee2e6] Hebo font-normal px-7 rounded-full">
              {active ? "Contact Us" : "Free Quote"}
            </button>
            <h1 className="text-[32px] text-[#0E2E50] Inter font-bold lg:px-28 py-5">
              {active ? "If You Have Any Query, Please Feel Free Contact Us" : "Request A Free Quote"}
            </h1>
            {active ? (
              <p className="text-base text-[#666565] Hebo font-normal pb-5">
                The contact form is currently inactive. Get a functional and
                working contact form with Ajax & PHP in a few minutes. Just copy
                and paste the files, add a little code and you're done.
                <span className="text-[#00B98E]"> Download Now.</span>
              </p>
            ) : (
              ""
            )}
          </div>
          <form className="w-full">
            <div className="flex gap-5 mb-5">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full py-3 px-4 rounded-md outline-none border border-[#ced4da] placeholder:text-[#666565] font-normal text-base"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full py-3 px-4 rounded-md outline-none border border-[#ced4da] placeholder:text-[#666565] font-normal text-base"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full py-3 mb-5 px-4 rounded-md outline-none border border-[#ced4da] placeholder:text-[#666565] font-normal text-base"
            />
            <textarea
              rows="7"
              placeholder="Message"
              className="w-full py-3 mb-5 px-4 rounded-md outline-none border border-[#ced4da] placeholder:text-[#666565] font-normal text-base"
            ></textarea>
            <button className="w-full rounded-md py-4 text-white bg-[#00B98E] text-base Hebo">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
