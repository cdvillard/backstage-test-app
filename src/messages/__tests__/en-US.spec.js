 import messages from '../en-US';

describe('en-US messages', () => {
  it('creates snapshot', () => {
    expect(messages).toMatchSnapshot();
  });
});
