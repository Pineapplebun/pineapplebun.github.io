import React from "react";
import styles from "./home-content.module.css";
import Post from "../ui-post/post";
import SearchBar from "../ui-search-bar/search-bar";

export default class HomeContent extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.search}>
          <SearchBar></SearchBar>
        </div>

        <div className={styles.posts}>
          <Post title="My First Post" message="Welcome to my website!"></Post>
          <Post title="My First Post" message="Welcome to my website!"></Post>
          <Post title="My First Post" message="Welcome to my website!"></Post>
        </div>
      </div>
    );
  }
}
