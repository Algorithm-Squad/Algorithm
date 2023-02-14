// https://leetcode.com/problems/invert-binary-tree/

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
 * @return {TreeNode}
 */

const dfs = (node) => {
  if (!node) return null;
  const left = dfs(node.left);
  const right = dfs(node.right);

  node.left = right;
  node.right = left;
  return node;
};

const invertTree = (root) => {
  return dfs(root);
};

// 문제 설명 및 해결
// 이진트리는 각 노드가 최대 두 개의 자식을 갖는 트리를 뜻한다. 즉, 각 노드는 자식이 없거나 한 개 이거나 두 개만을 갖는 것이다.
// 결국 매개변수로 주어진 tree를 변환만 해서 출력하는 문제이기 때문에
// node가 null인 경우를 종료조건으로 하는 dfs (재귀활용)를 통해
// 각 노드의 좌측과 우측을 바꿔주는 로직 작성
// 시간복잡도 75ms, 공간복잡도 41.6 MB
