import { render } from "@testing-library/react";
import React, { useEffect, useState } from "react";

export default function Journal(props) {
  const [jour, setJour] = useState({
    img: "",
    title: "",
    status: "",
    text: "",
    likes: 0,
  });

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(props.url + "bulletin_project", {
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
        let jData = data;
        console.log(jData);
        setData(jData);
      })
      .catch((err) => console.log(err));
  });

  function AddJournal(jour) {
    fetch(props.url + "adddata", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(jour),
    })
      .then((response) => response.text())
      .then((response) => {
        console.log(response);
      })
      .catch((err) => console.log(err));
  }

  function handleSubmit() {
    setJour({
      img: "i dunno",
      title: document.getElementById("title").value,
      status: "",
      text: document.getElementById("text").value,
    });

    console.log(jour);
    AddJournal(jour);
    render();
  }

  function handleDelete(id) {
    fetch(props.url + "deldata", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        id: id,
      }),
    })
      .then((response) => response.text())
      .then((response) => {
        console.log(response);
      })
      .catch((err) => console.log(err));
    render();
  }

  return (
    <div style={{ justifyContent: "center" }}>
      <div
        style={{
          display: "flex",
          width: "800px",
          height: "400px",
          backgroundColor: "red",
          justifyContent: "center",
          alignItems: "center",
          flexFlow: "column",
        }}
      >
        <input id="title" placeholder="Title" style={{ height: "2rem" }} />
        <textarea id="text" style={{ width: "400px" }} />
        <button onClick={() => handleSubmit()}>Submit</button>
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
              <th>id</th>
              <th>name</th>
              <th>likes</th>
              <th>status</th>
              <th>text</th>
              <th>image</th>
              <th>actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.likes}</td>
                <td>{item.status}</td>
                <td>{item.text}</td>
                <td>
                  <img src={item.img} style={{ width: "200px" }} />
                </td>
                <td style={{ flexFlow: "column" }}>
                  <button onClick={() => handleDelete(item.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
