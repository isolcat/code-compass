class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

function isSymmetric(root) {
    if (!root) {
        return true; // 空树是对称的
    }

    // 定义一个递归辅助函数来检查两个子树是否对称
    function isMirror(left, right) {
        if (!left && !right) {
            return true; // 都为空，对称
        }
        if (!left || !right) {
            return false; // 一个为空，一个不为空，不对称
        }
        if (left.val !== right.val) {
            return false; // 值不相等，不对称
        }
        return isMirror(le##ft.left, right.right) && isMirror(left.right, right.left);
    }

    return isMirror(root.left, root.right);
}

// 创建一个对称二叉树的示例
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(2);
root.left.left = new TreeNode(3);
root.left.right = new TreeNode(4);
root.right.left = new TreeNode(4);
root.right.right = new TreeNode(3);

console.log(isSymmetric(root)); // 输出 true，因为这是一个对称二叉树