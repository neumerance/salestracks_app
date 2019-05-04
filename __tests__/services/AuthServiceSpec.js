import AuthService from '../../services/AuthService';
import { TEST_EMAIL, TEST_PASSWORD } from 'react-native-dotenv';

let service = {};

describe('AuthService', () => {
  beforeAll(() => {
    jest.mock('@react-native-community/async-storage');
    service = new AuthService();
  })

  test('should authenticate to service', () => {
    service.authenticate(TEST_EMAIL, TEST_PASSWORD,(resp) => {
      expect(resp.data).toHaveProperty('id');
      expect(resp.data).toHaveProperty('email');
    });
  });

  test('should throw error message', () => {
    service = new AuthService();
    service.authenticate('email@thatdontwork', 'password that dont work',(resp) => {
      expect(resp).toHaveProperty('errors');
    });
  });

  test('should have no user before authentication', async () => {
    const current_user = await service.getCurrentUser();
    expect(current_user).toBeNull();
  });

  test('should set current user data', () => {
    service.authenticate(TEST_EMAIL, TEST_PASSWORD,async () => {
      const current_user = await service.getCurrentUser();
      expect(current_user).toHaveProperty('access-token');
      expect(current_user).toHaveProperty('token-type');
      expect(current_user).toHaveProperty('client');
      expect(current_user).toHaveProperty('expiry');
      expect(current_user).toHaveProperty('uid');
    });
  });

  test('should have valid token', () => {
    service.authenticate(TEST_EMAIL, TEST_PASSWORD,async () => {
      const hasValidToken = await service.hasValidToken();
      expect(hasValidToken).toBeTrue();
    });
  });

  test('should have no valid token when not authenticated', async () => {
    const hasValidToken = await service.hasValidToken();
    expect(hasValidToken).toBeFalsy();
  });
});
