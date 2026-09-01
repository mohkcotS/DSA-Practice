/**
 * Problem: Median of Two Sorted Arrays
 * Link: https://leetcode.com/problems/median-of-two-sorted-arrays/description/
 * Difficulty: Hard
 *
 * Time Complexity: O(log(min(n1,n2))
 * Space Complexity: O()
 */

function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  if (nums1.length > nums2.length) {
    let numswap: number[] = nums1;
    nums1 = nums2;
    nums2 = numswap;
  }
  let n1 = nums1.length,
    n2 = nums2.length;
  let n1L = 0,
    n1R = n1;
  let halfLength = Math.floor((n1 + n2 + 1) / 2);
  let n1Contribute, n2Contribute, minN1, maxN1, minN2, maxN2;

  while (n1L <= n1R) {
    n1Contribute = Math.floor((n1L + n1R) / 2);
    n2Contribute = halfLength - n1Contribute;

    minN1 = n1Contribute === 0 ? -Infinity : nums1[n1Contribute - 1];
    maxN1 = n1Contribute === n1 ? Infinity : nums1[n1Contribute];
    minN2 = n2Contribute === 0 ? -Infinity : nums2[n2Contribute - 1];
    maxN2 = n2Contribute === n2 ? Infinity : nums2[n2Contribute];

    if (minN1 <= maxN2 && minN2 <= maxN1) {
      if ((n1 + n2) % 2 === 1) {
        return Math.max(minN1, minN2);
      } else {
        return (Math.max(minN1, minN2) + Math.min(maxN1, maxN2)) / 2;
      }
    } else if (minN1 > maxN2) {
      n1R = n1Contribute - 1;
    } else {
      n1L = n1Contribute + 1;
    }
  }
  return 0;
}
