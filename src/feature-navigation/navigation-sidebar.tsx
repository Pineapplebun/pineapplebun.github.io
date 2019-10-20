import React from "react";
import { useHistory } from "react-router-dom";
import { ProfileCard } from "../ui-profile/profile-card";
import styles from "./navigation-sidebar.module.css";

export default function NavigationSidebar() {
  let history = useHistory();
  const navigateHome = () => history.push("/");
  const navigateAbout = () => history.push("/about");
  const navigateDiagrammar = () => history.push("/diagrammar");

  return (
    <div className={styles.container}>
      <div className={styles.profile}>
        <ProfileCard></ProfileCard>
      </div>
      <div className={styles.list}>
        <ul>
          <li onClick={navigateHome}>Home</li>
          <li onClick={navigateAbout}>About</li>
          <li onClick={navigateDiagrammar}>Project Diagrammar</li>
        </ul>
      </div>
    </div>
  );
}
