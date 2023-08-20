import { useMovie } from "../contexts/MovieProvider";
import WatchedMovieItem from "./WatchedMovieItem";

function WatchedSummaryList() {
  const { watched } = useMovie();
  return (
    <div>
      <ul className="list list-movies">
        {watched.map((movie) => (
          <WatchedMovieItem movie={movie} key={movie.imdbID} />
        ))}
      </ul>
    </div>
  );
}

export default WatchedSummaryList;
