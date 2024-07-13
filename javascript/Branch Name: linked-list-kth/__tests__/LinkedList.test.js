const { LinkedList, } = require('./linkedList');
const assert = require('assert');

describe('LinkedList kthFromEnd', () => {
  it('should throw an error when k is greater than the length of the list', () => {
    const ll = new LinkedList();
    ll.append(1);
    ll.append(3);
    ll.append(8);
    ll.append(2);
    assert.throws(() => ll.kthFromEnd(5), /k is out of bounds/);
  });

  it('should throw an error when k equals the length of the list', () => {
    const ll = new LinkedList();
    ll.append(1);
    ll.append(3);
    ll.append(8);
    ll.append(2);
    assert.throws(() => ll.kthFromEnd(4), /k is out of bounds/);
  });

  it('should throw an error when k is a negative integer', () => {
    const ll = new LinkedList();
    ll.append(1);
    assert.throws(() => ll.kthFromEnd(-1), /k must be a positive integer/);
  });

  it('should return the value of the only node when list size is 1 and k is 0', () => {
    const ll = new LinkedList();
    ll.append(1);
    assert.strictEqual(ll.kthFromEnd(0), 1);
  });

  it('should return the k-th node value from the end for valid k', () => {
    const ll = new LinkedList();
    ll.append(1);
    ll.append(3);
    ll.append(8);
    ll.append(2);
    assert.strictEqual(ll.kthFromEnd(2), 3);
  });
});
