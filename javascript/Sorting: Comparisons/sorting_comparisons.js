// src/sorting_comparisons.js

// Helper function to remove leading articles
function stripLeadingArticles(title) {
  return title.replace(/^(A |An |The )/i, '').trim();
}

// Comparator function to sort by year
function compareByYear(a, b) {
  return b.year - a.year;
}

// Comparator function to sort by title, ignoring leading articles
function compareByTitle(a, b) {
  const titleA = stripLeadingArticles(a.title);
  const titleB = stripLeadingArticles(b.title);
  if (titleA < titleB) return -1;
  if (titleA > titleB) return 1;
  return 0;
}

module.exports = { compareByYear, compareByTitle };
