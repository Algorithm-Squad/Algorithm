var levelOrder = function(root) {
    // root이 없으면 빈 배열을 리턴
    if(!root) return [];

    const result = [];
    // queue에 root를 넣어 초기화
    const queue = [];
    queue.push(root);

    while(queue.length > 0) {
        // 현재 길이(큐의 길이)는 현재 레벨에 있는 노드의 수
        const currentLength = queue.length;
        const currentLevel = [];

        // for문에서 도는 노드는 모두 같은 레벨의 노드들
        for(let i = 0; i < currentLength; i++) {
            const node = queue.shift();
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
            currentLevel.push(node.val);
        }
        result.push(currentLevel)
    }
    return result;
};