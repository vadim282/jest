jest.unmock('../components/AddBtn/index');

import React from 'react';
import { shallow } from 'enzyme';
import AddBtn from '../components/AddBtn';

describe('test button', () => {

  it('should render a button', () => {
    const wrapper = shallow(<AddBtn />);
    expect(wrapper.find('button').length).toBe(1);
  });

  it('test click event', () => {
    const mockCallBack = jest.fn();
    const button = shallow((<AddBtn openModal={mockCallBack} >Add user</AddBtn>));

    button.find('button').simulate('click');
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
});
