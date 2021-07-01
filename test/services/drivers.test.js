const app = require('../../src/app');

describe('\'drivers\' service', () => {
  it('registered the service', () => {
    const service = app.service('drivers');
    expect(service).toBeTruthy();
  });
});
