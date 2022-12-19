// config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from "../config";
// API
import NoImage from "../images/no_image.jpg";
// hook

import { useHomeFetch } from "../hooks/useHomeFetch";

//components
import HeroImage from "./HeroImage/HeroImage.component";
import { Fragment } from "react";
import Grid from "./Grid/Grid.component";
import Thumb from "./Thumb/Thumb.component";
import Spinner from "./Spinner/Spinner.component";
import SearchBar from "./SearchBar/SearchBar.component";
import Button from "./Button/Button.component";
const Home = () => {
  const { state, loading, error, searchTerm, setSearchTerm, setIsLoadingMore } =
    useHomeFetch();
  return (
    <Fragment>
      {!searchTerm && state.results[0] ? (
        <HeroImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
          title={state.results[0].original_title}
          text={state.results[0].overview}
        />
      ) : null}
      <SearchBar setSearchTerm={setSearchTerm} />
      <Grid header={searchTerm ? "Search Result" : "Popular Movies"}>
        {state.results.map((movie) => (
          <Thumb
            key={movie.id}
            image={
              movie.poster_path
                ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                : NoImage
            }
            movieId={movie.id}
            clickable
          >
            {movie.title}
          </Thumb>
        ))}
      </Grid>
      {loading && <Spinner />}
      {!loading && state.page < state.total_pages && (
        <Button callback={() => setIsLoadingMore(true)}>Load More</Button>
      )}
    </Fragment>
  );
};

export default Home;
