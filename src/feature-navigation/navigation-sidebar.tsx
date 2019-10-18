import { List, ListItem } from "@material-ui/core";
import "./navigation-sidebar.css";
import React from "react";
import { ProfileCard } from "../ui-profile/profile-card";

export default function NavigationSidebar() {
  return (
    <div className="navigation-container">
      <div className="navigation-profile">
        <ProfileCard></ProfileCard>
      </div>
      <div className="navigation-list">
        <List>
          <ListItem button>Home</ListItem>
          <ListItem button>About</ListItem>
          <ListItem button>Diagrammar Project</ListItem>
        </List>
      </div>
    </div>
  );
}
