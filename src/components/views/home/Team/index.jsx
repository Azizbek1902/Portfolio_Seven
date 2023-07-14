import { ImLinkedin2 } from "react-icons/im";
import { AiOutlineTwitter } from "react-icons/ai";
import { CgFacebook } from "react-icons/cg";
import React from "react";
import img1 from '../../../../assets/img/team-1.jpg'
import img2 from '../../../../assets/img/team-2.jpg'
import img3 from '../../../../assets/img/team-3.jpg'
import img4 from '../../../../assets/img/team-4.jpg'

function Team() {
  const data = [
    { id: 1, img: img1 },
    { id: 2, img: img2 },
    { id: 3, img: img3 },
    { id: 4, img: img4 },
  ];
  return (
    <div>
      <div className="justify-center flex">
        <div className="w-[95%]">
          <div className="flex justify-center">
            <div className="text-center mb-14 lg:w-[500px] md:w-[400px]">
              <button className="text-[#00B98E] Hebo text-base mb-4 px-6 rounded-full border border-[#dee4e6]">
                Our Team
              </button>
              <h1 className="text-[32px] Inter font-bold text-[#0E2E50]">
                Meet Our Team Members
              </h1>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-5 lg:grid-cols-4">
            {data.map((item) => (
              <div
                key={item.id}
                className="relative md:mb-0 mb-5 w-full cartAnimate"
              >
                <div className="text-center pt-10 pb-24 bgCartAnimate">
                  <h1 className="text-[#0E2E50] text-xl Inter font-bold hoverColor pb-2">
                    Full Name
                  </h1>
                  <p className="text-base text-[#666565] Hebo font-normal hoverColor">
                    Designation
                  </p>
                </div>
                <div className="absolute lg:w-[80%] md:w-[70%] lg:top-32 lg:left-7 w-[60%] top-32 md:left-14 left-20 justify-center flex border-[#00b98e] border rounded-full">
                  <img src={item.img} className="rounded-full p-3" alt="" />
                </div>
                <div className="flex justify-center pb-10 pt-24 mt-24 gap-2 bgCartAnimate">
                  <div className="bg-white p-3 rounded-full">
                    <CgFacebook size={20} color="#00b98e" />
                  </div>
                  <div className="bg-white p-3 rounded-full">
                    <AiOutlineTwitter size={20} color="#00b98e" />
                  </div>
                  <div className="bg-white p-3 rounded-full">
                    <ImLinkedin2 size={20} color="#00b98e" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
