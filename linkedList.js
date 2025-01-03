export default (function() {
  class LinkedList {
    constructor() {
      this._head = null;
      this._tail = null;
      this._size = 0;
    }

    // Properties

    get head() {
      return this._head;
    }

    get tail() {
      return this._tail;
    }

    get size() {
      return this._size;
    }

    // Read methods

    at(index) {
      return this.nodeAt(index);
    }

    contains(value) {
      return this.find(value) !== null;
    }

    find(value) {
      let currentNode = this.head;
      for (let i = 0; i < this.size; i++) {
        if (currentNode.value == value) {
          return i;
        }
        currentNode = currentNode.nextNode;
      }
      return null;
    }

    nodeAt(index) {
      if (index < 0) {
        return this.nodeFromTail(Math.abs(index) - 1);
      } else {
        return this.nodeFromHead(index);
      }
    }

    nodeFromHead(stepCount) {
      let currentNode = this.head;
      for (let i = 0; i < stepCount; i++) {
        if (currentNode == null) {
          return null;
        }
        currentNode = currentNode.nextNode;
      }
      return currentNode;
    }

    nodeFromTail(stepCount) {
      let currentNode = this.tail;
      for (let i = 0; i < stepCount; i++) {
        if (currentNode == null) {
          return null;
        }
        currentNode = currentNode.previousNode;
      }
      return currentNode;
    }

    toString() {
      let stringBuilder = [];
      for (
        let currentNode = this.head;
        currentNode != null;
        currentNode = currentNode.nextNode
      ) {
        stringBuilder.push(`( ${currentNode.value} )`);
      }
      stringBuilder.push('null');
      return stringBuilder.join(' -> ');
    }

    valueAt(index) {
      let targetNode = this.nodeAt(index);
      return targetNode ? targetNode.value : null;
    }

    // Insertion methods

    append(value) {
      let newTail = new ListNode(value);
      if (this._tail) {
        newTail.previousNode = this._tail;
      } else {
        // This list is empty. Make the new node also be the head.
        this._head = newTail;
      }
      this._tail = newTail;
      this._size += 1;
      return this;
    }

    insertAt(value, index) {
      if (index <= 0) {
        return this.prepend(value);
      }
      if (index >= this._size) {
        return this.append(value);
      }

      let newNext = this.nodeAt(index);
      let newPrev = newNext.previousNode;
      let newNode = new ListNode(value);
      newNode.nextNode = newNext;
      newNode.previousNode = newPrev;
      this._size += 1;
      return this;
    }

    prepend(value) {
      let newHead = new ListNode(value);
      if (this._head) {
        newHead.nextNode = this._head;
      } else {
        // This list is empty. Make the new node also be the tail.
        this._tail = newHead;
      }
      this._head = newHead;
      this._size += 1;
      return this;
    }

    // Removal methods

    pop() {
      let poppedNode = this._tail;
      if (poppedNode) {
        this._tail = poppedNode.previousNode;
        if (this._tail) {
          this._tail.nextNode = null;
        }
        this._size -= 1;
        return poppedNode.value;
      } else {
        return null;
      }
    }

    removeAt(index) {
      let removedNode = this.nodeAt(index);
      if (removedNode) {
        let prev = removedNode.previousNode;
        let next = removedNode.nextNode;
        prev.nextNode = next;
        this._size -= 1;
        return removedNode.value;
      } else {
        return null;
      }
    }

    shift() {
      let shiftedNode = this._head;
      if (shiftedNode) {
        this._head = shiftedNode.nextNode;
        if (this._head) {
          this._head.previousNode = null;
        }
        this._size -= 1;
        return shiftedNode.value;
      } else {
        return null;
      }
    }
  }

  class ListNode {
    constructor(value = null) {
      this.value = value;
      this._next = null;
      this._prev = null;
    }

    get nextNode() {
      return this._next;
    }
    set nextNode(otherNode) {
      if (this._next) {
        this._next._prev = null;
      }
      this._next = otherNode;
      if (otherNode) {
        otherNode._prev = this;
      }
    }

    get previousNode() {
      return this._prev;
    }
    set previousNode(otherNode) {
      if (this._prev) {
        this._prev._next = null;
      }
      this._prev = otherNode;
      if (otherNode) {
        otherNode._next = this;
      }
    }
  }

  return LinkedList;
}());

