import React from "react";
import Typical from "react-typical";
import './Profile.css'

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <a href="https://www.instagram.com/facebook/?hl=en">
              <i className="fa fa-facebook-square"></i>
            </a>
            <a href="https://support.google.com/answer/2451065?hl=en">
              <i className="fa fa-google-plus-square"></i>
            </a>
            <a href="https://www.instagram.com/instagram/?hl=en">
              <i className="fa fa-instagram"></i>
            </a>
            <a href="https://www.youtube.com/feed/playlists">
              <i className="fa fa-youtube-square"></i>
            </a>
            <a href="https://x.com/?lang=en">
              <i className="fa fa-twitter-square"></i>
            </a>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              Hello, I'M <span className="highlighted-text">Manoj</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    "Ethusiastic Dev",
                    1000,
                    "Frontend Developer",
                    1000,
                    "React Js Developer",
                    1000,
                  ]}
                />
              </h1>
            </span>
            <span className="profile-role-tagline">
              Knack of building applications with frontend operations
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn">Hire Me</button>
            <a href="MANOJ_resume.pdf" download={"Manoj Mnj.pdf"}>
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
