import message from './app'

test('message is hello, world!', () => {
  expect(message).toBe('Hello, World!');
});