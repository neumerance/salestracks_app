import React from 'react';
import AuthService from '../services/AuthService';

const AuthProtector = (WrappedComponent) => {
  return class extends React.Component {
    async componentWillMount() {
      const service = new AuthService();
      const hasValidToken = await service.hasValidToken();
      if (!hasValidToken) {
        this.props.navigation.navigate('LoginScreen');
      }
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
}

export default AuthProtector;
