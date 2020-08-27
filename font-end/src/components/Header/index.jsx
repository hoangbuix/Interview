import React, { Component } from "react";
import "./Header.scss";

class Header extends Component {
  render() {
    return (
      <header>
        <div className="overlay">
          <h1>Simply The Best</h1>
          <h3>Reasons for Choosing US</h3>
          <p>:3 :3</p>
          <br />
          <button>READ MORE</button>
        </div>
      </header>
    );
  }
}

export default Header;
