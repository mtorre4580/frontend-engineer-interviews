/**
 * Class to represent a Tree
 */
class TreeNode {
    constructor(value = null, descendants = []) {
        this.value = value;
        this.descendants = descendants;
    }
}

/**
 * Class to represent a BST
 * The node in the left lower
 * The node in the right is higher
 */
class TreeNodeBST {

    LEFT = 0;
    RIGHT = 1;

    constructor(value = null) {
        this.value = value;
        this.descendants = [];
    }

    left() {
        this.descendants[this.LEFT];
    }

    right() {
        this.descendants[this.RIGHT];
    }
}

// How to represent the HTML DOM
const doc = new TreeNode('document');

const html = new TreeNode('html');
const head = new TreeNode('head');
const body = new TreeNode('body');

const h1 = new TreeNode('h1');
const text = new TreeNode('text');

doc.descendants.push(html);

html.descendants.push(head);
html.descendants.push(body);

body.descendants.push(h1);

h1.descendants.push(text);
