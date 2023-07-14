import { FaTelegramPlane } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { CgFacebook } from "react-icons/cg";
import { AiOutlineTwitter } from "react-icons/ai";
import { MdCall } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import React from "react";

function Footer() {
  return (
    <div>
      <div className="flex justify-center bg-[#f3f6f8]">
        <div className="xl:w-[1320px] w-full bg-[#0E2E50] flex justify-center">
          <div className="w-[96%] pt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pb-16">
              <div className="text-start">
                <h1 className="pb-5 text-white text-xl Inter font-bold">
                  Get In Touch
                </h1>
                <div className="flex items-center gap-2 mb-2">
                  <MdLocationOn size={20} color="white" />
                  <h1 className="text-white text-base Hebo font-normal">
                    123 Street, New York, USA
                  </h1>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <MdCall size={20} color="white" />
                  <h1 className="text-white text-base Hebo font-normal">
                    +012 345 67890
                  </h1>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <MdEmail size={20} color="white" />
                  <h1 className="text-white text-base Hebo font-normal">
                    info@example.com
                  </h1>
                </div>
                <div className="flex mt-5 items-center gap-1">
                  <div className="p-2 borderR">
                    <AiOutlineTwitter color="#F3F6F8" size={20} />
                  </div>
                  <div className="p-2 borderR">
                    <CgFacebook color="#F3F6F8" size={20} />
                  </div>
                  <div className="p-2 borderR">
                    <AiFillYoutube color="#F3F6F8" size={20} />
                  </div>
                  <div className="p-2 borderR">
                    <AiFillInstagram color="#F3F6F8" size={20} />
                  </div>
                  <div className="p-2 borderR">
                    <GrLinkedinOption color="#F3F6F8" size={20} />
                  </div>
                </div>
              </div>
              <div className="text-start">
                <h1 className="pb-5 text-white text-xl Inter font-bold">
                  Quick Link
                </h1>
                <div className="flex items-center gap-2 mb-2">
                  <FaAngleRight color="white" />
                  <h1 className="text-base Hebo text-[#F3F6F8] trans">
                    About Us
                  </h1>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <FaAngleRight color="white" />
                  <h1 className="text-base Hebo text-[#F3F6F8] trans">
                    Contact Us
                  </h1>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <FaAngleRight color="white" />
                  <h1 className="text-base Hebo text-[#F3F6F8] trans">
                    Privasy Policy
                  </h1>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <FaAngleRight color="white" />
                  <h1 className="text-base Hebo text-[#F3F6F8] trans">
                    Terms & Condition
                  </h1>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <FaAngleRight color="white" />
                  <h1 className="text-base Hebo text-[#F3F6F8] trans">
                    Career
                  </h1>
                </div>
              </div>
              <div className="text-start">
                <h1 className="pb-5 text-white text-xl Inter font-bold">
                  Popular Link
                </h1>
                <div className="flex items-center gap-2 mb-2">
                  <FaAngleRight color="white" />
                  <h1 className="text-base Hebo text-[#F3F6F8] trans">
                    About Us
                  </h1>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <FaAngleRight color="white" />
                  <h1 className="text-base Hebo text-[#F3F6F8] trans">
                    Contact Us
                  </h1>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <FaAngleRight color="white" />
                  <h1 className="text-base Hebo text-[#F3F6F8] trans">
                    Privasy Policy
                  </h1>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <FaAngleRight color="white" />
                  <h1 className="text-base Hebo text-[#F3F6F8] trans">
                    Terms & Condition
                  </h1>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <FaAngleRight color="white" />
                  <h1 className="text-base Hebo text-[#F3F6F8] trans">
                    Career
                  </h1>
                </div>
              </div>
              <div className="text-start">
                <h1 className="pb-5 text-white text-xl Inter font-bold">
                  Newsletter
                </h1>
                <p className="text-base Hebo text-white lg:pr-10">
                  Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi.
                  Curabitur facilisis ornare velit non vulpu
                </p>
                <div className="flex mt-5 items-center">
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="py-4 pl-7 text-base outline-none text-black rounded-s-full"
                  />
                  <div className="bg-white rounded-e-full py-4 pr-7">
                    <FaTelegramPlane color="#00B98E" size={24} />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex md:justify-between justify-center md:flex-row flex-col py-5 border-t border-[#274362]">
              <div className="lg:w-[400px]">
                <h1 className="text-sm text-[#F3F6F8] Hebo ">
                  © <u>Your Site Name,</u> All Right Reserved. Designed{" "}
                  <u> HTML Codex</u>
                  Distributed By: <u>ThemeWagon</u>
                </h1>
              </div>
              <div className="flex md:items-center justify-center md:mt-0 mt-10">
                <h1 className="text-sm text-[#F3F6F8] Hebo pr-5 pl-5 border-r border-[#274362]">
                  Home
                </h1>
                <h1 className="text-sm text-[#F3F6F8] Hebo pr-5 pl-5 border-r border-[#274362]">
                  Cookies
                </h1>
                <h1 className="text-sm text-[#F3F6F8] Hebo pr-5 pl-5 border-r border-[#274362]">
                  Help
                </h1>
                <h1 className="text-sm text-[#F3F6F8] pl-5 Hebo">FQAs</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
