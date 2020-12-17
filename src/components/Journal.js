import React, { Component } from "react";

function AddJournal(jour) {
  fetch("194.242.120.106:3000/adddata", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({
      img: jour.img,
      title: jour.title,
      status: jour.status,
      text: jour.text,
      likes: 0,
    }),
  })
    .then((response) => response.text())
    .then((response) => {
      console.log(response);
    })
    .catch((err) => console.log(err));
}

export default (props) => (
  <div style={{ justifyContent: "center" }}>
    <div
      style={{
        display: "flex",
        width: "400px",
        height: "400px",
        backgroundColor: "red",
        justifyContent: "center",
        alignItems: "center",
        flexFlow: "column",
      }}
    >
      <input id="title" placeholder="Title" style={{ height: "2rem" }} />
      <textarea id="text" />
    </div>
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
            <th>name</th>
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
  </div>
);
