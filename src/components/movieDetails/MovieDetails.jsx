import React from "react";
import "./movieDetails.css";

const MovieDetails = ({ data }) => {
  const {
    backdrop_path,
    genres,
    original_title,
    popularity,
    poster_path,
    runtime,
    tagline,
    title,
    vote_average,
    vote_count,
    release_date,
    overview,
    name,
    first_air_date,
    created_by,
    episode_run_time,
    number_of_episodes,
    number_of_seasons,
  } = data;

  return (
    <div className="movieDetails-container">
      <div className="back-img">
        <img
          src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
          alt=""
        />
        <div className="overlay"></div>
        <div className="poster-content">
          <div className="poster-img">
            <img
              src={`https://image.tmdb.org/t/p/original/${poster_path}`}
              alt=""
            />
          </div>
          <div className="movie-content">
            <div className="title">
              <h1>
                {title ? title : original_title ? original_title : name}{" "}
                <span>
                  ({(release_date ? release_date : first_air_date)?.slice(0, 4)}
                  )
                </span>
              </h1>
            </div>
            <div className="time-genre">
              <p>{release_date ? release_date : first_air_date}</p>
              <p className="bullet">•</p>

              <p>{genres?.map((item) => item.name).join(", ")}</p>
              <p className="bullet">•</p>

              <p>{number_of_episodes ? episode_run_time[0] : runtime} mins</p>
            </div>
            <div className="rating">
              <p>Rating: {vote_average?.toFixed(1)}</p>
              <p>({vote_count}) votes</p>
            </div>
            {number_of_seasons && (
              <div className="season">
                <p>
                  {number_of_seasons?.length > 1 ? "Seasons" : "Season"}:{" "}
                  {number_of_seasons}
                </p>
                <p>
                  {number_of_episodes ? `Episodes: ${number_of_episodes}` : ""}
                </p>
              </div>
            )}
            {tagline && (
              <div className="tagline">
                <p>{tagline}</p>
              </div>
            )}
            {overview && (
              <div className="overview">
                <h3>Overview</h3>
                <p>
                  {overview.length < 500
                    ? overview
                    : overview.slice(0, 500) + "..."}
                </p>
              </div>
            )}
            {created_by?.length !== 0 ? (
              <div className="creator">
                {created_by ? <p>Creator</p> : ""}
                <p className="director">
                  {created_by?.map((item) => item.name).join(", ")}
                </p>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
