/**
 * Problem: 3Sum Closet
 * Link: https://leetcode.com/problems/3sum-closest/
 * Difficulty: Medium
 *
 * Time Complexity: O(n^2)
 * Space Complexity: O(1)
 */

export function threeSumClosest(nums: number[], target: number): number {
  if (nums.length === 3) {
    return nums[0] + nums[1] + nums[2];
  }
  let sum = 0,
    res = 0,
    gap = Infinity,
    n = nums.length - 1,
    left,
    right,
    pivot;
  nums = nums.sort((a, b) => a - b);
  for (pivot = 0; pivot <= n - 2; pivot++) {
    left = pivot + 1;
    right = n;
    while (left < right) {
      sum = nums[left] + nums[right] + nums[pivot];
      if (sum === target) {
        return sum;
      } else {
        if (Math.abs(target - sum) < gap) {
          gap = Math.abs(target - sum);
          res = sum;
        }
        if (sum > target) {
          right--;
        } else {
          left++;
        }
      }
    }
  }

  return res;
}
