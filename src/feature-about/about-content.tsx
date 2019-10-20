import React from "react";
import styles from "./about-content.module.css";

export const AboutContent = () => {
  return (
    <div className={styles.about}>
      <h1>About Me</h1>
      <p>
        I am a software developer based in Toronto looking for opportunities to
        be a contributor amazing ideas, projects, and products. My current
        interests revolve around system design, operating systems, artificial
        intelligence, and software systems.
        <br />
        <br />
        Some of my hobbies include: board games, laser tag, escape rooms,
        strategy games, tennis, ping pong, hiking, travelling, and trying
        different cuisines!
        <br />
        <br />
        <br />
      </p>
      <figure>
        <img
          alt="Me on Mt.Fuji above the clouds"
          src="me_above_mtfuji.jpg"
        ></img>
        <figcaption>&#9968;Mt. Fuji 2017&#9968;</figcaption>
      </figure>
    </div>
  );
};
