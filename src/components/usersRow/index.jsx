import React from 'react';
import { withRouter } from 'react-router-dom';
import './style.css'

function DataRow(props) {
  const showUserInfo = () => {
    props.history.push(`/users/${props.id}`);
  };
  return (
    <tr className = "data-row-content" onClick={showUserInfo}>
      <td>{props.id}</td>
      <td>{props.firstName}</td>
      <td>{props.lastName}</td>
      <td>{props.age}</td>
      <td>{props.visits}</td>
      <td>{props.progress}</td>
      <td>{props.status}</td>
    </tr>
  );
}

export default withRouter(DataRow);
