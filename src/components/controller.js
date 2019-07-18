import React, { Component } from "react";
import PropTypes from "prop-types";
// import external css
import "./controller.css";

export default class Controller extends Component {
  constructor() {
    super();
    this.state = {
      currentPosition: "r1c1"
    };
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillReceiveProps(nextProps) {
    // check robot possion
    this.setState({ currentPosition: nextProps.currentPosition });
  }

  render() {
    return (
      <div>
        <div className="contolerMain">
          <div className="row buttonRow">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 columnStyle">
              <button
                className="btn btn-danger buttonDetails"
                type="button"
                onClick={e => this.moveRobot(1)}
              >
                <i className="fas fa-arrow-alt-circle-up" />
              </button>
            </div>
          </div>
          <div className="row buttonRow">
            <div className="col-4 col-sm-4 col-md-4 col-lg-4 columnStyle">
              <button
                className="btn btn-danger buttonDetails"
                type="button"
                onClick={e => this.moveRobot(4)}
              >
                <i className="fas fa-arrow-circle-left" />
              </button>
            </div>
            <div className="col-2 col-sm-2 col-md-2 col-lg-2" />
            <div className="col-4 col-sm-4 col-md-4 col-lg-4 columnStyle">
              <button
                className="btn btn-danger buttonDetails"
                type="button"
                onClick={e => this.moveRobot(2)}
              >
                <i className="fas fa-arrow-alt-circle-right" />
              </button>
            </div>
          </div>
          <div className="row buttonRow">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 columnStyle">
              <button
                className="btn btn-danger buttonDetails"
                type="button"
                onClick={e => this.moveRobot(3)}
              >
                <i className="fas fa-arrow-alt-circle-down" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // this function move robot to controller clicked direction.
  /*
    1 = up
    2 = right
    3 = down
    4 = left 
  */

  moveRobot(num) {
    debugger;
    let robotCurrentPosition = this.state.currentPosition;
    let robotUpdatedPosition = "";
    let row = 1;
    let coloumn = 1;
    if (num === 1) {
      // move up
      row = Number(robotCurrentPosition.charAt(1)) + 1;
      coloumn = Number(robotCurrentPosition.charAt(3));
      if (row <= 5 && row > 0 && coloumn <= 5 && coloumn > 0) {
        robotUpdatedPosition = "r" + row + "c" + coloumn;
      } else {
        robotUpdatedPosition = this.state.currentPosition;
      }
    } else if (num === 2) {
      // move right
      row = Number(robotCurrentPosition.charAt(1));
      coloumn = Number(robotCurrentPosition.charAt(3)) + 1;
      if (row <= 5 && row > 0 && coloumn <= 5 && coloumn > 0) {
        robotUpdatedPosition = "r" + row + "c" + coloumn;
      } else {
        robotUpdatedPosition = this.state.currentPosition;
      }
    } else if (num === 3) {
      // move down
      row = Number(robotCurrentPosition.charAt(1)) - 1;
      coloumn = Number(robotCurrentPosition.charAt(3));
      if (row <= 5 && row > 0 && coloumn <= 5 && coloumn > 0) {
        robotUpdatedPosition = "r" + row + "c" + coloumn;
      } else {
        robotUpdatedPosition = this.state.currentPosition;
      }
    } else if (num === 4) {
      // move left
      row = Number(robotCurrentPosition.charAt(1));
      coloumn = Number(robotCurrentPosition.charAt(3)) - 1;
      if (row <= 5 && row > 0 && coloumn <= 5 && coloumn > 0) {
        robotUpdatedPosition = "r" + row + "c" + coloumn;
      } else {
        robotUpdatedPosition = this.state.currentPosition;
      }
    }

    this.props.updatedPosition(robotUpdatedPosition);
  }
}

Controller.prototypes = {
  teleportedPosition: PropTypes.func.isRequired,
  currentPosition: PropTypes.string
};
