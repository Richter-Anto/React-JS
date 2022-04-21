import React, { Component } from "react";
import Navbar from "./components/Navbar";
import "./global.css";
import PreloadedVideo from "./components/PreloadedVideo";
import Refexample from "./components/Refexample";

export default class App extends Component {
  render() {
    return (
        <div>
        <Navbar />
        <PreloadedVideo />
        <Refexample/>
        </div>
    );
  }
}
