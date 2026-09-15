/**
 * Problem: Remove Nth Node From End of List
 * Link: https://leetcode.com/problems/remove-nth-node-from-end-of-list
 * Difficulty: Medium
 * 
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

export 
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  const dummy = new ListNode(0, head);
  let fast = dummy,
    slow = dummy,
    count = 0;

  while (fast.next !== null) {
    if (count >= n) {
      slow = slow.next!;
    }
    fast = fast.next;
    count++;
  }

  slow.next = slow.next!.next;

  return dummy.next;
}
