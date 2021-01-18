/**
 * Class to represent Stack 
 */
class Stack {
    constructor() {
      this.items = [];
    }
  
    push(item) {
      this.items.unshift(item);
    }
  
    pop() {
      return this.items.shift();
    }
  
    peek() {
      return this.items[0] || null;
    }
  
    size() {
      return this.items.length;
    }
  
    empty() {
      return this.items.length === 0;
    }
  
  }
  
  const stack = new Stack();
  
  stack.push(1);
  stack.push(2);
  stack.push(3);
  