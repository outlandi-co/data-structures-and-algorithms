function repeatedWord(str) {
  if (!str) return null;

  const words = str.toLowerCase().match(/\b\w+\b/g);
  const wordMap = new Map();

  for (const word of words) {
    if (wordMap.has(word)) {
      return word;
    } else {
      wordMap.set(word, 1);
    }
  }

  return null;
}

module.exports = repeatedWord;
