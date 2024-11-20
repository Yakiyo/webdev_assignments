const arr = [12, 45, 78, 23, 56, 89, 34, 67, 90, 21, 54, 76, 32, 88, 43];

/**
 * 
 * @param {number[]} arr 
 * @returns {number}
 */
function calculateAverage(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0) / arr.length;
}

/**
 * 
 * @param {number[]} arr 
 * @param {number} item 
 */
function addToArray(arr, item) {
    arr.push(item);
}

/**
 * 
 * @param {number[]} arr  
 */
function removeFromArray(arr) {
    arr.shift();
}

/**
 * 
 * @param {number[]} arr 
 */
function printAll(arr) {
    arr.forEach(console.log);
}

console.log(calculateAverage(arr));
addToArray(arr, 100);
removeFromArray(arr);
printAll(arr);