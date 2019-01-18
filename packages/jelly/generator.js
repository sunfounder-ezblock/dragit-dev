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

goog.provide('Blockly.Python.jelly');

goog.require('Blockly.Python');

Blockly.Python['jelly_get_value'] = function(block) {
    var port = Blockly.Python.valueToCode(block, 'port', Blockly.Python.ORDER_ATOMIC);

    var code = '';
    code += port + '.read()';
    return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['jelly_set_value'] = function(block) {
    var port = Blockly.Python.valueToCode(block, 'port', Blockly.Python.ORDER_ATOMIC);
    var value = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_ATOMIC);

    var code = '';
    code += port + '.write(' + value + ')\n';
    return code;
};


Blockly.Python['jelly_distance_sensor_get_value'] = Blockly.Python.jelly_get_value;
Blockly.Python['jelly_sound_sensor_get_value'] = Blockly.Python.jelly_get_value;
Blockly.Python['jelly_light_sensor_get_value'] = Blockly.Python.jelly_get_value;
Blockly.Python['jelly_slider_get_value'] = Blockly.Python.jelly_get_value;
Blockly.Python['jelly_button_get_value'] = Blockly.Python.jelly_get_value;

Blockly.Python['jelly_led_set_value'] = Blockly.Python.jelly_set_value;
Blockly.Python['jelly_led_bar_set_value'] = Blockly.Python.jelly_set_value;
Blockly.Python['jelly_motor_set_value'] = Blockly.Python.jelly_set_value;
Blockly.Python['jelly_servo_set_value'] = Blockly.Python.jelly_set_value;
Blockly.Python['jelly_rgb_set_value'] = Blockly.Python.jelly_set_value;
Blockly.Python['jelly_buzzer_set_value'] = Blockly.Python.jelly_set_value;