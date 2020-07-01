class BinarySearchTree {
    constructor(key = null, value = null, parent = null) {
        this.key = key
        this.value = value;
        this.parent = parent;
        this.left = null;
        this.right = null;
    }
    insert(key, value) {
        if(this.key === null) {
            this.key = key;
            this.value = value;
        }
        // If the new key is less than the current key,
        // We go left
        else if(key < this.key) {
            if (this.left === null) {
                // Why don't we specify the parent here?
                // We create a new node which is the binary search tree class
                this.left = new BinarySearchTree(key, value)
            }
            else {
                this.left.insert(key, value)
            }
        }
        // If the new key is greater than the current key,
        // We go right
        else if (key > this.key) {
            if(this.right === null) {
                // Why don't we specify the parent here?
                // We create a new node which is the binary search tree class
                this.right = new BinarySearchTree(key, value)
            }
            else {
                this.right.insert(key, value)
            }
        }
    }
    find(key){
        // If the specified key is the current key
        // return the valaue
        if(this.key === key){ 
            return this.value
        }
        // If the specified key is less than the current key, we look left
        // And call find again
        else if(key < this.key && this.left) {
            return this.left.find(key)
        }
        // If the specified key is less than the current key, we look right
        // And call find again
        else if (key > this.key && this.right) {
            return this.right.find(key)
        }
        // If no matches turn up
        else {
            console.log("No matches found")
            throw new Error('Key Error')
        }
    }
    remove(key) {
        if(this.key === key){
            if(this.left && this.right){ 
                // If the node to remove has a left and right child
                // We will look to the minimum on the right to reassisgn the node
                const successor = this.right._findMin()
                this.key = successor.key;
                this.value = successor.value;
                // We will then remove the successor from its original position
                successor.remove(successor.key)
            }
            else if (this.left){
                this._replaceWith(this.left)
            }
            else if (this.right){
                this._replaceWith(this.right)
            }
            else {
                this._replaceWith(null)
            }
        }
        else if (key < this.key && this.left) {
            this.left.remove(key)
        }
        else if (key > this.key && this.right) {
            this.right.remove(key)
        }
        else {
            throw new Error("Key Error")
        }
    }
    _findMin(){
        // If there is no lesser key, return this, because it's the minimmum!
        if(!this.left) {
            return this
        }
        // Recursive call to keep going left if there is a lesser key
        return this.left._findMin()
    }
    _replaceWith(node) {
        // If the current node has a parent
        if(this.parent) {
            // If the current node is the left side of the parent
            if(this === this.parent.left){
                // Replace the left side of the parent with the new node
                this.parent.left = node;
            }
            // If the current node is the right side of the parent
            if(this === this.parent.right){
                // Replace the right side of the parent with the new node
                this.parent.right = node;
            }
            if (node) {
                node.parent = this.parent;
            }
        }
        // If there is no parent (i.e. root node), replace it with the current node
        else {
            if (node) {
                this.key = node.key;
                this.value = node.value;
                this.left = node.left;
                this.right = node.right;
            }
        }
    }
}

module.exports = BinarySearchTree