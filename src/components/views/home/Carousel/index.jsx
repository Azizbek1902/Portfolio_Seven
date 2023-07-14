import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import img1 from "../../../../assets/img/logo-1.png";
import img2 from "../../../../assets/img/logo-2.png";
import img3 from "../../../../assets/img/logo-3.png";
import img4 from "../../../../assets/img/logo-4.png";
import img5 from "../../../../assets/img/logo-5.png";
import img6 from "../../../../assets/img/logo-6.png";
import img7 from "../../../../assets/img/logo-7.png";
import img8 from "../../../../assets/img/logo-8.png";
import "swiper/css";
function Carousel() {
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
      img: img5,
    },
    {
      id: 6,
      img: img6,
    },
    {
      id: 7,
      img: img7,
    },
    {
      id: 8,
      img: img8,
    }
  ];
  return (
    <div>
      <div className="bg-[#00B98E] flex justify-center py-10">
        <div className="w-[95%]">
          <Swiper
            spaceBetween={50}
            breakpoints={{
              320: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 4,
              },
              1024: {
                slidesPerView: 5,
              },
            }}
            slidesPerView={3}
          >
            {data.map((item) => (
              <SwiperSlide key={item}>
                <div>
                  <img src={item.img} alt="" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
