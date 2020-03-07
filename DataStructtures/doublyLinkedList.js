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


    /**
     * Creates the functionality to add/push values into our custom List.
     * @param {number} val - val can be an individual number or multiple numbers
     * to be added into our List.
     * @param {array} val - val can also be a previously existing array passed
     * directly into our List.
     * @returns {Node?} - To Revise. Is it even needed?
     */
    push(...val) {
      // Check if the argument is an array and removes nested array.
      if (Array.isArray(val[0])){
        val = val[0]
      }

      for (var tVal of val) {
        let newNode = new Node(tVal);
        // Check if the List already has a head. If False, current Node will
        // be the head.
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        // If the List has a head, add next Node to the List.
        else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }

        // Increments the length propriety of the List.
        this.length++;
      } return this
    }


    pop() {
        if (!this.head) return undefined;
        let temp = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = temp.prev;
            this.tail.next = null;
            temp.prev = null;
        }
        this.length--;
        return temp;
    }

    shift() {
        if (this.length === 0) return undefined;
        let shiftedNode = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.prev = null;
            shiftedNode.next = null;
        }
        this.length--;
        return shiftedNode;
    }

    unshift(val) {

        const newNode = new Node(val);

        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.length++
        return this;
    }

    get(index) {
        if (index < 0 || index >= this.length) return null;
        let currentNode, counter;
        if (index < this.length / 2) {
            counter = 0;
            currentNode = this.head;
            while (counter !== index) {
                currentNode = currentNode.next;
                counter++;
            }
        } else {
            counter = this.length - 1;
            currentNode = this.tail;
            while (counter !== index) {
                currentNode = currentNode.prev;
                counter--;
            }
        }
        return currentNode;
    }

    set(val, index) {
        let selectedNode = this.get(index);
        if (selectedNode) {
            selectedNode.val = val;
            return true;
        }
        return false;
    }

}
