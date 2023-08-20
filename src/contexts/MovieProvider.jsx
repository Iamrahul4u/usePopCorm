import { createContext, useContext, useEffect, useState } from "react";

const KEY = "15bdcdf0";

const MovieDataProvider = createContext(null);

function MovieProvider({ children }) {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState([]);
  const [selectedID, setSelectedID] = useState("");
  useEffect(() => {
    async function fetchMovies() {
      const res = await fetch(
        `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`
      );
      const data = await res.json();
      console.log(data.Search);
      setMovies(data.Search);
    }
    if (query.length < 3) return;
    fetchMovies();
  }, [query]);
  return (
    <MovieDataProvider.Provider
      value={{
        query,
        movies,
        watched,
        setQuery,
        setMovies,
        setWatched,
        selectedID,
        setSelectedID,
        KEY,
      }}
    >
      {children}
    </MovieDataProvider.Provider>
  );
}

export function useMovie() {
  const context = useContext(MovieDataProvider);
  return context;
}

export default MovieProvider;
