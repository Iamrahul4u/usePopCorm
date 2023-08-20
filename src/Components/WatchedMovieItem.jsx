import { useMovie } from "../contexts/MovieProvider";

function WatchedMovieItem({ movie }) {
  const { selectedID, setSelectedID, watched, setWatched } = useMovie();
  function handleSelect(id) {
    setSelectedID(id);
  }
  function onDeleteMovie(id) {
    setWatched((watched) => watched.filter((movie) => movie.imdbID !== id));
  }
  return (
    <>
      {
        <li key={movie.imdbID}>
          <div onClick={() => handleSelect(movie.imdbID)}>
            <img src={movie.Poster} alt={`${movie.Title} poster`} />
            <h3>{movie.Title}</h3>
            <div>
              <p>
                <span>⭐️</span>
                <span>{movie.imdbRating}</span>
              </p>

              <p>
                <span>⏳</span>
                <span>{movie.runtime} min</span>
              </p>
            </div>
          </div>
          <button
            className="btn-delete"
            onClick={() => onDeleteMovie(movie.imdbID)}
          >
            X
          </button>
        </li>
      }
    </>
  );
}

export default WatchedMovieItem;
