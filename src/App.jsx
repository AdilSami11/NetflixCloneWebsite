import "./App.css";
import ProfilesPage from "./Pages/ProfilesPage";
import MainNetflixPage from "./Pages/MainNetflixPage";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ProfilesPage />} />
        <Route path="/home" element={<MainNetflixPage />} />
      </Routes>
    </>
  );
}

export default App;
