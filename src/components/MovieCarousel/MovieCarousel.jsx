"use client";

import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import MovieCard from "./MovieCard";

const MovieCarousel = () => {
  const Movies = [
    {
      title: "Venom",
      imageUrl:
        "https://media.lottecinemavn.com/Media/MovieFile/MovieImg/202410/11537_103_100003.jpg",
      _id: "1",
      rating: 8.5,
      type: "Science Fiction/Action",
    },
    {
      title: "Red One",
      imageUrl:
        "https://media.lottecinemavn.com/Media/MovieFile/MovieImg/202411/11597_103_100003.jpg",
      _id: "2",
      rating: 8.5,
      type: "Science Fiction/Action",
    },
    {
      title: "Tee Yod",
      imageUrl:
        "https://media.lottecinemavn.com/Media/MovieFile/MovieImg/202410/11567_103_100008.jpg",
      _id: "3",
      rating: 8.5,
      type: "Horror",
    },
    {
      title: "My Hero Academia",
      imageUrl:
        "https://media.lottecinemavn.com/Media/MovieFile/MovieImg/202411/11613_103_100001.jpg",
      _id: "4",
      rating: 8.5,
      type: "Anime",
    },
    {
      title: "Co dau hao mon",
      imageUrl:
        "https://media.lottecinemavn.com/Media/MovieFile/MovieImg/202410/11556_103_100003.jpg",
      _id: "5",
      rating: 8.5,
      type: "Comedy",
    },
    {
      title: "Ngay xua co mot chuyen tinh",
      imageUrl:
        "https://media.lottecinemavn.com/Media/MovieFile/MovieImg/202410/11188_103_100006.jpg",
      _id: "6",
      rating: 8.5,
      type: "Romantic",
    },
  ];

  return (
    <div className="sliderout">
      <Swiper
        slidesPerView={1}
        spaceBetween={1}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 2,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 2,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 2,
          },
          "@1.50": {
            slidesPerView: 6,
            spaceBetween: 2,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {Movies.map((movie) => (
          <SwiperSlide key={movie._id}>
            <MovieCard {...movie} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MovieCarousel;
