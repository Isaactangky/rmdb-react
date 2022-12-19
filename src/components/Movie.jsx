import { Fragment } from "react/cjs/react.production.min";

import { IMAGE_BASE_URL, POSTER_SIZE } from "../config";
import { useParams } from "react-router-dom";
import NoImage from "../images/no_image.jpg";

import { useMovieFetch } from "../hooks/useMovieFetch";
import Grid from "./Grid/Grid.component";
import Spinner from "./Spinner/Spinner.component";
import BreadCrumb from "./BreadCrumb/BreadCrumb.component";
import MovieInfo from "./MovieInfo/MovieInfo.component";
import MovieInfoBar from "./MovieInfoBar/MovieInfoBar.component";
import Actor from "./Actor/Actor.component";
const Movie = () => {
  const { movieId } = useParams();
  const { isLoading, state: movie, error } = useMovieFetch(movieId);
  if (isLoading) return <Spinner />;
  if (error) return <div>Something went wrong...</div>;

  return (
    <Fragment>
      <BreadCrumb movieTitle={movie.original_title} />
      <MovieInfo movie={movie} />
      <MovieInfoBar
        time={movie.runtime}
        budget={movie.budget}
        revenue={movie.revenue}
      />
      <Grid header="Actors">
        {movie.actors?.map((actor) => (
          <Actor
            key={actor.credit_id}
            name={actor.name}
            character={actor.character}
            imageUrl={
              actor.profile_path
                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
                : NoImage
            }
          />
        ))}
      </Grid>
    </Fragment>
  );
};

export default Movie;
