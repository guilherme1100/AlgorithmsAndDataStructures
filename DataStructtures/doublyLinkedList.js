class Node {
    /**
     * Starts a Node Object.
     * @param {number} val - val will be the value of the Node.
     */
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    /**
     * Starts the list Object, links any parameters to the Push() Method.
     * @param {number} param - param can be an individual number or multiple
     * numbers to be added into the List.
     * @param {array} param - param can also be a previously existing array or
     * multiple arrays passed directly into the List.
     */
    constructor(...param) {
        this.head = null;
        this.tail = null;
        this.length = 0;
        if (param.length > 0) this.push(param);
    }


    /**
     * Creates the functionality to add/push values into the custom List.
     * @param {number} val - val can be an individual number or multiple numbers
     * to be added into the List.
     * @param {array} val - val can also be a previously existing array or
     * multiple arrays passed directly into the List.
     * @returns {DoublyLinkedList} - Returns the updated List.
     */
    push(...val) {
      for (var tVal of val) {
          // Check if the argument is an array and removes nested array by
          // calling support method _pushArray().
          if ( Array.isArray(tVal) ) {
              this._pushArray(tVal);
              continue;
          }

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
     * Supports the functionality to add/push arrays directly into the custom
     * List. Method can be called only to support Push() and should never
     * be used outside of Push().
     * @param {array} arr - arr can is a previously existing array passed
     * directly into our List.
     */
    _pushArray(arr) {
      for (var val of arr) {
          let newNode = new Node(val);
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
      }
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


    /**
     * Creates the functionality to add/unshift values into the start of the
     * List.
     * @param {number} val - val can be an individual number or multiple numbers
     * to be added into the List.
     * @param {array} val - val can also be a previously existing array or
     * multiple arrays passed directly into the List.
     * @returns {DoublyLinkedList} - Returns the updated List.
     */
    unshift(...val) {
      // List is reversed in order to add values in the same order that they
      // were inserted into the method param.
      for (var tVal of val.reverse()) {
          // Check if the argument is an array and remove nested array by
          // calling support method _unshiftArray().
          if ( Array.isArray(tVal) ) {
              this._unshiftArray(tVal);
              continue;
          }

          let newNode = new Node(tVal);
          // Check if the List already has a head. If False, current Node will
          // be the head.
          if (!this.head) {
              this.head = newNode;
              this.tail = newNode;
          }
          // If the List has a head, change new Node to be new head of the List.
          else {
              newNode.next = this.head;
              this.head.prev = newNode;
              this.head = newNode;
          }

          // Increments the length propriety of the List.
          this.length++;
      } return this;
    }


    /**
     * Supports the functionality to add/unshift arrays directly into the custom
     * List. Method can be called only to support Unshift() and should never
     * be used outside of Unshift().
     * @param {Array} arr - arr can is a previously existing array passed
     * directly into the start of the List.
     */
    _unshiftArray(arr) {
      // List is reversed in order to add values in the same order that they
      // were inserted into the method param.
      for (var val of arr.reverse()) {
          let newNode = new Node(val);
          // Check if the List already has a head. If False, current Node will
          // be the head.
          if (!this.head) {
              this.head = newNode;
              this.tail = newNode;
          }
          // If the List has a head, change new Node to be new head of the List.
          else {
              newNode.next = this.head;
              this.head.prev = newNode;
              this.head = newNode;
          }

          // Increments the length propriety of the List.
          this.length++;
      }
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
     * Converts the List class to it's Array representation.
     * @param {boolean} getNodes - If true an array of Nodes will be returned
     * instead of an array of Node values. False by default.
     * @returns {Array} - An Array representation of the List is returned.
     */
    toArray(getNodes = false){
      let cNode = this.head;
      let displayArray = [getNodes ? cNode : cNode.val];

      while (cNode.next != null) {
        cNode = cNode.next;
        displayArray.push(getNodes ? cNode : cNode.val);
      }

      return displayArray;
    }

}
