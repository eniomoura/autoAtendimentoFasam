import React from "react";
import "./App.css";
import ButtonScreen from "../screens/buttonScreen";
import VideoComponent from "../components/cvideo";

function App() {
  return (
    <>
      <ButtonScreen style={{ top: "20%" }}></ButtonScreen>
      <VideoComponent></VideoComponent>
    </>
  );
}

export default App;
