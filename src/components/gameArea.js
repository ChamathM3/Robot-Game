import React, { Component } from "react";
import PropTypes from "prop-types";
// import external css
import "./gameArea.css";

export default class GameArea extends Component {
  constructor() {
    super();
    this.state = {
      currentPosition: "r1c1"
    };

    this.checkRobotPossition = this.checkRobotPossition.bind(this);
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillReceiveProps(nextProps) {
    // check robot possion
    this.checkRobotPossition(nextProps.currentPosition);
  }
  render() {
    return (
      <div>
        <table style={{ margin: "auto" }}>
          <tbody>
            <tr>
              <td
                className="cell"
                id="r5c1"
                onClick={e => this.handleClick(e)}
              />
              <td
                className="cell"
                id="r5c2"
                onClick={e => this.handleClick(e)}
              />
              <td
                className="cell"
                id="r5c3"
                onClick={e => this.handleClick(e)}
              />
              <td
                className="cell"
                id="r5c4"
                onClick={e => this.handleClick(e)}
              />
              <td
                className="cell"
                id="r5c5"
                onClick={e => this.handleClick(e)}
              />
            </tr>
            <tr>
              <td
                className="cell"
                id="r4c1"
                onClick={e => this.handleClick(e)}
              />
              <td
                className="cell"
                id="r4c2"
                onClick={e => this.handleClick(e)}
              />
              <td
                className="cell"
                id="r4c3"
                onClick={e => this.handleClick(e)}
              />
              <td
                className="cell"
                id="r4c4"
                onClick={e => this.handleClick(e)}
              />
              <td
                className="cell"
                id="r4c5"
                onClick={e => this.handleClick(e)}
              />
            </tr>
            <tr>
              <td
                className="cell"
                id="r3c1"
                onClick={e => this.handleClick(e)}
              />
              <td
                className="cell"
                id="r3c2"
                onClick={e => this.handleClick(e)}
              />
              <td
                className="cell"
                id="r3c3"
                onClick={e => this.handleClick(e)}
              />
              <td
                className="cell"
                id="r3c4"
                onClick={e => this.handleClick(e)}
              />
              <td
                className="cell"
                id="r3c5"
                onClick={e => this.handleClick(e)}
              />
            </tr>
            <tr>
              <td
                className="cell"
                id="r2c1"
                onClick={e => this.handleClick(e)}
              />
              <td
                className="cell"
                id="r2c2"
                onClick={e => this.handleClick(e)}
              />
              <td
                className="cell"
                id="r2c3"
                onClick={e => this.handleClick(e)}
              />
              <td
                className="cell"
                id="r2c4"
                onClick={e => this.handleClick(e)}
              />
              <td
                className="cell"
                id="r2c5"
                onClick={e => this.handleClick(e)}
              />
            </tr>
            <tr>
              <td className="cell" id="r1c1" onClick={e => this.handleClick(e)}>
                <img
                  src="/robot1.gif"
                  alt="robot"
                  id="robot"
                  className="robotInitials"
                />
              </td>
              <td
                className="cell"
                id="r1c2"
                onClick={e => this.handleClick(e)}
              />
              <td
                className="cell"
                id="r1c3"
                onClick={e => this.handleClick(e)}
              />
              <td
                className="cell"
                id="r1c4"
                onClick={e => this.handleClick(e)}
              />
              <td
                className="cell"
                id="r1c5"
                onClick={e => this.handleClick(e)}
              />
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
  // this function will check robot is available given possition
  // if not robot will go to that posssion.
  checkRobotPossition(rp) {
    if (rp !== this.state.currentPosition) {
      // move robot
      document.getElementById(rp).innerHTML = document.getElementById(
        this.state.currentPosition
      ).innerHTML;
      // disapear robot
      document.getElementById(this.state.currentPosition).innerHTML = "";
      this.setState({ currentPosition: rp });
    }
  }

  // this fucntion use for teleport robot
  // it check robot current possion and is robot need to teleport to another possition

  handleClick(e) {
    debugger;
    // check robot siting on selected possion or not.
    if (e.target.id !== "robot" && e.target.id !== this.state.currentPosition) {
      //let robot = document.getElementById("robot").classList;

      // get current possiton cordiants
      let currentRowPos = Number(this.state.currentPosition.charAt(1));
      let currentColumPos = Number(this.state.currentPosition.charAt(3));
      // get new possion cordiants
      let newRowPos = Number(e.target.id.charAt(1));
      let newColumPos = Number(e.target.id.charAt(3));

      // calculate teleport distance
      let teleportRowDistance = Math.abs(newRowPos - currentRowPos);
      let teleportColumDistance = Math.abs(newColumPos - currentColumPos);
      let teleportDistance = teleportRowDistance + teleportColumDistance;
      // calculate teleport time
      let newposTime = teleportDistance * 100;

      // teleport place
      // disapear robot
      document.getElementById(this.state.currentPosition).innerHTML = "";

      var newposition = e.target.id;
      // teleporting to new place
      document.getElementById(newposition).innerHTML =
        '<img src="/robot1.gif" id="robot" class="robotInitials" style="display:none" />';

      // set teleport time
      var time = 100000;
      time = newposTime;
      var timeoutID = setTimeout(teleport, time);

      function teleport() {
        debugger;
        // display robot (teleported)
        document.getElementById("robot").style.display = "block";
        // clear interval
        clearTimeout(timeoutID);
      }

      // update states and send controller to current teleported possion
      this.setState({ currentPosition: e.target.id }, function() {
        this.props.teleportedPosition(this.state.currentPosition);
      });
    }
  }
}

GameArea.prototypes = {
  teleportedPosition: PropTypes.func.isRequired,
  currentPosition: PropTypes.string
};
