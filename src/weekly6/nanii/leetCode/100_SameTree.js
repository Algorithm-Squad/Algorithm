/**
 * 100. Same Tree / Easy
 * https://leetcode.com/problems/same-tree/
 *
 * 문제 해석 : 두개의 바이너리 트리가 같은지 확인하여 boolean반환해야합니다.
 * 재귀를 사용하여 오른쪽값과 왼쪽값을 비교해가면서 확인하다 값이 다를 때 바로 false 반환하게끔 구현합니다.
 *
 * 시간복잡도 : O(N^2) ?
 * 공간복잡도 :
 */

 var isSameTree = function(p, q) {
  if(p === null && q === null) return true;
  if(p === null || q === null) return false;
  //false 를 걸러내야됨
  return (p.val === q.val) && isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

// var isSameTree = function(p, q) {
//   if(p === null && q === null) return true;
//   if(p === null || q === null) return false;
//   if((p.val !== q.val)) return false;
//   return isSameTree(p.right, q.right) && isSameTree(p.left, q.left);
// };


// const p = [1,2,3];
// const q = [1,2,3];
// isSameTree(p,q);