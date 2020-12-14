import React from "react";

export default (props) => (
  <div
    style={{
      overflowY: "scroll",
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
        {props.data.map((item) => (
          <tr key={item.name}>
            <th>{item.login}</th>
            <th>{item.name}</th>
            <th>{item.Badges.toString()}</th>
            <th>{item.medals.toString()}</th>
            <th>{item.thanks.toString()}</th>
            <th>{item.like.toString()}</th>
            <th>{item.ideas.toString()}</th>
            <th>{item.id}</th>
          </tr>
        ))}
      </thead>
      <tbody></tbody>
    </table>
  </div>
);
