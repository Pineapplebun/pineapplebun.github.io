import React from "react";
import misc from "../data/misc.json";
import styles from "./home-content.module.css";

export default class HomeContent extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <h1>{misc.RENOVATIONS}</h1>
      </div>
    );
  }
}
