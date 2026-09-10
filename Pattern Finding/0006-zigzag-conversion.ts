/**
 * Problem: Zigzag Conversion
 * Link: https://leetcode.com/problems/zigzag-conversion/
 * Difficulty: Medium
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

export function convert(s: string, numRows: number): string {
  if (numRows === 1) {
    return s;
  }
  const stringList: string[] = new Array(numRows).fill("");
  let cur = 0,
    dir = 1;

  for (let char of s) {
    stringList[cur] += char;
    if (cur === 0) dir = 1;
    if (cur === numRows - 1) dir = -1;
    cur += dir;
  }

  return stringList.join("");
}
