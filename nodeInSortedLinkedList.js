class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function insertIntoSortedLinkedList(head, value) {
    const newNode = new ListNode(value);

    if (!head || value <= head.val) {
        newNode.next = head;
        return newNode;
    }

    let current = head;

    while (current.next && current.next.val < value) {
        current = current.next;
    }

    newNode.next = current.next;
    current.next = newNode;

    return head;
}