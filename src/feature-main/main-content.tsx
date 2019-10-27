import React from "react";
import { Route, Switch } from "react-router-dom";
import { AboutContent } from "../feature-about/about-content";
import HomeContent from "../feature-home/home-content";
import styles from "./main-content.module.css";

export default function MainContent() {
  return (
    <div className={styles.content}>
      <Switch>
        <Route path="/home" component={HomeContent}></Route>
        <Route path="/about" component={AboutContent}></Route>
      </Switch>
    </div>
  );
}
