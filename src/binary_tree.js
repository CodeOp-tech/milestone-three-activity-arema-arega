/* ----------------------
Nota: ANTES de abordar la clase debajo, 
lee los tests del archivo correspondiente.
---------------------- */

class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  add(value) {
    if (value <= this.value) {
      !this.left ? (this.left = new BinaryTree(value)) : this.left.add(value);
    } else {
      !this.right
        ? (this.right = new BinaryTree(value))
        : this.right.add(value);
    }
  }

  // devuelve un array con todos los valores del tree recorriendo en profundidad primero preorden (actual, izquierda, derecha)
  
  getValues() {
    let result = [];
    result.push(this)
    let node = null;

    while (result.length > 0) {
      node = result.shift();
      result.push(node)

      if (this.left) {
        result.push(this.left)
      }

      if (this.right) {
        result.push(this.right)
      }
    }
return result
  }

  function traverse(node) {
    result = node.getValues();
    
    // Tu código aquí
  }

  traverse(this);
  return result;
}

}


module.exports = BinaryTree;
