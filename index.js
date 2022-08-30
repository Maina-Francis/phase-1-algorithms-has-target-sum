function hasTargetSum(array, target) {
  // Write your algorithm here
  for (let i = 0; i < array.length; i++) {
    const complementaryNumber = target - array[i];
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] === complementaryNumber) {
        return true;
      }
    }
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
*/
// O(N^2)
/* 
  Add your pseudocode here
*/
// Iterate over the array of numbers, for the current number, find a complementary number that, when added together, equals our target number (for example: if our number is 3, and the target is 10, the complementary number is 7)
// Iterate over the remaining numbers in the array to see if the complementary number is present; if so, returning true
// If we reach the end of the array without finding a complementary number,  return false.

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
