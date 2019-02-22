'use strict';
goog.provide('Blockly.Blocks.robotshield'); // Deprecated
goog.provide('Blockly.Constants.RobotShield');

goog.require('Blockly.Blocks');
goog.require('Blockly.Msg');

Blockly.Constants.RobotShield.RGB = '#3F34D1';
Blockly.Blocks.robotshield.RGB = Blockly.Constants.RobotShield.RGB;

Blockly.Constants.RobotShield.SENSOR_PINS = [
    ["Sensor 1", '"A4"'],
    ["Sensor 2", '"A5"'],
    ["Sensor 3", '"A6"'],
    ["Sensor 4", '"A7"'],
];

Blockly.Constants.RobotShield.SERVO_PINS = [
    ["Servo 1", '"D0"'],
    ["Servo 2", '"D1"'],
    ["Servo 3", '"D2"'],
    ["Servo 4", '"D3"'],
    ["Servo 5", '"D6"'],
    ["Servo 6", '"D7"'],
    ["Servo 7", '"D8"'],
    ["Servo 8", '"A9"'],
    ["Servo 9", '"A10"'],
    ["Servo 10", '"A11"'],
    ["Servo 11", '"A12"'],
    ["Servo 12", '"A13"'],
];

// ---- robotshield constants blocks ---- //
Blockly.Blocks['robotshield_sensor_pin'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(
                new Blockly.FieldDropdown(
                    Blockly.Constants.RobotShield.SENSOR_PINS),
                'pin');
        this.setInputsInline(true);
        this.setOutput(true, 'Analog_Pin');
        this.setColour(Blockly.Constants.RobotShield.RGB);
        this.setTooltip(Blockly.Msg.ROBOTSHIELD_SENSOR_PIN_TOOLTIP);
        this.setHelpUrl('');
    }
};

Blockly.Blocks['robotshield_servo_pin'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(
                new Blockly.FieldDropdown(
                    Blockly.Constants.RobotShield.SERVO_PINS),
                'pin');
        this.setInputsInline(true);
        this.setOutput(true, 'Servo_Pin');
        this.setColour(Blockly.Constants.RobotShield.RGB);
        this.setTooltip(Blockly.Msg.ROBOTSHIELD_SERVO_PIN_TOOLTIP);
        this.setHelpUrl('');
    }
};
