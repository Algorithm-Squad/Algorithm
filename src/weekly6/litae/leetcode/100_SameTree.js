var isSameTree = function(p, q) {
    // 둘다 값이 없을 때는 null로 같기 때문에 true를 리턴
    if(p === null && q === null) return true;

    // 한쪽에만 값이 있고, 나머지 한쪽이 null이면 서로 다른 값을 가지고 있기 때문에 false 리턴
    if((p === null) || (q === null)) return false;

    // 두 개의 값이 서로 다를 경우에는 false 리턴
    if(p.val !== q.val) return false;


    // 두 개의 값이 같을 경우에는 재귀를 통해 left와 right의 값을 다시 비교
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};