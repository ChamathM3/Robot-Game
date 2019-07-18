import React, { Component } from "react";

// components
import GameArea from "../components/gameArea";
import Controller from "../components/controller";

export default class mainGameArea extends Component {
  constructor() {
    super();
    this.state = {
      currentPosition: "r1c1"
    };
  }

  render() {
    return (
      <div>
        <div>
          <GameArea
            currentPosition={this.state.currentPosition}
            teleportedPosition={data => this.updateTeleportedPosition(data)}
          />
        </div>
        <div>
          <Controller
            currentPosition={this.state.currentPosition}
            updatedPosition={data => this.updatedPosition(data)}
          />
        </div>
      </div>
    );
  }

  // this function update current possition becouse current position
  // need to update
  updateTeleportedPosition(data) {
    this.setState({ currentPosition: data });
  }

  // controler updated possition will update
  updatedPosition(data) {
    this.setState({ currentPosition: data });
  }
}
