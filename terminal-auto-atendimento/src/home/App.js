import React from "react";
import "./App.css";
import ButtonScreen from "../screens/buttonScreen";
import VideoComponent from "../components/cvideo";

function App() {
  const homeStyle = {
    backgroundColor: "#26447f",
    height: "100vh",
    width: "100vw"
  };

  return (
    <div style={homeStyle}>
      <img
        style={{ margin: "20px" }}
        src={"https://fasam.edu.br/wp-content/uploads/2016/05/fasam-logo.png"}
      ></img>
      <div>
        <ButtonScreen></ButtonScreen>
        <VideoComponent></VideoComponent>
      </div>
    </div>
  );
}

export default App;
