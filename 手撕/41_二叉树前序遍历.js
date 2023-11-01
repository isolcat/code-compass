class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

function preorderTraversal(root) {
    const result = [];

    function traverse(node) {
        if (node) {
            result.push(node.val);     // 先访问根节点
            traverse(node.left);       // 递归遍历左子树
            traverse(node.right);      // 递归遍历右子树
        }
    }

    traverse(root);

    return result;
}

// 创建一个二叉树
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

// 执行前序遍历
const result = preorderTraversal(root);
console.log(result); // 输出 [1, 2, 4, 5, 3]
