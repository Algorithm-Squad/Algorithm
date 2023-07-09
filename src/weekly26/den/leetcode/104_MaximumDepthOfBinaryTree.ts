/**
 * 문제출처: https://leetcode.com/problems/maximum-depth-of-binary-tree/
 * 시작시간: 18:40
 * 종료시간: 19:00
 * 
 * 풀이과정
 * 1. root가 null이면 0을 반환한다.
 * 2. root가 null이 아니면 1을 반환한다.
 * 3. root의 left와 right를 재귀적으로 호출한다.
 * 4. left와 right 중 큰 값을 반환한다.
 */

class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
      this.val = (val===undefined ? 0 : val)
      this.left = (left===undefined ? null : left)
      this.right = (right===undefined ? null : right)
  }
}

function maxDepth(root: TreeNode | null): number {
  if(root === null) return 0;
  if(root.left === null && root.right === null) return 1;
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};