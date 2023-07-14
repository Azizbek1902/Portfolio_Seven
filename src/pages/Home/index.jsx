import { FaTelegramPlane } from "react-icons/fa";
import React from "react";
import Header from "../../components/views/home/Header";
import AboutHome from "../../components/views/home/About";
import img from "../../assets/img/newsletter.png";
import Service from "../../components/views/home/Service";
import Feature from "../../components/views/home/Feature";
import Carousel from "../../components/views/home/Carousel";
import Team from "../../components/views/home/Team";
import CardCarousel from "../../components/views/home/CardCarousel";

function Home() {
  return (
    <div>
      <div className="flex justify-center bg-[#f3f6f8]">
        <div className="xl:w-[1320px] w-full ">
          <Header />
          <AboutHome />
          <div className="bg-[#00B98E] md:px-10 md:py-0 py-10"  data-aos="fade-up">
            <div className="flex md:justify-between justify-center items-center  lg:gap-40 md:gap-8">
              <div className="text-start md:w-[50%] xl:w-[65%]">
                <h1 className="text-[28px] text-white Inter font-bold">
                  Ready to get started
                </h1>
                <p className="text-sm text-white Hebo font-normal pb-5 pt-2">
                  Diam elitr est dolore at sanctus nonumy.
                </p>
                <div className="flex">
                  <input
                    type="email"
                    className="w-full py-3 pl-6 font-medium outline-none rounded-s-3xl"
                    placeholder="Enter Your Email"
                  />
                  <div className="rounded-e-3xl py-3 pr-5 bg-white">
                    <FaTelegramPlane size={28} color="#00B98E" />
                  </div>
                </div>
              </div>
              <div className="xl:mr-44 md:block hidden">
                <img src={img} className="relative top-12" alt="" />
              </div>
            </div>
          </div>
          <Service />
          <Feature />
          <div className="bg-white py-20">
            <Carousel />
          </div>
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
          <div className="bg-white py-20">
            <Team />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
