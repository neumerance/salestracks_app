import LoginScreen from '../../screens/LoginScreen';

describe('LoginScreen', () => {
  it('renders correctly', () => {
    const LoginScreenComponent = renderer.create(<LoginScreen />).toJSON();
    expect(LoginScreenComponent).toMatchSnapshot();
  });
});
