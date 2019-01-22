/*
 * var text_name = block.getFieldValue('NAME');
 * var number_name = block.getFieldValue('NAME');
 * var angle_name = block.getFieldValue('NAME');
 * var dropdown_name = block.getFieldValue('NAME');
 * var checkbox_name = block.getFieldValue('NAME') == 'TRUE';
 * var colour_name = block.getFieldValue('NAME');
 * var variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
 * var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
 * var statement_name = Blockly.Python.statementToCode(block, 'statement');
 *
 * For statement: return code
 * For output: return [code, Blockly.Python.ORDER_ATOMIC];
 */

'use strict';

goog.provide('Blockly.Python.basic');

goog.require('Blockly.Python');

Blockly.Python['basic_start'] = function (block) {
    var statement = Blockly.Python.statementToCode(block, 'statement');

    if (statement != '') {
        var statement_array = statement.split("\n");
        // result = []
        for (i in statement_array) {
            statement_array[i] = statement_array[i].slice(2);
        }
        statement = statement_array.join("\n");
    }

    var code = '';
    // code += 'def start():\n';
    code += statement;
    Blockly.Python.definitions_['basic_start'] = code;
    return null;
};

Blockly.Python['basic_forever'] = function (block) {
    var statement = Blockly.Python.statementToCode(block, 'statement');

    var globals = [];
    var varName;
    var workspace = block.workspace;
    var variables = Blockly.Variables.allUsedVarModels(workspace) || [];
    for (var i = 0, variable; variable = variables[i]; i++) {
        varName = variable.name;
        globals.push(Blockly.Python.variableDB_.getName(varName, Blockly.Variables.NAME_TYPE));
    }
    // Add developer variables.
    var devVarList = Blockly.Variables.allDeveloperVariables(workspace);
    for (var i = 0; i < devVarList.length; i++) {
        globals.push(Blockly.Python.variableDB_.getName(devVarList[i],
            Blockly.Names.DEVELOPER_VARIABLE_TYPE));
    }

    globals = globals.length ?
        Blockly.Python.INDENT + 'global ' + globals.join(', ') + '\n' : '';

    if (statement == '') {
        statement = '  pass\n'
    }

    var code = '';
    code += 'def forever():\n';
    code += globals
    code += statement;
    return code;
};

Blockly.Python['basic_print'] = function (block) {
    var msg = Blockly.Python.valueToCode(block, 'msg', Blockly.Python.ORDER_ATOMIC);

    var code = '';
    code += 'print("%s"%' + msg + ')\n';
    return code;
};

Blockly.Python['basic_delay'] = function (block) {
    var ms = Blockly.Python.valueToCode(block, 'ms', Blockly.Python.ORDER_ATOMIC);

    var code = '';
    code += 'delay(' + ms + ')\n';
    return code;
};


// for other blocks

// Math:
Blockly.Python['math_hex'] = function (block) {
    var num = block.getFieldValue('NUM');

    var code = "";
    code += "0x" + num;

    // return [code, Blockly.Python.ORDER_NONE];
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['math_mapping'] = function (block) {
    var value_value = Blockly.Python.valueToCode(block, 'in_value', Blockly.Python.ORDER_ATOMIC);
    var value_in_min = Blockly.Python.valueToCode(block, 'in_min', Blockly.Python.ORDER_ATOMIC);
    var value_in_max = Blockly.Python.valueToCode(block, 'in_max', Blockly.Python.ORDER_ATOMIC);
    var value_out_min = Blockly.Python.valueToCode(block, 'out_min', Blockly.Python.ORDER_ATOMIC);
    var value_out_max = Blockly.Python.valueToCode(block, 'out_max', Blockly.Python.ORDER_ATOMIC);

    var code = "";
    code += "mapping(" + value_value + ", " + value_in_min + ", " + value_in_max + ", " + value_out_min + ", " + value_out_max + ")"

    return [code, Blockly.Python.ORDER_NONE];
};