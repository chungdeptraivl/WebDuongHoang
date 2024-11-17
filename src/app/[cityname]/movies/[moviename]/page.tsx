"use client"
import { title } from 'process'
import React from 'react';
import { BsShare } from 'react-icons/bs';
import { BsFillStarFill } from 'react-icons/bs';
import './MoviePage.css';
import MovieCarousel from '@/components/MovieCarousel/MovieCarousel';

import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import CelebCard from '@/components/CelebCard/CelebCard';
import { usePathname } from 'next/navigation';
import Link from 'next/link';


export const MoviePage = () => {
  const pathname = usePathname();

  const movie = {
    wideposter: "https://cinema.momocdn.net/img/76908753486687232-3V4kLQg0kSqPLctI5ziYWabAZYF.jpg",
    portraitposter: "https://cinema.momocdn.net/img/50202423422837044-VENOM-compressed.jpg",
    title: "Venom",
    rating: 8.5,
    halls: [
      "2D",
      "3D"
    ],
    languages: [
      "Vietnamese",
      "English"
    ],
    duration: "1h 49m",
    type: "Science Fiction/Action",
    releasedate: "Oct 25, 2024",
    cast: [
      {
        _id: "1",
        name: "Tom Hardy",
        role: "Actor",
        imageUrl: "https://cinema.momocdn.net/img/76908750257400641-d81K0RH8UX7tZj49tZaQhZ9ewH.jpg"
      },
      {
        _id: "2",
        name: "Chiwetel Ejiofor",
        role: "Actor",
        imageUrl: "https://cinema.momocdn.net/img/76908751995573608-kq5DDnqqofoRI0t6ddtRlsJnNPT.jpg"
      },
      {
        _id: "3",
        name: "Juno Temple",
        role: "Actor",
        imageUrl: "https://cinema.momocdn.net/img/76908752543143166-ntBw3aUZmIw9ObmsmvPgk1UKMd8.jpg"
      },
      {
        _id: "4",
        name: "Rhys Ifans",
        role: "Actor",
        imageUrl: "https://cinema.momocdn.net/img/76908752280435509-1D670EEsbky3EtO7XLG32A09p92.jpg"
      },
      {
        _id: "5",
        name: "Peggy Lu",
        role: "Actor",
        imageUrl: "https://cinema.momocdn.net/img/76908752835234916-ng5eaDcOf9kSwIYGNmwF9wEfIHp.jpg"
      },
      {
        _id: "6",
        name: "Alanna Ubach",
        role: "Actor",
        imageUrl: "https://cinema.momocdn.net/img/76908753098175777-p2sIpgftEIkhPrrpgu8wW8XEpDg.jpg"
      },
      {
        _id: "7",
        name: "Stephen Graham",
        role: "Actor",
        imageUrl: "https://cinema.momocdn.net/img/49489226315798680-AvBy4b55TtV9KQc4C35mZQZiuLk.jpg"
      },
    ],
    about: "Eddie và Venom đang chạy trốn. Bị săn đuổi bởi kẻ thù từ cả hai thế giới của họ, cặp đôi buộc phải đưa ra một quyết định tàn khốc sẽ kết thúc điệu nhảy cuối cùng của Venom và Eddie. Phần 3 mang tên “Venom: The Last Dance” sẽ là hành trình cuối cùng của Venom ở Sony. Nhưng liệu đây có phải là hy vọng cho việc Venom sẽ trở về MCU song hành cùng Người Nhện?"
  }
  return (
    <div className='moviepage'>
      <div className='c1'
        style={{
          backgroundImage: `url(${movie.wideposter})`
        }}>
        <div className='c11'>
          <div className='left'>
            <div className='movie_poster'
              style={{
                backgroundImage: `url(${movie.portraitposter})`
              }}
            >
              <p>In cinemas</p>
            </div>
            <div className='movie_details'>
              <p className='title'>
                {movie.title}
              </p>
              <p className='rating'>
                <BsFillStarFill className='star' />&nbsp;&nbsp;
                {movie.rating}/10
              </p>
              <div className='halls_languages'>
                <p className='halls'>
                  {
                    movie.halls.map((hall, index) => {
                      return (
                        <span key={index}>{hall} </span>
                      )
                    })
                  }
                </p>
                <p className='languages'>
                  {
                    movie.languages.map((language, index) => {
                      return (
                        <span key={index}>{language} </span>
                      )
                    })
                  }
                </p>
              </div>
              <p className='duration_type_releasedate'>
                <span className='duration'>
                  {movie.duration}
                </span>
                <span>*</span>
                <span className='type'>
                  {movie.type}
                </span>
                <span>*</span>
                <span className='releasedate'>
                  {movie.releasedate}
                </span>
              </p>
              <Link
                href={`${pathname}/buytickets`}
                className='linkstylenone'
              >
                <button className='bookbtn'>Book Tickets</button>
              </Link>
            </div>
          </div>
          <div className='right'>
            <button className='sharebtn'><BsShare className='shareicon' />Share</button>
            <Link
                href={`${pathname}/crudmovieadmin`}
                className='linkstylenone'
              >
                <button className='bookbtn'>Movie Manage</button>
              </Link>
              <Link
                href={`${pathname}/crudtheatreadmin`}
                className='linkstylenone'
              >
                <button className='bookbtn'>Theatre Manage</button>
              </Link>
          </div>
        </div>
      </div>
      <div className='c2'>
        <h1>About the Movie</h1>
        <p>{movie.about}</p>
        <div className='line'></div>
        <h1>Cast</h1>
        <div className='circlecardslider'>
          <Swiper
            slidesPerView={1}
            spaceBetween={1}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              '@0.00': {
                slidesPerView: 1,
                spaceBetween: 2,
              },
              '@0.75': {
                slidesPerView: 2,
                spaceBetween: 2,
              },
              '@1.00': {
                slidesPerView: 3,
                spaceBetween: 2,
              },
              '@1.50': {
                slidesPerView: 6,
                spaceBetween: 2,
              },
            }}
            modules={[Pagination]}
            className='mySwiper'
          >
            {
              movie.cast.map((cast, index) => {
                return (
                  <SwiperSlide key={index}>
                    <CelebCard {...cast} />
                  </SwiperSlide>
                )
              })
            }
          </Swiper>
        </div>
        <div className='line'></div>
        <h1>You might also like</h1>
        <MovieCarousel />
      </div>
    </div>
  )
}

export default MoviePage