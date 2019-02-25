'use strict';

goog.provide('Blockly.Python.robotshield');

goog.require('Blockly.Python');


Blockly.Python['robotshield_sensor_pin'] = function(block) { // digital pin number
    var pin = block.getFieldValue('pin');

    var code = '';
    code += pin;
    return [code, Blockly.Python.ORDER_ATOMIC];
};
Blockly.Python['robotshield_servo_pin'] = function(block) { // digital pin number
    var pin = block.getFieldValue('pin');

    var code = '';
    code += pin;
    return [code, Blockly.Python.ORDER_ATOMIC];
};
