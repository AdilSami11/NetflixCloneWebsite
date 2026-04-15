import "./App.css";
import ProfilesPage from "./Pages/ProfilesPage";
import MainNetflixPage from "./Pages/MainNetflixPage";
import { Routes, Route } from "react-router-dom";
import AllMoviesPage from "./Pages/AllMoviesPage";
import MoviesDetailsPage from "./Pages/MoviesDetailsPage";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ProfilesPage />} />
        <Route path="/home" element={<MainNetflixPage />} />
        <Route path="/movies" element={<AllMoviesPage />} />
        <Route path="/movie/:id" element={<MoviesDetailsPage />} />
      </Routes>
    </>
  );
}

export default App;
