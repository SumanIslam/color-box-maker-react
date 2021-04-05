import React, { Component } from "react";
import './Box.css'
export default class Box extends Component {
  constructor(props) {
    super(props);
    this.remove = this.remove.bind(this);
  }

  remove() {
    this.props.remove(this.props.id)
  }
  render() {
    return (
      <div className="Box">
        <div
          style={{
            height: `${this.props.height}rem`,
            width: `${this.props.width}rem`,
            backgroundColor: this.props.color,
          }}
        />
        <button onClick={this.remove}>Remove the box</button>
      </div>
    );
  }
}
