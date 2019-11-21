import React, { Component } from "react";

class CustomButton extends Component {
  render() {
    const buttonStyle = {
      color: "white",
      backgroundColor: "#26447f",
      width: "100%",
      padding: "5%",
      textDecoration: "none",
      borderRadius: "10%",
      border: "2px solid white",
      margin: "5%",
      textAlign: "center",
      fontSize: "calc(10px + 2vmin)"
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
