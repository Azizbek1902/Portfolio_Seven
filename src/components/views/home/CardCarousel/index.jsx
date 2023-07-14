import { FaQuoteLeft } from "react-icons/fa";
import React from "react";
import {
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper/modules";
import img1 from "../../../../assets/img/testimonial-1.jpg";
import img2 from "../../../../assets/img/testimonial-2.jpg";
import img3 from "../../../../assets/img/testimonial-3.jpg";
import img4 from "../../../../assets/img/testimonial-4.jpg";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
function CardCarousel() {
  const data = [
    {
      id: 1,
      img: img1,
    },
    {
      id: 2,
      img: img2,
    },
    {
      id: 3,
      img: img3,
    },
    {
      id: 4,
      img: img4,
    },
    {
      id: 5,
      img: img1,
    },
    {
      id: 6,
      img: img2,
    },
    {
      id: 7,
      img: img3,
    },
    {
      id: 8,
      img: img4,
    },
  ];
  return (
    <div>
      <div className="flex justify-center bg-white">
        <div className="md:w-[98%] w-[95%] relative">
          <Swiper
            className="h-[50vh] flex"
            loop={true}
            rewind={true}
            breakpoints={{
              425: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
            slidesPerView={3}
            spaceBetween={0}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            slideNextClass="caroucel_active"
            navigation
          >
            {data.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="p-5 bg-white shadowCarouselCard w-full mt-10">
                  <FaQuoteLeft
                    color="#00B98E"
                    className="text-5xl pb-4 iconn"
                  />
                  <p className="text-base text-[#666565] font-normal Hebo pb-3 Carouseltext">
                    Dolor et eos labore, stet justo sed est sed. Diam sed sed
                    dolor stet amet eirmod eos labore diam
                  </p>
                  <div className="flex gap-5 items-center FlexDiv">
                    <img
                      src={item.img}
                      className="rounded-full h-[7vh]"
                      alt=""
                    />
                    <div className="text-start NameClinet">
                      <h1 className="text-base text-[#0E2E50] font-bold Inter pb-2 Carouseltext">
                        Client Name
                      </h1>
                      <p className="text-sm text-[#666565] Hebo font-normal carouselJob">
                        Profession
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default CardCarousel;
