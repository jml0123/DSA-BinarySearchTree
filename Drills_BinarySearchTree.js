const BinarySearchTree = require('./BinarySearchTreeNew')

//4.  This function adds up all the values of the binary search tree
// If there is no node, the value is zero
// O(n) -- it will have to traverse left and right side of the tree and dependent on depth of tree
function tree(t){
    if(!t){
        return 0;
    }
    return tree(t.left) + t.value + tree(t.right)
}

const findHeightBST = (tree) => {
    let height = 0;
    if (!tree) {
        return 0
    }
    else {
        leftDepth = findHeightBST(node.left)
        rightDepth = findHeightBST(node.right)
        if (leftDepth > rightDepth) {
            return(leftDepth + 1)
        }
        else {
            return (rightDepth + 1)
        }
    } 
}
//???
const findKthLargest = (tree, k) => {
    const elements = []
    if (!tree) {
        return null
    }
    traverseTree(tree, elements, k)
    return elements[k]
}  

const traverseTree = (tree, array, k) => {
    if (!tree) {
        return null
    }
    traverseTree(tree.left, array, k);
    if(++array[0] == k) {
        array[1] = tree.value;
        return
    }
    traverseTree(tree.right, array, k) 
}
// Does this work?
const balancedBST = (tree) => {
    if (!tree) {
        return null
    }
    return (
    balancedBST(tree.left) 
    && balancedBST(tree.right) 
    && Math.abs(findHeightBST(tree.left) - (findHeightBST(tree.right))) <= 1
    );
}

// O(n^2)
const isIdentical = (tree1, tree2) => {
    if (tree1 === null && tree2 === null) {
        console.log("Both trees are empty")
        return true
    }
    else if (tree1 === null || tree2 === null) {
        return false;
    }
    else {
        if (
            isIdentical(tree1.left, tree2.left) == true && 
            isIdentical(tree1.right, tree2.right) == true) 
            return true
        else return false
    }
}

const main = () => {
    const BST = new BinarySearchTree;
    /*BST.insert(3, 3)
    BST.insert(1, 1)
    BST.insert(4, 4)
    BST.insert(6, 6)
    BST.insert(9, 9)
    BST.insert(2, 2)
    BST.insert(5, 5)
    BST.insert(7, 7)*/
    BST.insert("E", "E")
    BST.insert("A", "A")
    BST.insert("S", "S")
    BST.insert("Y", "Y")
    BST.insert("Q", "Q")
    BST.insert("U", "U")
    BST.insert("E", "E")
    BST.insert("S", "S")
    BST.insert("T", "T")
    BST.insert("I", "I")
    BST.insert("O", "O")
    BST.insert("N", "N")
   // console.log(BST)
    //console.log(tree(BST))

    const test = new BinarySearchTree;
    test.insert("3", "3")
    test.insert("1", "1")
    test.insert("4", "4")
    test.insert("2", "2")
    //console.log(findKthLargest(test, 1));

    const tree1 = new BinarySearchTree;
    const tree2 = new BinarySearchTree;
    tree1.insert("3", "3")
    tree1.insert("5", "5")
    tree1.insert("4", "4")
    tree1.insert("6", "6")
    tree1.insert("1", "1")
    tree1.insert("0", "0")
    tree1.insert("2", "2")

    tree2.insert("3", "3")
    tree2.insert("1", "1")
    tree2.insert("5", "5")
    tree2.insert("2", "2")
    tree2.insert("4", "4")
    tree2.insert("6", "6")
    tree2.insert("0", "0")

    //console.log(isIdentical(tree1, tree2))


    const unbalanced = new BinarySearchTree
    unbalanced.insert("1", "1")
    unbalanced.insert("2", "2")
    unbalanced.insert("3", "3")
    unbalanced.insert("4", "4")
    unbalanced.insert("5", "5")
    console.log(balancedBST(unbalanced))
    
}

main()

// Find kth largest node
// Balanced
