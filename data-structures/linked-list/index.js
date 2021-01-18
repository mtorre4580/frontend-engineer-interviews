/**
 * Each Node for the linkedList, with the data itself and the next node (pointer)
 */
class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

/**
 * Class to represent the LinkedList
 */
class LinkedList {
 
    constructor() {
        this.head = null;
        this.size = 0;
    }

    add(data) {
        if (this.head === null) {
            this.head = new Node(data);
        } else {
            let currentNode = this.head;
            while(currentNode.next) {
                currentNode = currentNode.next;
            }
            currentNode.next = new Node(data);
            this.size++;
        }
    }

    size() {
        return this.size;
    }

    clear() {
        this.head = null;
        this.size = 0;
    }

    getFirst() {
        return this.head;
    }

    getLast() {
        let currentNode = this.head;
        while(currentNode.next) {
            currentNode = currentNode.next;
        }
        return currentNode;
    }

}

const list = new LinkedList();

list.add(1);
list.add(2);
list.add(3);
