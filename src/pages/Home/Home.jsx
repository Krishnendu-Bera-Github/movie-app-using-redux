import React, { useEffect } from "react";
import Card from "../../components/card/Card";
import { useDispatch, useSelector } from "react-redux";
import { getTrending } from "../../features/movieSlice";
import "./home.css";
import Spinner from "../../components/Spinner/Spinner";

const Home = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies);

  // console.log(movies);
  useEffect(() => {
    dispatch(getTrending("/trending/all/week"));
  }, [dispatch]);


  return (
    <div className="home-container">
      <div className="card-container">
        {movies?.isLoading ? (
          <Spinner />
        ) : (
          movies?.data?.results.map((item) => (
            <div className="card-item" key={item.id}>
              <Card data={item} />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
