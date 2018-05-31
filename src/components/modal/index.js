import React, { Component } from 'react';
import './style.css';

class MyModal extends Component {

  addNewUser = (e) => {
    e.preventDefault();

    const user = {
      firstName: this.firstName.value,
      lastName: this.lastName.value,
      age: this.age.value,
      visits: this.visits.value,
      progress: this.progress.value,
      status: this.status.value,
    };
    this.props.createUser(user);
    this.props.openModal();
  };


  render(){
    let userModal = 'wrapper hidden';
    if(this.props.isOpen) {
      userModal = 'wrapper';

    }
    return (

      <div className={userModal} >
        <div className = 'add-modal'>
          <h2>Add new user</h2>
          <form className ="add-newUser">
            <label className ='title-user-info'>firstName: <input type='text' ref={(node) => { this.firstName = node; }} /> </label>
            <label className ='title-user-info'>lastName: <input type ='text' ref={(node) => { this.lastName = node; }} /> </label>
            <label className ='title-user-info'>age: <input type='text' ref={(node) => { this.age = node; }} /> </label>
            <label className ='title-user-info'>visits: <input type='text' ref={(node) => { this.visits = node; }} /> </label>
            <label className ='title-user-info'>progress: <input type='text' ref={(node) => { this.progress = node; }} /> </label>
            <label className ='title-user-info'>status: <input type='text' ref={(node) => { this.status = node; }} /> </label>
          </form>
          <button className = 'btn-newUser' onClick={this.addNewUser}>add</button>
          <button className = 'close' onClick={this.props.openModal}>close</button>
        </div>
      </div>
    )
  }

}

export default MyModal;
