import React, { Component } from "react";

export default class Journal extends Component {
  async componentDidMount() {
    console.log(this.props.url);
    fetch(this.props.url + "bulletin_project", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "GET",
    })
      .then((response) => response.text())
      .then((response) => {
        console.log(response);
        let data = [];
        let raw_data = JSON.parse(response);
        for (let i = 0; i < raw_data.status.length; i++) {
          data.push(raw_data.status[i]);
        }
        console.log(data);
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div
        style={{
          overflowY: "scroll",
          height: "500px",
          textAlign: "center",
          backgroundColor: "green",
        }}
      ></div>
    );
  }
}
