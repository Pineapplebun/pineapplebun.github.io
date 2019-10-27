import React, { FunctionComponent } from "react";
import styles from "./profile-card.module.css";

export const ProfileCard: FunctionComponent<{}> = () => (
  <div className={styles.container}>
    <div className={styles.pictureContainer}>
      <img alt="My Face" src="profile-pic.jpg" className={styles.picture}></img>
    </div>
    <h1 className={styles.title}>Kevin Chen</h1>
    <span>Software Developer</span>
    <span className={styles.logos}>
      <a
        aria-label="My LinkedIn Page"
        href="https://www.linkedin.com/in/kevin-chen-943850121/"
      >
        <img
          alt="My LinkedIn"
          src="LI-In-Bug.png"
          className={styles.linkedin}
        ></img>
      </a>
      <a aria-label="My Github Page" href="https://github.com/Pineapplebun">
        <img
          alt="My Github"
          src="GitHub-Mark-Light-64px.png"
          className={styles.github}
        ></img>
      </a>
    </span>
  </div>
);
