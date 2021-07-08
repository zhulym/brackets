module.exports = function check(str, bracketsConfig) {
  const newStrArr = str.split('');
  if ((str.length % 2) !== 0) return false;
  // if (str[0] === str[str.length - 1]) return false;
  newStrArr.forEach(el => (!bracketsConfig.flat().includes(el)) ? false : true)

  return true;
}

// console.log(check('{()|}}', [['{', '}'], ['|', '|']]))
// check('|()|', [['(', ')'], ['|', '|']]) // -> true
// check('|(|)', [['(', ')'], ['|', '|']]) // -> false
// check('[(])', [['(', ')'], ['[', ']']]) // -> false
