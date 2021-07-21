import { helloWorld } from '../index';

test('Prints hello world', () => {
  expect(helloWorld('hello', 'world')).toBe('hello world');
});
