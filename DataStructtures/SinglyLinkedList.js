class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        var newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length++;
        return this
    }

    pop() {
        if (!this.head) return undefined;

        let currentNode = this.head;
        let previousNode = this.head;

        while (currentNode.next) {
            previousNode = currentNode;
            currentNode = currentNode.next;
        }

        this.tail = previousNode;
        this.tail.next = null;
        this.length--;

        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return currentNode;
    }

    shift() {
        if (!this.head) return undefined;
        let currentNode = this.head;
        this.head = currentNode.next;
        this.length--;
        if (this.length === 0) {
            this.tail = null;
        };
        return currentNode;
    }

    unshift(val) {
        let newHead = new Node(val)
        if (!this.head) {
            this.head = newHead;
            this.tail = this.head;
        } else {
            newHead.next = this.head;
            this.head = newHead;
        }
        this.length++;
        return this;
    }

    get(index) {
        if (index < 0 || index >= this.length) return null;
        let currentNode = this.head;
        for (let i = 0; i < index; i++) {
            currentNode = currentNode.next;
        }
        return currentNode;
    }

    set(val, index) {
        let foundNode = this.get(index);
        if (foundNode) {
            foundNode.val = val;
            return true;
        }
        return false;
    }

    insert(val, index) {
        if (index < 0 || index > this.length) return false;
        if (index === this.length - 1) return !!this.push(val);
        if (index === 0) return !!this.unshift(val);
        let newNode = new Node(val);
        let previousNode = this.get(index - 1);
        let temp = previousNode.next;
        previousNode.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;
    }

    remove(index) {
        if (index < 0 || index > this.length) return false;
        if (index === this.length - 1) return this.pop();
        if (index === 0) return this.shift();

        let previousNode = this.get(index - 1);
        let nextNode = this.get(index + 1);
        previousNode.next = nextNode;

        this.length--;
    }

    reverse() {
        let prev = null;
        let current = this.head;
        let next; 
        this.tail=current;

        while (current) {
            next = current.next; // saves current.next so it can be used as current next interation
            current.next = prev; // poits next to the previous node
            prev = current; // save the current node so it can be used as "previous node" on the next interaction
            current = next; // set the current node of the next interaction;
        }

        this.head = prev; // here we use the last "previeous node" as head.
    }


}