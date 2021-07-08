module.exports = function check(str, bracketsConfig) {
  // if ((str.length % 2) !== 0) return false;                                       // test 2/20
  // newStrArr.forEach(el => (!bracketsConfig.flat().includes(el)) ? false : true);  // test 13/20
  const newConfig = bracketsConfig.map(el => el.join(''));                           // test 20/20
  debugger;
  for (let i = 0; i < newConfig.length; i++) {
    if (str.includes(newConfig[i])) {
      str = str.replace(newConfig[i], '');
      i = -1;
      console.log(str);
    }
    console.log(str);
  }
  return !str;
}

// console.log(check('|()|', [['(', ')'], ['|', '|']])) // -> true
// console.log(check('|(|)', [['(', ')'], ['|', '|']])) // -> false
// console.log(check('[(])', [['(', ')'], ['[', ']']])) // -> false
