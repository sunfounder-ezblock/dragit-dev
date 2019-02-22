'use strict';

goog.provide('Blockly.Python.robotshield');

goog.require('Blockly.Python');


Blockly.Python['robotshield_digital_pin'] = function(block) { // digital pin number
    var pin = block.getFieldValue('pin');

    var code = '';
    code += pin;
    return [code, Blockly.Python.ORDER_ATOMIC];
};
Blockly.Python['robotshield_analog_pin'] = function(block) { // digital pin number
    var pin = block.getFieldValue('pin');

    var code = '';
    code += pin;
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['robotshield_device_pin'] = function(
    block) { // digital pin number
    var pin = block.getFieldValue('pin');

    var code = '';
    code += pin;
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['robotshield_pwm_pin'] = function(block) { // digital pin number
    var pin = block.getFieldValue('pin');

    var code = '';
    code += pin;
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['robotshield_ultarsonic_distance'] = function(block) {
    var Triq = Blockly.Python.valueToCode(block, 'Triq', Blockly.Python.ORDER_ATOMIC);
    var Echo = Blockly.Python.valueToCode(block, 'Echo', Blockly.Python.ORDER_ATOMIC);

    Blockly.Python.definitions_['import_robotshield'] = 'import robotshield';

    var code = ' ';
    code = 'robotshield.get_distance(' + Triq + ', ' + Echo + ')';
    return [code, Blockly.Python.ORDER_ATOMIC];
};


Blockly.Python['robotshield_motor'] = function(block) {
    // var motor = Blockly.Python.valueToCode(block, 'motor', Blockly.Python.ORDER_ATOMIC);

    var motor = block.getFieldValue('motor');
    var speed = Blockly.Python.valueToCode(block, 'speed', Blockly.Python.ORDER_ATOMIC);

    Blockly.Python.definitions_['import_robotshield'] = 'import robotshield';

    var code = ' ';
    code = 'robotshield.set_motor_speed(' + motor + ', ' + speed + ')\n';
    return code;
};

Blockly.Python['robotshield_motor_direction_calibration'] = function(block) {
    var motor = block.getFieldValue('motor');
    var value = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_ATOMIC);

    Blockly.Python.definitions_['import_robotshield'] = 'import robotshield';

    var code = ' ';
    code = 'motor_direction_calibration(' + motor + ', ' + value + ')\n';
    return code;
};


Blockly.Python['robotshield_motor_speed_calibration'] = function(block) {
    var value = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_ATOMIC);

    Blockly.Python.definitions_['import_robotshield'] = 'import robotshield';

    var code = ' ';
    code = 'Motor_speed_calibration(' + value + ')';
    return [code, Blockly.Python.ORDER_ATOMIC];
};