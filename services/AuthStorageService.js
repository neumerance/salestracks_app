import { AsyncStorage } from "react-native";
import AuthService from './AuthService';

export default class AuthStorageService {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }

  authHeaders() {
    const self = this;
    return {
      "access-token": '',
      "token-type": "Bearer",
      "client": "r54d0txge0vYA7lsWOBOaA",
      "expiry": "1557357997",
      "uid": "jonathan@mailer.com"
    }
  }

  authenticate() {
    this.set('name', 'jonjon');
  }

  async getOrAuthenticate(name) {
    const self = this;
    try {
      return await self.get(name);
    } catch {
      self.authenticate().then(() => {
        return self.getOrAuthenticate(name);
      });
    }
  }

  get(name) {
    return AsyncStorage.getItem(name);
  }

  set(name, value) {
    return AsyncStorage.setItem(name, value);
  }
}
