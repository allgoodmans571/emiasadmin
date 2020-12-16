{
  props.data.map((item) => (
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
  ));
}
