const input = 'Hello, World!';

/**
 * 
 * @param {string} str 
 * @returns string
 */
function toUpper(str) {
    return str.toUpperCase();
}

/**
 * 
 * @param {string} str
 * @param {string} subStr 
 * @returns number
 */
function findSubStr(str, subStr) {
    return str.indexOf(subStr);
}

/**
 * 
 * @param {string} str 
 * @returns string
 */
function reverse(str) {
    return str.split('').reverse().join('');
}

/**
 * 
 * @param {string} str 
 * @param {string} oldStr 
 * @param {string} newStr 
 * @returns string
 */
function replace(str, oldStr, newStr) {
    return str.replace(oldStr, newStr);
}