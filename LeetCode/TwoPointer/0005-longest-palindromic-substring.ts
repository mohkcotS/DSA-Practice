/**
 * Problem:Longest Palindromic Substring
 * Link: https://leetcode.com/problems/longest-palindromic-substring/
 * Difficulty: Medium
 *
 * Time Complexity: O()
 * Space Complexity: O()
 */

function longestPalindrome(s: string): string {
  let n = s.length;
  let max = 0;
  let start = 0;

  const expand = (left: number, right: number) => {
    while (left >= 0 && right < n && s[left] === s[right]) {
      if (right - left + 1 > max) {
        max = right - left + 1;
        start = left;
      }
      left--;
      right++;
    }
  };

  for (let i = 0; i < n; i++) {
    expand(i, i);
    expand(i, i + 1);
  }

  return s.slice(start,start+max);
}
