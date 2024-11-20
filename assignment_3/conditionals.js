/**
 * 
 * @param {number} age 
 */
function checkEligibility(age) {
    if (age < 18) {
        console.log("Not eligible to vote.");
    } else if (age >= 18 && age <= 60) {
        console.log("Eligible to vote.");
    } else {
        console.log("Eligible to vote and eligible for senior citizen benefits.");
    }
}

console.log(checkEligibility(15)); // Not eligible to vote.
console.log(checkEligibility(25)); // Eligible to vote.
console.log(checkEligibility(65)); // Eligible to vote and eligible for senior citizen benefits.