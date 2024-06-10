const repeatedWord = require('./repeatedWord');

describe('repeatedWord', () => {
  it('returns the first repeated word in a string', () => {
    expect(repeatedWord('Once upon a time, there was a brave princess who...')).toBe('a');
    expect(repeatedWord('It was the best of times, it was the worst of times...')).toBe('it');
    expect(repeatedWord('It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York...')).toBe('summer');
  });

  it('returns null if no word repeats', () => {
    expect(repeatedWord('This is a test string with no repeated words.')).toBe(null);
  });

  it('handles edge cases', () => {
    expect(repeatedWord('')).toBe(null);
    expect(repeatedWord('Hello hello')).toBe('hello');
  });
});
