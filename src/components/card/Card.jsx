import React from "react";
import "./card.css";
import { Link } from "react-router-dom";


const Card = ({ data }) => {
  const {
    poster_path,
    title,
    name,
    release_date,
    first_air_date,
    vote_average,
  } = data;
 

  return (
    <div className="container-card">
      <div className="card">
        <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt="" />
        <div className="info">
          <div className="name-rating">
            <span>🌟 {vote_average?.toFixed(1)}</span>
            <span>
              {release_date || first_air_date
                ? (release_date || first_air_date).slice(0, 4)
                : ""}
            </span>
          </div>
          <div className="title">
            <p>
              {title
                ? title?.length > 30
                  ? title.slice(0, 35) + "..."
                  : title
                : name.length > 30
                ? name.slice(0, 35)
                : name}
            </p>
          </div>
          <Link
            to={`/title/${data?.media_type}/${data?.id}/${
              data?.name ? data?.name : data?.title
            }`}
          >
            <div className="link">
              <p>View Details</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
