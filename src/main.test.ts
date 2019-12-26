import { Main } from '@/main';

describe('main', () => {
  describe('.helloWorld()', () => {
    it('returns "Hello World"', () => {
      expect(Main.helloWorld()).toEqual('Hello World');
    });
  });
});
