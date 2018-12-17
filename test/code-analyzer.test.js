import assert from 'assert';
import { parseBody } from '../src/js/Parser';
import { restart } from '../src/js/Parser';
import { getAns } from '../src/js/Parser';
import { Handler } from '../src/js/variable-analyzer';
import { reset } from '../src/js/variable-analyzer';




describe('Function Tests', () => {
  it('Function Declartion Type', () => {
    var toCompare = {
      "type": "Program",
      "body": [
        {
          "type": "FunctionDeclaration",
          "id": {
            "type": "Identifier",
            "name": "binarySearch"
          },
          "params": [
            {
              "type": "Identifier",
              "name": "X"
            },
            {
              "type": "Identifier",
              "name": "V"
            },
            {
              "type": "Identifier",
              "name": "n"
            }
          ],
          "body": {
            "type": "BlockStatement",
            "body": []
          },
          "generator": false,
          "expression": false,
          "async": false
        }
      ],
      "sourceType": "script"
    }
    parseBody(toCompare.body);
    var test = getAns();
    assert.equal(
      test[0].type,
      'function declaration'
    );
    restart();
  });

  it('Function Declartion Line', () => {
    var toCompare = {
      "type": "Program",
      "body": [
        {
          "type": "FunctionDeclaration",
          "id": {
            "type": "Identifier",
            "name": "binarySearch"
          },
          "params": [
            {
              "type": "Identifier",
              "name": "X"
            },
            {
              "type": "Identifier",
              "name": "V"
            },
            {
              "type": "Identifier",
              "name": "n"
            }
          ],
          "body": {
            "type": "BlockStatement",
            "body": []
          },
          "generator": false,
          "expression": false,
          "async": false
        }
      ],
      "sourceType": "script"
    }
    parseBody(toCompare.body);
    var test = getAns();
    assert.equal(
      test[0].line,
      '1'
    );
    restart();

  });
  it('Variable Declartion Name', () => {
    var toCompare = {
      "type": "Program",
      "body": [
        {
          "type": "FunctionDeclaration",
          "id": {
            "type": "Identifier",
            "name": "binarySearch"
          },
          "params": [
            {
              "type": "Identifier",
              "name": "X"
            },
            {
              "type": "Identifier",
              "name": "V"
            },
            {
              "type": "Identifier",
              "name": "n"
            }
          ],
          "body": {
            "type": "BlockStatement",
            "body": []
          },
          "generator": false,
          "expression": false,
          "async": false
        }
      ],
      "sourceType": "script"
    }
    parseBody(toCompare.body);
    var test = getAns();
    assert.equal(
      test[2].name,
      'V'
    );
    restart();
  });

  it('Varaible Condition', () => {
    var toCompare = {
      "type": "Program",
      "body": [
        {
          "type": "FunctionDeclaration",
          "id": {
            "type": "Identifier",
            "name": "binarySearch"
          },
          "params": [
            {
              "type": "Identifier",
              "name": "X"
            },
            {
              "type": "Identifier",
              "name": "V"
            },
            {
              "type": "Identifier",
              "name": "n"
            }
          ],
          "body": {
            "type": "BlockStatement",
            "body": []
          },
          "generator": false,
          "expression": false,
          "async": false
        }
      ],
      "sourceType": "script"
    }
    parseBody(toCompare.body);
    var test = getAns();
    assert.equal(
      test[3].condition,
      ''
    );
    restart();

  });



});
describe('Variable Tests', () => {
  it('Varaible Assigment', () => {
    var toCompare =
    {
      "type": "Program",
      "body": [
        {
          "type": "ExpressionStatement",
          "expression": {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "name": "x"
            },
            "right": {
              "type": "Literal",
              "value": 13,
              "raw": "13"
            }
          }
        }
      ],
      "sourceType": "script"
    }
    parseBody(toCompare.body);
    var test = getAns();
    assert.equal(
      test[0].name,
      'x'
    );
    restart();
  });

  it('Varaible Declare', () => {
    var toCompare =
    {
      "type": "Program",
      "body": [
        {
          "type": "VariableDeclaration",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "id": {
                "type": "Identifier",
                "name": "x"
              },
              "init": null
            }
          ],
          "kind": "let"
        }
      ],
      "sourceType": "script"
    }
    parseBody(toCompare.body);
    var test = getAns();
    assert.equal(
      test[0].value,
      ''
    );
    restart();

  });

  it('Varaible Declare', () => {
    var toCompare = {
      "type": "Program",
      "body": [
        {
          "type": "ExpressionStatement",
          "expression": {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "name": "x"
              },
              "property": {
                "type": "Identifier",
                "name": "length"
              }
            },
            "right": {
              "type": "Literal",
              "value": 5,
              "raw": "5"
            }
          }
        }
      ],
      "sourceType": "script"
    }
    parseBody(toCompare.body);
    var test = getAns();
    assert.equal(
      test[0].value,
      '5'
    );
    restart();

  });

});

describe('While Tests', () => {

  it('While Declare', () => {
    var toCompare = {
      "type": "Program",
      "body": [
        {
          "type": "WhileStatement",
          "test": {
            "type": "BinaryExpression",
            "operator": "<=",
            "left": {
              "type": "Identifier",
              "name": "low"
            },
            "right": {
              "type": "Identifier",
              "name": "high"
            }
          },
          "body": {
            "type": "BlockStatement",
            "body": []
          }
        }
      ],
      "sourceType": "script"
    }
    parseBody(toCompare.body);
    var test = getAns();
    assert.equal(
      test[0].condition,
      'low <= high'
    );
    restart();

  });

});
describe('If Tests', () => {

  it('If Declare', () => {
    var toCompare = {
      "type": "Program",
      "body": [
        {
          "type": "IfStatement",
          "test": {
            "type": "BinaryExpression",
            "operator": "<",
            "left": {
              "type": "Identifier",
              "name": "X"
            },
            "right": {
              "type": "MemberExpression",
              "computed": true,
              "object": {
                "type": "Identifier",
                "name": "V"
              },
              "property": {
                "type": "Identifier",
                "name": "mid"
              }
            }
          },
          "consequent": {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "name": "high"
              },
              "right": {
                "type": "BinaryExpression",
                "operator": "-",
                "left": {
                  "type": "Identifier",
                  "name": "mid"
                },
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1"
                }
              }
            }
          },
          "alternate": {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "operator": ">",
              "left": {
                "type": "Identifier",
                "name": "X"
              },
              "right": {
                "type": "MemberExpression",
                "computed": true,
                "object": {
                  "type": "Identifier",
                  "name": "V"
                },
                "property": {
                  "type": "Identifier",
                  "name": "mid"
                }
              }
            },
            "consequent": {
              "type": "ExpressionStatement",
              "expression": {
                "type": "AssignmentExpression",
                "operator": "=",
                "left": {
                  "type": "Identifier",
                  "name": "low"
                },
                "right": {
                  "type": "BinaryExpression",
                  "operator": "+",
                  "left": {
                    "type": "Identifier",
                    "name": "mid"
                  },
                  "right": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1"
                  }
                }
              }
            },
            "alternate": {
              "type": "ExpressionStatement",
              "expression": {
                "type": "AssignmentExpression",
                "operator": "=",
                "left": {
                  "type": "Identifier",
                  "name": "low"
                },
                "right": {
                  "type": "BinaryExpression",
                  "operator": "+",
                  "left": {
                    "type": "Identifier",
                    "name": "mid"
                  },
                  "right": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1"
                  }
                }
              }
            }
          }
        }
      ],
      "sourceType": "script"
    }
    parseBody(toCompare.body);
    var test = getAns();
    assert.equal(
      test[0].condition,
      'X < V[mid]'
    );
    restart();

  });

});

describe('Return Tests', () => {

  it('Return Declare', () => {
    var toCompare = {
      "type": "Program",
      "body": [
        {
          "type": "FunctionDeclaration",
          "id": {
            "type": "Identifier",
            "name": "binarySearch"
          },
          "params": [
            {
              "type": "Identifier",
              "name": "X"
            },
            {
              "type": "Identifier",
              "name": "V"
            },
            {
              "type": "Identifier",
              "name": "n"
            }
          ],
          "body": {
            "type": "BlockStatement",
            "body": [
              {
                "type": "ReturnStatement",
                "argument": {
                  "type": "BinaryExpression",
                  "operator": "-",
                  "left": {
                    "type": "Identifier",
                    "name": "m"
                  },
                  "right": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1"
                  }
                }
              }
            ]
          },
          "generator": false,
          "expression": false,
          "async": false
        }
      ],
      "sourceType": "script"
    }
    parseBody(toCompare.body);
    var test = getAns();
    assert.equal(
      test[4].value,
      'm - 1'
    );
    restart();

  });

});

describe('For Tests', () => {

  it('For Declare', () => {
    var toCompare = {
      "type": "Program",
      "body": [
        {
          "type": "ForStatement",
          "init": {
            "type": "VariableDeclaration",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "name": "i"
                },
                "init": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0"
                }
              }
            ],
            "kind": "var"
          },
          "test": {
            "type": "BinaryExpression",
            "operator": "<",
            "left": {
              "type": "Identifier",
              "name": "i"
            },
            "right": {
              "type": "Literal",
              "value": 10,
              "raw": "10"
            }
          },
          "update": {
            "type": "UpdateExpression",
            "operator": "++",
            "argument": {
              "type": "Identifier",
              "name": "i"
            },
            "prefix": false
          },
          "body": {
            "type": "BlockStatement",
            "body": []
          }
        }
      ],
      "sourceType": "script"
    }
    parseBody(toCompare.body);
    var test = getAns();
    assert.equal(
      test[1].type,
      'for statement'
    );
    restart();

  });

});

describe('Return unary', () => {

  it('Return unary', () => {
    var toCompare = {
      "type": "Program",
      "body": [
        {
          "type": "FunctionDeclaration",
          "id": {
            "type": "Identifier",
            "name": "binarySearch"
          },
          "params": [
            {
              "type": "Identifier",
              "name": "X"
            },
            {
              "type": "Identifier",
              "name": "V"
            },
            {
              "type": "Identifier",
              "name": "n"
            }
          ],
          "body": {
            "type": "BlockStatement",
            "body": [
              {
                "type": "ReturnStatement",
                "argument": {
                  "type": "UnaryExpression",
                  "operator": "-",
                  "argument": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2"
                  },
                  "prefix": true
                }
              }
            ]
          },
          "generator": false,
          "expression": false,
          "async": false
        }
      ],
      "sourceType": "script"
    }
    parseBody(toCompare.body);
    var test = getAns();
    assert.equal(
      test[4].value,
      '-2'
    );
    restart();

  });

});

describe('Non Parameters Function', () => {

  it('Non Parameters Function', () => {
    var toCompare = {
      "type": "Program",
      "body": [
        {
          "type": "FunctionDeclaration",
          "id": {
            "type": "Identifier",
            "name": "binarySearch"
          },
          "params": [],
          "body": {
            "type": "BlockStatement",
            "body": []
          },
          "generator": false,
          "expression": false,
          "async": false
        }
      ],
      "sourceType": "script"
    }
    parseBody(toCompare.body);
    var test = getAns();
    assert.equal(
      test[0].name,
      'binarySearch'
    );
    restart();

  });

});
describe('Simple Condition', () => {

  it('Simple Condition', () => {
    var toCompare = {
      "type": "Program",
      "body": [
        {
          "type": "FunctionDeclaration",
          "id": {
            "type": "Identifier",
            "name": "binarySearch"
          },
          "params": [],
          "body": {
            "type": "BlockStatement",
            "body": [
              {
                "type": "IfStatement",
                "test": {
                  "type": "Identifier",
                  "name": "n"
                },
                "consequent": {
                  "type": "BlockStatement",
                  "body": []
                },
                "alternate": null
              }
            ]
          },
          "generator": false,
          "expression": false,
          "async": false
        }
      ],
      "sourceType": "script"
    }
    parseBody(toCompare.body);
    var test = getAns();
    assert.equal(
      test[1].condition,
      'n'
    );
    restart();

  });

});

describe('Complex For', () => {

  it('Complex For_1', () => {
    var toCompare = {
      "type": "Program",
      "body": [
        {
          "type": "ForStatement",
          "init": {
            "type": "VariableDeclaration",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "name": "i"
                },
                "init": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0"
                }
              }
            ],
            "kind": "var"
          },
          "test": {
            "type": "BinaryExpression",
            "operator": "<",
            "left": {
              "type": "Identifier",
              "name": "i"
            },
            "right": {
              "type": "BinaryExpression",
              "operator": "+",
              "left": {
                "type": "Identifier",
                "name": "n"
              },
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1"
              }
            }
          },
          "update": {
            "type": "UpdateExpression",
            "operator": "++",
            "argument": {
              "type": "Identifier",
              "name": "i"
            },
            "prefix": false
          },
          "body": {
            "type": "BlockStatement",
            "body": []
          }
        }
      ],
      "sourceType": "script"
    }
    parseBody(toCompare.body);
    var test = getAns();
    assert.equal(
      test[1].value,
      ''
    );
    restart();

  });
  it('Complex For_2', () => {
    var toCompare = {
      "type": "Program",
      "body": [
        {
          "type": "ForStatement",
          "init": {
            "type": "VariableDeclaration",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "name": "i"
                },
                "init": {
                  "type": "BinaryExpression",
                  "operator": "+",
                  "left": {
                    "type": "Identifier",
                    "name": "n"
                  },
                  "right": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1"
                  }
                }
              }
            ],
            "kind": "var"
          },
          "test": {
            "type": "BinaryExpression",
            "operator": "<",
            "left": {
              "type": "Identifier",
              "name": "i"
            },
            "right": {
              "type": "BinaryExpression",
              "operator": "+",
              "left": {
                "type": "Identifier",
                "name": "n"
              },
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1"
              }
            }
          },
          "update": {
            "type": "UpdateExpression",
            "operator": "++",
            "argument": {
              "type": "Identifier",
              "name": "i"
            },
            "prefix": false
          },
          "body": {
            "type": "BlockStatement",
            "body": []
          }
        }
      ],
      "sourceType": "script"
    }
    parseBody(toCompare.body);
    var test = getAns();
    assert.equal(
      test[1].name,
      ''
    );
    restart();

  });
  it('Complex For_3', () => {
    var toCompare = {
      "type": "Program",
      "body": [
        {
          "type": "ForStatement",
          "init": {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "name": "i"
            },
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0"
            }
          },
          "test": {
            "type": "BinaryExpression",
            "operator": "<",
            "left": {
              "type": "Identifier",
              "name": "i"
            },
            "right": {
              "type": "Literal",
              "value": 10,
              "raw": "10"
            }
          },
          "update": {
            "type": "UpdateExpression",
            "operator": "++",
            "argument": {
              "type": "Identifier",
              "name": "i"
            },
            "prefix": false
          },
          "body": {
            "type": "BlockStatement",
            "body": []
          }
        }
      ],
      "sourceType": "script"
    }
    parseBody(toCompare.body);
    var test = getAns();
    assert.equal(
      test[1].name,
      ''
    );
    restart();

  });
  it('Complex For_4', () => {
    var toCompare = {
      "type": "Program",
      "body": [
        {
          "type": "ForStatement",
          "init": {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "name": "i"
            },
            "right": {
              "type": "Literal",
              "value": 0,
              "raw": "0"
            }
          },
          "test": {
            "type": "BinaryExpression",
            "operator": "<",
            "left": {
              "type": "Identifier",
              "name": "i"
            },
            "right": {
              "type": "Literal",
              "value": 10,
              "raw": "10"
            }
          },
          "update": {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "name": "i"
            },
            "right": {
              "type": "BinaryExpression",
              "operator": "+",
              "left": {
                "type": "Identifier",
                "name": "i"
              },
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1"
              }
            }
          },
          "body": {
            "type": "BlockStatement",
            "body": []
          }
        }
      ],
      "sourceType": "script"
    }
    parseBody(toCompare.body);
    var test = getAns();
    assert.equal(
      test[1].name,
      ''
    );
    restart();

  });
  it('Complex For_5', () => {
    var toCompare = {
      "type": "Program",
      "body": [
        {
          "type": "ForStatement",
          "init": {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "name": "i"
            },
            "right": {
              "type": "BinaryExpression",
              "operator": "-",
              "left": {
                "type": "Identifier",
                "name": "n"
              },
              "right": {
                "type": "BinaryExpression",
                "operator": "-",
                "left": {
                  "type": "Identifier",
                  "name": "x"
                },
                "right": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2"
                }
              }
            }
          },
          "test": {
            "type": "BinaryExpression",
            "operator": "<",
            "left": {
              "type": "Identifier",
              "name": "i"
            },
            "right": {
              "type": "Literal",
              "value": 10,
              "raw": "10"
            }
          },
          "update": {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "name": "i"
            },
            "right": {
              "type": "BinaryExpression",
              "operator": "+",
              "left": {
                "type": "Identifier",
                "name": "i"
              },
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1"
              }
            }
          },
          "body": {
            "type": "BlockStatement",
            "body": []
          }
        }
      ],
      "sourceType": "script"
    }
    parseBody(toCompare.body);
    var test = getAns();
    assert.equal(
      test[1].name,
      ''
    );
    restart();

  });
});

describe('Complex Array', () => {

  it('Complex Array_1', () => {
    var toCompare = {
      "type": "Program",
      "body": [
        {
          "type": "ExpressionStatement",
          "expression": {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "name": "y"
            },
            "right": {
              "type": "MemberExpression",
              "computed": true,
              "object": {
                "type": "Identifier",
                "name": "m"
              },
              "property": {
                "type": "BinaryExpression",
                "operator": "+",
                "left": {
                  "type": "Identifier",
                  "name": "v"
                },
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1"
                }
              }
            }
          }
        }
      ],
      "sourceType": "script"
    }
    parseBody(toCompare.body);
    var test = getAns();
    assert.equal(
      test[0].name,
      'y'
    );
    restart();

  });
  it('Complex Array_2', () => {
    var toCompare = {
      "type": "Program",
      "body": [
        {
          "type": "ExpressionStatement",
          "expression": {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "MemberExpression",
              "computed": true,
              "object": {
                "type": "Identifier",
                "name": "arr"
              },
              "property": {
                "type": "Literal",
                "value": 2,
                "raw": "2"
              }
            },
            "right": {
              "type": "Literal",
              "value": 7,
              "raw": "7"
            }
          }
        }
      ],
      "sourceType": "script"
    }
    parseBody(toCompare.body);
    var test = getAns();
    assert.equal(
      test[0].value,
      '7'
    );
    restart();

  });

});




