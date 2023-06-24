/*
💡 **Q1.** Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

**Example:**
Input: nums = [2,7,11,15], target = 9
Output0 [0,1]

**Explanation:** Because nums[0] + nums[1] == 9, we return [0, 1][
*/




function twoSum(nums, target) {
  // Create a map to store the complement value and its index
  const complements = new Map();

  // Iterate through the array
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const complement = target - num;

    // If the complement exists in the map, return its index and the current index
    if (complements.has(complement)) {
      return [complements.get(complement), i];
    }

    // Otherwise, store the current number and its index in the map
    complements.set(num, i);
  }

  // If no solution is found, return an empty array
  return [];
}

// Test the function
const nums = [2, 7, 11, 15];
const target = 9;
const result = twoSum(nums, target);
console.log(result);