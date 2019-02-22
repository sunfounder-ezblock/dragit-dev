'use strict';

goog.provide('Blockly.JavaScript.robothat');

goog.require('Blockly.JavaScript');


// Blockly.JavaScript['robothat_line_follower'] = function(block) {
//     var chn = block.getFieldValue('line');

//     var code = ' ';
//     code += 'get_line_value(' + chn + ')\n';

//     return code;
// };

// Blockly.JavaScript['robothat_ultarsonic_distance'] = function(block) {

//     var code = ' ';
//     code = 'get_distance()\n';

//     return code;
// };

Blockly.JavaScript['robothat_motor'] = function(block) {
    var motor = Blockly.Python.valueToCode(block, 'motor', Blockly.JavaScript.ORDER_ATOMIC);
    var value = Blockly.Python.valueToCode(block, 'value', Blockly.JavaScript.ORDER_ATOMIC);

    var code = ' ';
    code = 'set_motor_speed(' + motor + ', ' + value + ')\n';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};