import React, { Component } from 'react';
import './style.css';

class Search extends Component {

  filter = (e) => {
    e.preventDefault();
    const field = this.selectField.value;
    const value = this.searchValue.value;
    console.log(`Field: ${field}, value: ${value}` );
    const query = `${field}=${value}`;
    console.log(query);
    this.props.filterUsers(query);
  };

  reset = (e) => {
    e.preventDefault();
    this.props.getUsers();
  };

  render(){

    return(
      <form className = 'search-conteiner' >
        <select className = 'search-box' ref = {(node) => {this.selectField = node}}>
          <option value='firstName'>firstName</option>
          <option value='lastName'>lastName</option>
          <option value='age'>age</option>
        </select>
        <input type= 'text' ref = {(node) => {this.searchValue = node}}/>
        <input className = 'search-box' type="submit" onClick={this.filter} value= 'search' />
        <input className = 'search-box ' type="button" onClick={this.reset} value= 'reset filter' />
       </form>

    )
  }
}

export default Search
