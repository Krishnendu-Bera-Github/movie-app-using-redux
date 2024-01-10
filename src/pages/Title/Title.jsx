import React, { useEffect, useState } from "react";
import "./title.css";
import MovieDetails from "../../components/movieDetails/MovieDetails";
import { useLocation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetails } from "../../features/detailsSlice";
import Spinner from "../../components/Spinner/Spinner";

const Title = () => {
  const [resultInfo, setResultInfo] = useState(null);
  const { media_type, id, name } = useParams();
  const dispatch = useDispatch();
  const location = useLocation();

  const movieInfo = useSelector((state) => state.details.data);

  const isLoading = useSelector((state) => state.details.isLoading);


  useEffect(() => {
    dispatch(getDetails(`/${media_type}/${id}`));
  }, [location]);

  useEffect(() => {
    setResultInfo(movieInfo);
  }, [movieInfo]);

  return (
    <div>
      {isLoading ? (
        <Spinner />
      ) : (
        resultInfo && <MovieDetails data={resultInfo} />
      )}
    </div>
  );
};

export default Title;
