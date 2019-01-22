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

goog.provide('Blockly.JavaScript.iot');

goog.require('Blockly.JavaScript');


Blockly.JavaScript['remote_start'] = function(block) {
    var statement = Blockly.JavaScript.statementToCode(block, 'statement');

    Blockly.JavaScript.definitions_['define_iot'] = "__IOT_TOKEN__ = " + iot;
}


Blockly.JavaScript['iot_actuators_post_value'] = function(block) {
    var id = block.getFieldValue('id');
    var value = block.getFieldValue('value');
    var code = '';
    code += '__IOT_TOKEN_VALUE__.get("ACTUATORS", {}).get("' + id + '", {}).set("' + value + '", 0)';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};



Blockly.JavaScript['iot_sensors_get_value'] = function(block) {
    var id = block.getFieldValue('id');
    var value = block.getFieldValue('value');
    var code = '';
    code += '__IOT_TOKEN_VALUE__.get("SENSORS", {}).get("' + id + '", {}).set("' + value + '", 0)';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['iot_button_get_value'] = function(block) { //digital pin number
    var id = block.getFieldValue('id');
    var value = block.getFieldValue('button');
    var code = '';
    code += '__IOT_TOKEN_VALUE__.get("BUTTON", {}).get("' + id + '", {}).get("' + value + '", 0)';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};



Blockly.JavaScript['iot_switch_get_value'] = function(block) { //digital pin number
    var id = block.getFieldValue('id');
    var value = block.getFieldValue('value');
    var code = '';
    code += '__IOT_TOKEN_VALUE__.get("SWITCH", {}).get("' + id + '", {}).get("' + button + '", 0)';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['iot_slider_get_value'] = function(block) { //digital pin number
    var id = block.getFieldValue('id');
    var value = block.getFieldValue('slider');
    var code = '';
    code += '__IOT_TOKEN_VALUE__.get("SLIDER", {}).get("' + id + '", {}).get("' + value + '", 0)';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
}