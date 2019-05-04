import React from 'react';
import { shallow } from 'enzyme';
import LoginScreen from '../../screens/LoginScreen';

describe('LoginScreen', () => {
  it('renders correctly', () => {
    const component = shallow(<LoginScreen />);
    expect(component).toMatchSnapshot();
  });
});
