import React from "react";

export default (props) => (
  <div
    style={{
      overflowY: "scroll",
      overflowX: "scroll",
      width: "800px",
      height: "500px",
      textAlign: "center",
      backgroundColor: "grey",
    }}
  >
    <h1>Users</h1>
    <table className="table">
      <thead>
        <tr>
          <th>login</th>
          <th>name</th>
          <th>Badges</th>
          <th>medals</th>
          <th>E-thanks</th>
          <th>like</th>
          <th>ideas</th>
          <th>id</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((item) => (
          <tr key={item.name}>
            <td>{item.login}</td>
            <td>{item.name}</td>
            <td>{item.Badges.toString()}</td>
            <td>{item.medals.toString()}</td>
            <td>{item.thanks.toString()}</td>
            <td>{item.like.toString()}</td>
            <td>{item.ideas.toString()}</td>
            <td>{item.id}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
