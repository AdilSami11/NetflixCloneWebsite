import React from "react";
import { useNavigate } from "react-router-dom";
import profile1 from "../assets/ProfilePicture_1.png";
import profile2 from "../assets/ProfilePicture_2.png";
import profile3 from "../assets/ProfilePicture_3.png";
import profile4 from "../assets/ProfilePicture_4.png";

const ProfilesPage = () => {
  const navigate = useNavigate();

  const handleProfileClick = () => {
    navigate("/home");
  };
  return (
    <div className="profiles-main-wrapper">
      <div className="container">
        <div className="profiles-title">
          <h2>Profiles</h2>
        </div>
        <div className="profile-cards-wrapper">
          <div className="profile-card" onClick={handleProfileClick}>
            <div className="profile-img-wrap">
              <img src={profile1} alt="profile-1" />
            </div>
            <div className="profile-info-wrap">
              <h4>Murad</h4>
            </div>
          </div>
          <div className="profile-card" onClick={handleProfileClick}>
            <div className="profile-img-wrap">
              <img src={profile2} alt="profile-2" />
            </div>
            <div className="profile-info-wrap">
              <h4>AdilSami</h4>
            </div>
          </div>
          <div className="profile-card" onClick={handleProfileClick}>
            <div className="profile-img-wrap">
              <img src={profile3} alt="profile-3" />
            </div>
            <div className="profile-info-wrap">
              <h4>Shoaib Afridi</h4>
            </div>
          </div>
          <div className="profile-card" onClick={handleProfileClick}>
            <div className="profile-img-wrap">
              <img src={profile4} alt="profile-4" />
            </div>
            <div className="profile-info-wrap">
              <h4>Asad Khan</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilesPage;
