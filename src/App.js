import React, { Component } from "react";
import "./index.css";
import Stages from "./components/Stages";
import Loader from "./Loader/Loader";
import Table from "./Table/Table";
import Journal from "./components/Journal.js";
class App extends Component {
  state = {
    isLoading: true,
    data: [],
  };

  url = "http://157.230.121.150:3000/";

  async componentDidMount() {
    var data;
    fetch(this.url + "get_people", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "GET",
    })
      .then((response) => response.text())
      .then((response) => {
        data = [];
        let raw_data = JSON.parse(response);
        for (let i = 0; i < raw_data.status.length; i++) {
          data.push(raw_data.status[i]);
        }
        this.setState({
          isLoading: false,
          data,
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div className="container">
        <div style={{ width: "100%" }}>
          <Stages />
        </div>
        <div style={{ width: "100%" }}>
          <Journal url={this.url} />
        </div>
        <div>
          {this.state.isLoading ? <Loader /> : <Table data={this.state.data} />}
        </div>
      </div>
    );
  }
}

export default App;
