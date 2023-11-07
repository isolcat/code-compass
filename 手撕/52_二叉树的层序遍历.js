class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

// 层序遍历函数
function levelNode(root) {
    if (!root) {
        return [];
    }

    const res = []; // 存储层序遍历的结果
    const queue = [root]; // 使用队列来存储待访问的节点

    while (queue.length > 0) {
        const level = []; // 存储当前层级的节点值
        const size = queue.length; // 当前层级的节点数量

        for (let i = 0; i < size; i++) {
            const node = queue.shift(); // 出队列，取出当前层级的节点
            level.push(node.val); // 将节点的值加入当前层级的数组

            if (node.left) {
                queue.push(node.left); // 左子节点入队列，以便后续遍历
            }

            if (node.right) {
                queue.push(node.right); // 右子节点入队列，以便后续遍历
            }
        }

        res.push(level); // 将当前层级的节点值数组加入结果数组
    }

    return res; // 返回层序遍历的结果，每个子数组表示一个层级的节点值
}

// 创建一个示例二叉树
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.right = new TreeNode(6);

// 执行层序遍历
const result = levelNode(root);
console.log(result);