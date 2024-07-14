const Stack = require('../stack_class');

describe('Stack', () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  it('should start empty', () => {
    expect(stack.isEmpty()).toBe(true);
  });

  it('should push elements onto the stack', () => {
    stack.push(10);
    expect(stack.isEmpty()).toBe(false);
    expect(stack.peek()).toBe(10);
  });

  it('should pop elements from the stack', () => {
    stack.push(10);
    stack.push(20);
    expect(stack.pop()).toBe(20);
    expect(stack.pop()).toBe(10);
    expect(stack.isEmpty()).toBe(true);
  });

  it('should peek the top element without removing it', () => {
    stack.push(10);
    stack.push(20);
    expect(stack.peek()).toBe(20);
    expect(stack.pop()).toBe(20);
    expect(stack.peek()).toBe(10);
  });

  it('should return undefined when popping from an empty stack', () => {
    expect(stack.pop()).toBeUndefined();
  });
});
