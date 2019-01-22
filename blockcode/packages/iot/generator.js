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

goog.provide('Blockly.Python.iot');

goog.require('Blockly.Python');


Blockly.Python['iot_post_value'] = function(block) {
    var sensorname = block.getFieldValue('sensorname');
    var value = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_ATOMIC);
    var deviceId = device.id;

    var def_iot = '';
    def_iot += "from raspberrypi import IOT\n";
    def_iot += '__IOT_TOKEN__ = "' + iot_token + '"\n';
    def_iot += '__IOT__ = IOT(__IOT_TOKEN__, "' + deviceId + '")\n';
    Blockly.Python.definitions_['define_iot'] = def_iot;

    var code = '';
    code += '__IOT__.post("' + sensorname + '", ' + value + ')\n';
    return code;
};

Blockly.Python['iot_get_value'] = function(block) {
    var sensorname = block.getFieldValue('sensorname');
    var deviceId = device.id;

    var def_iot = '';
    def_iot += "from raspberrypi import IOT\n";
    def_iot += '__IOT_TOKEN__ = "' + iot_token + '"\n';
    def_iot += '__IOT__ = IOT(__IOT_TOKEN__, "' + deviceId + '")\n';
    Blockly.Python.definitions_['define_iot'] = def_iot;

    var code = '';
    code += '__IOT__.get("' + sensorname + '")';
    return [code, Blockly.Python.ORDER_ATOMIC];
};