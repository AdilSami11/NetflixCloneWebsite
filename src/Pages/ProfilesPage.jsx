import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import profile1 from "../assets/ProfilePicture_1.png";
import profile2 from "../assets/ProfilePicture_2.png";
import profile3 from "../assets/ProfilePicture_3.png";
import profile4 from "../assets/ProfilePicture_4.png";
import { ProfileContext } from "../Context/ProfileContext";
// import { fetchPopularMovies } from "../Api/tmdb";
const profiles = [
  { name: "Murad", img: profile1 },
  { name: "AdilSami", img: profile2 },
  { name: "Shoaib Afridi", img: profile3 },
  { name: "Asad Khan", img: profile4 },
];

// ******************************************
const ProfilesPage = () => {
  // const [movies, setMovies] = useState([]);
  const navigate = useNavigate();
  const { setProfile } = useContext(ProfileContext);
  const handleProfileClick = (p) => {
    setProfile(p);
    navigate("/home");
  };

  //*************************************************
  // Api Fetching

  // useEffect(() => {
  //   const getMovies = async () => {
  //     const data = await fetchPopularMovies();
  //     setMovies(data);
  //   };
  //   getMovies();
  // }, []);

  return (
    <div className="profiles-main-wrapper">
      <div className="container">
        <div className="profiles-title">
          <h2>Profiles</h2>
        </div>
        <div className="profile-cards-wrapper">
          {profiles.map((p, index) => (
            <div
              key={index}
              className="profile-card"
              onClick={() => handleProfileClick(p)}
            >
              <div className="profile-img-wrap">
                <img src={p.img} alt={p.name} />
              </div>
              <div className="profile-info-wrap">
                <h4>{p.name}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfilesPage;
