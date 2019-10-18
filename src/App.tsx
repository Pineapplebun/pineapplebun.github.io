import React from "react";
import "./App.css";
import NavigationSidebar from "./feature-navigation/navigation-sidebar";
import MainContent from "./feature-main/main-content";

function App() {
  return (
    <div className="app-content">
      <div className="navigation-sidebar">
        <NavigationSidebar></NavigationSidebar>
      </div>
      <div className="main-content">
        <MainContent></MainContent>
      </div>
    </div>
  );
}

export default App;
