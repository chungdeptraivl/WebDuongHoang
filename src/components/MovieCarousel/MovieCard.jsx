"use client";

import { useRouter } from "next/navigation";
import { BsFillStarFill } from "react-icons/bs";
import "./MovieCard.css";

const MovieCard = (data) => {
  const router = useRouter();
  const city = "Hanoi";
  const { title, imageUrl, rating, type } = data;

  return (
    <div
      className="moviecard"
      onClick={() => {
        router.push(`/${city}/movies/${title}`);
      }}
    >
      <div
        className="movieimg"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      >
        <p className="rating">
          <BsFillStarFill className="star" />
          &nbsp;&nbsp;
          {rating}/10
        </p>
      </div>
      <div className="details">
        <p className="title">{title}</p>
        <p className="type">{type}</p>
      </div>
    </div>
  );
};

export default MovieCard;
