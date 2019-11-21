import React, { Component } from "react";
import "./css/cvideo.css";
import { Player } from "video-react";

class VideoComponent extends Component {
  constructor(props) {
    super(props);
    this.player = React.createRef();
    this.state = {
      currentVideoIndex: 0
    };
  }

  getVideo(index) {
    const videos = require("../assets/videos.json");
    return videos[index % videos.length];
  }

  handleNewVideo() {
    const nextVideoIndex = this.state.currentVideoIndex++;
    this.setState({
      videoIndex: nextVideoIndex //DARK MAGIC DO NOT TOUCH
    });
  }

  render() {
    const videoStyle = {
      boxSizing: "border-box",
      margin: "2%",
      float: "right"
    };

    const render = (
      <div style={videoStyle}>
        <Player
          ref={this.player}
          src={this.getVideo(this.state.currentVideoIndex)}
          autoPlay
          muted
          fluid={false}
          height={window.innerHeight * 0.5}
          width={window.innerWidth * 0.5}
          onEnded={() => this.handleNewVideo()}
        />
      </div>
    );
    return render;
  }
}

export default VideoComponent;
