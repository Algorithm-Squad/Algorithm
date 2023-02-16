// https://leetcode.com/problems/same-tree/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */

const isSameTree = (p, q) => {
  if (p === null && q === null) return true;
  if ((p === null && q !== null) || (p !== null && q === null)) return false;
  if (p.val !== q.val) return false;
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

// 문제 설명 및 해결
// 매개변수로 주어진 두개의 tree가 같은지 확인하는 문제
// 두 개의 tree가 같은지 확인하면서, 재귀의 종료 조건은
// 두 노드 모두 null이다 = true (p노드와 q노드 모두 더이상 자식 노드가 없는 경우)
// 두 노드의 값(val)이 서로 다르다 = false
// 두 노드 중에 하나의 노드만 null이다 = false
// 세 기준을 가지고 각 노드의 좌측, 우측이 같은지를 확인하는 재귀적 풀이
// 시간복잡도 76ms, 공간복잡도 42.1MB
