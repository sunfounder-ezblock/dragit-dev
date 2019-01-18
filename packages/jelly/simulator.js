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

goog.provide('Blockly.JavaScript.jelly');

goog.require('Blockly.JavaScript');

Blockly.JavaScript['jelly_get_value'] = function(block) {
    var port = Blockly.JavaScript.valueToCode(block, 'port', Blockly.JavaScript.ORDER_ATOMIC);

    var code = '';
    code += port + '.read()';
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['jelly_set_value'] = function(block) {
    var port = Blockly.JavaScript.valueToCode(block, 'port', Blockly.JavaScript.ORDER_ATOMIC);
    var value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_ATOMIC);

    var code = '';
    code += port + '.write(' + value + ')\n';
    return code;
};


Blockly.JavaScript['jelly_distance_sensor_get_value'] = Blockly.JavaScript.jelly_get_value;
Blockly.JavaScript['jelly_sound_sensor_get_value'] = Blockly.JavaScript.jelly_get_value;
Blockly.JavaScript['jelly_light_sensor_get_value'] = Blockly.JavaScript.jelly_get_value;
Blockly.JavaScript['jelly_slider_get_value'] = Blockly.JavaScript.jelly_get_value;
Blockly.JavaScript['jelly_button_get_value'] = Blockly.JavaScript.jelly_get_value;

Blockly.JavaScript['jelly_led_set_value'] = Blockly.JavaScript.jelly_set_value;
Blockly.JavaScript['jelly_led_bar_set_value'] = Blockly.JavaScript.jelly_set_value;
Blockly.JavaScript['jelly_motor_set_value'] = Blockly.JavaScript.jelly_set_value;
Blockly.JavaScript['jelly_servo_set_value'] = Blockly.JavaScript.jelly_set_value;
Blockly.JavaScript['jelly_rgb_set_value'] = Blockly.JavaScript.jelly_set_value;
Blockly.JavaScript['jelly_buzzer_set_value'] = Blockly.JavaScript.jelly_set_value;