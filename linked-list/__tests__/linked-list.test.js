'use strict';

// Require the assertion library for testing
const { expect } = require('chai');

// Require your linked list implementation
const LinkedList = require('../index');

describe('Linked List', () => {
  // Test case for inserting elements into the linked list
  describe('insert', () => {
    it('should insert elements at the head of the list', () => {
      const list = new LinkedList();
      list.insert('c');
      list.insert('b');
      list.insert('a');
      // Check if the list is constructed correctly
      expect(list.toString()).to.equal('{ a } -> { b } -> { c } -> NULL');
    });
  });

  // Test case for checking if a value exists in the linked list
  describe('includes', () => {
    it('should return true if the value exists in the list', () => {
      const list = new LinkedList();
      list.insert('c');
      list.insert('b');
      list.insert('a');
      // Check if 'b' exists in the list
      expect(list.includes('b')).to.be.true;
    });

    it('should return false if the value does not exist in the list', () => {
      const list = new LinkedList();
      list.insert('c');
      list.insert('b');
      list.insert('a');
      // Check if 'd' exists in the list
      expect(list.includes('d')).to.be.false;
    });
  });
});
