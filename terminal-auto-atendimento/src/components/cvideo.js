import React, { Component } from "react";
import "./css/cvideo.css";

class VideoComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentVideoIndex: 0
    };
  }

  getVideo(index) {
    const videos = require("../assets/videos.json");
    return videos[index % videos.length];
  }

  handleNewVideo() {
    let newIndex = this.state.currentVideoIndex + 1;
    this.setState({ currentVideoIndex: newIndex });
    this.refs.player.play();
  }

  render() {
    let videoStyle = null;
    if (this.props.fullscreen) {
      videoStyle = {
        boxSizing: "border-box"
      };
    } else {
      videoStyle = {
        boxSizing: "border-box",
        margin: "2%",
        float: "right"
      };
    }

    const render = (
      <div style={videoStyle}>
        <video
          ref="player"
          autoPlay
          muted
          height={
            this.props.fullscreen
              ? window.innerHeight
              : window.innerHeight * 0.5
          }
          width={
            this.props.fullscreen ? window.innerWidth : window.innerWidth * 0.5
          }
          onEnded={() => this.handleNewVideo()}
        >
          <source src={this.getVideo(this.state.currentVideoIndex)} />
        </video>
      </div>
    );
    return render;
  }
}

export default VideoComponent;
