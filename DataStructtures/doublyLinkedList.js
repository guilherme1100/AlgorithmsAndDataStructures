class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val){
        let newNode = newNode(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return this;
        }

        newNode.prev = this.tail;
        this.tail = newNode;
        return this

    }

}