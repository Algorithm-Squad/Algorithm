/**
 * 226. Invert Binary Tree / Easy
 * https://leetcode.com/problems/invert-binary-tree/
 * 문제해석 : 왼쪽과 오른쪽의 값을 비교하면서 임시변수에 저장해두었다가
 * 값을 서로 바꾸고 재귀를 이용해 오른쪽값과 왼쪽값을 바꾼 root를 반환합니다.
 *
 * 시간복잡도 : [Runtime 59 ms] [Beats 88.50%]
 * 공간복잡도 : [Memory 41.7 MB] [Beats 97.29%]
 *
 * @param {*} root
 */

var invertTree = function(root) {

  const recursiveInvert = (root) => {
    if(root === null) return null;
    else {
      let temp = root.left;
      root.left = root.right;
      root.right = temp;

      recursiveInvert(root.left);
      recursiveInvert(root.right);
      return root;
    }
  }

  if(root) recursiveInvert(root);
  return root;
};
const root = [4,2,7,1,3,6,9] // [4,7,2,9,6,3,1]
// const root = [2,1,3];
// const root = [];
invertTree(root);