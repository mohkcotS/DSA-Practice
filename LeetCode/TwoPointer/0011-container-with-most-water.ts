/**
 * Problem: Container With Most Water
 * Link: https://leetcode.com/problems/container-with-most-water
 * Difficulty: Medium
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

export function maxArea(height: number[]): number {
  let max = 0;
  let n = height.length;
  let left = 0,
    right = n - 1,
    count;

  while (left < right) {
    count = (right - left) * Math.min(height[right], height[left]);
    if (count > max) max = count;
    if (height[right] > height[left]) {
      left++;
    } else {
      right--;
    }
  }
  return max;
}
