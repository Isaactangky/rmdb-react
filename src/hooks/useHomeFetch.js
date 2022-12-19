import { useState, useEffect } from "react";

import API from "../API";

import { isPersistedState } from "../helpers";
const initialState = {
  page: 0,
  results: [],
  total_pages: 0,
  total_results: 0,
};

export const useHomeFetch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [state, setState] = useState(initialState);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const fetchMovies = async (searchTerm = "", page) => {
    setLoading(true);
    try {
      setError(false);
      const movies = await API.fetchMovies(searchTerm, page);
      setState((prev) => ({
        ...movies,
        results:
          page > 1 ? [...prev.results, ...movies.results] : [...movies.results],
      }));
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };
  // Initial render
  useEffect(() => {
    if (!searchTerm) {
      const sessionState = isPersistedState("homeState");
      if (sessionState) {
        setState(sessionState);
        setLoading(false);
        return;
      }
    }
    setState(initialState);
    fetchMovies(searchTerm, 1);
  }, [searchTerm]);
  useEffect(() => {
    if (!isLoadingMore) return;
    fetchMovies(searchTerm, state.page + 1);
    setIsLoadingMore(false);
  }, [isLoadingMore, searchTerm, state.page]);
  // session Storage
  useEffect(() => {
    if (!searchTerm) sessionStorage.setItem("homeState", JSON.stringify(state));
  }, [searchTerm, state]);
  return {
    state,
    loading,
    error,
    searchTerm,
    setSearchTerm,
    setIsLoadingMore,
  };
};
