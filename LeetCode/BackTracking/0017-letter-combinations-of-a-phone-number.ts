/**
 * Problem: Letter Combinations of a Phone Number
 * Link: https://leetcode.com/problems/letter-combinations-of-a-phone-number/
 * Difficulty: Medium
 * 
 * Time Complexity: O(n . 4^n)
 * Space Complexity: O(n)
 */

export 
function letterCombinations(digits: string): string[] {
  if (digits.length === 0) {
    return [];
  }

  const map: Record<string, string> = {
    "2": "abc",
    "3": "def",
    "4": "ghi",
    "5": "jkl",
    "6": "mno",
    "7": "pqrs",
    "8": "tuv",
    "9": "wxyz",
  };

  const path: string[] = [];
  const res: string[] = [];

  const dfs = (index: number): void => {
    if (index === digits.length) {
      res.push(path.join(""));
      return;
    }

    const curDigit = digits[index];
    const posLetters = map[curDigit];

    for (const letter of posLetters) {
      path.push(letter);
      dfs(index + 1);
      path.pop();
    }
  };
  dfs(0);

  return res;
}
