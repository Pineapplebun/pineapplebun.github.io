import React from "react";
import about from "../data/about.json";
import styles from "./about-content.module.css";

export const AboutContent = () => {
  return (
    <div className={styles.about}>
      <h1>ME</h1>
      <figure>
        <img alt="Me on Mt.Fuji above the clouds" src="me_above_mtfuji.jpg"></img>
        <figcaption>&#9968;Mt. Fuji 2017&#9968;</figcaption>
      </figure>
      <p>
        <h2>INTRODUCTION</h2>
        {about.INTRO}
        <br />
        <br />
        <h2>HOBBIES</h2>
        {about.HOBBIES}
        <br />
        <br />
        <h2>PROJECTS</h2>
        {about.PROJECTS}
        <br />
        <br />
        <h2>LEARNING INITIATIVES</h2>
        <ul>
          {about.INITIATIVES.map(i => (
            <li>{i}</li>
          ))}
        </ul>
      </p>
    </div>
  );
};
