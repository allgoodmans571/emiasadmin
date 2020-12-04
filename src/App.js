import React, { Component } from "react";
import "./index.css";
import Stages from "./components/Stages";
import Loader from "./Loader/Loader";
import Table from "./Table/Table";

class App extends Component {
  state = {
    isLoading: true,
    data: [],
  };
  async componentDidMount() {
    var data;
    fetch("http://165.22.192.121:3000/get_people", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "GET",
    })
      .then((response) => response.text())
      .then((response) => {
        console.log(response);
        data = JSON.parse(response);
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
        <div>
          <Stages />
        </div>
        {/* {this.state.isLoading ? <Loader /> : <Table data={this.state.data} />} */}
      </div>
    );
  }
}

export default App;
