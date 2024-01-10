import React, { useEffect, useRef, useState } from "react";
import "./navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import imdbLogo from "../../assets/imdb.png";
import { getSearch } from "../../features/searchSlice";
import { useDispatch, useSelector } from "react-redux";
import SearchBarResult from "../searchBarResult/SearchBarResult";
import { Link, useNavigate } from "react-router-dom";

const Search = () => {
  const [text, setText] = useState("");
  const [selectedOption, setSelectedOption] = useState("multi");
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const searchResult = useSelector((state) => state.search.data);
  const searchInputref = useRef(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setText(e.target.value);
    dispatch(getSearch(`/search/${selectedOption}?query=${e.target.value}`));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate(`/search/${selectedOption}/${text}`);
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClick = (e) => {
      if (searchInputref.current) {
        if (!searchInputref.current.contains(e.target)) {
          setIsOpen(true);
        } else {
          setIsOpen(false);
        }
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  useEffect(() => {
    if (text) {
      dispatch(getSearch(`/search/${selectedOption}?query=${text}`));
      console.log("selected");
    }
  }, [selectedOption]);

  return (
    <>
      <div className="navbar-container">
        <div className="container-search">
          <Link to="/">
            <div className="logo">
              <img src={imdbLogo} alt="" />
            </div>
          </Link>
          <div className="search-items">
            <div className="dropdown">
              <select
                value={selectedOption}
                onChange={(e) => setSelectedOption(e.target.value)}
              >
                <option value="multi">All</option>
                <option value="movie">Movies</option>
                <option value="tv">Tv Shows</option>
              </select>
            </div>
            <div className="line"></div>
            <form onSubmit={handleSubmit}>
              <div type="submit" className="search">
                <input
                  type="text"
                  value={text}
                  onChange={handleChange}
                  ref={searchInputref}
                  placeholder="Search Movies or TV shows"
                />

                <Link to={text && `/search/${selectedOption}/${text}`}>
                  <div className="search-icon">
                    <SearchIcon />
                  </div>
                </Link>
              </div>
            </form>
          </div>
          <div className="menu"></div>
          <div></div>
        </div>
      </div>

      {!isOpen && searchResult?.results && text.length > 0 ? (
        <SearchBarResult selectedOption={selectedOption} />
      ) : (
        ""
      )}
    </>
  );
};
export default Search;
