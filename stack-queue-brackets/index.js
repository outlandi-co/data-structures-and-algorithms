function isValidBrackets(str) {
  const stack = [];

  const brackets = {
    '(': ')',
    '[': ']',
    '{': '}'
  };

  for (let char of str) {
    if (brackets[char]) { // if char is an opening bracket
      stack.push(char);
    } else if (char === ')' || char === ']' || char === '}') { // if char is a closing bracket
      const lastOpenedBracket = stack.pop();
      if (!lastOpenedBracket || brackets[lastOpenedBracket] !== char) {
        return false; // unmatched closing bracket or extra closing bracket
      }
    }
  }

  return stack.length === 0; // check if all brackets are matched
}

module.exports=isValidBrackets;
