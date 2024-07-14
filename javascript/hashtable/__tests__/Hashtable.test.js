// __tests__/Hashtable.test.js
const Hashtable = require('../Hashtable');

describe('Hashtable', () => {
  let hashtable;

  beforeEach(() => {
    hashtable = new Hashtable();
  });

  test('Setting a key/value to the hashtable', () => {
    hashtable.set('name', 'Adam');
    expect(hashtable.get('name')).toBe('Adam');
  });

  test('Retrieving based on a key returns the value stored', () => {
    hashtable.set('name', 'Adam');
    expect(hashtable.get('name')).toBe('Adam');
  });

  test('Successfully returns null for a key that does not exist', () => {
    expect(hashtable.get('age')).toBeNull();
  });

  test('Successfully returns a list of all unique keys that exist in the hashtable', () => {
    hashtable.set('name', 'Adam');
    hashtable.set('age', '30');
    expect(hashtable.keys()).toEqual(expect.arrayContaining(['name', 'age']));
  });

  test('Successfully handle a collision within the hashtable', () => {
    const hashMock = jest.fn().mockReturnValue(1);
    hashtable.hash = hashMock;

    hashtable.set('name', 'Adam');
    hashtable.set('age', '30');

    expect(hashtable.get('name')).toBe('Adam');
    expect(hashtable.get('age')).toBe('30');
  });

  test('Successfully retrieve a value from a bucket within the hashtable that has a collision', () => {
    const hashMock = jest.fn().mockReturnValue(1);
    hashtable.hash = hashMock;

    hashtable.set('name', 'Adam');
    hashtable.set('age', '30');

    expect(hashtable.get('age')).toBe('30');
  });

  test('Successfully hash a key to an in-range value', () => {
    const index = hashtable.hash('name');
    expect(index).toBeLessThan(hashtable.size);
    expect(index).toBeGreaterThanOrEqual(0);
  });
});
