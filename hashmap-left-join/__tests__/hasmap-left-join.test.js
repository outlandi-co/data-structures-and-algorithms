const leftJoin = require('../hashmap-left-join');

describe('Left Join', () => {
  it('should perform left join correctly', () => {
    const synonyms = {
      'diligent': 'employed',
      'fond': 'enamored',
      'guide': 'usher',
      'outfit': 'garb',
      'wrath': 'anger'
    };

    const antonyms = {
      'diligent': 'idle',
      'fond': 'averse',
      'guide': 'follow',
      'flow': 'jam',
      'wrath': 'delight'
    };

    const expectedOutput = [
      ['diligent', 'employed', 'idle'],
      ['fond', 'enamored', 'averse'],
      ['guide', 'usher', 'follow'],
      ['outfit', 'garb', null],
      ['wrath', 'anger', 'delight']
    ];

    expect(leftJoin(synonyms, antonyms)).toEqual(expectedOutput);
  });

  it('should handle empty antonyms hashmap', () => {
    const synonyms = {
      'diligent': 'employed',
      'fond': 'enamored',
      'guide': 'usher',
      'outfit': 'garb',
      'wrath': 'anger'
    };

    const antonyms = {};

    const expectedOutput = [
      ['diligent', 'employed', null],
      ['fond', 'enamored', null],
      ['guide', 'usher', null],
      ['outfit', 'garb', null],
      ['wrath', 'anger', null]
    ];

    expect(leftJoin(synonyms, antonyms)).toEqual(expectedOutput);
  });
});
