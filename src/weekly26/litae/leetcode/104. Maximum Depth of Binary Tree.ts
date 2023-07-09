class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(val: number) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function maxDepth(root: TreeNode | null): number {
  let maxNodeDepth = 0;

  const recursion = (node: TreeNode | null, depth: number) => {
    if (!node) return;

    recursion(node.left, depth + 1);
    recursion(node.right, depth + 1);

    maxNodeDepth = Math.max(maxNodeDepth, depth);
  };

  recursion(root, 1);

  return maxNodeDepth;
}
