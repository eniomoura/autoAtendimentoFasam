import React, { Component } from "react";
import { Button } from "@material-ui/core";

class CustomButton extends Component {
  render() {
    const render = (
      <Button
        variant="contained"
        {...this.props}
        href={this.props.url}
        style={{ minWidth: "50vh", minHeight: "10vh" }}
      >
        {this.props.text}
      </Button>
    );
    return render;
  }
}

export default CustomButton;
