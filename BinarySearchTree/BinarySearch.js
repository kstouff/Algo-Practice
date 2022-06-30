class Node {
    constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
    }
  }
  
  class BinarySearchTree {
    constructor() {
      this.root = root;
    }
  
    newMethod(params) {
      // 'this' keyword will refer to the class instance
      // that the newMethod was called on
    }
  }
  
  // alternative way to add method outside of class definition
  BinarySearchTree.prototype.newMethodsName = function (params) {
    // 'this' keyword will refer to the class instance
    // that the newMethod was called on
  };