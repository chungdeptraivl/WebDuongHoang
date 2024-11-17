import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Image from "next/image";
import { Keyboard, Mousewheel, Navigation, Pagination } from "swiper/modules";

const width = window.innerWidth;
const height = window.innerHeight;
export const HomeSlider = () => {
  const banners = [
    {
      imgUrl:
        "https://media.lottecinemavn.com/Media/WebAdmin/95627345602649a0a2e6c1c99eba81c3.jpg",
    },
    {
      imgUrl:
        "https://media.lottecinemavn.com/Media/WebAdmin/de3fd720216e47ba9c466549e7789976.jpg",
    },
  ];

  return (
    <Swiper
      cssMode={true}
      navigation={true}
      pagination={true}
      mousewheel={true}
      keyboard={true}
      modules={[Navigation, Pagination, Mousewheel, Keyboard]}
      className="mySwiper"
    >
      {banners.map((banner, index) => {
        return (
          <SwiperSlide key={index}>
            <Image
              src={banner.imgUrl}
              alt=""
              width={width}
              height={height / 2}
              style={{
                objectFit: "cover",
              }}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
