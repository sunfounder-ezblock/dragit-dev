'use strict';
goog.provide('Blockly.Blocks.jellypi'); // Deprecated
goog.provide('Blockly.Constants.JellyPi');

goog.require('Blockly.Blocks');
goog.require('Blockly.Msg');

Blockly.Constants.JellyPi.RGB = '#CF5889';
Blockly.Blocks.jellypi.RGB = Blockly.Constants.JellyPi.RGB;


Blockly.Constants.JellyPi.INPUT_PORT = [
    ["IN0", '"IN0"'],
    ["IN1", '"IN1"'],
    ["IN2", '"IN2"'],
    ["IN3", '"IN3"'],
];

Blockly.Constants.JellyPi.OUTPUT_PORT = [
    ["OUT0", '"OUT0"'],
    ["OUT1", '"OUT1"'],
    ["OUT2", '"OUT2"'],
    ["OUT3", '"OUT3"'],
];

Blockly.Constants.JellyPi.I2C_PORT = [
    ["I2C0", '"I2C"'],
    ["I2C1", '"I2C"'],
];
// ---- jellypi constants blocks ---- //
Blockly.Blocks['jellypi_input_port'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown(Blockly.Constants.JellyPi.INPUT_PORT), "port");
        this.setInputsInline(true);
        this.setOutput(true, "Jelly_Input_Port");
        this.setColour(Blockly.Constants.JellyPi.RGB);
        this.setTooltip(Blockly.Msg.JELLYPI_INPUT_PORT_TOOLTIP);
        this.setHelpUrl('');
    }
};

Blockly.Blocks['jellypi_output_port'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown(Blockly.Constants.JellyPi.OUTPUT_PORT), "port");
        this.setInputsInline(true);
        this.setOutput(true, "Jelly_Output_Port");
        this.setColour(Blockly.Constants.JellyPi.RGB);
        this.setTooltip(Blockly.Msg.JELLYPI_OUTPUT_TOOLTIP);
        this.setHelpUrl('');
    }
};

Blockly.Blocks['jellypi_i2c_port'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown(Blockly.Constants.JellyPi.I2C_PORT), "port");
        this.setInputsInline(true);
        this.setOutput(true, "Jelly_I2C_Port");
        this.setColour(Blockly.Constants.JellyPi.RGB);
        this.setTooltip(Blockly.Msg.JELLYPI_I2C_PORT_TOOLTIP);
        this.setHelpUrl('');
    }
};