'use strict';

goog.provide('Blockly.Python.jellypi');

goog.require('Blockly.Python');


Blockly.Python['jellypi_port'] = function(block) { //digital pin number
    var port = block.getFieldValue('port');

    var code = '';
    code += port;
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['jellypi_output_port'] = Blockly.Python['jellypi_port'];
Blockly.Python['jellypi_input_port'] = Blockly.Python['jellypi_port'];
Blockly.Python['jellypi_i2c_port'] = Blockly.Python['jellypi_port'];