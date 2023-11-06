class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

function invertTree(root) {
    if (root === null) {
        return null;
    }

    // 递归交换左右子树
    const left = invertTree(root.left);
    const right = invertTree(root.right);

    root.left = right;
    root.right = left;

    return root;
}

// 创建一棵示例二叉树
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

// 翻转二叉树
const invertedRoot = invertTree(root);
