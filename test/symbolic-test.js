import assert from 'assert';
import { parseBody } from '../src/js/Parser';
import { restart } from '../src/js/Parser';
import { getAns } from '../src/js/Parser';
import { Handler } from '../src/js/variable-analyzer';
import { reset } from '../src/js/variable-analyzer';
import { getIfTest } from '../src/js/variable-analyzer';
import { getPrint } from '../src/js/variable-analyzer';



describe('Part 2 Test', () => {

    it('Test inputs_1', () => {
        var toParse = {
            "type": "Program",
            "body": [
                {
                    "type": "FunctionDeclaration",
                    "id": {
                        "type": "Identifier",
                        "name": "foo"
                    },
                    "params": [
                        {
                            "type": "Identifier",
                            "name": "x"
                        },
                        {
                            "type": "Identifier",
                            "name": "y"
                        },
                        {
                            "type": "Identifier",
                            "name": "z"
                        }
                    ],
                    "body": {
                        "type": "BlockStatement",
                        "body": [
                            {
                                "type": "VariableDeclaration",
                                "declarations": [
                                    {
                                        "type": "VariableDeclarator",
                                        "id": {
                                            "type": "Identifier",
                                            "name": "a"
                                        },
                                        "init": {
                                            "type": "BinaryExpression",
                                            "operator": "+",
                                            "left": {
                                                "type": "Identifier",
                                                "name": "x"
                                            },
                                            "right": {
                                                "type": "Literal",
                                                "value": 1,
                                                "raw": "1"
                                            }
                                        }
                                    }
                                ],
                                "kind": "let"
                            },
                            {
                                "type": "VariableDeclaration",
                                "declarations": [
                                    {
                                        "type": "VariableDeclarator",
                                        "id": {
                                            "type": "Identifier",
                                            "name": "b"
                                        },
                                        "init": {
                                            "type": "BinaryExpression",
                                            "operator": "+",
                                            "left": {
                                                "type": "Identifier",
                                                "name": "a"
                                            },
                                            "right": {
                                                "type": "Identifier",
                                                "name": "y"
                                            }
                                        }
                                    }
                                ],
                                "kind": "let"
                            },
                            {
                                "type": "VariableDeclaration",
                                "declarations": [
                                    {
                                        "type": "VariableDeclarator",
                                        "id": {
                                            "type": "Identifier",
                                            "name": "c"
                                        },
                                        "init": {
                                            "type": "Literal",
                                            "value": 0,
                                            "raw": "0"
                                        }
                                    }
                                ],
                                "kind": "let"
                            },
                            {
                                "type": "IfStatement",
                                "test": {
                                    "type": "BinaryExpression",
                                    "operator": "<",
                                    "left": {
                                        "type": "Identifier",
                                        "name": "b"
                                    },
                                    "right": {
                                        "type": "Identifier",
                                        "name": "z"
                                    }
                                },
                                "consequent": {
                                    "type": "BlockStatement",
                                    "body": [
                                        {
                                            "type": "ExpressionStatement",
                                            "expression": {
                                                "type": "AssignmentExpression",
                                                "operator": "=",
                                                "left": {
                                                    "type": "Identifier",
                                                    "name": "c"
                                                },
                                                "right": {
                                                    "type": "BinaryExpression",
                                                    "operator": "+",
                                                    "left": {
                                                        "type": "Identifier",
                                                        "name": "c"
                                                    },
                                                    "right": {
                                                        "type": "Literal",
                                                        "value": 5,
                                                        "raw": "5"
                                                    }
                                                }
                                            }
                                        },
                                        {
                                            "type": "ReturnStatement",
                                            "argument": {
                                                "type": "BinaryExpression",
                                                "operator": "+",
                                                "left": {
                                                    "type": "BinaryExpression",
                                                    "operator": "+",
                                                    "left": {
                                                        "type": "BinaryExpression",
                                                        "operator": "+",
                                                        "left": {
                                                            "type": "Identifier",
                                                            "name": "x"
                                                        },
                                                        "right": {
                                                            "type": "Identifier",
                                                            "name": "y"
                                                        }
                                                    },
                                                    "right": {
                                                        "type": "Identifier",
                                                        "name": "z"
                                                    }
                                                },
                                                "right": {
                                                    "type": "Identifier",
                                                    "name": "c"
                                                }
                                            }
                                        }
                                    ]
                                },
                                "alternate": {
                                    "type": "IfStatement",
                                    "test": {
                                        "type": "BinaryExpression",
                                        "operator": "<",
                                        "left": {
                                            "type": "Identifier",
                                            "name": "b"
                                        },
                                        "right": {
                                            "type": "BinaryExpression",
                                            "operator": "*",
                                            "left": {
                                                "type": "Identifier",
                                                "name": "z"
                                            },
                                            "right": {
                                                "type": "Literal",
                                                "value": 2,
                                                "raw": "2"
                                            }
                                        }
                                    },
                                    "consequent": {
                                        "type": "BlockStatement",
                                        "body": [
                                            {
                                                "type": "ExpressionStatement",
                                                "expression": {
                                                    "type": "AssignmentExpression",
                                                    "operator": "=",
                                                    "left": {
                                                        "type": "Identifier",
                                                        "name": "c"
                                                    },
                                                    "right": {
                                                        "type": "BinaryExpression",
                                                        "operator": "+",
                                                        "left": {
                                                            "type": "BinaryExpression",
                                                            "operator": "+",
                                                            "left": {
                                                                "type": "Identifier",
                                                                "name": "c"
                                                            },
                                                            "right": {
                                                                "type": "Identifier",
                                                                "name": "x"
                                                            }
                                                        },
                                                        "right": {
                                                            "type": "Literal",
                                                            "value": 5,
                                                            "raw": "5"
                                                        }
                                                    }
                                                }
                                            },
                                            {
                                                "type": "ReturnStatement",
                                                "argument": {
                                                    "type": "BinaryExpression",
                                                    "operator": "+",
                                                    "left": {
                                                        "type": "BinaryExpression",
                                                        "operator": "+",
                                                        "left": {
                                                            "type": "BinaryExpression",
                                                            "operator": "+",
                                                            "left": {
                                                                "type": "Identifier",
                                                                "name": "x"
                                                            },
                                                            "right": {
                                                                "type": "Identifier",
                                                                "name": "y"
                                                            }
                                                        },
                                                        "right": {
                                                            "type": "Identifier",
                                                            "name": "z"
                                                        }
                                                    },
                                                    "right": {
                                                        "type": "Identifier",
                                                        "name": "c"
                                                    }
                                                }
                                            }
                                        ]
                                    },
                                    "alternate": {
                                        "type": "BlockStatement",
                                        "body": [
                                            {
                                                "type": "ExpressionStatement",
                                                "expression": {
                                                    "type": "AssignmentExpression",
                                                    "operator": "=",
                                                    "left": {
                                                        "type": "Identifier",
                                                        "name": "c"
                                                    },
                                                    "right": {
                                                        "type": "BinaryExpression",
                                                        "operator": "+",
                                                        "left": {
                                                            "type": "BinaryExpression",
                                                            "operator": "+",
                                                            "left": {
                                                                "type": "Identifier",
                                                                "name": "c"
                                                            },
                                                            "right": {
                                                                "type": "Identifier",
                                                                "name": "z"
                                                            }
                                                        },
                                                        "right": {
                                                            "type": "Literal",
                                                            "value": 5,
                                                            "raw": "5"
                                                        }
                                                    }
                                                }
                                            },
                                            {
                                                "type": "ReturnStatement",
                                                "argument": {
                                                    "type": "BinaryExpression",
                                                    "operator": "+",
                                                    "left": {
                                                        "type": "BinaryExpression",
                                                        "operator": "+",
                                                        "left": {
                                                            "type": "BinaryExpression",
                                                            "operator": "+",
                                                            "left": {
                                                                "type": "Identifier",
                                                                "name": "x"
                                                            },
                                                            "right": {
                                                                "type": "Identifier",
                                                                "name": "y"
                                                            }
                                                        },
                                                        "right": {
                                                            "type": "Identifier",
                                                            "name": "z"
                                                        }
                                                    },
                                                    "right": {
                                                        "type": "Identifier",
                                                        "name": "c"
                                                    }
                                                }
                                            }
                                        ]
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
        var code = 'function foo(x, y, z){let a = x + 1;let b = a + y;let c = 0;if (b < z) { c = c + 5;return x + y + z + c;} else if (b < z * 2) {c = c + x + 5;return x + y + z + c; } else { c = c + z + 5;return x + y + z + c; }}';
        parseBody(toParse.body);
        var table = getAns();
        var input = '1,2,3';
        var test = Handler(table, code, input, true);
        assert.equal(
            test[0][0].name,
            'x'
        );
        restart();
        reset();

    });
    it('Test inputs_2', () => {
        var toParse = {
            "type": "Program",
            "body": [
                {
                    "type": "FunctionDeclaration",
                    "id": {
                        "type": "Identifier",
                        "name": "foo"
                    },
                    "params": [
                        {
                            "type": "Identifier",
                            "name": "x"
                        },
                        {
                            "type": "Identifier",
                            "name": "y"
                        },
                        {
                            "type": "Identifier",
                            "name": "z"
                        }
                    ],
                    "body": {
                        "type": "BlockStatement",
                        "body": [
                            {
                                "type": "VariableDeclaration",
                                "declarations": [
                                    {
                                        "type": "VariableDeclarator",
                                        "id": {
                                            "type": "Identifier",
                                            "name": "a"
                                        },
                                        "init": {
                                            "type": "BinaryExpression",
                                            "operator": "+",
                                            "left": {
                                                "type": "Identifier",
                                                "name": "x"
                                            },
                                            "right": {
                                                "type": "Literal",
                                                "value": 1,
                                                "raw": "1"
                                            }
                                        }
                                    }
                                ],
                                "kind": "let"
                            },
                            {
                                "type": "VariableDeclaration",
                                "declarations": [
                                    {
                                        "type": "VariableDeclarator",
                                        "id": {
                                            "type": "Identifier",
                                            "name": "b"
                                        },
                                        "init": {
                                            "type": "BinaryExpression",
                                            "operator": "+",
                                            "left": {
                                                "type": "Identifier",
                                                "name": "a"
                                            },
                                            "right": {
                                                "type": "Identifier",
                                                "name": "y"
                                            }
                                        }
                                    }
                                ],
                                "kind": "let"
                            },
                            {
                                "type": "VariableDeclaration",
                                "declarations": [
                                    {
                                        "type": "VariableDeclarator",
                                        "id": {
                                            "type": "Identifier",
                                            "name": "c"
                                        },
                                        "init": {
                                            "type": "Literal",
                                            "value": 0,
                                            "raw": "0"
                                        }
                                    }
                                ],
                                "kind": "let"
                            },
                            {
                                "type": "IfStatement",
                                "test": {
                                    "type": "BinaryExpression",
                                    "operator": "<",
                                    "left": {
                                        "type": "Identifier",
                                        "name": "b"
                                    },
                                    "right": {
                                        "type": "Identifier",
                                        "name": "z"
                                    }
                                },
                                "consequent": {
                                    "type": "BlockStatement",
                                    "body": [
                                        {
                                            "type": "ExpressionStatement",
                                            "expression": {
                                                "type": "AssignmentExpression",
                                                "operator": "=",
                                                "left": {
                                                    "type": "Identifier",
                                                    "name": "c"
                                                },
                                                "right": {
                                                    "type": "BinaryExpression",
                                                    "operator": "+",
                                                    "left": {
                                                        "type": "Identifier",
                                                        "name": "c"
                                                    },
                                                    "right": {
                                                        "type": "Literal",
                                                        "value": 5,
                                                        "raw": "5"
                                                    }
                                                }
                                            }
                                        },
                                        {
                                            "type": "ReturnStatement",
                                            "argument": {
                                                "type": "BinaryExpression",
                                                "operator": "+",
                                                "left": {
                                                    "type": "BinaryExpression",
                                                    "operator": "+",
                                                    "left": {
                                                        "type": "BinaryExpression",
                                                        "operator": "+",
                                                        "left": {
                                                            "type": "Identifier",
                                                            "name": "x"
                                                        },
                                                        "right": {
                                                            "type": "Identifier",
                                                            "name": "y"
                                                        }
                                                    },
                                                    "right": {
                                                        "type": "Identifier",
                                                        "name": "z"
                                                    }
                                                },
                                                "right": {
                                                    "type": "Identifier",
                                                    "name": "c"
                                                }
                                            }
                                        }
                                    ]
                                },
                                "alternate": {
                                    "type": "IfStatement",
                                    "test": {
                                        "type": "BinaryExpression",
                                        "operator": "<",
                                        "left": {
                                            "type": "Identifier",
                                            "name": "b"
                                        },
                                        "right": {
                                            "type": "BinaryExpression",
                                            "operator": "*",
                                            "left": {
                                                "type": "Identifier",
                                                "name": "z"
                                            },
                                            "right": {
                                                "type": "Literal",
                                                "value": 2,
                                                "raw": "2"
                                            }
                                        }
                                    },
                                    "consequent": {
                                        "type": "BlockStatement",
                                        "body": [
                                            {
                                                "type": "ExpressionStatement",
                                                "expression": {
                                                    "type": "AssignmentExpression",
                                                    "operator": "=",
                                                    "left": {
                                                        "type": "Identifier",
                                                        "name": "c"
                                                    },
                                                    "right": {
                                                        "type": "BinaryExpression",
                                                        "operator": "+",
                                                        "left": {
                                                            "type": "BinaryExpression",
                                                            "operator": "+",
                                                            "left": {
                                                                "type": "Identifier",
                                                                "name": "c"
                                                            },
                                                            "right": {
                                                                "type": "Identifier",
                                                                "name": "x"
                                                            }
                                                        },
                                                        "right": {
                                                            "type": "Literal",
                                                            "value": 5,
                                                            "raw": "5"
                                                        }
                                                    }
                                                }
                                            },
                                            {
                                                "type": "ReturnStatement",
                                                "argument": {
                                                    "type": "BinaryExpression",
                                                    "operator": "+",
                                                    "left": {
                                                        "type": "BinaryExpression",
                                                        "operator": "+",
                                                        "left": {
                                                            "type": "BinaryExpression",
                                                            "operator": "+",
                                                            "left": {
                                                                "type": "Identifier",
                                                                "name": "x"
                                                            },
                                                            "right": {
                                                                "type": "Identifier",
                                                                "name": "y"
                                                            }
                                                        },
                                                        "right": {
                                                            "type": "Identifier",
                                                            "name": "z"
                                                        }
                                                    },
                                                    "right": {
                                                        "type": "Identifier",
                                                        "name": "c"
                                                    }
                                                }
                                            }
                                        ]
                                    },
                                    "alternate": {
                                        "type": "BlockStatement",
                                        "body": [
                                            {
                                                "type": "ExpressionStatement",
                                                "expression": {
                                                    "type": "AssignmentExpression",
                                                    "operator": "=",
                                                    "left": {
                                                        "type": "Identifier",
                                                        "name": "c"
                                                    },
                                                    "right": {
                                                        "type": "BinaryExpression",
                                                        "operator": "+",
                                                        "left": {
                                                            "type": "BinaryExpression",
                                                            "operator": "+",
                                                            "left": {
                                                                "type": "Identifier",
                                                                "name": "c"
                                                            },
                                                            "right": {
                                                                "type": "Identifier",
                                                                "name": "z"
                                                            }
                                                        },
                                                        "right": {
                                                            "type": "Literal",
                                                            "value": 5,
                                                            "raw": "5"
                                                        }
                                                    }
                                                }
                                            },
                                            {
                                                "type": "ReturnStatement",
                                                "argument": {
                                                    "type": "BinaryExpression",
                                                    "operator": "+",
                                                    "left": {
                                                        "type": "BinaryExpression",
                                                        "operator": "+",
                                                        "left": {
                                                            "type": "BinaryExpression",
                                                            "operator": "+",
                                                            "left": {
                                                                "type": "Identifier",
                                                                "name": "x"
                                                            },
                                                            "right": {
                                                                "type": "Identifier",
                                                                "name": "y"
                                                            }
                                                        },
                                                        "right": {
                                                            "type": "Identifier",
                                                            "name": "z"
                                                        }
                                                    },
                                                    "right": {
                                                        "type": "Identifier",
                                                        "name": "c"
                                                    }
                                                }
                                            }
                                        ]
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
        var code = 'function foo(x, y, z){let a = x + 1;let b = a + y;let c = 0;if (b < z) { c = c + 5;return x + y + z + c;} else if (b < z * 2) {c = c + x + 5;return x + y + z + c; } else { c = c + z + 5;return x + y + z + c; }}';
        parseBody(toParse.body);
        var table = getAns();
        var input = '1,2,3';
        getPrint();
        getIfTest();
        var test = Handler(table, code, input, true);
        assert.equal(
            test[0][1].name,
            'y'
        );
        restart();
        reset();

    });
    it('Test inputs_3', () => {
        var toParse = {
            "type": "Program",
            "body": [
                {
                    "type": "FunctionDeclaration",
                    "id": {
                        "type": "Identifier",
                        "name": "foo"
                    },
                    "params": [
                        {
                            "type": "Identifier",
                            "name": "x"
                        },
                        {
                            "type": "Identifier",
                            "name": "y"
                        },
                        {
                            "type": "Identifier",
                            "name": "z"
                        }
                    ],
                    "body": {
                        "type": "BlockStatement",
                        "body": [
                            {
                                "type": "VariableDeclaration",
                                "declarations": [
                                    {
                                        "type": "VariableDeclarator",
                                        "id": {
                                            "type": "Identifier",
                                            "name": "a"
                                        },
                                        "init": {
                                            "type": "BinaryExpression",
                                            "operator": "+",
                                            "left": {
                                                "type": "Identifier",
                                                "name": "x"
                                            },
                                            "right": {
                                                "type": "Literal",
                                                "value": 1,
                                                "raw": "1"
                                            }
                                        }
                                    }
                                ],
                                "kind": "let"
                            },
                            {
                                "type": "VariableDeclaration",
                                "declarations": [
                                    {
                                        "type": "VariableDeclarator",
                                        "id": {
                                            "type": "Identifier",
                                            "name": "b"
                                        },
                                        "init": {
                                            "type": "BinaryExpression",
                                            "operator": "+",
                                            "left": {
                                                "type": "Identifier",
                                                "name": "a"
                                            },
                                            "right": {
                                                "type": "Identifier",
                                                "name": "y"
                                            }
                                        }
                                    }
                                ],
                                "kind": "let"
                            },
                            {
                                "type": "VariableDeclaration",
                                "declarations": [
                                    {
                                        "type": "VariableDeclarator",
                                        "id": {
                                            "type": "Identifier",
                                            "name": "c"
                                        },
                                        "init": {
                                            "type": "Literal",
                                            "value": 0,
                                            "raw": "0"
                                        }
                                    }
                                ],
                                "kind": "let"
                            },
                            {
                                "type": "IfStatement",
                                "test": {
                                    "type": "BinaryExpression",
                                    "operator": "<",
                                    "left": {
                                        "type": "Identifier",
                                        "name": "b"
                                    },
                                    "right": {
                                        "type": "Identifier",
                                        "name": "z"
                                    }
                                },
                                "consequent": {
                                    "type": "BlockStatement",
                                    "body": [
                                        {
                                            "type": "ExpressionStatement",
                                            "expression": {
                                                "type": "AssignmentExpression",
                                                "operator": "=",
                                                "left": {
                                                    "type": "Identifier",
                                                    "name": "c"
                                                },
                                                "right": {
                                                    "type": "BinaryExpression",
                                                    "operator": "+",
                                                    "left": {
                                                        "type": "Identifier",
                                                        "name": "c"
                                                    },
                                                    "right": {
                                                        "type": "Literal",
                                                        "value": 5,
                                                        "raw": "5"
                                                    }
                                                }
                                            }
                                        },
                                        {
                                            "type": "ReturnStatement",
                                            "argument": {
                                                "type": "BinaryExpression",
                                                "operator": "+",
                                                "left": {
                                                    "type": "BinaryExpression",
                                                    "operator": "+",
                                                    "left": {
                                                        "type": "BinaryExpression",
                                                        "operator": "+",
                                                        "left": {
                                                            "type": "Identifier",
                                                            "name": "x"
                                                        },
                                                        "right": {
                                                            "type": "Identifier",
                                                            "name": "y"
                                                        }
                                                    },
                                                    "right": {
                                                        "type": "Identifier",
                                                        "name": "z"
                                                    }
                                                },
                                                "right": {
                                                    "type": "Identifier",
                                                    "name": "c"
                                                }
                                            }
                                        }
                                    ]
                                },
                                "alternate": {
                                    "type": "IfStatement",
                                    "test": {
                                        "type": "BinaryExpression",
                                        "operator": "<",
                                        "left": {
                                            "type": "Identifier",
                                            "name": "b"
                                        },
                                        "right": {
                                            "type": "BinaryExpression",
                                            "operator": "*",
                                            "left": {
                                                "type": "Identifier",
                                                "name": "z"
                                            },
                                            "right": {
                                                "type": "Literal",
                                                "value": 2,
                                                "raw": "2"
                                            }
                                        }
                                    },
                                    "consequent": {
                                        "type": "BlockStatement",
                                        "body": [
                                            {
                                                "type": "ExpressionStatement",
                                                "expression": {
                                                    "type": "AssignmentExpression",
                                                    "operator": "=",
                                                    "left": {
                                                        "type": "Identifier",
                                                        "name": "c"
                                                    },
                                                    "right": {
                                                        "type": "BinaryExpression",
                                                        "operator": "+",
                                                        "left": {
                                                            "type": "BinaryExpression",
                                                            "operator": "+",
                                                            "left": {
                                                                "type": "Identifier",
                                                                "name": "c"
                                                            },
                                                            "right": {
                                                                "type": "Identifier",
                                                                "name": "x"
                                                            }
                                                        },
                                                        "right": {
                                                            "type": "Literal",
                                                            "value": 5,
                                                            "raw": "5"
                                                        }
                                                    }
                                                }
                                            },
                                            {
                                                "type": "ReturnStatement",
                                                "argument": {
                                                    "type": "BinaryExpression",
                                                    "operator": "+",
                                                    "left": {
                                                        "type": "BinaryExpression",
                                                        "operator": "+",
                                                        "left": {
                                                            "type": "BinaryExpression",
                                                            "operator": "+",
                                                            "left": {
                                                                "type": "Identifier",
                                                                "name": "x"
                                                            },
                                                            "right": {
                                                                "type": "Identifier",
                                                                "name": "y"
                                                            }
                                                        },
                                                        "right": {
                                                            "type": "Identifier",
                                                            "name": "z"
                                                        }
                                                    },
                                                    "right": {
                                                        "type": "Identifier",
                                                        "name": "c"
                                                    }
                                                }
                                            }
                                        ]
                                    },
                                    "alternate": {
                                        "type": "BlockStatement",
                                        "body": [
                                            {
                                                "type": "ExpressionStatement",
                                                "expression": {
                                                    "type": "AssignmentExpression",
                                                    "operator": "=",
                                                    "left": {
                                                        "type": "Identifier",
                                                        "name": "c"
                                                    },
                                                    "right": {
                                                        "type": "BinaryExpression",
                                                        "operator": "+",
                                                        "left": {
                                                            "type": "BinaryExpression",
                                                            "operator": "+",
                                                            "left": {
                                                                "type": "Identifier",
                                                                "name": "c"
                                                            },
                                                            "right": {
                                                                "type": "Identifier",
                                                                "name": "z"
                                                            }
                                                        },
                                                        "right": {
                                                            "type": "Literal",
                                                            "value": 5,
                                                            "raw": "5"
                                                        }
                                                    }
                                                }
                                            },
                                            {
                                                "type": "ReturnStatement",
                                                "argument": {
                                                    "type": "BinaryExpression",
                                                    "operator": "+",
                                                    "left": {
                                                        "type": "BinaryExpression",
                                                        "operator": "+",
                                                        "left": {
                                                            "type": "BinaryExpression",
                                                            "operator": "+",
                                                            "left": {
                                                                "type": "Identifier",
                                                                "name": "x"
                                                            },
                                                            "right": {
                                                                "type": "Identifier",
                                                                "name": "y"
                                                            }
                                                        },
                                                        "right": {
                                                            "type": "Identifier",
                                                            "name": "z"
                                                        }
                                                    },
                                                    "right": {
                                                        "type": "Identifier",
                                                        "name": "c"
                                                    }
                                                }
                                            }
                                        ]
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
        var code = 'function foo(x, y, z){let a = x + 1;let b = a + y;let c = 0;if (b < z) { c = c + 5;return x + y + z + c;} else if (b < z * 2) {c = c + x + 5;return x + y + z + c; } else { c = c + z + 5;return x + y + z + c; }}';
        parseBody(toParse.body);
        var table = getAns();
        var input = '1,2,3';
        var test = Handler(table, code, input, true);
        assert.equal(
            test[0][2].name,
            'z'
        );
        restart();
        reset();

    });
    it('Test inputs_4', () => {
        var toParse = {
            "type": "Program",
            "body": [
                {
                    "type": "FunctionDeclaration",
                    "id": {
                        "type": "Identifier",
                        "name": "foo"
                    },
                    "params": [
                        {
                            "type": "Identifier",
                            "name": "x"
                        },
                        {
                            "type": "Identifier",
                            "name": "y"
                        },
                        {
                            "type": "Identifier",
                            "name": "z"
                        }
                    ],
                    "body": {
                        "type": "BlockStatement",
                        "body": [
                            {
                                "type": "VariableDeclaration",
                                "declarations": [
                                    {
                                        "type": "VariableDeclarator",
                                        "id": {
                                            "type": "Identifier",
                                            "name": "a"
                                        },
                                        "init": {
                                            "type": "BinaryExpression",
                                            "operator": "+",
                                            "left": {
                                                "type": "Identifier",
                                                "name": "x"
                                            },
                                            "right": {
                                                "type": "Literal",
                                                "value": 1,
                                                "raw": "1"
                                            }
                                        }
                                    }
                                ],
                                "kind": "let"
                            },
                            {
                                "type": "VariableDeclaration",
                                "declarations": [
                                    {
                                        "type": "VariableDeclarator",
                                        "id": {
                                            "type": "Identifier",
                                            "name": "b"
                                        },
                                        "init": {
                                            "type": "BinaryExpression",
                                            "operator": "+",
                                            "left": {
                                                "type": "Identifier",
                                                "name": "a"
                                            },
                                            "right": {
                                                "type": "Identifier",
                                                "name": "y"
                                            }
                                        }
                                    }
                                ],
                                "kind": "let"
                            },
                            {
                                "type": "VariableDeclaration",
                                "declarations": [
                                    {
                                        "type": "VariableDeclarator",
                                        "id": {
                                            "type": "Identifier",
                                            "name": "c"
                                        },
                                        "init": {
                                            "type": "Literal",
                                            "value": 0,
                                            "raw": "0"
                                        }
                                    }
                                ],
                                "kind": "let"
                            },
                            {
                                "type": "IfStatement",
                                "test": {
                                    "type": "BinaryExpression",
                                    "operator": "<",
                                    "left": {
                                        "type": "Identifier",
                                        "name": "b"
                                    },
                                    "right": {
                                        "type": "Identifier",
                                        "name": "z"
                                    }
                                },
                                "consequent": {
                                    "type": "BlockStatement",
                                    "body": [
                                        {
                                            "type": "ExpressionStatement",
                                            "expression": {
                                                "type": "AssignmentExpression",
                                                "operator": "=",
                                                "left": {
                                                    "type": "Identifier",
                                                    "name": "c"
                                                },
                                                "right": {
                                                    "type": "BinaryExpression",
                                                    "operator": "+",
                                                    "left": {
                                                        "type": "Identifier",
                                                        "name": "c"
                                                    },
                                                    "right": {
                                                        "type": "Literal",
                                                        "value": 5,
                                                        "raw": "5"
                                                    }
                                                }
                                            }
                                        },
                                        {
                                            "type": "ReturnStatement",
                                            "argument": {
                                                "type": "BinaryExpression",
                                                "operator": "+",
                                                "left": {
                                                    "type": "BinaryExpression",
                                                    "operator": "+",
                                                    "left": {
                                                        "type": "BinaryExpression",
                                                        "operator": "+",
                                                        "left": {
                                                            "type": "Identifier",
                                                            "name": "x"
                                                        },
                                                        "right": {
                                                            "type": "Identifier",
                                                            "name": "y"
                                                        }
                                                    },
                                                    "right": {
                                                        "type": "Identifier",
                                                        "name": "z"
                                                    }
                                                },
                                                "right": {
                                                    "type": "Identifier",
                                                    "name": "c"
                                                }
                                            }
                                        }
                                    ]
                                },
                                "alternate": {
                                    "type": "IfStatement",
                                    "test": {
                                        "type": "BinaryExpression",
                                        "operator": "<",
                                        "left": {
                                            "type": "Identifier",
                                            "name": "b"
                                        },
                                        "right": {
                                            "type": "BinaryExpression",
                                            "operator": "*",
                                            "left": {
                                                "type": "Identifier",
                                                "name": "z"
                                            },
                                            "right": {
                                                "type": "Literal",
                                                "value": 2,
                                                "raw": "2"
                                            }
                                        }
                                    },
                                    "consequent": {
                                        "type": "BlockStatement",
                                        "body": [
                                            {
                                                "type": "ExpressionStatement",
                                                "expression": {
                                                    "type": "AssignmentExpression",
                                                    "operator": "=",
                                                    "left": {
                                                        "type": "Identifier",
                                                        "name": "c"
                                                    },
                                                    "right": {
                                                        "type": "BinaryExpression",
                                                        "operator": "+",
                                                        "left": {
                                                            "type": "BinaryExpression",
                                                            "operator": "+",
                                                            "left": {
                                                                "type": "Identifier",
                                                                "name": "c"
                                                            },
                                                            "right": {
                                                                "type": "Identifier",
                                                                "name": "x"
                                                            }
                                                        },
                                                        "right": {
                                                            "type": "Literal",
                                                            "value": 5,
                                                            "raw": "5"
                                                        }
                                                    }
                                                }
                                            },
                                            {
                                                "type": "ReturnStatement",
                                                "argument": {
                                                    "type": "BinaryExpression",
                                                    "operator": "+",
                                                    "left": {
                                                        "type": "BinaryExpression",
                                                        "operator": "+",
                                                        "left": {
                                                            "type": "BinaryExpression",
                                                            "operator": "+",
                                                            "left": {
                                                                "type": "Identifier",
                                                                "name": "x"
                                                            },
                                                            "right": {
                                                                "type": "Identifier",
                                                                "name": "y"
                                                            }
                                                        },
                                                        "right": {
                                                            "type": "Identifier",
                                                            "name": "z"
                                                        }
                                                    },
                                                    "right": {
                                                        "type": "Identifier",
                                                        "name": "c"
                                                    }
                                                }
                                            }
                                        ]
                                    },
                                    "alternate": {
                                        "type": "BlockStatement",
                                        "body": [
                                            {
                                                "type": "ExpressionStatement",
                                                "expression": {
                                                    "type": "AssignmentExpression",
                                                    "operator": "=",
                                                    "left": {
                                                        "type": "Identifier",
                                                        "name": "c"
                                                    },
                                                    "right": {
                                                        "type": "BinaryExpression",
                                                        "operator": "+",
                                                        "left": {
                                                            "type": "BinaryExpression",
                                                            "operator": "+",
                                                            "left": {
                                                                "type": "Identifier",
                                                                "name": "c"
                                                            },
                                                            "right": {
                                                                "type": "Identifier",
                                                                "name": "z"
                                                            }
                                                        },
                                                        "right": {
                                                            "type": "Literal",
                                                            "value": 5,
                                                            "raw": "5"
                                                        }
                                                    }
                                                }
                                            },
                                            {
                                                "type": "ReturnStatement",
                                                "argument": {
                                                    "type": "BinaryExpression",
                                                    "operator": "+",
                                                    "left": {
                                                        "type": "BinaryExpression",
                                                        "operator": "+",
                                                        "left": {
                                                            "type": "BinaryExpression",
                                                            "operator": "+",
                                                            "left": {
                                                                "type": "Identifier",
                                                                "name": "x"
                                                            },
                                                            "right": {
                                                                "type": "Identifier",
                                                                "name": "y"
                                                            }
                                                        },
                                                        "right": {
                                                            "type": "Identifier",
                                                            "name": "z"
                                                        }
                                                    },
                                                    "right": {
                                                        "type": "Identifier",
                                                        "name": "c"
                                                    }
                                                }
                                            }
                                        ]
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
        var code = 'function foo(x, y, z){let a = x + 1;let b = a + y;let c = 0;if (b < z) { c = c + 5;return x + y + z + c;} else if (b < z * 2) {c = c + x + 5;return x + y + z + c; } else { c = c + z + 5;return x + y + z + c; }}';
        parseBody(toParse.body);
        var table = getAns();
        var input = "1,2,'hello'";
        var test = Handler(table, code, input, true);
        assert.equal(
            test[0][2].name,
            'z'
        );
        restart();
        reset();

    });
    it('Test inputs_5', () => {
        var toParse = {
            "type": "Program",
            "body": [
                {
                    "type": "FunctionDeclaration",
                    "id": {
                        "type": "Identifier",
                        "name": "foo"
                    },
                    "params": [
                        {
                            "type": "Identifier",
                            "name": "x"
                        },
                        {
                            "type": "Identifier",
                            "name": "y"
                        },
                        {
                            "type": "Identifier",
                            "name": "z"
                        }
                    ],
                    "body": {
                        "type": "BlockStatement",
                        "body": [
                            {
                                "type": "VariableDeclaration",
                                "declarations": [
                                    {
                                        "type": "VariableDeclarator",
                                        "id": {
                                            "type": "Identifier",
                                            "name": "a"
                                        },
                                        "init": {
                                            "type": "BinaryExpression",
                                            "operator": "+",
                                            "left": {
                                                "type": "Identifier",
                                                "name": "x"
                                            },
                                            "right": {
                                                "type": "Literal",
                                                "value": 1,
                                                "raw": "1"
                                            }
                                        }
                                    }
                                ],
                                "kind": "let"
                            },
                            {
                                "type": "VariableDeclaration",
                                "declarations": [
                                    {
                                        "type": "VariableDeclarator",
                                        "id": {
                                            "type": "Identifier",
                                            "name": "b"
                                        },
                                        "init": {
                                            "type": "BinaryExpression",
                                            "operator": "+",
                                            "left": {
                                                "type": "Identifier",
                                                "name": "a"
                                            },
                                            "right": {
                                                "type": "Identifier",
                                                "name": "y"
                                            }
                                        }
                                    }
                                ],
                                "kind": "let"
                            },
                            {
                                "type": "VariableDeclaration",
                                "declarations": [
                                    {
                                        "type": "VariableDeclarator",
                                        "id": {
                                            "type": "Identifier",
                                            "name": "c"
                                        },
                                        "init": {
                                            "type": "Literal",
                                            "value": 0,
                                            "raw": "0"
                                        }
                                    }
                                ],
                                "kind": "let"
                            },
                            {
                                "type": "IfStatement",
                                "test": {
                                    "type": "BinaryExpression",
                                    "operator": "<",
                                    "left": {
                                        "type": "Identifier",
                                        "name": "b"
                                    },
                                    "right": {
                                        "type": "Identifier",
                                        "name": "z"
                                    }
                                },
                                "consequent": {
                                    "type": "BlockStatement",
                                    "body": [
                                        {
                                            "type": "ExpressionStatement",
                                            "expression": {
                                                "type": "AssignmentExpression",
                                                "operator": "=",
                                                "left": {
                                                    "type": "Identifier",
                                                    "name": "c"
                                                },
                                                "right": {
                                                    "type": "BinaryExpression",
                                                    "operator": "+",
                                                    "left": {
                                                        "type": "Identifier",
                                                        "name": "c"
                                                    },
                                                    "right": {
                                                        "type": "Literal",
                                                        "value": 5,
                                                        "raw": "5"
                                                    }
                                                }
                                            }
                                        },
                                        {
                                            "type": "ReturnStatement",
                                            "argument": {
                                                "type": "BinaryExpression",
                                                "operator": "+",
                                                "left": {
                                                    "type": "BinaryExpression",
                                                    "operator": "+",
                                                    "left": {
                                                        "type": "BinaryExpression",
                                                        "operator": "+",
                                                        "left": {
                                                            "type": "Identifier",
                                                            "name": "x"
                                                        },
                                                        "right": {
                                                            "type": "Identifier",
                                                            "name": "y"
                                                        }
                                                    },
                                                    "right": {
                                                        "type": "Identifier",
                                                        "name": "z"
                                                    }
                                                },
                                                "right": {
                                                    "type": "Identifier",
                                                    "name": "c"
                                                }
                                            }
                                        }
                                    ]
                                },
                                "alternate": {
                                    "type": "IfStatement",
                                    "test": {
                                        "type": "BinaryExpression",
                                        "operator": "<",
                                        "left": {
                                            "type": "Identifier",
                                            "name": "b"
                                        },
                                        "right": {
                                            "type": "BinaryExpression",
                                            "operator": "*",
                                            "left": {
                                                "type": "Identifier",
                                                "name": "z"
                                            },
                                            "right": {
                                                "type": "Literal",
                                                "value": 2,
                                                "raw": "2"
                                            }
                                        }
                                    },
                                    "consequent": {
                                        "type": "BlockStatement",
                                        "body": [
                                            {
                                                "type": "ExpressionStatement",
                                                "expression": {
                                                    "type": "AssignmentExpression",
                                                    "operator": "=",
                                                    "left": {
                                                        "type": "Identifier",
                                                        "name": "c"
                                                    },
                                                    "right": {
                                                        "type": "BinaryExpression",
                                                        "operator": "+",
                                                        "left": {
                                                            "type": "BinaryExpression",
                                                            "operator": "+",
                                                            "left": {
                                                                "type": "Identifier",
                                                                "name": "c"
                                                            },
                                                            "right": {
                                                                "type": "Identifier",
                                                                "name": "x"
                                                            }
                                                        },
                                                        "right": {
                                                            "type": "Literal",
                                                            "value": 5,
                                                            "raw": "5"
                                                        }
                                                    }
                                                }
                                            },
                                            {
                                                "type": "ReturnStatement",
                                                "argument": {
                                                    "type": "BinaryExpression",
                                                    "operator": "+",
                                                    "left": {
                                                        "type": "BinaryExpression",
                                                        "operator": "+",
                                                        "left": {
                                                            "type": "BinaryExpression",
                                                            "operator": "+",
                                                            "left": {
                                                                "type": "Identifier",
                                                                "name": "x"
                                                            },
                                                            "right": {
                                                                "type": "Identifier",
                                                                "name": "y"
                                                            }
                                                        },
                                                        "right": {
                                                            "type": "Identifier",
                                                            "name": "z"
                                                        }
                                                    },
                                                    "right": {
                                                        "type": "Identifier",
                                                        "name": "c"
                                                    }
                                                }
                                            }
                                        ]
                                    },
                                    "alternate": {
                                        "type": "BlockStatement",
                                        "body": [
                                            {
                                                "type": "ExpressionStatement",
                                                "expression": {
                                                    "type": "AssignmentExpression",
                                                    "operator": "=",
                                                    "left": {
                                                        "type": "Identifier",
                                                        "name": "c"
                                                    },
                                                    "right": {
                                                        "type": "BinaryExpression",
                                                        "operator": "+",
                                                        "left": {
                                                            "type": "BinaryExpression",
                                                            "operator": "+",
                                                            "left": {
                                                                "type": "Identifier",
                                                                "name": "c"
                                                            },
                                                            "right": {
                                                                "type": "Identifier",
                                                                "name": "z"
                                                            }
                                                        },
                                                        "right": {
                                                            "type": "Literal",
                                                            "value": 5,
                                                            "raw": "5"
                                                        }
                                                    }
                                                }
                                            },
                                            {
                                                "type": "ReturnStatement",
                                                "argument": {
                                                    "type": "BinaryExpression",
                                                    "operator": "+",
                                                    "left": {
                                                        "type": "BinaryExpression",
                                                        "operator": "+",
                                                        "left": {
                                                            "type": "BinaryExpression",
                                                            "operator": "+",
                                                            "left": {
                                                                "type": "Identifier",
                                                                "name": "x"
                                                            },
                                                            "right": {
                                                                "type": "Identifier",
                                                                "name": "y"
                                                            }
                                                        },
                                                        "right": {
                                                            "type": "Identifier",
                                                            "name": "z"
                                                        }
                                                    },
                                                    "right": {
                                                        "type": "Identifier",
                                                        "name": "c"
                                                    }
                                                }
                                            }
                                        ]
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
        var code = 'function foo(x, y, z){let a = x + 1;let b = a + y;let c = 0;if (b < z) { c = c + 5;return x + y + z + c;} else if (b < z * 2) {c = c + x + 5;return x + y + z + c; } else { c = c + z + 5;return x + y + z + c; }}';
        parseBody(toParse.body);
        var table = getAns();
        var input = "1,2,'['hello','bye']'";
        var test = Handler(table, code, input, true);
        assert.equal(
            test[0][2].name,
            'z'
        );
        restart();
        reset();

    });
    it('Test inputs_6', () => {
        var toParse = {
            "type": "Program",
            "body": [
                {
                    "type": "FunctionDeclaration",
                    "id": {
                        "type": "Identifier",
                        "name": "foo"
                    },
                    "params": [
                        {
                            "type": "Identifier",
                            "name": "x"
                        },
                        {
                            "type": "Identifier",
                            "name": "y"
                        },
                        {
                            "type": "Identifier",
                            "name": "z"
                        }
                    ],
                    "body": {
                        "type": "BlockStatement",
                        "body": [
                            {
                                "type": "VariableDeclaration",
                                "declarations": [
                                    {
                                        "type": "VariableDeclarator",
                                        "id": {
                                            "type": "Identifier",
                                            "name": "a"
                                        },
                                        "init": {
                                            "type": "BinaryExpression",
                                            "operator": "+",
                                            "left": {
                                                "type": "Identifier",
                                                "name": "x"
                                            },
                                            "right": {
                                                "type": "Literal",
                                                "value": 1,
                                                "raw": "1"
                                            }
                                        }
                                    }
                                ],
                                "kind": "let"
                            },
                            {
                                "type": "VariableDeclaration",
                                "declarations": [
                                    {
                                        "type": "VariableDeclarator",
                                        "id": {
                                            "type": "Identifier",
                                            "name": "b"
                                        },
                                        "init": {
                                            "type": "BinaryExpression",
                                            "operator": "+",
                                            "left": {
                                                "type": "Identifier",
                                                "name": "a"
                                            },
                                            "right": {
                                                "type": "Identifier",
                                                "name": "y"
                                            }
                                        }
                                    }
                                ],
                                "kind": "let"
                            },
                            {
                                "type": "VariableDeclaration",
                                "declarations": [
                                    {
                                        "type": "VariableDeclarator",
                                        "id": {
                                            "type": "Identifier",
                                            "name": "c"
                                        },
                                        "init": {
                                            "type": "Literal",
                                            "value": 0,
                                            "raw": "0"
                                        }
                                    }
                                ],
                                "kind": "let"
                            },
                            {
                                "type": "WhileStatement",
                                "test": {
                                    "type": "BinaryExpression",
                                    "operator": "<",
                                    "left": {
                                        "type": "Identifier",
                                        "name": "a"
                                    },
                                    "right": {
                                        "type": "Identifier",
                                        "name": "z"
                                    }
                                },
                                "body": {
                                    "type": "BlockStatement",
                                    "body": [
                                        {
                                            "type": "ExpressionStatement",
                                            "expression": {
                                                "type": "AssignmentExpression",
                                                "operator": "=",
                                                "left": {
                                                    "type": "Identifier",
                                                    "name": "c"
                                                },
                                                "right": {
                                                    "type": "BinaryExpression",
                                                    "operator": "+",
                                                    "left": {
                                                        "type": "Identifier",
                                                        "name": "a"
                                                    },
                                                    "right": {
                                                        "type": "Identifier",
                                                        "name": "b"
                                                    }
                                                }
                                            }
                                        },
                                        {
                                            "type": "ExpressionStatement",
                                            "expression": {
                                                "type": "AssignmentExpression",
                                                "operator": "=",
                                                "left": {
                                                    "type": "Identifier",
                                                    "name": "z"
                                                },
                                                "right": {
                                                    "type": "BinaryExpression",
                                                    "operator": "*",
                                                    "left": {
                                                        "type": "Identifier",
                                                        "name": "c"
                                                    },
                                                    "right": {
                                                        "type": "Literal",
                                                        "value": 2,
                                                        "raw": "2"
                                                    }
                                                }
                                            }
                                        }
                                    ]
                                }
                            },
                            {
                                "type": "ReturnStatement",
                                "argument": {
                                    "type": "Identifier",
                                    "name": "z"
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
        var code = `function foo(x, y, z){
            let a = x + 1;
            let b = a + y;
            let c = 0;
            
            while (a < z) {
                c = a + b;
                z = c * 2;
            }
            
            return z;
        }
        `;
        parseBody(toParse.body);
        var table = getAns();
        var input = "1,true,['hello','bye']";
        var test = Handler(table, code, input, false);
        assert.equal(
            test[0][2].name,
            'z'
        );
        restart();
        reset();

    });
    it('Test inputs_7', () => {
        var toParse = {
            "type": "Program",
            "body": [
                {
                    "type": "FunctionDeclaration",
                    "id": {
                        "type": "Identifier",
                        "name": "foo"
                    },
                    "params": [
                        {
                            "type": "Identifier",
                            "name": "x"
                        },
                        {
                            "type": "Identifier",
                            "name": "y"
                        },
                        {
                            "type": "Identifier",
                            "name": "z"
                        }
                    ],
                    "body": {
                        "type": "BlockStatement",
                        "body": [
                            {
                                "type": "VariableDeclaration",
                                "declarations": [
                                    {
                                        "type": "VariableDeclarator",
                                        "id": {
                                            "type": "Identifier",
                                            "name": "a"
                                        },
                                        "init": {
                                            "type": "BinaryExpression",
                                            "operator": "+",
                                            "left": {
                                                "type": "Identifier",
                                                "name": "x"
                                            },
                                            "right": {
                                                "type": "Literal",
                                                "value": 1,
                                                "raw": "1"
                                            }
                                        }
                                    }
                                ],
                                "kind": "let"
                            },
                            {
                                "type": "VariableDeclaration",
                                "declarations": [
                                    {
                                        "type": "VariableDeclarator",
                                        "id": {
                                            "type": "Identifier",
                                            "name": "b"
                                        },
                                        "init": {
                                            "type": "BinaryExpression",
                                            "operator": "*",
                                            "left": {
                                                "type": "Identifier",
                                                "name": "a"
                                            },
                                            "right": {
                                                "type": "Identifier",
                                                "name": "y"
                                            }
                                        }
                                    }
                                ],
                                "kind": "let"
                            },
                            {
                                "type": "VariableDeclaration",
                                "declarations": [
                                    {
                                        "type": "VariableDeclarator",
                                        "id": {
                                            "type": "Identifier",
                                            "name": "c"
                                        },
                                        "init": {
                                            "type": "Literal",
                                            "value": 0,
                                            "raw": "0"
                                        }
                                    }
                                ],
                                "kind": "let"
                            },
                            {
                                "type": "IfStatement",
                                "test": {
                                    "type": "BinaryExpression",
                                    "operator": "<",
                                    "left": {
                                        "type": "BinaryExpression",
                                        "operator": "*",
                                        "left": {
                                            "type": "Identifier",
                                            "name": "b"
                                        },
                                        "right": {
                                            "type": "Literal",
                                            "value": 2,
                                            "raw": "2"
                                        }
                                    },
                                    "right": {
                                        "type": "Identifier",
                                        "name": "z"
                                    }
                                },
                                "consequent": {
                                    "type": "BlockStatement",
                                    "body": [
                                        {
                                            "type": "ExpressionStatement",
                                            "expression": {
                                                "type": "AssignmentExpression",
                                                "operator": "=",
                                                "left": {
                                                    "type": "Identifier",
                                                    "name": "c"
                                                },
                                                "right": {
                                                    "type": "BinaryExpression",
                                                    "operator": "+",
                                                    "left": {
                                                        "type": "Identifier",
                                                        "name": "c"
                                                    },
                                                    "right": {
                                                        "type": "Literal",
                                                        "value": 5,
                                                        "raw": "5"
                                                    }
                                                }
                                            }
                                        },
                                        {
                                            "type": "ReturnStatement",
                                            "argument": {
                                                "type": "BinaryExpression",
                                                "operator": "+",
                                                "left": {
                                                    "type": "BinaryExpression",
                                                    "operator": "+",
                                                    "left": {
                                                        "type": "BinaryExpression",
                                                        "operator": "+",
                                                        "left": {
                                                            "type": "Identifier",
                                                            "name": "x"
                                                        },
                                                        "right": {
                                                            "type": "Identifier",
                                                            "name": "y"
                                                        }
                                                    },
                                                    "right": {
                                                        "type": "Identifier",
                                                        "name": "z"
                                                    }
                                                },
                                                "right": {
                                                    "type": "Identifier",
                                                    "name": "c"
                                                }
                                            }
                                        }
                                    ]
                                },
                                "alternate": {
                                    "type": "IfStatement",
                                    "test": {
                                        "type": "BinaryExpression",
                                        "operator": "<",
                                        "left": {
                                            "type": "Identifier",
                                            "name": "b"
                                        },
                                        "right": {
                                            "type": "BinaryExpression",
                                            "operator": "*",
                                            "left": {
                                                "type": "Identifier",
                                                "name": "z"
                                            },
                                            "right": {
                                                "type": "Literal",
                                                "value": 2,
                                                "raw": "2"
                                            }
                                        }
                                    },
                                    "consequent": {
                                        "type": "BlockStatement",
                                        "body": [
                                            {
                                                "type": "ExpressionStatement",
                                                "expression": {
                                                    "type": "AssignmentExpression",
                                                    "operator": "=",
                                                    "left": {
                                                        "type": "Identifier",
                                                        "name": "c"
                                                    },
                                                    "right": {
                                                        "type": "BinaryExpression",
                                                        "operator": "+",
                                                        "left": {
                                                            "type": "BinaryExpression",
                                                            "operator": "+",
                                                            "left": {
                                                                "type": "Identifier",
                                                                "name": "c"
                                                            },
                                                            "right": {
                                                                "type": "Identifier",
                                                                "name": "x"
                                                            }
                                                        },
                                                        "right": {
                                                            "type": "Literal",
                                                            "value": 5,
                                                            "raw": "5"
                                                        }
                                                    }
                                                }
                                            },
                                            {
                                                "type": "ReturnStatement",
                                                "argument": {
                                                    "type": "BinaryExpression",
                                                    "operator": "+",
                                                    "left": {
                                                        "type": "BinaryExpression",
                                                        "operator": "+",
                                                        "left": {
                                                            "type": "BinaryExpression",
                                                            "operator": "+",
                                                            "left": {
                                                                "type": "Identifier",
                                                                "name": "x"
                                                            },
                                                            "right": {
                                                                "type": "Identifier",
                                                                "name": "y"
                                                            }
                                                        },
                                                        "right": {
                                                            "type": "Identifier",
                                                            "name": "z"
                                                        }
                                                    },
                                                    "right": {
                                                        "type": "Identifier",
                                                        "name": "c"
                                                    }
                                                }
                                            }
                                        ]
                                    },
                                    "alternate": {
                                        "type": "BlockStatement",
                                        "body": [
                                            {
                                                "type": "ExpressionStatement",
                                                "expression": {
                                                    "type": "AssignmentExpression",
                                                    "operator": "=",
                                                    "left": {
                                                        "type": "Identifier",
                                                        "name": "c"
                                                    },
                                                    "right": {
                                                        "type": "BinaryExpression",
                                                        "operator": "+",
                                                        "left": {
                                                            "type": "BinaryExpression",
                                                            "operator": "+",
                                                            "left": {
                                                                "type": "Identifier",
                                                                "name": "c"
                                                            },
                                                            "right": {
                                                                "type": "Identifier",
                                                                "name": "z"
                                                            }
                                                        },
                                                        "right": {
                                                            "type": "Literal",
                                                            "value": 5,
                                                            "raw": "5"
                                                        }
                                                    }
                                                }
                                            },
                                            {
                                                "type": "ReturnStatement",
                                                "argument": {
                                                    "type": "BinaryExpression",
                                                    "operator": "+",
                                                    "left": {
                                                        "type": "BinaryExpression",
                                                        "operator": "+",
                                                        "left": {
                                                            "type": "BinaryExpression",
                                                            "operator": "+",
                                                            "left": {
                                                                "type": "Identifier",
                                                                "name": "x"
                                                            },
                                                            "right": {
                                                                "type": "Identifier",
                                                                "name": "y"
                                                            }
                                                        },
                                                        "right": {
                                                            "type": "Identifier",
                                                            "name": "z"
                                                        }
                                                    },
                                                    "right": {
                                                        "type": "Identifier",
                                                        "name": "c"
                                                    }
                                                }
                                            }
                                        ]
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
        var code = `function foo(x, y, z){
            let a = x + 1;
            let b = a * y;
            let c = 0;
            
            if (b*2 < z) {
                c = c + 5;
                return x + y + z + c;
            } else if (b < z * 2) {
                c = c + x + 5;
                return x + y + z + c;
            } else {
                c = c + z + 5;
                return x + y + z + c;
            }
        }
        `
        parseBody(toParse.body);
        var table = getAns();
        var input = "1,2,3";
        var test = Handler(table, code, input, true);
        assert.equal(
            test[0][2].name,
            'z'
        );
        restart();
        reset();

    });
    it('Test inputs_8', () => {
        var toParse = {
            "type": "Program",
            "body": [
                {
                    "type": "FunctionDeclaration",
                    "id": {
                        "type": "Identifier",
                        "name": "foo"
                    },
                    "params": [
                        {
                            "type": "Identifier",
                            "name": "x"
                        },
                        {
                            "type": "Identifier",
                            "name": "y"
                        },
                        {
                            "type": "Identifier",
                            "name": "z"
                        }
                    ],
                    "body": {
                        "type": "BlockStatement",
                        "body": [
                            {
                                "type": "VariableDeclaration",
                                "declarations": [
                                    {
                                        "type": "VariableDeclarator",
                                        "id": {
                                            "type": "Identifier",
                                            "name": "a"
                                        },
                                        "init": {
                                            "type": "BinaryExpression",
                                            "operator": "+",
                                            "left": {
                                                "type": "Identifier",
                                                "name": "x"
                                            },
                                            "right": {
                                                "type": "Literal",
                                                "value": 1,
                                                "raw": "1"
                                            }
                                        }
                                    }
                                ],
                                "kind": "let"
                            },
                            {
                                "type": "VariableDeclaration",
                                "declarations": [
                                    {
                                        "type": "VariableDeclarator",
                                        "id": {
                                            "type": "Identifier",
                                            "name": "b"
                                        },
                                        "init": {
                                            "type": "BinaryExpression",
                                            "operator": "*",
                                            "left": {
                                                "type": "Identifier",
                                                "name": "a"
                                            },
                                            "right": {
                                                "type": "Identifier",
                                                "name": "y"
                                            }
                                        }
                                    }
                                ],
                                "kind": "let"
                            },
                            {
                                "type": "VariableDeclaration",
                                "declarations": [
                                    {
                                        "type": "VariableDeclarator",
                                        "id": {
                                            "type": "Identifier",
                                            "name": "c"
                                        },
                                        "init": {
                                            "type": "Literal",
                                            "value": 0,
                                            "raw": "0"
                                        }
                                    }
                                ],
                                "kind": "let"
                            },
                            {
                                "type": "IfStatement",
                                "test": {
                                    "type": "BinaryExpression",
                                    "operator": "<",
                                    "left": {
                                        "type": "BinaryExpression",
                                        "operator": "*",
                                        "left": {
                                            "type": "Identifier",
                                            "name": "b"
                                        },
                                        "right": {
                                            "type": "Literal",
                                            "value": 2,
                                            "raw": "2"
                                        }
                                    },
                                    "right": {
                                        "type": "Identifier",
                                        "name": "z"
                                    }
                                },
                                "consequent": {
                                    "type": "BlockStatement",
                                    "body": [
                                        {
                                            "type": "ExpressionStatement",
                                            "expression": {
                                                "type": "AssignmentExpression",
                                                "operator": "=",
                                                "left": {
                                                    "type": "Identifier",
                                                    "name": "c"
                                                },
                                                "right": {
                                                    "type": "BinaryExpression",
                                                    "operator": "+",
                                                    "left": {
                                                        "type": "Identifier",
                                                        "name": "c"
                                                    },
                                                    "right": {
                                                        "type": "Literal",
                                                        "value": 5,
                                                        "raw": "5"
                                                    }
                                                }
                                            }
                                        },
                                        {
                                            "type": "ReturnStatement",
                                            "argument": {
                                                "type": "BinaryExpression",
                                                "operator": "+",
                                                "left": {
                                                    "type": "BinaryExpression",
                                                    "operator": "+",
                                                    "left": {
                                                        "type": "BinaryExpression",
                                                        "operator": "+",
                                                        "left": {
                                                            "type": "Identifier",
                                                            "name": "x"
                                                        },
                                                        "right": {
                                                            "type": "Identifier",
                                                            "name": "y"
                                                        }
                                                    },
                                                    "right": {
                                                        "type": "Identifier",
                                                        "name": "z"
                                                    }
                                                },
                                                "right": {
                                                    "type": "Identifier",
                                                    "name": "c"
                                                }
                                            }
                                        }
                                    ]
                                },
                                "alternate": {
                                    "type": "IfStatement",
                                    "test": {
                                        "type": "BinaryExpression",
                                        "operator": "<",
                                        "left": {
                                            "type": "Identifier",
                                            "name": "b"
                                        },
                                        "right": {
                                            "type": "BinaryExpression",
                                            "operator": "*",
                                            "left": {
                                                "type": "Identifier",
                                                "name": "z"
                                            },
                                            "right": {
                                                "type": "Literal",
                                                "value": 2,
                                                "raw": "2"
                                            }
                                        }
                                    },
                                    "consequent": {
                                        "type": "BlockStatement",
                                        "body": [
                                            {
                                                "type": "ExpressionStatement",
                                                "expression": {
                                                    "type": "AssignmentExpression",
                                                    "operator": "=",
                                                    "left": {
                                                        "type": "Identifier",
                                                        "name": "c"
                                                    },
                                                    "right": {
                                                        "type": "BinaryExpression",
                                                        "operator": "+",
                                                        "left": {
                                                            "type": "BinaryExpression",
                                                            "operator": "+",
                                                            "left": {
                                                                "type": "Identifier",
                                                                "name": "c"
                                                            },
                                                            "right": {
                                                                "type": "Identifier",
                                                                "name": "x"
                                                            }
                                                        },
                                                        "right": {
                                                            "type": "Literal",
                                                            "value": 5,
                                                            "raw": "5"
                                                        }
                                                    }
                                                }
                                            },
                                            {
                                                "type": "ReturnStatement",
                                                "argument": {
                                                    "type": "BinaryExpression",
                                                    "operator": "+",
                                                    "left": {
                                                        "type": "BinaryExpression",
                                                        "operator": "+",
                                                        "left": {
                                                            "type": "BinaryExpression",
                                                            "operator": "+",
                                                            "left": {
                                                                "type": "Identifier",
                                                                "name": "x"
                                                            },
                                                            "right": {
                                                                "type": "Identifier",
                                                                "name": "y"
                                                            }
                                                        },
                                                        "right": {
                                                            "type": "Identifier",
                                                            "name": "z"
                                                        }
                                                    },
                                                    "right": {
                                                        "type": "Identifier",
                                                        "name": "c"
                                                    }
                                                }
                                            }
                                        ]
                                    },
                                    "alternate": {
                                        "type": "BlockStatement",
                                        "body": [
                                            {
                                                "type": "ExpressionStatement",
                                                "expression": {
                                                    "type": "AssignmentExpression",
                                                    "operator": "=",
                                                    "left": {
                                                        "type": "Identifier",
                                                        "name": "c"
                                                    },
                                                    "right": {
                                                        "type": "BinaryExpression",
                                                        "operator": "+",
                                                        "left": {
                                                            "type": "BinaryExpression",
                                                            "operator": "+",
                                                            "left": {
                                                                "type": "Identifier",
                                                                "name": "c"
                                                            },
                                                            "right": {
                                                                "type": "Identifier",
                                                                "name": "z"
                                                            }
                                                        },
                                                        "right": {
                                                            "type": "Literal",
                                                            "value": 5,
                                                            "raw": "5"
                                                        }
                                                    }
                                                }
                                            },
                                            {
                                                "type": "ReturnStatement",
                                                "argument": {
                                                    "type": "BinaryExpression",
                                                    "operator": "+",
                                                    "left": {
                                                        "type": "BinaryExpression",
                                                        "operator": "+",
                                                        "left": {
                                                            "type": "BinaryExpression",
                                                            "operator": "+",
                                                            "left": {
                                                                "type": "Identifier",
                                                                "name": "x"
                                                            },
                                                            "right": {
                                                                "type": "Identifier",
                                                                "name": "y"
                                                            }
                                                        },
                                                        "right": {
                                                            "type": "Identifier",
                                                            "name": "z"
                                                        }
                                                    },
                                                    "right": {
                                                        "type": "Identifier",
                                                        "name": "c"
                                                    }
                                                }
                                            }
                                        ]
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
        var code = `function foo(x, y, z){
            let a = x + 1;
            let b = a * y;
            let c = 0;
            
            if (b*2 < z) {
                c = c + 5;
                return x + y + z + c;
            } else if (b < z * 2) {
                c = c + x + 5;
                return x + y + z + c;
            } else {
                c = c + z + 5;
                return x + y + z + c;
            }
        }
        `
        parseBody(toParse.body);
        var table = getAns();
        var input = "1,2,3";
        var test = Handler(table, code, input, true);
        assert.equal(
            test[0][1].name,
            'y'
        );
        restart();
        reset();

    });
    it('Test inputs_9', () => {
        var toParse = {
            "type": "Program",
            "body": [
                {
                    "type": "FunctionDeclaration",
                    "id": {
                        "type": "Identifier",
                        "name": "foo"
                    },
                    "params": [
                        {
                            "type": "Identifier",
                            "name": "x"
                        },
                        {
                            "type": "Identifier",
                            "name": "y"
                        },
                        {
                            "type": "Identifier",
                            "name": "z"
                        }
                    ],
                    "body": {
                        "type": "BlockStatement",
                        "body": [
                            {
                                "type": "VariableDeclaration",
                                "declarations": [
                                    {
                                        "type": "VariableDeclarator",
                                        "id": {
                                            "type": "Identifier",
                                            "name": "a"
                                        },
                                        "init": {
                                            "type": "BinaryExpression",
                                            "operator": "+",
                                            "left": {
                                                "type": "Identifier",
                                                "name": "x"
                                            },
                                            "right": {
                                                "type": "Literal",
                                                "value": 1,
                                                "raw": "1"
                                            }
                                        }
                                    }
                                ],
                                "kind": "let"
                            },
                            {
                                "type": "VariableDeclaration",
                                "declarations": [
                                    {
                                        "type": "VariableDeclarator",
                                        "id": {
                                            "type": "Identifier",
                                            "name": "b"
                                        },
                                        "init": {
                                            "type": "BinaryExpression",
                                            "operator": "*",
                                            "left": {
                                                "type": "Identifier",
                                                "name": "a"
                                            },
                                            "right": {
                                                "type": "Identifier",
                                                "name": "y"
                                            }
                                        }
                                    }
                                ],
                                "kind": "let"
                            },
                            {
                                "type": "VariableDeclaration",
                                "declarations": [
                                    {
                                        "type": "VariableDeclarator",
                                        "id": {
                                            "type": "Identifier",
                                            "name": "c"
                                        },
                                        "init": {
                                            "type": "Literal",
                                            "value": 0,
                                            "raw": "0"
                                        }
                                    }
                                ],
                                "kind": "let"
                            },
                            {
                                "type": "IfStatement",
                                "test": {
                                    "type": "BinaryExpression",
                                    "operator": "<",
                                    "left": {
                                        "type": "BinaryExpression",
                                        "operator": "*",
                                        "left": {
                                            "type": "Identifier",
                                            "name": "b"
                                        },
                                        "right": {
                                            "type": "Literal",
                                            "value": 2,
                                            "raw": "2"
                                        }
                                    },
                                    "right": {
                                        "type": "Identifier",
                                        "name": "z"
                                    }
                                },
                                "consequent": {
                                    "type": "BlockStatement",
                                    "body": [
                                        {
                                            "type": "ExpressionStatement",
                                            "expression": {
                                                "type": "AssignmentExpression",
                                                "operator": "=",
                                                "left": {
                                                    "type": "Identifier",
                                                    "name": "c"
                                                },
                                                "right": {
                                                    "type": "BinaryExpression",
                                                    "operator": "+",
                                                    "left": {
                                                        "type": "Identifier",
                                                        "name": "c"
                                                    },
                                                    "right": {
                                                        "type": "Literal",
                                                        "value": 5,
                                                        "raw": "5"
                                                    }
                                                }
                                            }
                                        },
                                        {
                                            "type": "ReturnStatement",
                                            "argument": {
                                                "type": "BinaryExpression",
                                                "operator": "+",
                                                "left": {
                                                    "type": "BinaryExpression",
                                                    "operator": "+",
                                                    "left": {
                                                        "type": "BinaryExpression",
                                                        "operator": "+",
                                                        "left": {
                                                            "type": "Identifier",
                                                            "name": "x"
                                                        },
                                                        "right": {
                                                            "type": "Identifier",
                                                            "name": "y"
                                                        }
                                                    },
                                                    "right": {
                                                        "type": "Identifier",
                                                        "name": "z"
                                                    }
                                                },
                                                "right": {
                                                    "type": "Identifier",
                                                    "name": "c"
                                                }
                                            }
                                        }
                                    ]
                                },
                                "alternate": {
                                    "type": "IfStatement",
                                    "test": {
                                        "type": "BinaryExpression",
                                        "operator": "<",
                                        "left": {
                                            "type": "Identifier",
                                            "name": "b"
                                        },
                                        "right": {
                                            "type": "BinaryExpression",
                                            "operator": "*",
                                            "left": {
                                                "type": "Identifier",
                                                "name": "z"
                                            },
                                            "right": {
                                                "type": "Literal",
                                                "value": 2,
                                                "raw": "2"
                                            }
                                        }
                                    },
                                    "consequent": {
                                        "type": "BlockStatement",
                                        "body": [
                                            {
                                                "type": "ExpressionStatement",
                                                "expression": {
                                                    "type": "AssignmentExpression",
                                                    "operator": "=",
                                                    "left": {
                                                        "type": "Identifier",
                                                        "name": "c"
                                                    },
                                                    "right": {
                                                        "type": "BinaryExpression",
                                                        "operator": "+",
                                                        "left": {
                                                            "type": "BinaryExpression",
                                                            "operator": "+",
                                                            "left": {
                                                                "type": "Identifier",
                                                                "name": "c"
                                                            },
                                                            "right": {
                                                                "type": "Identifier",
                                                                "name": "x"
                                                            }
                                                        },
                                                        "right": {
                                                            "type": "Literal",
                                                            "value": 5,
                                                            "raw": "5"
                                                        }
                                                    }
                                                }
                                            },
                                            {
                                                "type": "ReturnStatement",
                                                "argument": {
                                                    "type": "BinaryExpression",
                                                    "operator": "+",
                                                    "left": {
                                                        "type": "BinaryExpression",
                                                        "operator": "+",
                                                        "left": {
                                                            "type": "BinaryExpression",
                                                            "operator": "+",
                                                            "left": {
                                                                "type": "Identifier",
                                                                "name": "x"
                                                            },
                                                            "right": {
                                                                "type": "Identifier",
                                                                "name": "y"
                                                            }
                                                        },
                                                        "right": {
                                                            "type": "Identifier",
                                                            "name": "z"
                                                        }
                                                    },
                                                    "right": {
                                                        "type": "Identifier",
                                                        "name": "c"
                                                    }
                                                }
                                            }
                                        ]
                                    },
                                    "alternate": {
                                        "type": "BlockStatement",
                                        "body": [
                                            {
                                                "type": "ExpressionStatement",
                                                "expression": {
                                                    "type": "AssignmentExpression",
                                                    "operator": "=",
                                                    "left": {
                                                        "type": "Identifier",
                                                        "name": "c"
                                                    },
                                                    "right": {
                                                        "type": "BinaryExpression",
                                                        "operator": "+",
                                                        "left": {
                                                            "type": "BinaryExpression",
                                                            "operator": "+",
                                                            "left": {
                                                                "type": "Identifier",
                                                                "name": "c"
                                                            },
                                                            "right": {
                                                                "type": "Identifier",
                                                                "name": "z"
                                                            }
                                                        },
                                                        "right": {
                                                            "type": "Literal",
                                                            "value": 5,
                                                            "raw": "5"
                                                        }
                                                    }
                                                }
                                            },
                                            {
                                                "type": "ReturnStatement",
                                                "argument": {
                                                    "type": "BinaryExpression",
                                                    "operator": "+",
                                                    "left": {
                                                        "type": "BinaryExpression",
                                                        "operator": "+",
                                                        "left": {
                                                            "type": "BinaryExpression",
                                                            "operator": "+",
                                                            "left": {
                                                                "type": "Identifier",
                                                                "name": "x"
                                                            },
                                                            "right": {
                                                                "type": "Identifier",
                                                                "name": "y"
                                                            }
                                                        },
                                                        "right": {
                                                            "type": "Identifier",
                                                            "name": "z"
                                                        }
                                                    },
                                                    "right": {
                                                        "type": "Identifier",
                                                        "name": "c"
                                                    }
                                                }
                                            }
                                        ]
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
        var code = `function foo(x, y, z){
            let a = x + 1;
            let b = a * y;
            let c = 0;
            
            if (b*2 < z) {
                c = c + 5;
                return x + y + z + c;
            } else if (b < z * 2) {
                c = c + x + 5;
                return x + y + z + c;
            } else {
                c = c + z + 5;
                return x + y + z + c;
            }
        }
        `
        parseBody(toParse.body);
        var table = getAns();
        var input = "1,2,3";
        var test = Handler(table, code, input, true);
        assert.equal(
            test[0][0].name,
            'x'
        );
        restart();
        reset();

    });
    it('Test inputs_10', () => {
        var toParse = {
            "type": "Program",
            "body": [
                {
                    "type": "FunctionDeclaration",
                    "id": {
                        "type": "Identifier",
                        "name": "foo"
                    },
                    "params": [
                        {
                            "type": "Identifier",
                            "name": "x"
                        },
                        {
                            "type": "Identifier",
                            "name": "y"
                        },
                        {
                            "type": "Identifier",
                            "name": "z"
                        }
                    ],
                    "body": {
                        "type": "BlockStatement",
                        "body": [
                            {
                                "type": "VariableDeclaration",
                                "declarations": [
                                    {
                                        "type": "VariableDeclarator",
                                        "id": {
                                            "type": "Identifier",
                                            "name": "a"
                                        },
                                        "init": {
                                            "type": "BinaryExpression",
                                            "operator": "+",
                                            "left": {
                                                "type": "Identifier",
                                                "name": "x"
                                            },
                                            "right": {
                                                "type": "Literal",
                                                "value": 1,
                                                "raw": "1"
                                            }
                                        }
                                    }
                                ],
                                "kind": "let"
                            },
                            {
                                "type": "VariableDeclaration",
                                "declarations": [
                                    {
                                        "type": "VariableDeclarator",
                                        "id": {
                                            "type": "Identifier",
                                            "name": "b"
                                        },
                                        "init": {
                                            "type": "BinaryExpression",
                                            "operator": "*",
                                            "left": {
                                                "type": "Identifier",
                                                "name": "a"
                                            },
                                            "right": {
                                                "type": "Identifier",
                                                "name": "y"
                                            }
                                        }
                                    }
                                ],
                                "kind": "let"
                            },
                            {
                                "type": "VariableDeclaration",
                                "declarations": [
                                    {
                                        "type": "VariableDeclarator",
                                        "id": {
                                            "type": "Identifier",
                                            "name": "c"
                                        },
                                        "init": {
                                            "type": "Literal",
                                            "value": 0,
                                            "raw": "0"
                                        }
                                    }
                                ],
                                "kind": "let"
                            },
                            {
                                "type": "IfStatement",
                                "test": {
                                    "type": "BinaryExpression",
                                    "operator": "<",
                                    "left": {
                                        "type": "BinaryExpression",
                                        "operator": "*",
                                        "left": {
                                            "type": "Identifier",
                                            "name": "b"
                                        },
                                        "right": {
                                            "type": "Literal",
                                            "value": 2,
                                            "raw": "2"
                                        }
                                    },
                                    "right": {
                                        "type": "Identifier",
                                        "name": "z"
                                    }
                                },
                                "consequent": {
                                    "type": "BlockStatement",
                                    "body": [
                                        {
                                            "type": "ExpressionStatement",
                                            "expression": {
                                                "type": "AssignmentExpression",
                                                "operator": "=",
                                                "left": {
                                                    "type": "Identifier",
                                                    "name": "c"
                                                },
                                                "right": {
                                                    "type": "BinaryExpression",
                                                    "operator": "+",
                                                    "left": {
                                                        "type": "Identifier",
                                                        "name": "c"
                                                    },
                                                    "right": {
                                                        "type": "Literal",
                                                        "value": 5,
                                                        "raw": "5"
                                                    }
                                                }
                                            }
                                        },
                                        {
                                            "type": "ReturnStatement",
                                            "argument": {
                                                "type": "BinaryExpression",
                                                "operator": "+",
                                                "left": {
                                                    "type": "BinaryExpression",
                                                    "operator": "+",
                                                    "left": {
                                                        "type": "BinaryExpression",
                                                        "operator": "+",
                                                        "left": {
                                                            "type": "Identifier",
                                                            "name": "x"
                                                        },
                                                        "right": {
                                                            "type": "Identifier",
                                                            "name": "y"
                                                        }
                                                    },
                                                    "right": {
                                                        "type": "Identifier",
                                                        "name": "z"
                                                    }
                                                },
                                                "right": {
                                                    "type": "Identifier",
                                                    "name": "c"
                                                }
                                            }
                                        }
                                    ]
                                },
                                "alternate": {
                                    "type": "IfStatement",
                                    "test": {
                                        "type": "BinaryExpression",
                                        "operator": "<",
                                        "left": {
                                            "type": "Identifier",
                                            "name": "b"
                                        },
                                        "right": {
                                            "type": "BinaryExpression",
                                            "operator": "*",
                                            "left": {
                                                "type": "Identifier",
                                                "name": "z"
                                            },
                                            "right": {
                                                "type": "Literal",
                                                "value": 2,
                                                "raw": "2"
                                            }
                                        }
                                    },
                                    "consequent": {
                                        "type": "BlockStatement",
                                        "body": [
                                            {
                                                "type": "ExpressionStatement",
                                                "expression": {
                                                    "type": "AssignmentExpression",
                                                    "operator": "=",
                                                    "left": {
                                                        "type": "Identifier",
                                                        "name": "c"
                                                    },
                                                    "right": {
                                                        "type": "BinaryExpression",
                                                        "operator": "+",
                                                        "left": {
                                                            "type": "BinaryExpression",
                                                            "operator": "+",
                                                            "left": {
                                                                "type": "Identifier",
                                                                "name": "c"
                                                            },
                                                            "right": {
                                                                "type": "Identifier",
                                                                "name": "x"
                                                            }
                                                        },
                                                        "right": {
                                                            "type": "Literal",
                                                            "value": 5,
                                                            "raw": "5"
                                                        }
                                                    }
                                                }
                                            },
                                            {
                                                "type": "ReturnStatement",
                                                "argument": {
                                                    "type": "BinaryExpression",
                                                    "operator": "+",
                                                    "left": {
                                                        "type": "BinaryExpression",
                                                        "operator": "+",
                                                        "left": {
                                                            "type": "BinaryExpression",
                                                            "operator": "+",
                                                            "left": {
                                                                "type": "Identifier",
                                                                "name": "x"
                                                            },
                                                            "right": {
                                                                "type": "Identifier",
                                                                "name": "y"
                                                            }
                                                        },
                                                        "right": {
                                                            "type": "Identifier",
                                                            "name": "z"
                                                        }
                                                    },
                                                    "right": {
                                                        "type": "Identifier",
                                                        "name": "c"
                                                    }
                                                }
                                            }
                                        ]
                                    },
                                    "alternate": {
                                        "type": "BlockStatement",
                                        "body": [
                                            {
                                                "type": "ExpressionStatement",
                                                "expression": {
                                                    "type": "AssignmentExpression",
                                                    "operator": "=",
                                                    "left": {
                                                        "type": "Identifier",
                                                        "name": "c"
                                                    },
                                                    "right": {
                                                        "type": "BinaryExpression",
                                                        "operator": "+",
                                                        "left": {
                                                            "type": "BinaryExpression",
                                                            "operator": "+",
                                                            "left": {
                                                                "type": "Identifier",
                                                                "name": "c"
                                                            },
                                                            "right": {
                                                                "type": "Identifier",
                                                                "name": "z"
                                                            }
                                                        },
                                                        "right": {
                                                            "type": "Literal",
                                                            "value": 5,
                                                            "raw": "5"
                                                        }
                                                    }
                                                }
                                            },
                                            {
                                                "type": "ReturnStatement",
                                                "argument": {
                                                    "type": "BinaryExpression",
                                                    "operator": "+",
                                                    "left": {
                                                        "type": "BinaryExpression",
                                                        "operator": "+",
                                                        "left": {
                                                            "type": "BinaryExpression",
                                                            "operator": "+",
                                                            "left": {
                                                                "type": "Identifier",
                                                                "name": "x"
                                                            },
                                                            "right": {
                                                                "type": "Identifier",
                                                                "name": "y"
                                                            }
                                                        },
                                                        "right": {
                                                            "type": "Identifier",
                                                            "name": "z"
                                                        }
                                                    },
                                                    "right": {
                                                        "type": "Identifier",
                                                        "name": "c"
                                                    }
                                                }
                                            }
                                        ]
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
        var code = `function foo(x, y, z){
            let a = x + 1;
            let b = a * y;
            let c = 0;
            
            if (b*2 < z) {
                c = c + 5;
                return x + y + z + c;
            } else if (b < z * 2) {
                c = c + x + 5;
                return x + y + z + c;
            } else {
                c = c + z + 5;
                return x + y + z + c;
            }
        }
        `
        parseBody(toParse.body);
        var table = getAns();
        var input = "1,2,3";
        var test = Handler(table, code, input, true);
        assert.equal(
            test[0][0].name,
            'x'
        );
        restart();
        reset();

    });
    it('Test inputs_11', () => {
        var toParse = {
            "type": "Program",
            "body": [
              {
                "type": "FunctionDeclaration",
                "id": {
                  "type": "Identifier",
                  "name": "foo"
                },
                "params": [
                  {
                    "type": "Identifier",
                    "name": "x"
                  },
                  {
                    "type": "Identifier",
                    "name": "y"
                  },
                  {
                    "type": "Identifier",
                    "name": "a"
                  },
                  {
                    "type": "Identifier",
                    "name": "b"
                  },
                  {
                    "type": "Identifier",
                    "name": "c"
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
                      "type": "IfStatement",
                      "test": {
                        "type": "BinaryExpression",
                        "operator": "==",
                        "left": {
                          "type": "MemberExpression",
                          "computed": true,
                          "object": {
                            "type": "Identifier",
                            "name": "x"
                          },
                          "property": {
                            "type": "Literal",
                            "value": 2,
                            "raw": "2"
                          }
                        },
                        "right": {
                          "type": "Literal",
                          "value": "nano",
                          "raw": "'nano'"
                        }
                      },
                      "consequent": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Identifier",
                              "name": "x"
                            }
                          }
                        ]
                      },
                      "alternate": null
                    },
                    {
                      "type": "IfStatement",
                      "test": {
                        "type": "BinaryExpression",
                        "operator": "==",
                        "left": {
                          "type": "MemberExpression",
                          "computed": true,
                          "object": {
                            "type": "Identifier",
                            "name": "y"
                          },
                          "property": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1"
                          }
                        },
                        "right": {
                          "type": "Literal",
                          "value": 2,
                          "raw": "2"
                        }
                      },
                      "consequent": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Identifier",
                              "name": "x"
                            }
                          }
                        ]
                      },
                      "alternate": null
                    },
                    {
                      "type": "IfStatement",
                      "test": {
                        "type": "BinaryExpression",
                        "operator": "<",
                        "left": {
                          "type": "BinaryExpression",
                          "operator": "+",
                          "left": {
                            "type": "BinaryExpression",
                            "operator": "+",
                            "left": {
                              "type": "Identifier",
                              "name": "a"
                            },
                            "right": {
                              "type": "Identifier",
                              "name": "b"
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "name": "c"
                          }
                        },
                        "right": {
                          "type": "Literal",
                          "value": 12,
                          "raw": "12"
                        }
                      },
                      "consequent": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Identifier",
                              "name": "x"
                            }
                          }
                        ]
                      },
                      "alternate": null
                    },
                    {
                      "type": "IfStatement",
                      "test": {
                        "type": "BinaryExpression",
                        "operator": "==",
                        "left": {
                          "type": "Identifier",
                          "name": "n"
                        },
                        "right": {
                          "type": "Literal",
                          "value": "nano",
                          "raw": "'nano'"
                        }
                      },
                      "consequent": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Identifier",
                              "name": "x"
                            }
                          }
                        ]
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
        var code = `function foo(x,y,a,b,c,n){
   
            if (x[2]=='nano') {
                return x ;
            }
            if (y[1]==2) {
                return x ;
            }
            if (a+b+c<12) {
                return x ;
            }
            if (n=='nano'){
               return x ;
            }
        
        }
        
        `
        parseBody(toParse.body);
        var table = getAns();
        var input = "[1,2,3],[1,2],1,2,40,'nano'";
        var test = Handler(table, code, input, true);
        assert.equal(
            test[0][0].name,
            'x'
        );
        restart();
        reset();

    });

});