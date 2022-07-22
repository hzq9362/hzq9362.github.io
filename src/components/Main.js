import React from "react";
import './Main.css';
import ava from '../zi.jpg';
import NavBar from "./NavBar";
import { Typeanimation } from "./TypeAnimation";
class Main extends React.Component {
  render() {
    return (
      <div id = "main">
        <div id = "avatar">
          <img src={ava} alt="zi" width="300px" class="ava"/>
        </div>
        <div id = "nav">
        <div id="nav">
          <NavBar />
        </div>
        </div>
        <div id = "animation">
        <Typeanimation/>
        </div>
      </div>
    );
  }
}

export default Main;