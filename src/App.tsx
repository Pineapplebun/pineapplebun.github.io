import React from "react";
import styles from "./App.module.css";
import NavigationSidebar from "./feature-navigation/navigation-sidebar";
import MainContent from "./feature-main/main-content";
import { HashRouter } from "react-router-dom";

function App() {
  return (
    <HashRouter basename="/">
      <div className={styles.app}>
        <div className={styles.sidebar}>
          <NavigationSidebar></NavigationSidebar>
        </div>
        <div className={styles.main}>
          <MainContent></MainContent>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
