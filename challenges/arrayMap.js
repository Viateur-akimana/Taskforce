//function for checking if there exist subarray whose sum equal to  target
function checkingSumOfSubArray(arr, target) {
  //the initial currentSum  to zero
  let currentSum = 0;
  //initializing the left element
  let left = 0;

  for (let right = 0; right < arr.length; right++) {
    //currentSum is increased by current element
    currentSum += arr[right];

    // While target is less than current sum
    while (currentSum > target) {
      // Subtract left element from the currentSum
      currentSum -= arr[left];
      //moving the left to steps
      left++;
    }
    // If the current sum equals to target
    if (currentSum === target) {
      return true;
    }
  }
// If the current sum is not the same as target 
  return false;
}

// Sample usage
const arr = [4, 2, 7, 1, 9, 5];
const target = 17;

//true
console.log(checkingSumOfSubArray(arr, target)); 

const arr2 = [1, 2, 3, 4, 5];
const target2 = 20;
//false
console.log(checkingSumOfSubArray(arr2, target2)); 