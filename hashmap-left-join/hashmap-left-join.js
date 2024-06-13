// leftJoin.js

function leftJoin(synonyms, antonyms) {
  const result = [];

  for (let key in synonyms) {
    const synonymValue = synonyms[key];
    const antonymValue = antonyms[key] || null;
    result.push([key, synonymValue, antonymValue]);
  }

  return result;
}

module.exports = leftJoin;
