'use strict';
goog.provide('Blockly.Blocks.robotshield'); // Deprecated
goog.provide('Blockly.Constants.RobotShield');

goog.require('Blockly.Blocks');
goog.require('Blockly.Msg');

Blockly.Constants.RobotShield.RGB = '#3F34D1';
Blockly.Blocks.robotshield.RGB = Blockly.Constants.RobotShield.RGB;

Blockly.Constants.RobotShield.DIGITAL_PINS = [
    ["D0", '"D0"'],
    ["D1", '"D1"'],
    ["D2", '"D2"'],
    ["D3", '"D3"'],
];

Blockly.Constants.RobotShield.ANALOG_PINS = [
    ["A0", '"A0"'],
    ["A1", '"A1"'],
    ["A2", '"A2"'],
    ["A3", '"A3"'],
];

Blockly.Constants.RobotShield.DEVICE_PINS = [
    ["LED", '"LED"'],
    ["switch", '"SW"'],
];

Blockly.Constants.RobotShield.PWM_PINS = [
    ["P0", '"P0"'],
    ["P1", '"P1"'],
    ["P2", '"P2"'],
    ["P3", '"P3"'],
];

Blockly.Constants.RobotShield.Line_follower_channel = [
    ["U1", "'A0'"],
    ["U2", "'A1'"],
];

Blockly.Constants.RobotShield.motor_select = [
    ["Motor1", '1'],
    ["Motor2", '2'],
];



// ---- robotshield constants blocks ---- //
Blockly.Blocks['robotshield_digital_pin'] = {
    init: function() {
        this.appendDummyInput()
            // .appendField(Blockly.Msg.ROBOTSHIELD_DIGITAL_PIN_TITLE)
            .appendField(
                new Blockly.FieldDropdown(
                    Blockly.Constants.RobotShield.DIGITAL_PINS),
                'pin');
        this.setInputsInline(true);
        this.setOutput(true, 'Digital_Pin');
        this.setColour(Blockly.Constants.RobotShield.RGB);
        this.setTooltip(Blockly.Msg.ROBOTSHIELD_DIGITAL_PIN_TOOLTIP);
        this.setHelpUrl('');
    }
};

Blockly.Blocks['robotshield_analog_pin'] = {
    init: function() {
        this.appendDummyInput()
            // .appendField(Blockly.Msg.ROBOTSHIELD_ANALOG_PIN_TITLE)
            .appendField(
                new Blockly.FieldDropdown(
                    Blockly.Constants.RobotShield.ANALOG_PINS),
                'pin');
        this.setInputsInline(true);
        this.setOutput(true, 'Analog_Pin');
        this.setColour(Blockly.Constants.RobotShield.RGB);
        this.setTooltip(Blockly.Msg.ROBOTSHIELD_ANALOG_PIN_TOOLTIP);
        this.setHelpUrl('');
    }
};

Blockly.Blocks['robotshield_device_pin'] = {
    init: function() {
        this.appendDummyInput().appendField(
            new Blockly.FieldDropdown(Blockly.Constants.RobotShield.DEVICE_PINS), 'pin');
        this.setInputsInline(true);
        this.setOutput(true, 'Digital_Pin');
        this.setColour(Blockly.Constants.RobotShield.RGB);
        this.setTooltip(Blockly.Msg.ROBOTSHIELD_DEVICE_PIN_TOOLTIP);
        this.setHelpUrl('');
    }
};

Blockly.Blocks['robotshield_pwm_pin'] = {
    init: function() {
        this.appendDummyInput()
            // .appendField(Blockly.Msg.ROBOTSHIELD_PWM_PIN_TITLE)
            .appendField(
                new Blockly.FieldDropdown(Blockly.Constants.RobotShield.PWM_PINS),
                'pin');
        this.setInputsInline(true);
        this.setOutput(true, 'PWM_Pin');
        this.setColour(Blockly.Constants.RobotShield.RGB);
        this.setTooltip(Blockly.Msg.ROBOTSHIELD_PWM_PIN_TOOLTIP);
        this.setHelpUrl('');
    }
};

Blockly.Blocks['robotshield_motor_select'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown(Blockly.Constants.RobotShield.motor_select), "motor_select");
        this.setInputsInline(true);
        this.setOutput(true, "MOTOR");
        this.setColour(Blockly.Constants.RobotShield.RGB);
        this.setTooltip(Blockly.Msg.ROBOTSHIELD_MOTOR_SELECT_TOOLTIP);
        this.setHelpUrl('');
    }
};

Blockly.Blocks['robotshield_ultarsonic_distance'] = {
    init: function() {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.ROBOTSHIELD_ULTARSONIC_DISTANCE_TITLE1);
        this.appendValueInput("Triq")
            .setAlign(Blockly.ALIGN_RIGHT)
            .setCheck(null)
            .appendField(Blockly.Msg.ROBOTSHIELD_ULTARSONIC_DISTANCE_TITLE2);
        this.appendValueInput("Echo")
            .setAlign(Blockly.ALIGN_RIGHT)
            .setCheck(null)
            .appendField(Blockly.Msg.ROBOTSHIELD_ULTARSONIC_DISTANCE_TITLE3);
        this.setInputsInline(false);
        this.setOutput(true, "Number");
        this.setColour(Blockly.Constants.RobotShield.RGB);
        this.setTooltip(Blockly.Msg.ROBOTSHIELD_ULTARSONIC_TOOLTIP);
        this.setHelpUrl('');
    }
};
