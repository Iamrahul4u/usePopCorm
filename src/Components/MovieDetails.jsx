import { useEffect, useState } from "react";
import { useMovie } from "../contexts/MovieProvider";

function MovieDetails() {
  const { selectedID, setSelectedID, KEY, watched, setWatched } = useMovie();
  const [movie, setMovie] = useState({});

  const isWatched = watched.map((movie) => movie.imdbID).includes(selectedID);
  useEffect(() => {
    async function fetchMovieData() {
      const res = await fetch(
        `http://www.omdbapi.com/?apikey=${KEY}&i=${selectedID}`
      );
      const data = await res.json();
      setMovie(data);
    }
    fetchMovieData();
  }, [selectedID]);
  const {
    Title: title,
    Year: year,
    Poster: poster,
    Runtime: runtime,
    imdbRating,
    Plot: plot,
    Released: released,
    Actors: actors,
    Director: director,
    Genre: genre,
  } = movie;
  function onCloseSelected() {
    setSelectedID("");
  }
  function handleAdd() {
    const movie = {
      imdbID: selectedID,
      Title: title,
      Year: year,
      Poster: poster,
      imdbRating: Number(imdbRating),
      runtime: Number(runtime.split(" ").at(0)),
    };
    // console.log(movie);
    setWatched((watched) => [...watched, movie]);
    setTimeout(() => onCloseSelected(), 1000);
  }
  console.log(watched);
  return (
    <div className="details">
      <>
        <header>
          <button className="btn-back" onClick={onCloseSelected}>
            &larr;
          </button>
          <img src={poster} alt={`Poster of ${movie} movie`} />
          <div className="details-overview">
            <h2>{title}</h2>
            <p>
              {released} &bull; {runtime}
            </p>
            <p>{genre}</p>
            <p>
              <span>⭐️</span>
              {imdbRating} IMDb rating
            </p>
          </div>
        </header>

        <section>
          <div className="rating">
            {!isWatched ? (
              <button className="btn-add" onClick={() => handleAdd()}>
                + Add to List
              </button>
            ) : (
              <p className="rating">Already Added into the list ⭐</p>
            )}
          </div>
          <p>
            <em>{plot}</em>
          </p>
          <p>Starring {actors}</p>
          <p>Directed by {director}</p>
        </section>
      </>
    </div>
  );
}

export default MovieDetails;
