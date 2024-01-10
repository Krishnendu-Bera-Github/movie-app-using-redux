import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { getSearch } from "../../features/searchSlice";
import { useDispatch, useSelector } from "react-redux";
import Card from "../../components/card/Card";
import "./search.css";

const Search = () => {
  const dispatch = useDispatch();
  const { selectedOption, name } = useParams();
  const { pathname } = useLocation();
  const [data, setData] = useState([]);
  const navigate = useNavigate();


  const searchResult = useSelector((state) => state.search?.data?.results);


  useEffect(() => {
    setData(searchResult);
  }, [pathname]);

  return (
    <div className="parent-search-container">
      <div className="searchResult-container">
        {data?.map((item) => (
          <div className="card-item" key={item.id}>
            <Card data={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
