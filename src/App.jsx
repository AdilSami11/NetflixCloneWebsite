import "./App.css";
import Navbar from "./Components/Navbar";
import ProfilesPage from "./Pages/ProfilesPage";
import MainNetflixPage from "./Pages/MainNetflixPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProfilesPage />} />
        <Route path="/home" element={<MainNetflixPage />} />
      </Routes>
    </>
  );
}

export default App;
