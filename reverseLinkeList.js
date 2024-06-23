function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val);
    this.next = (next===undefined ? null : next);
}

function reverseLinkedList(head) {
    if (!head || !head.next) {
        return head;
    }
    
    let prev = null;
    let current = head;
    let next = null;
    
    while (current) {
        next = current.next; 
        current.next = prev; 
        prev = current;     
        current = next;      
    }
    
    return prev; // Prev will be the new head of the reversed list
}

// Example usage:
let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

let reversedHead = reverseLinkedList(head);

// Printing the reversed list
let current = reversedHead;
while (current) {
    console.log(current.val);
    current = current.next;
}
