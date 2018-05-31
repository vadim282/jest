import React from 'react';
import UsersList from '../components/usersList/index';
import {shallow} from "enzyme/build/index";
import DataRow from '../components/usersRow/index';


describe('test table', () => {

  it('should render a table', () => {

    const users =[{
      id: 0,
      firstName: "suit",
      lastName: "meeting",
      age: 25,
      visits: 71,
      progress: 28,
      status: "complicated"
    }];
    const getUsers = jest.fn();
    const wrapper = shallow(<UsersList users = {users} getUsers = {getUsers} />);

    expect(wrapper.find('table').length).toBe(1);
  });

  it ('should render a user', () =>{
    const wrapper = shallow(<DataRow />);

    expect(wrapper.find('.data-row-content').length).toBe(1);
  });
});
