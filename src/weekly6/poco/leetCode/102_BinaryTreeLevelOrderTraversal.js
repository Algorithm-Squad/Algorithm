// https://leetcode.com/problems/binary-tree-level-order-traversal/

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
 * @return {number[][]}
 */

const levelOrder = function (root) {
  if (!root) return [];
  const queue = [];
  const result = [];

  queue.push(root);

  while (queue.length) {
    const temp = [];
    const length = queue.length;

    for (let i = 0; i < length; i++) {
      const curr = queue.shift();
      if (curr.left) queue.push(curr.left);
      if (curr.right) queue.push(curr.right);
      temp.push(curr.val);
    }
    result.push(temp);
  }
  return result;
};

// 문제 설명 및 해결
// 매개변수로 주어지는 이진트리를 순회하여 값들을 2차원 배열로 반환하는 문제
// queue를 활용한 bfs를 사용하여 문제를 해결
// 같은 깊이의 값들을 같은 배열에 넣기 위해 while문 내부에서 해당 depth의
// node 갯수만큼(queue.length) for loop를 통해, queue에 null 값이 아닌
// 새로운 node들을 추가 및 temp 배열에 push
// while문 1회순회마다 result에 temp를 push 해줌으로써 같은 depth 처리하는 로직
// 시간복잡도 68ms, 공간복잡도 43.7 MB
