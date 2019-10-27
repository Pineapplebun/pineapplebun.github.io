import React from "react";
import styles from "./post.module.css";

export default class Post extends React.Component<{
  title: string;
  message: string;
}> {
  render() {
    return (
      <div className={styles.post}>
        <h2>{this.props.title}</h2>
        <p>{this.props.message}</p>
      </div>
    );
  }
}
