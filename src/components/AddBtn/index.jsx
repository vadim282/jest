import React, { Component } from 'react';
import './style.css';

class AddBtn extends Component {

  openWindow = (e) => {
    this.props.openModal();
  };

  render(){
    return (


        <button className = 'addBtn addBtn-flex' onClick={this.openWindow}>Add user</button>

    )
  }

}

export default AddBtn;
