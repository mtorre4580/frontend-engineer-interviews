/**
 * Class to represent Queue
 */
class Queue {

    constructor() {
        this.items = [];
    }

    enqueue(item) {
        this.items.push(item);
    }

    dequeue() {
        return this.items.pop();
    }

    size() {
        return this.items.length;
    }

    empty() {
        return this.items.length === 0;
    }

    peek() {
        return this.items[0] || null;
    }
}

const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

