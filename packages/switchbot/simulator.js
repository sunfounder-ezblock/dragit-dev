/*
 * var text_name = block.getFieldValue('NAME');
 * var number_name = block.getFieldValue('NAME');
 * var angle_name = block.getFieldValue('NAME');
 * var dropdown_name = block.getFieldValue('NAME');
 * var checkbox_name = block.getFieldValue('NAME') == 'TRUE';
 * var colour_name = block.getFieldValue('NAME');
 * var variable_name = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
 * var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
 * var statement_name = Blockly.JavaScript.statementToCode(block, 'statement');
 *
 * For statement: return code
 * For output: return [code, Blockly.JavaScript.ORDER_ATOMIC];
 */

'use strict';

goog.provide('Blockly.JavaScript.switchbot');

goog.require('Blockly.JavaScript');


Blockly.JavaScript['switchbot_s1_get_value'] = function(block) {
    var mac = Blockly.JavaScript.valueToCode(block, 'mac', Blockly.JavaScript.ORDER_ATOMIC);
    var value = block.getFieldValue('value');

    Blockly.JavaScript.definitions_['import_modules_switchbot'] = 'from switchbot import SwitchBot';

    var code = '';
    code += 'SwitchBot(' + mac + ').write(' + value + ')\n';
    return code;
};