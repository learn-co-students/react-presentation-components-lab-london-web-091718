// Code SimpleComponent Here
import React, { Component } from "react";

export default class simpleComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      mood: "happy"
    };
    console.log(this.state.mood);
  }

  handleClick = () => {
    const newMood = this.state.mood === "happy" ? "sad" : "happy";
    console.log(newMood);
    this.setState({
      mood: newMood
    });
  };

  render() {
    return <div onClick={this.handleClick}>{this.state.mood}</div>;
  }
}
