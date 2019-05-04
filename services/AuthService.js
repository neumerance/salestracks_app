import AsyncStorage from '@react-native-community/async-storage';
import {API_BASE_URL} from 'react-native-dotenv';
import axios from 'axios';

export default class AuthService {
  authenticate(email, password, callback = () => {}) {
    const self = this;
    self.clearUserData();
    const params = {
      email: email,
      password: password
    }
    axios.post(`${API_BASE_URL}/auth/sign_in.json`, params)
    .then(async (response) => {
      if (response.status === 200) {
        await self.setCurrentUser(response.headers);
        self.setCurrentUserData(response.data);
        callback(response);
      }
    })
    .catch((_error) => {
      callback({ errors: ['Unable to login, please check your email and password'] });
    });
  }

  async setCurrentUser(headers = {}) {
    const authParams = {
      'access-token': headers['access-token'],
      'token-type': headers['token-type'],
      'client': headers['client'],
      'expiry': headers['expiry'],
      'uid': headers['uid']
    }
    await AsyncStorage.setItem('current_user', JSON.stringify(authParams));
  }

  async getCurrentUser() {
    const current_user = await AsyncStorage.getItem('current_user');
    if (current_user) {
      return JSON.parse(current_user);
    } else {
      return null
    }
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

  async hasValidToken() {
    const self = this;
    const current_user = await self.getCurrentUser();
    if (!current_user) { return false }
    try {
      const response = await axios.get(
        `${API_BASE_URL}/auth/validate_token.json`,
        { headers: current_user }
      );
      if (response.data.success) { return true }
    } catch {
      return false
    }
  }

  async setCurrentUserData(userData = {}) {
    await AsyncStorage.setItem('current_user_data', JSON.stringify(userData));
  }
}

