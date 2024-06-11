const { PseudoQueue } = require('../pseudo_queue');

const assert = require('assert');

describe('PseudoQueue', () => {
  describe('enqueue and dequeue', () => {
    it('should enqueue and dequeue elements correctly', () => {
      const queue = new PseudoQueue();
      queue.enqueue(5);
      queue.enqueue(10);
      queue.enqueue(15);
      queue.enqueue(20);
      assert.strictEqual(queue.dequeue(), 5);
      assert.strictEqual(queue.dequeue(), 10);
    });

    it('should dequeue from an empty queue and return null', () => {
      const queue = new PseudoQueue();
      assert.strictEqual(queue.dequeue(), null);
    });

    it('should enqueue and dequeue elements alternately', () => {
      const queue = new PseudoQueue();
      queue.enqueue(5);
      assert.strictEqual(queue.dequeue(), 5);
      queue.enqueue(10);
      queue.enqueue(15);
      assert.strictEqual(queue.dequeue(), 10);
      queue.enqueue(20);
      assert.strictEqual(queue.dequeue(), 15);
      assert.strictEqual(queue.dequeue(), 20);
    });

    it('should enqueue and dequeue mixed types correctly', () => {
      const queue = new PseudoQueue();
      queue.enqueue('hello');
      queue.enqueue(10);
      queue.enqueue([1, 2, 3]);
      assert.strictEqual(queue.dequeue(), 'hello');
      assert.strictEqual(queue.dequeue(), 10);
      assert.deepStrictEqual(queue.dequeue(), [1, 2, 3]);
    });

    it('should enqueue and dequeue zero value correctly', () => {
      const queue = new PseudoQueue();
      queue.enqueue(5);
      queue.enqueue(0);
      assert.strictEqual(queue.dequeue(), 5);
      assert.strictEqual(queue.dequeue(), 0);
    });
  });
});
