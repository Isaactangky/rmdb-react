import { useState, useEffect } from "react";
import API from "../API";

import { isPersistedState } from "../helpers";
export const useMovieFetch = (movieId) => {
  const [state, setState] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setIsLoading(true);

        setError(false);
        const movie = await API.fetchMovie(movieId);

        const credits = await API.fetchCredits(movieId);
        const directors = credits.crew.filter(
          (member) => member.job === "Director"
        );
        setState({
          ...movie,
          directors,
          actors: credits.cast,
        });
      } catch (error) {
        setError(true);
      }
      setIsLoading(false);
    };
    const sessionState = isPersistedState(movieId);
    if (sessionState) {
      setState(sessionState);
      setIsLoading(false);
      return;
    }
    fetchMovie();
  }, [movieId]);
  useEffect(() => {
    sessionStorage.setItem(movieId, JSON.stringify(state));
  }, [movieId, state]);
  return {
    state,
    isLoading,
    error,
  };
};
