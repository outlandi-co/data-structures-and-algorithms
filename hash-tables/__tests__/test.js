const chai = require('chai');
const expect = chai.expect;
const HashTable = require('./hash_table');

describe('HashTable', () => {
  let ht;

  beforeEach(() => {
    ht = new HashTable();
  });

  it('should insert and retrieve values correctly', () => {
    ht.insert('apple', 10);
    ht.insert('banana', 20);
    ht.insert('grape', 30);

    expect(ht.get('apple')).to.equal(10);
    expect(ht.get('banana')).to.equal(20);
    expect(ht.get('grape')).to.equal(30);
  });

  it('should update the value of an existing key', () => {
    ht.insert('apple', 10);
    ht.insert('apple', 40);

    expect(ht.get('apple')).to.equal(40);
  });

  it('should delete a key and return null for get', () => {
    ht.insert('banana', 20);
    ht.delete('banana');

    expect(ht.get('banana')).to.be.null;
  });

  it('should return null for a non-existent key', () => {
    expect(ht.get('cherry')).to.be.null;
  });

  it('should return false when deleting a non-existent key', () => {
    expect(ht.delete('cherry')).to.be.false;
  });

  it('should handle collisions correctly', () => {
    // Assuming "bca" and "abc" collide
    ht.insert('bca', 50);
    ht.insert('abc', 60);

    expect(ht.get('bca')).to.equal(50);
    expect(ht.get('abc')).to.equal(60);
  });

  it('should display the hash table correctly', () => {
    ht.insert('apple', 10);
    ht.insert('banana', 20);
    ht.insert('grape', 30);

    ht.display();
    // Manually check the console output to verify
  });
});
