import React from "react";
import styles from "./search-bar.module.css";

export default class SearchBar extends React.Component {
  render() {
    return (
      <div className={styles.search}>
        <input type="text" placeholder="Search for blog posts"></input>
      </div>
    );
  }
}
