const app = require('../../src/app');

describe('\'passengers\' service', () => {
  it('registered the service', () => {
    const service = app.service('passengers');
    expect(service).toBeTruthy();
  });
});
