import { useState } from "react";
import { useMovie } from "../contexts/MovieProvider";

function ListBox() {
  const [isOpen1, setIsOpen1] = useState(true);
  const { movies, setSelectedID, selectedID } = useMovie();

  function handleSelect(movie) {
    setSelectedID(() => (movie.imdbID === selectedID ? "" : movie.imdbID));
  }
  return (
    <div className="box">
      <button
        className="btn-toggle"
        onClick={() => setIsOpen1((open) => !open)}
      >
        {isOpen1 ? "–" : "+"}
      </button>
      {isOpen1 && (
        <ul className="list list-movies">
          {movies?.map((movie) => (
            <li key={movie.imdbID} onClick={() => handleSelect(movie)}>
              <img src={movie.Poster} alt={`${movie.Title} poster`} />
              <h3>{movie.Title}</h3>
              <div>
                <p>
                  <span>🗓</span>
                  <span>{movie.Year}</span>
                </p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ListBox;
