import React, { Component } from "react";
import "./App.css";
import ButtonScreen from "../screens/buttonScreen";
import VideoComponent from "../components/cvideo";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { focus: "matricula" };
  }

  homeStyle = {
    backgroundColor: "#26447f",
    height: "100vh",
    width: "100vw"
  };

  render() {
    if (this.props.fullscreen) {
      return <VideoComponent fullscreen></VideoComponent>;
    } else {
      return (
        <div style={this.homeStyle}>
          <img
            alt="logo-fasam"
            style={{ margin: "20px" }}
            src={
              "https://fasam.edu.br/wp-content/uploads/2016/05/fasam-logo.png"
            }
          ></img>
          <div>
            <ButtonScreen refHome={this}></ButtonScreen>
            <VideoComponent></VideoComponent>
          </div>
        </div>
      );
    }
  }
}

export default App;
