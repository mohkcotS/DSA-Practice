/**
 * Problem: 4Sum
 * Link: https://leetcode.com/problems/4sum/
 * Difficulty: Medium
 *
 * Time Complexity: O(n^3)
 * Space Complexity: O(n)
 **/

function fourSum(nums: number[], target: number): number[][] {
  nums = nums.sort((a, b) => a - b);

  let lPtr,
    rPtr,
    total,
    n = nums.length;

  const res: number[][] = [];

  if (n < 4) {
    return res;
  }

  for (let i = 0; i <= n - 4; i++) {
    if (i > 0 && nums[i] == nums[i - 1]) continue;

    if (nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3] > target) break;

    if (nums[i] + nums[n - 1] + nums[n - 2] + nums[n - 3] < target) continue;

    for (let j = i + 1; j <= n - 3; j++) {
      if (j > i + 1 && nums[j] == nums[j - 1]) continue;

      if (nums[i] + nums[j] + nums[j + 1] + nums[j + 2] > target) break;

      if (nums[i] + nums[j] + nums[n - 1] + nums[n - 2] < target) continue;

      lPtr = j + 1;
      rPtr = n - 1;

      while (lPtr < rPtr) {
        total = nums[i] + nums[j] + nums[lPtr] + nums[rPtr];
        if (total === target) {
          res.push([nums[i], nums[j], nums[lPtr], nums[rPtr]]);
          while (lPtr < rPtr && nums[lPtr] === nums[lPtr + 1]) lPtr++;
          while (lPtr < rPtr && nums[rPtr] === nums[rPtr - 1]) rPtr--;
          lPtr++;
          rPtr--;
        } else if (total > target) {
          rPtr--;
        } else {
          lPtr++;
        }
      }
    }
  }

  return res;
}
