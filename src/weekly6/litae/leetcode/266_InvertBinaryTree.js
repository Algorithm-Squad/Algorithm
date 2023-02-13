var invertTree = function(root) {
    if(!root) return root;
    // 변수 temp에 root.left를 저장하여 root.left와 root.right를 바꿈
    let temp = root.left;
    root.left = root.right;
    root.right = temp;
    
    // invertTree(root.left);
    // invertTree(root.right);
    // 원래 if문을 사용하지 않았더니 공간복잡도가 높게 나옴 (Memory41.8 MB) / (Memory42.2 MB)
    if(root.left) invertTree(root.left);
    if(root.right) invertTree(root.right);
    return root;
};