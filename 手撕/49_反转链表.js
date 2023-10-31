class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

function reverseLinkedList(head) {
    let prev = null;
    let current = head;

    while (current !== null) {
        const nextTemp = current.next; // 保存下一个节点的引用
        current.next = prev; // 反转指针

        // 更新prev和current指针
        prev = current;
        current = nextTemp;
    }

    return prev; // 返回新的头节点
}

// 创建一个示例链表: 1 -> 2 -> 3 -> 4 -> 5
const node1 = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(3);
const node4 = new ListNode(4);
const node5 = new ListNode(5);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

// 打印原始链表
let current = node1;
while (current !== null) {
    console.log(current.val);
    current = current.next;
}

// 反转链表
const reversedHead = reverseLinkedList(node1);

// 打印反转后的链表
current = reversedHead;
while (current !== null) {
    console.log(current.val);
    current = current.next;
}