/**
 * 102. Binary Tree Level Order Traversal / Medium
 * https://leetcode.com/problems/binary-tree-level-order-traversal/
 *
 * 문제해석 : tree의 value를 확인해서 배열에 푸시를 하는데, 이때 왼쪽과 오른쪽의 값이 같은 배열의 인덱스에 위치하기 위해
 * 새로운 배열 []을 만들어 놓고, 생성된 배열이 있으면 그 위치에 value를 푸시하고 없으면 새로 만들어서 value를 푸시하여
 * 왼쪽값과 오른쪽값을 쌍으로 만드는 과정이 필요합니다. 그 다음 왼쪽과 오른쪽을 재귀를 사용해 계속해서 값을 찾아갑니다.
 *
 * 시간복잡도 : [Runtime 69 ms] [Beats 69.20%]
 * 공간복잡도 : [Memory 43.5 MB] [Beats 95.84%]
 *
 * @param {TreeNode} root
 * @return {number[][]}
 */
 var levelOrder = function(root) {
  let answer = [] // [[]]

  const recursiveRoot = (root, position) => {
    if(root === null) return; //종료
    if(root !== null) {
      !answer[position]? answer.push([]) : null;
      answer[position].push(root.val);
    }

    recursiveRoot(root.left, position + 1);
    recursiveRoot(root.right, position + 1);
    return root;
  }

  recursiveRoot(root, 0);
  return answer;
};

const root = [3,9,20,null,null,15,7]; //[[3],[9,20],[15,7]]
// const root = [1];
// const root = [];
levelOrder(root);