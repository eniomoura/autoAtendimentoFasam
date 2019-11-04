import React, { Component } from "react";
import CustomButton from "../components/cbutton";

class ButtonScreen extends Component {
  calculateButtons() {
    const buttons = {
      text: ["Verificar Nota", "Verificar Data de Avaliação", "Voltar"],
      url: ["http://google.com/", "http://facebook.com/", "http://youtube.com/"]
    };
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
    const render = this.calculateButtons();
    return render;
  }
}

export default ButtonScreen;
