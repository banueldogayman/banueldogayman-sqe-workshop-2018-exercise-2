
var keys = [];
var tempValueTable = [];
var valueTable = [];
var inputVariables = [];
var constTable = [];
var inputDataTable = [];
var bool = false;
var toReturntoPrint;
function readVariables(table) {
    constTable = table.slice();
    for (let i = 0; i < table.length; i++) {
        const element = table[i];
        if (element.line == getFunctionDecIndex(table) && i != 0) {
            inputVariables.push(element.name);
        }

    }

}
function getFunctionDecIndex(table) {
    for (let i = 0; i < table.length; i++) {
        const element = table[i];
        return element.line;
    }

}
function fillValueTable(table) {
    for (let i = 0; i < table.length; i++) {
        const element = table[i];
        if (CheckAssignment(element)) {
            fillCellInValueTable(element, table);
        }
        else if (checkIF(element)) {
            TempOn();
            replaceCondition(element, false);

        }
        else if (element.type == 'return statement') {
            replaceCondition(element, true);
            TempOff();
        }
    }

}
function checkIF(element) {
    if (element.type == 'if statement' || element.type == 'else if statement' || element.type == 'while statement') {
        return true;
    }
    return false;
}
function replaceCondition(element, isReturn) {
    var stringcond = '';
    var condition = '';
    if (!isReturn)
        condition = element.condition.split(' ');
    else
        condition = element.value.split(' ');
    for (var i = 0; i < condition.length; i++) {
        stringcond = fillcond(condition, i, stringcond, isReturn);
    }
    if (!isReturn)
        element.condition = stringcond;
    else
        element.value = stringcond;

}
function fillcond(condition, i, stringcond, isReturn) {
    condition[i] = removeBraclets(condition[i]);
    if (valueTable[condition[i]]) {
        if (!inputVariables.includes(condition[i]) || !isReturn) {
            if (checkIfComapre(condition, i))
                condition[i] = '( ' + valueTable[condition[i]] + ' )';
            else
                condition[i] = valueTable[condition[i]];
        }
    }
    return changeString(stringcond, i, condition);
}

function changeString(stringcond, i, condition) {
    if (stringcond == '')
        stringcond += condition[i];
    else
        stringcond += ' ' + condition[i];
    return stringcond;
}
function checkIfComapre(condition, i) {
    if (condition[i + 1] == '*' || condition[i - 1] == '*' || condition[i + 1] == '/' || condition[i - 1] == '/')
        return true;
    return false;
}
function fillCellInValueTable(element, table) {
    var values = element.value.split(' ');
    for (let index = 0; index < values.length; index++) {
        values[index] = removeBraclets(values[index]);
    }
    var value = ComputeValue(values);
    valueTable[element.name] = value;
    keys.push(element.name);
    if (inputVariables.includes(element.name)) {
        var index = findlastIndex(table, element.name).split(' ')[0];
        var line = findlastIndex(table, element.name).split(' ')[1];
        if (index > 0 && line == element.line)
            table[index].value = value;
    }


}
function findlastIndex(table, name) {
    var lastIndex = 0;
    var line = 0;
    for (let index = 0; index < table.length; index++) {
        const element = table[index];
        if (name == element.name && element.type == 'assignment expression') {
            lastIndex = index;
            line = table[index].line;
        }
    }
    return lastIndex + ' ' + line;
}
function ComputeValue(values) {
    var ans = '';
    for (let i = 0; i < values.length; i++) {
        var element = values[i];
        if (checkIFNot(element)) {
            element = ifValueAlreadyIn(element, values, i);
        }
        if (ans == '') {
            ans = element;
        } else {
            ans += ' ' + element;
        }
    }
    ans = ans.replace(' + 0', '');
    ans = ans.replace('+ 0 ', '');
    ans = ans.replace('0 + ', '');
    return ans;
}
function checkIFNot(element) {
    if (!(element == '+' || element == '-' || element == '/' || element == '*')) {
        return true;
    }
    return false;
}
function ifValueAlreadyIn(element, values, i) {
    if (valueTable[element]) {
        if (values[i + 1] == '*' || values[i + 1] == '/') {
            element = '( ' + valueTable[element] + ' )';
        }
        else {
            element = valueTable[element];
        }
    }
    return element;
}
function removeBraclets(element) {
    while (element.includes('(') || element.includes(')')) {
        if (element.includes('(')) {
            element = element.replace('(', '');
        }
        else
            element = element.replace(')', '');

    }
    return element;
}
function CheckAssignment(element) {
    if (element.type == 'variable declaration' || element.type == 'assignment expression') {
        return true;
    }
    return false;
}
function printNewCode(codeToParse, table) {
    var codelines = codeToParse.split('\n');

    codelines = removeLines(codelines, table);
    for (let index = 0; index < codelines.length; index++) {
        const element = codelines[index];
        if ((element.includes('if') || element.includes('while'))) {
            codelines[index] = replaceConditionInCode(element, table);
        }
        else if (element.includes('return')) {
            codelines[index] = replaceReturnInCode(element, table);

        }

    }

    return codelines;
}
function replaceReturnInCode(element, table) {
    var value = element.substring(element.indexOf('n') + 2, element.length - 1);
    var get = getFromTable(table, true);
    element = element.replace(value, get);
    return element;

}
function replaceConditionInCode(element, table) {
    var condition = element.substring(element.indexOf('(') + 1, element.indexOf(')'));
    var get = getFromTable(table, false);
    element = element.replace(condition, get);
    return element;

}
function getFromTable(table, isRetrun) {
    var ans = '';
    for (let index = 0; index < table.length; index++) {
        var element = table[index];
        if (checkIF(element)) {
            ans = element.condition;
            table.splice(index, 1);
            return ans;
        }
        if (((element.type == 'return statement') && isRetrun)) {
            ans = element.value;
            table.splice(index, 1);
            return ans;
        }

    }

}
function removeLines(codelines, table) {
    for (let index = 0; index < codelines.length; index++) {
        const element = codelines[index];
        var name = element.split('=')[0];
        var value = element.split('=')[1];
        if (value)
            value = value.substring(1, value.length - 1);
        name = deleteSpaces(name);
        name = name.substring(1, name.length - 1);
        if (checkForLine(element, name)) {
            codelines.splice(index, 1);
            index--;
        }
        if (inputVariables.includes(name)) {
            codelines[index] = codelines[index].replace(value, getValue(table, name));
        }
    }
    return codelines;
}
function deleteSpaces(name) {
    while (name.substring(1, 2) == ' ')
        name = name.substring(1);
    return name;
}
function checkForLine(element, name) {
    if ((element.includes('else') || element.includes('{') || checkforline2(element) || checkforline3(element, name)))
        return false;
    return true;
}
function checkforline2(element) {
    if (element.includes('if') || element.includes('return') || element.includes('while'))
        return true;
    return false;
}
function checkforline3(element, name) {
    if (element.includes('}') || element.includes('function') || inputVariables.includes(name))
        return true;
    return false;
}

function getValue(table, name) {
    var ans = 0;
    for (let index = 0; index < table.length; index++) {
        const element = table[index];
        if (element.name == name)
            ans = element.value;
    }
    return ans;
}

function Handler(table, codeToParse, inputsValues, isTest) {
    bool = isTest;
    readVariables(table);
    fillValueTable(table);
    toReturntoPrint = printNewCode(codeToParse, table);
    clearLinesFromTable();
    FillInputDataTable(inputsValues);
    ComputeCondition();
    // if (!isTest)
    //     toPrint(toReturn,constTable);

    var arr = [inputDataTable, valueTable, inputVariables, toReturntoPrint, codeToParse, bool];
    return arr;
    // console.log(arr);
    //return true;
}
function getIfTest() {
    return bool;
}
function getPrint() {
    return [toReturntoPrint, constTable];
}
function reset() {
    keys = [];
    tempValueTable = [];
    valueTable = [];
    inputVariables = [];
    constTable = [];
    inputDataTable = [];
}
function ComputeCondition() {
    var condition;
    for (let index = 0; index < constTable.length; index++) {
        const element = constTable[index];
        condition = element.condition.split(' ');
        condition = replaceConditionB(condition);
        try {
            if (eval(condition)) {
                constTable[index].isTrue = true;
            } else {
                constTable[index].isTrue = false;
            }
        }
        catch (err) {
            constTable[index].isTrue = false;
        }
    }
}
function replaceConditionB(condition) {
    var string = '';
    for (let index = 0; index < condition.length; index++) {
        var element = condition[index];
        var name;
        var indexer;
        if (element.includes('[')) {
            name = element.substring(0, element.indexOf('['));
            indexer = element.substring(element.indexOf('[') + 1, element.indexOf(']'));
        }
        else {
            name = element;
            indexer = -1;
        }

        condition = fillConditionIndex(name, index, indexer, condition);
        string += condition[index];
    }
    return string;
}
function fillConditionIndex(name, index, indexer, condition) {
    if (inputVariables.includes(name)) {
        condition[index] = getValueFromDataTable(name, indexer);
    }
    else if (index == 2) {
        condition[index] = '\'' + condition[index] + '\'';
    }
    return condition;
}
function getValueFromDataTable(name, indexer) {
    for (let index = 0; index < inputDataTable.length; index++) {
        const cell = inputDataTable[index];
        if (cell.name == name)
            if (indexer != -1) {
                return cell.value[indexer];
            }
            else {
                return cell.value;
            }
    }

}

function clearLinesFromTable() {
    for (let index = 0; index < constTable.length; index++) {
        const element = constTable[index];
        if (!(element.type == 'if statement' || element.type == 'else if statement' || element.type == 'while statement')) {
            constTable.splice(index, 1);
            index--;
        }
    }
}

function FillInputDataTable(_inputs) {
    _inputs = checkArrays(_inputs);
    var inputs = _inputs.split(',');
    var obj = {};
    for (let index = 0; index < inputs.length; index++) {
        const element = inputs[index];
        obj = createObjectType(obj, index, element);
        inputDataTable.push(JSON.parse(JSON.stringify(obj)));
    }

}
function checkArrays(str) {
    var betweenArray = false;
    for (var i = 0; i < str.length; i++) {
        if (str.charAt(i) == '[') {
            betweenArray = true;
        }
        else if (str.charAt(i) == ']') {
            betweenArray = false;
        }
        if (betweenArray) {
            str = changeArr(str, i);
        }
    }
    return str;
}
function changeArr(str, i) {
    if (str.charAt(i) == ',') {
        str = setCharAt(str, i, '*');
    }
    return str;
}
function setCharAt(str, index, chr) {

    return str.substr(0, index) + chr + str.substr(index + 1);
}
function createObjectType(obj, index, element) {
    if (element.startsWith('\'')) {
        obj.type = 'string';
        obj.value = element;
    }
    else if (element.startsWith('[')) {
        obj.type = 'array';
        obj.value = insertToArr(element);
    }
    else if (element == 'true' || element == 'false') {
        obj.type = 'boolean';
        obj.value = element;
    }
    else {
        obj.type = 'number';
        obj.value = Number(element);
    }
    obj.name = inputVariables[index];
    return obj;
}
function insertToArr(element) {
    element = element.substring(1, element.length - 1);
    element = element.split('*');
    return element;
}
function TempOn() {

    for (let index = 0; index < keys.length; index++) {
        const element = valueTable[keys[index]];
        tempValueTable[keys[index]] = element;
    }

}
function TempOff() {
    for (let index = 0; index < keys.length; index++) {
        const element = tempValueTable[keys[index]];
        valueTable[keys[index]] = element;
    }
}
export { Handler };
export { reset };
export { getPrint };
export { getIfTest };
