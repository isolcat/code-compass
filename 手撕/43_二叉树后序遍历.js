class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

function postorderTraversal(root) {
    const result = [];

    function traverse(node) {
        if (node) {
            traverse(node.left);    // 递归遍历左子树
            traverse(node.right);   // 递归遍历右子树
            result.push(node.val);  // 访问根节点
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

// 执行后序遍历
const result = postorderTraversal(root);
console.log(result); // 输出 [4, 5, 2, 3, 1]
