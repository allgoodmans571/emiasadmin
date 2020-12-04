import React from "react";

export default (props) => (
  <table className="table">
    <thead>
      <tr>
        <th>login</th>
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
          <td>{item.Badges}</td>
          <td>{item.medals}</td>
          <td>{item.thanks}</td>
          <td>{item.like}</td>
          <td>{item.ideas}</td>
          <td>{item.id}</td>
        </tr>
      ))}
    </tbody>
  </table>
);
