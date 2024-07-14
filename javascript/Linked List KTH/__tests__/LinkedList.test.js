const { LinkedList } = require('../LinkedList');

describe('LinkedList', () => {
  it('should return the node value that is k places from the end of the linked list', () => {
    const ll = new LinkedList();
    ll.append(1);
    ll.append(3);
    ll.append(8);
    ll.append(2);
    expect(ll.kthFromEnd(0)).toBe(2);
    expect(ll.kthFromEnd(2)).toBe(3);
  });

  it('should throw an error if k is greater than the length of the linked list', () => {
    const ll = new LinkedList();
    ll.append(1);
    ll.append(3);
    ll.append(8);
    ll.append(2);
    expect(() => ll.kthFromEnd(6)).toThrow('k is greater than or equal to the length of the linked list');
  });

  it('should throw an error if k is not a positive integer', () => {
    const ll = new LinkedList();
    ll.append(1);
    ll.append(3);
    ll.append(8);
    ll.append(2);
    expect(() => ll.kthFromEnd(-1)).toThrow('k must be a non-negative integer');
  });

  it('should handle linked list of size 1', () => {
    const ll = new LinkedList();
    ll.append(1);
    expect(ll.kthFromEnd(0)).toBe(1);
  });

  it('should handle the happy path where k is somewhere in the middle', () => {
    const ll = new LinkedList();
    ll.append(1);
    ll.append(3);
    ll.append(8);
    ll.append(2);
    expect(ll.kthFromEnd(1)).toBe(8);
  });
});
