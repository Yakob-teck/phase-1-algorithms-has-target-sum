function hasTargetSum(array, target) {
  const complements = new Set(); 
  for (let num of array) {
    const complement = target - num; 
    if (complements.has(complement)) {
      return true; 
    }
    complements.add(num); 
  }

  return false; 
}

  

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
  function hasTargetSum(array, target):
    complements = empty set
    
    for num in array:
        complement = target - num
        if complement is in complements:
            return true
        add num to complements
    
    return false

*/

/*
  Add written explanation of your solution here
*/

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
