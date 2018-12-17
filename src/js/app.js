import $ from 'jquery';
import { parseCode } from './code-analyzer';
import { parseBody } from './Parser';
import { getAns } from './Parser';
import { Handler } from './variable-analyzer';
import { getPrint } from './variable-analyzer';
import { getIfTest } from './variable-analyzer';


function replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
}


$(document).ready(function () {
    $('#codeSubmissionButton').click(() => {
        let codeToParse = $('#codePlaceholder').val();
        let input = $('#inputPlaceholder').val();
        let parsedCode = parseCode(codeToParse);
        let parsedCodeBody = parsedCode.body;
        parseBody(parsedCodeBody);
        let arr = getAns();
        // Printer(arr);
        Handler(arr, codeToParse, input, false);
        var array = getPrint();
        if (!getIfTest())
            toPrint(array[0], array[1]);

        $('#parsedCode').val(JSON.stringify(parsedCode, null, 2));
    });


});
function toPrint(toReturn, constTable) {
    var counterOfCon = 0;
    for (var i = 0; i < toReturn.length; i++) {
        if (toReturn[i].includes('if')) {
            if (constTable[counterOfCon].isTrue) {
                toReturn[i] = replaceAll(toReturn[i], ' ', '&nbsp;');
                $('#symbolicCode').append('<div style="background-color:green;width: 50%;">' + toReturn[i] + '</div>');
            }
            else {
                toReturn[i] = replaceAll(toReturn[i], ' ', '&nbsp;');
                $('#symbolicCode').append('<div style="background-color:red;width: 50%;">' + toReturn[i] + '</div>');
            }
            counterOfCon++;
        }
        else {
            toReturn[i] = replaceAll(toReturn[i], ' ', '&nbsp;');
            $('#symbolicCode').append(toReturn[i] + '<br />');
        }
    }
}

// function Printer(json) {
//     var tr;
//     tr = $('<tr/>');
//     tr.append('<td class="out title Line">' + 'Line' + '</td>');
//     tr.append('<td class="out title Type">' + 'Type' + '</td>');
//     tr.append('<td class="out title Name">' + 'Name' + '</td>');
//     tr.append('<td class="out title Condition">' + 'Condition' + '</td>');
//     tr.append('<td class="out title Condition">' + 'Value' + '</td>');
//     $('#outputTable').append(tr);
//     for (var i = 0; i < json.length; i++) {
//         tr = $('<tr/>');
//         tr.append('<td class="out Line">' + json[i].line + '</td>');
//         tr.append('<td class="out Type">' + json[i].type + '</td>');
//         tr.append('<td class="out Name">' + json[i].name + '</td>');
//         tr.append('<td class="out Condition">' + json[i].condition + '</td>');
//         tr.append('<td class="out Value">' + json[i].value + '</td>');
//    $('#outputTable').append(tr);
//     }
// }

export { toPrint };


