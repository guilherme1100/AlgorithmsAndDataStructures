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
     * Creates the functionality to add/push values into the custom List.
     * @param {number} val - val can be an individual number or multiple numbers
     * to be added into our List.
     * @param {array} val - val can also be a previously existing array passed
     * directly into our List.
     * @returns {Node?} - To Revise. Is it even needed?
     */
    push(...val) {
      // Check if the argument is an array and removes nested array.
      if ( Array.isArray(val[0]) ) val = val[0];

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
      } return this;
    }


    /**
     * Removes the desired value at defined index from the custom List.
     * @param {number} index - The index at which the Node should be removed
     * from the List, by default is the List's Tail.
     * @returns {Node} - The removed Node is returned.
     */
    pop(index = this.length - 1) {
        // Return undefined if the List is empty.
        if (!this.head) return undefined;

        let temp = this.get(index);
        // Declare empty List if there is only one single value.
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        }
        else {
            // Reassignment if removed Node is the Tail.
            if (temp.next === null) {
                this.tail = temp.prev;
                temp.prev.next = temp.next;
            }
            // Reassignment if removed Node is the Head.
            else if (temp.prev === null){
                this.head = temp.next;
                temp.next.prev = temp.prev;
            }
            // Reassignment if removed Node is in the Middle of the List.
            else{
              temp.prev.next = temp.next;
              temp.next.prev = temp.prev;
            }
        }

        // Decrements the length propriety of the List.
        this.length--;
        return temp;
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
        if (selectedNode) return false;
        selectedNode.val = val;
        return true;
    }

    insert(val, index) {
        if (index < 0 || index >= this.length) return false;
        if (index === 0) return !!this.unshift(val);
        if (index === this.length) return !!this.push(val);

        let selectedNode = this.get(index);
        let previeousNode = selectedNode.prev
        let newNode = new Node(val);

        previeousNode.next = newNode;
        selectedNode.prev = newNode;
        newNode.prev = previeousNode;
        newNode.next = selectedNode;

        this.length++;

        return true;

    }


    /**
     * Converts the List class to it's string representation.
     * @returns {string} - A string representation of the List is returned.
     */
    toString(){
      var cNode = this.head;
      var displayString = `[${cNode.val}`;

      while (cNode.next != null) {
        cNode = cNode.next;
        displayString += `, ${cNode.val}`;
      }
      displayString += `]`;
      return displayString;
    }


    /**
     * Converts the List class to it's Array representation
     * @returns {Array} - An Array representation of the List is returned.
     */
    toArray(){
      var cNode = this.head;
      var displayArray = [cNode.val];

      while (cNode.next != null) {
        cNode = cNode.next;
        displayArray.push(cNode.val);
      }

      return displayArray;
    }

}
