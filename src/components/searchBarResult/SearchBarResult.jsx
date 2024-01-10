import React from "react";
import "./searchBarResult.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SearchBarResult = ({ selectedOption }) => {
  const searchResult = useSelector((state) => state.search.data);

  return (
    <div className="parent-container">
      <div className="searchbar-container">
        {searchResult?.results.map((item) => {
          return (
            <Link
              to={`title/${selectedOption}/${item?.id}/${
                item?.name ? item?.name : item?.title
              }`}
              key={item.id}
            >
              <div className="search-item">
                <img
                  src={`https://image.tmdb.org/t/p/w500/${
                    item?.poster_path ||
                    item?.backdrop_path ||
                    item?.profile_path
                  }`}
                />

                <div className="item-info">
                  <span>{item.name ? item?.name : item?.title}</span>
                  <span>
                    {item?.release_date || item?.first_air_date
                      ? (item.release_date || item.first_air_date).slice(0, 4)
                      : ""}
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SearchBarResult;
