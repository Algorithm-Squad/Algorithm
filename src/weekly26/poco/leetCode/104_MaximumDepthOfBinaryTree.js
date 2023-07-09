// https://leetcode.com/problems/maximum-depth-of-binary-tree/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const maxDepth = (root) => {
  if (!root) return 0;

  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};

// console.log(
//   maxDepth({
//     val: 3,
//     left: { val: 9, left: null, right: null },
//     right: {
//       val: 20,
//       left: {
//         val: 15,
//         left: { val: 10, left: null, right: null },
//         right: { val: 11, left: null, right: null },
//       },
//       right: { val: 7, left: null, right: null },
//     },
//   })
// );

// 매개변수
// root : 트리의 루트 노드

// 출력
// number : 트리의 최대 깊이

// 문제 해결 및 설명
// 트리의 최대 깊이를 구하는 문제
// 트리의 최대 깊이는 루트 노드에서 가장 먼 리프 노드(자식 노드가 없는 노드)까지의 가장 긴 경로를 의미함
// 트리의 최대 깊이를 구하는 문제이므로, DFS를 사용해서 풀이(재귀 사용)
// 재귀 탈출 조건은 root(val) 값이 null일 경우 0을 반환하여 재귀를 종료
// 재귀를 돌면서, 왼쪽 자식 노드와 오른쪽 자식 노드 중에 더 깊은 노드를 선택하여 +1을 해주면서 재귀를 돌아서 최대 깊이를 구함
