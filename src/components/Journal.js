import React, { Component } from "react";

export default (props) => (
  <div
    style={{
      overflowY: "scroll",
      overflowX: "scroll",
      width: "1000px",
      height: "500px",
      textAlign: "center",
      backgroundColor: "green",
    }}
  >
    <table
      className="table"
      style={{ textAlign: "center", justifyContent: "center" }}
    >
      <thead>
        <tr>
          <th>title</th>
          <th>name</th>
          <th>Likes</th>
          <th>text</th>
          <th>image</th>
        </tr>
      </thead>
      <tbody>
        {props.jData.map((item) => (
          <tr key={item.title}>
            <td>{item.title}</td>
            <td>{item.likes}</td>
            <td>{item.status}</td>
            <td>{item.text}</td>
            <td>
              <img src={item.img} style={{ width: "200px" }} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
