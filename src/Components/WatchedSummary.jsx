import { useState } from "react";
import { useMovie } from "../contexts/MovieProvider";
import WatchedSummaryList from "./WatchedSummaryList";

const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

function WatchedSummary() {
  const [isOpen2, setIsOpen2] = useState(true);
  const { watched } = useMovie();

  const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  // const avgUserRating = average(watched.map((movie) => movie.userRating));
  const avgRuntime = average(watched.map((movie) => movie.runtime));

  return (
    <>
      <button
        className="btn-toggle"
        onClick={() => setIsOpen2((open) => !open)}
      >
        {isOpen2 ? "–" : "+"}
      </button>
      {isOpen2 && (
        <>
          <div className="summary">
            <h2>Movies you watched</h2>
            <div>
              <p>
                <span>#️⃣</span>
                <span>{watched.length} movies</span>
              </p>
              <p>
                <span>⭐️</span>
                <span>{avgImdbRating.toFixed(2)}</span>
              </p>

              <p>
                <span>⏳</span>
                <span>{avgRuntime.toFixed(2)} min</span>
              </p>
            </div>
          </div>
          <WatchedSummaryList />
        </>
      )}
    </>
  );
}
export default WatchedSummary;
