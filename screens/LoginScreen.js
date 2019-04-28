import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Input, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { COMPANY_NAME, COMPANY_LINE } from 'react-native-dotenv'


class LoginScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.screenTitles}>
          <Text style={styles.title}>{COMPANY_NAME}</Text>
          <Text>{COMPANY_LINE}</Text>
        </View>
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
          />
        </View>
        <View style={styles.loginButton}>
          <Button
            onPress={this.onLogin}
            title="Login"
            color="#841584"
            accessibilityLabel="Authenticate user"
          />
        </View>
      </View>
    )
  }

  onLogin() {

  }

  setEmail(e) {
    this.setFieldValue(e.target.value, 'email');
  }

  setPassword(e) {
    this.setFieldValue(e.target.value, 'password');
  }

  setFieldValue(value, field) {
    const state = this.state;
    state[field] = value;
    this.setState(state);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  screenTitles: {
    alignItems: 'center',
    marginBottom: 30
  },
  title: {
    fontSize: 24
  },
  loginButton: {
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10
  }
})

export default LoginScreen;
