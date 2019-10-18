import React, { FunctionComponent } from "react";
import "./profile-card.css";

export const ProfileCard: FunctionComponent<{}> = () => (
  <div className="profile-card-container">
    <div className="profile-picture-card">
      <img alt="My Face" src="profile-pic.jpg" className="picture"></img>
    </div>
    <span>Kevin Chen</span>
    <span>Software Developer</span>
    <span className="logo-container">
      <a href="https://www.linkedin.com/in/kevin-chen-943850121/">
        <img alt="My LinkedIn" src="LI-In-Bug.png" className="logo-one"></img>
      </a>
      <a href="https://github.com/Pineapplebun">
        <img
          alt="My Github"
          src="GitHub-Mark-Light-64px.png"
          className="logo-two"
        ></img>
      </a>
    </span>
  </div>
);
