import React, { Component } from "react";
import CustomButton from "../components/cbutton";

class ButtonScreen extends Component {
  calculateButtons() {
    const buttons = require("..//assets/buttons.json");
    let buttonComps = [];

    for (let i = 0; i < buttons.text.length; i++) {
      buttonComps.push(
        <CustomButton
          text={buttons.text[i]}
          url={buttons.url[i]}
        ></CustomButton>
      );
    }
    return buttonComps;
  }

  render() {
    const screenStyle = {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      marginTop: "3%",
      marginLeft: "10%",
      float: "left"
    };
    const render = <div style={screenStyle}>{this.calculateButtons()}</div>;
    return render;
  }
}

export default ButtonScreen;
