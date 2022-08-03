import { message, version, ping } from './main'

test('message is hello, world!', () => {
  expect(message).toBe('Hello, World!');
});

test('current version', () => {
  expect(version).toBe('PKG_VERSION');
});

test('ping/pong', () => {
  expect(ping()).toBe('pong');
});