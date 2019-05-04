import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Input, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { COMPANY_NAME, COMPANY_LINE } from 'react-native-dotenv';
import AuthService from '../services/AuthService';


class LoginScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      loading: false,
      errors: []
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.screenTitles}>
          <Text style={styles.title}>{COMPANY_NAME}</Text>
          <Text>{COMPANY_LINE}</Text>
        </View>
        {this.renderErrors()}
        <View>
          <Input
            style={styles.textInput}
            placeholder='Email'
            shake={true}
            leftIcon={
              <Icon
                name='user'
                size={24}
                color='black'
              />
            }
            editable={!this.state.loading}
            value={this.state.email}
            onChangeText={(email) => { this.setState({email}) }}
          />
        </View>
        <View>
          <Input
            style={styles.textInput}
            placeholder='Password'
            shake={true}
            secureTextEntry={true}
            leftIcon={
              <Icon
                name={'key'}
                size={24}
                color='black'
              />
            }
            editable={!this.state.loading}
            value={this.state.password}
            onChangeText={(password) => { this.setState({password}) }}
          />
        </View>
        <View style={styles.loginButton}>
          <Button
            onPress={this.onLogin.bind(this)}
            title="Login"
            color="#841584"
            accessibilityLabel="Authenticate user"
            loading={this.state.loading}
          />
        </View>
      </View>
    )
  }

  renderErrors() {
    const self = this;
    if (self.state.errors.length) {
      return (
        <View style={styles.errorMessage}>
          {
            self.state.errors.map((error, key) => {
              return (
                <Text key={`error_${key}`}>{error}</Text>
              )
            })
          }
        </View>
      )
    } else {
      return null
    }
  }

  onLogin() {
    const self = this;
    const service = new AuthService();
    self.setState({
      loading: true
    }, () => {
      service.authenticate(self.state.email, self.state.password, (resp) => {
        self.setState({ loading: false }, () => {
          if (resp.errors) {
            self.setState({ errors: resp.errors });
          } else {
            self.onSuccessLogin();
          }
        });
      });
    });
  }

  onSuccessLogin() {
    this.props.navigation.navigate('WelcomeScreen');
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  screenTitles: {
    alignItems: 'center',
    marginBottom: 10
  },
  title: {
    fontSize: 24
  },
  loginButton: {
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10
  },
  errorMessage: {
    alignItems: 'center',
    marginBottom: 10,
    color: '#940A07'
  }
});

export default LoginScreen;
