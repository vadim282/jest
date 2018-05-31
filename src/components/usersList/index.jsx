import React, { Component } from 'react';
import Search from '../../conteiners/search';
import DataRow from '../usersRow'
import ModalWindow from '../../conteiners/modal'
import AddUserBtn from '../../conteiners/AddBtn'
import './style.css'

class UsersList extends Component {

  componentDidMount(){
    this.props.getUsers();
  }

  render(){
    const { users, pending } = this.props;
    const userRow = users.map((item) => {
      return <DataRow key = {item.id}
               id={item.id}
               firstName = {item.firstName}
               lastName = {item.lastName}
               age = {item.age}
               visits = {item.visits}
               progress = {item.progress}
               status = {item.status} />
    });

    if(pending) {
      return <div>Fetching users....</div>
    }
    return (
      <div className = 'wrapperTable'>
          < AddUserBtn />
          <Search />
          <h1 className = 'titleTable'>Users list</h1>
            <ModalWindow />
            <table className = 'myTable'>
            <tbody>
              <tr>
                <th>id</th>
                <th>firstName</th>
                <th>lastName</th>
                <th>age</th>
                <th>visits</th>
                <th>progress</th>
                <th>status</th>
              </tr>
              {userRow}
            </tbody>
            </table>
      </div>
    )
  }

}


export default UsersList;
