import AuthStorageService from '../../services/AuthStorageService';

it('Should set and get data',  () => {
  const storage = new AuthStorageService();
  const name = 'name';
  const value = 'Jonathan';

  storage.set(name, value).then((_data) => {
    storage.get(name).then((data) => {
      expect(data).toBe(value);
    });

    storage.getOrAuthenticate('name').then((data) => {
      expect(data).toBe(value);
    });
  });
});
