import React from "react";
import './NavBar.js';

class NavBar extends React.Component {
  render() {
    return (
      <nav class="nav">
        <a class="nav-link active" aria-current="page" href="#">Home</a>
        <a class="nav-link" href="#">News</a>
        <a class="nav-link" href="#">Experiences</a>
        <a class="nav-link" href="#">Educations</a>
        <a class="nav-link" href="#">Publications</a>
        <a class="nav-link" href="#">Contact me</a>
        {/* <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a> */}
      </nav>
    );
  }
}

export default NavBar;