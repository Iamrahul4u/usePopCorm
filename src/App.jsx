import ListBox from "./Components/ListBox";
import MovieDetails from "./Components/MovieDetails";
import NavBar from "./Components/NavBar";
import WatchedSummary from "./Components/WatchedSummary";
import { useMovie } from "./contexts/MovieProvider";

export default function App() {
  const { selectedID } = useMovie();
  return (
    <>
      <NavBar />
      <main className="main">
        <ListBox />
        <div className="box">
          {selectedID ? <MovieDetails /> : <WatchedSummary />}
        </div>
      </main>
    </>
  );
}
