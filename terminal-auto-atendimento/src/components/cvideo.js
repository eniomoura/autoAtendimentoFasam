import React, { Component } from "react";
import "./css/cvideo.css";
import { Player } from "video-react";

class VideoComponent extends Component {
  getVideo() {
    const videos = require("../assets/videos.json");
    return videos[~~(videos.length * Math.random())];
  }

  handleNewVideo() {
    window.location.reload();
  }

  render() {
    const videoStyle = {
      boxSizing: "border-box",
      margin: "2%",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center"
    };

    const render = (
      <div style={videoStyle}>
        <Player
          src={this.getVideo()}
          autoPlay
          muted
          fluid={false}
          height={window.innerHeight * 0.7}
          onEnded={() => this.handleNewVideo()}
        />
      </div>
    );
    return render;
  }
}

export default VideoComponent;
