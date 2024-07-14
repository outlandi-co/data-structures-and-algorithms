// src/test/sorting_comparisons.test.js

const { compareByYear, compareByTitle } = require('../sorting_comparisons');

function sortByYear(movies) {
  return movies.sort(compareByYear);
}

function sortByTitle(movies) {
  return movies.sort(compareByTitle);
}

function runTests() {
  const movies = [
    { title: 'The Matrix', year: 1999, genres: ['Action', 'Sci-Fi'] },
    { title: 'A Beautiful Mind', year: 2001, genres: ['Biography', 'Drama'] },
    { title: 'An Inconvenient Truth', year: 2006, genres: ['Documentary'] }
  ];

  // Test sorting by year
  const sortedByYear = sortByYear([...movies]);
  console.log('Sorted by Year:', sortedByYear);
  console.assert(sortedByYear[0].year === 2006, 'First movie should be from 2006');

  // Test sorting by title
  const sortedByTitle = sortByTitle([...movies]);
  console.log('Sorted by Title:', sortedByTitle);
  console.assert(sortedByTitle[0].title === 'A Beautiful Mind', 'First movie should be \'A Beautiful Mind\'');

  // Edge cases
  const emptyArray = [];
  const singleMovieArray = [{ title: 'Solo', year: 2018, genres: ['Action'] }];
  console.assert(sortByYear([...emptyArray]).length === 0, 'Empty array should remain empty');
  console.assert(sortByYear([...singleMovieArray])[0].title === 'Solo', 'Single movie array should remain unchanged');
}

// Ensure there is at least one valid test
test('run movie sort tests', () => {
  runTests();
});
