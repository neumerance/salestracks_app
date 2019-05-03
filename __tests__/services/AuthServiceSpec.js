import AuthService from '../../services/AuthService';
import { TEST_EMAIL, TEST_PASSWORD } from 'react-native-dotenv';

let service = {};

describe('AuthService', () => {
  beforeAll(() => {
    service = new AuthService(TEST_EMAIL, TEST_PASSWORD);
  })

  test('should authenticate to service', () => {
    service.authenticate((resp) => {
      expect(resp.data).toHaveProperty('id');
      expect(resp.data).toHaveProperty('email');
    });
  });

  test('should throw error message', () => {
    service = new AuthService('email@thatdontwork', 'password that dont work');
    service.authenticate((resp) => {
      expect(resp).toHaveProperty('errors');
    });
  });

  test('should set current user data', async () => {
    await service.authenticate();
    const current_user = await service.getCurrentUser();
    expect(current_user).toHaveProperty('access-token');
  });
});
