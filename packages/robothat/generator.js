'use strict';

goog.provide('Blockly.Python.robothat');

goog.require('Blockly.Python');


Blockly.Python['robothat_digital_pin'] = function(block) { // digital pin number
    var pin = block.getFieldValue('pin');

    var code = '';
    code += pin;
    return [code, Blockly.Python.ORDER_ATOMIC];
};
Blockly.Python['robothat_analog_pin'] = function(block) { // digital pin number
    var pin = block.getFieldValue('pin');

    var code = '';
    code += pin;
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['robothat_device_pin'] = function(
    block) { // digital pin number
    var pin = block.getFieldValue('pin');

    var code = '';
    code += pin;
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['robothat_pwm_pin'] = function(block) { // digital pin number
    var pin = block.getFieldValue('pin');

    var code = '';
    code += pin;
    return [code, Blockly.Python.ORDER_ATOMIC];
};


// Blockly.Python['robothat_line'] = function(block) {
//     var chn = block.getFieldValue('line_follower');
// Blockly.Python.definitions_['import_raspberrypi_pin'] = 'from raspberrypi import Pin';

// if (chn = 1) {
//     chn = "'A0'"
// }
//     var code = '';
//     code += chn;
//     code = 'get_line_value(' + chn + ')\n';
//     return [code, Blockly.Python.ORDER_ATOMIC];
// };

// Blockly.Python['robothat_line_follower'] = function(block) {
//     var chn = Blockly.Python.valueToCode(block, 'line', Blockly.Python.ORDER_ATOMIC);

//     Blockly.Python.definitions_['import_robothat'] = 'import robothat';

//     var code = ' ';
//     code = 'get_line_value(' + chn + ')\n';
//     return code;
// };

// Blockly.Python['robothat_line_follower'] = function(block) {
//     var chn = Blockly.Python.valueToCode(block, 'line', Blockly.Python.ORDER_ATOMIC);
//     Blockly.Python.definitions_['import_robothat'] = 'import robothat';

//     var code = ' ';
//     code = 'robothat.get_line_value(' + chn + ')';
//     return [code, Blockly.Python.ORDER_ATOMIC];
// };

Blockly.Python['robothat_ultarsonic_distance'] = function(block) {
    var Triq = Blockly.Python.valueToCode(block, 'Triq', Blockly.Python.ORDER_ATOMIC);
    var Echo = Blockly.Python.valueToCode(block, 'Echo', Blockly.Python.ORDER_ATOMIC);

    Blockly.Python.definitions_['import_robothat'] = 'import robothat';

    var code = ' ';
    code = 'robothat.get_distance(' + Triq + ', ' + Echo + ')';
    return [code, Blockly.Python.ORDER_ATOMIC];
};


Blockly.Python['robothat_motor'] = function(block) {
    // var motor = Blockly.Python.valueToCode(block, 'motor', Blockly.Python.ORDER_ATOMIC);

    var motor = block.getFieldValue('motor');
    var speed = Blockly.Python.valueToCode(block, 'speed', Blockly.Python.ORDER_ATOMIC);

    Blockly.Python.definitions_['import_robothat'] = 'import robothat';

    var code = ' ';
    code = 'robothat.set_motor_speed(' + motor + ', ' + speed + ')\n';
    return code;
};

Blockly.Python['robothat_motor_direction_calibration'] = function(block) {
    var motor = block.getFieldValue('motor');
    var value = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_ATOMIC);

    Blockly.Python.definitions_['import_robothat'] = 'import robothat';

    var code = ' ';
    code = 'motor_direction_calibration(' + motor + ', ' + value + ')\n';
    return code;
};


Blockly.Python['robothat_motor_speed_calibration'] = function(block) {
    var value = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_ATOMIC);

    Blockly.Python.definitions_['import_robothat'] = 'import robothat';

    var code = ' ';
    code = 'Motor_speed_calibration(' + value + ')';
    return [code, Blockly.Python.ORDER_ATOMIC];
};