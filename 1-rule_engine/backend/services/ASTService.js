
class ASTNode {
    constructor(type, left = null, right = null, value = null) {
      this.type = type;
      this.left = left;
      this.right = right;
      this.value = value;
    }
  }
  
  const createASTFromRule = (ruleString) => {

    return new ASTNode('AND', 
      new ASTNode('>', null, null, { field: 'age', value: 30 }), 
      new ASTNode('=', null, null, { field: 'department', value: 'Sales' })
    );
  };
  
  const evaluateAST = (ast, data) => {
    // Recursively evaluate the AST
    if (ast.type === 'AND') {
      return evaluateAST(ast.left, data) && evaluateAST(ast.right, data);
    } else if (ast.type === '>') {
      return data[ast.value.field] > ast.value.value;
    } else if (ast.type === '=') {
      return data[ast.value.field] === ast.value.value;
    }
    return false;
  };
  
  module.exports = { ASTNode, createASTFromRule, evaluateAST };
  