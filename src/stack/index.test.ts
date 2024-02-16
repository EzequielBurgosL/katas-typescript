import { Stack } from '.';

describe('Stack', () => {
  describe('push', () => {
    it('should add one element', () => {
      const stack = new Stack();
      stack.push(1);
      stack.push(2);

      expect(stack.size()).toBe(2);
    });
  });

  describe('pop', () => {
    it('should remove one element', () => {
      const stack = new Stack();
      stack.push(1);
      stack.push(2);
      stack.pop();

      expect(stack.size()).toBe(1);
    });
  });

  describe('isEmpty', () => {
    it('should return true if the stack is empty', () => {
      const stack = new Stack();

      expect(stack.isEmpty()).toBe(true);
    });

    it('should return false if the stack is not empty', () => {
      const stack = new Stack();
      stack.push(1);

      expect(stack.isEmpty()).toBe(false);
    });
  });

  describe('size', () => {
    it('should return the number of elements', () => {
      const stack = new Stack();

      expect(stack.size()).toBe(0);
    });
  });

  describe('peek', () => {
    it('should return the top element', () => {
      const stack = new Stack();
      stack.push(1);
      stack.push(2);

      expect(stack.peek()).toBe(2);
    });
  });
});
