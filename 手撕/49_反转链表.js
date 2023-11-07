// 定义链表节点类
class ListNode {
    constructor(val) {
        this.val = val;    // 节点的值
        this.next = null;  // 指向下一个节点的指针
    }
}

// 翻转链表的函数
function reverseLinkedList(head) {
    let prev = null;    // 前一个节点的指针，初始为null
    let current = head; // 当前节点的指针，初始为链表的头节点
    let next = null;    // 下一个节点的指针

    // 遍历链表，逐个翻转节点
    while (current !== null) {
        next = current.next;  // 保存下一个节点的引用
        current.next = prev;  // 当前节点的指针指向前一个节点，完成翻转
        prev = current;       // prev 往前移动，指向当前节点
        current = next;       // current 往前移动，指向下一个节点
    }

    return prev; // 返回翻转后的链表的新头节点，即原链表的尾节点
}

// 示例用法
const node1 = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(3);

// 构建一个简单的链表：1 -> 2 -> 3
node1.next = node2;
node2.next = node3;

console.log("原始链表:");
let currentNode = node1;
while (currentNode !== null) {
    console.log(currentNode.val);
    currentNode = currentNode.next;
}

const reversedHead = reverseLinkedList(node1);

console.log("翻转后的链表:");
currentNode = reversedHead;
while (currentNode !== null) {
    console.log(currentNode.val);
    currentNode = currentNode.next;
}
