import React from "react";

const ProfilesPage = () => {
  return (
    <div className="profiles-main-wrapper">
      <div className="container">
        <div className="profiles-title">
          <h2>Profiles</h2>
        </div>
        <div className="profile-cards-wrapper">
          <div className="profile-card">
            <div className="profile-img-wrap">
              <img src="/src/assets/ProfilePicture_1.png" alt="profile-1" />
            </div>
            <div className="profile-info-wrap">
              <h4>Murad</h4>
            </div>
          </div>
          <div className="profile-card">
            <div className="profile-img-wrap">
              <img src="/src/assets/ProfilePicture_2.png" alt="profile-2" />
            </div>
            <div className="profile-info-wrap">
              <h4>AdilSami</h4>
            </div>
          </div>
          <div className="profile-card">
            <div className="profile-img-wrap">
              <img src="/src/assets/ProfilePicture_3.png" alt="profile-3" />
            </div>
            <div className="profile-info-wrap">
              <h4>Shoaib Afridi</h4>
            </div>
          </div>
          <div className="profile-card">
            <div className="profile-img-wrap">
              <img src="/src/assets/ProfilePicture_4.png" alt="profile-4" />
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
