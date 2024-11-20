/**
 * 
 * @param {string} str 
 */
function isPalindrome(str) {
    const rev = str.split('').reverse().join('');
    return str === rev;
}

console.log(isPalindrome('madam')); // true
console.log(isPalindrome('sir')); // false