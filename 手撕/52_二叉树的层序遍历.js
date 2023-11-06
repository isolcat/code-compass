// 定义二叉树节点
function TreeNode(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}

// 层序遍历函数
function levelOrderTraversal(root) {
    if (!root) {
        return [];
    }

    const result = [];
    const queue = [root]; // 使用队列来存储待访问的节点

    while (queue.length > 0) {
        const currentLevelValues = [];
        const levelSize = queue.length;

        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift(); // 出队列
            currentLevelValues.push(node.val);

            if (node.left) {
                queue.push(node.left); // 左子节点入队列
            }

            if (node.right) {
                queue.push(node.right); // 右子节点入队列
            }
        }

        result.push(currentLevelValues); // 当前层级的数值
    }

    return result;
}

// 创建一个示例二叉树
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.right = new TreeNode(6);

// 执行层序遍历
const result = levelOrderTraversal(root);
console.log(result); // 输出每层的节点值
