import "./App.css";
import ProfilesPage from "./Pages/ProfilesPage";
import MainNetflixPage from "./Pages/MainNetflixPage";
import { Routes, Route } from "react-router-dom";
import AllMoviesPage from "./Pages/AllMoviesPage";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ProfilesPage />} />
        <Route path="/home" element={<MainNetflixPage />} />
        <Route path="/movies" element={<AllMoviesPage />} />
      </Routes>
    </>
  );
}

export default App;
