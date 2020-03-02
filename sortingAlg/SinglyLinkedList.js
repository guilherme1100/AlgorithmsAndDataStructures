class Node {
    constructor(val) {
        this.value = val;
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

    shift(){
        if (!this.head) return undefined;
        let currentNode = this.head;
        this.head= currentNode.next;
        this.length--;
        if (this.length === 0) {
            this.tail = null;
        };
        return currentNode;
    }
}