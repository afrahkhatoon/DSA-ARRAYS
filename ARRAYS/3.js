/*
💡 **Q3.** Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

**Example 1:**
Input: nums = [1,3,5,6], target = 5

Output: 2

*/


function searchInsert(nums, target) {
    let left = 0;
    let right = nums.length - 1;
  
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
  
      if (nums[mid] === target) {
        return mid; // Target found, return the index
      } else if (nums[mid] < target) {
        left = mid + 1; // Search in the right half
      } else {
        right = mid - 1; // Search in the left half
      }
    }
  
    return left; // Target not found, return the insertion index
  }
  
  // Test the function
  const nums = [1, 3, 5, 6];
  const target = 5;
  const result = searchInsert(nums, target);
  console.log(result); 