import axios from 'axios';

export default class AuthService {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }

  authenticate() {
    const self = this;

    axios({
      method: 'post',
      url: '/auth',
      data: {
        username: self.username,
        lastName: self.password
      }
    }).then((resp) => {
      console.log('response', resp);
    })
  }
}