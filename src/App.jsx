import "./App.css";
import ProfilesPage from "./Pages/ProfilesPage";
import MainNetflixPage from "./Pages/MainNetflixPage";
import { Routes, Route } from "react-router-dom";
import AllMoviesPage from "./Pages/AllMoviesPage";
import MoviesDetailsPage from "./Pages/MoviesDetailsPage";
import TvShowPage from "./Pages/TvShowsPage";
import TvShowDetailPage from "./Pages/TvShowDetailPage";
import SubscriptionPage from "./Pages/SubscriptionPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ProfilesPage />} />
        <Route path="/home" element={<MainNetflixPage />} />
        //movies route + its Detail Route/Page
        <Route path="/movies" element={<AllMoviesPage />} />
        <Route path="/movie/:id" element={<MoviesDetailsPage />} />
        //TvShows route + its Detail Route/Page
        <Route path="/tv-shows" element={<TvShowPage />} />
        <Route path="/show/:id" element={<TvShowDetailPage />} />
        //Subscription-Page Route:
        <Route path="/subscriptions" element={<SubscriptionPage />} />
      </Routes>
      // toast Container
      <ToastContainer />
    </>
  );
}

export default App;
