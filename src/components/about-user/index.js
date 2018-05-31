import React from 'react';
import {Link} from 'react-router-dom';
import './style.css';

class AboutUser extends React.Component {
  constructor() {
    super();
    this.state = {
      id: '',
      firstName: '',
      lastName: '',
      age: '',
      visits: '',
      progress: '',
      status: '',
    }
  };

  componentWillMount() {
    const {id} = this.props.match.params;
    this.props.getInfoAboutUser(id);
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.activeUser !== nextProps.activeUser) {
      const { firstName, lastName, age, visits, progress, status, id } = nextProps.activeUser[0];
      this.setState({
        firstName: firstName,
        lastName: lastName,
        age: age,
        visits: visits,
        progress: progress,
        status: status,
        id: id,
      })
    }
  }

  deleteUser = () => {
    this.props.handleDeleteUser(this.state.id);
    this.props.history.goBack();
  };

  onChangeHandler = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { id, firstName, lastName, age, progress, status, visits } = this.state;


    return (
      <div className="user-info">
        <Link to="/">Back</Link>
        <h1>About user:</h1>
        <h2>id: {id}</h2>
        <div className="about-user-wrapper">
          <table className="about-user-table">
            <tbody>
            <tr>
              <td className="user-info-title">FirstName:</td>
              <td>{firstName}</td>
              <td>
                <input type="text" className="edit-info-value" value={firstName} name="firstName"
                       onChange={this.onChangeHandler}/>
              </td>
            </tr>
            <tr>
              <td className="user-info-title">LastName:</td>
              <td>{lastName}</td>
              <td>
                <input type="text" className="edit-info-value"  value={lastName} name="lastName"
                       onChange={this.onChangeHandler}/>
              </td>
            </tr>
            <tr>
              <td className="user-info-title">Age:</td>
              <td>{age}</td>
              <td>
                <input type="text" className="edit-info-value" value={age} name="age"
                       onChange={this.onChangeHandler}/>
              </td>
            </tr>
            <tr>
              <td className="user-info-title">Progress:</td>
              <td>{progress}</td>
              <td>
                <input type="text" className="edit-info-value" value={progress} name="progress"
                       onChange={this.onChangeHandler}/>
              </td>
            </tr>
            <tr>
              <td className="user-info-title">Status:</td>
              <td>{status}</td>
              <td>
                <input type="text" className="edit-info-value" value={status} name="status"
                       onChange={this.onChangeHandler}/>
              </td>
            </tr>
            <tr>
              <td className="user-info-title">Visits:</td>
              <td>{visits}</td>
              <td>
                <input type="text" className="edit-info-value" value={visits} name="visits"
                       onChange={this.onChangeHandler}/>
              </td>
            </tr>
            </tbody>
          </table>
        </div>

        <div>
          <button className='del-edit-btn' onClick={() => this.props.handleEditUser(this.state)}>Save</button>
          <button className='del-edit-btn' onClick={this.deleteUser}>Delete</button>
        </div>
      </div>
    );
  }
}

export default AboutUser;
