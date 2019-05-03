import AsyncStorage from '@react-native-community/async-storage';
import {API_BASE_URL} from 'react-native-dotenv';
import axios from 'axios';

export default class AuthService {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  authenticate(callback = () => {}) {
    const self = this;
    self.clearUserData();
    const params = {
      email: self.email,
      password: self.password
    }
    axios.post(`${API_BASE_URL}/auth/sign_in.json`, params)
    .then(async (response) => {
      if (response.status === 200) {
        await self.setCurrentUser(response);
        callback(response);
      }
    })
    .catch((_error) => {
      callback({ errors: ['Unable to login, please check your email and password'] });
    });
  }

  async setCurrentUser(response = {}) {
    const headers = response.headers;
    const authParams = {
      'access-token': headers['access-token'],
      'token-type': headers['token-type'],
      'client': headers['client'],
      'expiry': headers['expiry'],
      'uid': headers['uid']
    }
    await AsyncStorage.setItem('current_user', JSON.stringify(authParams));
    console.log('current_user', await AsyncStorage.getItem('current_user'))
  }

  async getCurrentUser() {
    return await AsyncStorage.getItem('current_user');
  }

  async clearUserData() {
    try {
      await AsyncStorage.removeItem('current_user');
      return true;
    }
    catch(_exception) {
      return false;
    }
  }
}
