/**
 * Problem: 3Sum
 * Link: Medium
 * Difficulty: https://leetcode.com/problems/3sum
 * 
 * Time Complexity: O(n^2)
 * Space Complexity: O(n)
 */

export 
function threeSum(nums: number[]): number[][] {
  nums = nums.sort((a, b) => a - b);
  let n = nums.length;
  let left = 0,
    mid,
    right;
  let res: number[][] = [];

  while (left < n - 2) {
    if (left > 0 && nums[left] === nums[left - 1]) {
      left++;
      continue;
    }

    mid = left + 1;
    right = n - 1;

    while (mid < right) {
      if (nums[left] + nums[mid] + nums[right] === 0) {
        res.push([nums[left], nums[mid], nums[right]]);
        mid++;
        right--;
        while (mid < right && nums[mid] === nums[mid - 1]) {
          mid++;
        }

        while (mid < right && nums[right] === nums[right + 1]) {
          right--;
        }
      } else if (nums[left] + nums[mid] + nums[right] > 0) {
        right--;
      } else {
        mid++;
      }
    }
    left++;
  }
  return res;
}
