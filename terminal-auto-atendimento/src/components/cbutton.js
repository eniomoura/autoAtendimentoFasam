import React, { Component } from "react";

class CustomButton extends Component {
  render() {
    const buttonStyle = {
      color: "white",
      backgroundColor: "green",
      padding: "2%",
      width: "20%",
      textDecoration: "none",
      borderRadius: "20%",
      margin: "2%"
    };
    const render = (
      <a style={buttonStyle} href={this.props.url}>
        {this.props.text}
      </a>
    );
    return render;
  }
}

export default CustomButton;
