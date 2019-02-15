/*
  Input:
    .appendDummyInput
    .appendStatementInput
    .appendValueInput
 
  Field:
    .appendField(Blockly.Msg.MODULE_BLOCKNAME_TITLE1)
    .appendField(new Blockly.FieldTextInput("DEFAULT"), "NAME")
    .appendField(new Blockly.FieldNumber(DEFAULT, MIN, MAX), "NAME")
    .appendField(new Blockly.FieldAngle(90), "NAME")
    .appendField(new Blockly.FieldDropdown(Blockly.Constants.MODULE.XXX), "NAME")
    .appendField(new Blockly.FieldCheckbox("TRUE"), "NAME");
    .appendField(new Blockly.FieldColour("#ff0000"), "NAME");
    .appendField(new Blockly.FieldVariable("item"), "NAME");
    .appendField(new Blockly.FieldImage("https://www.gstatic.com/codesite/ph/images/star_on.gif", 15, 15, "*"));
 
  Type:
    .setCheck(null)
    .setCheck("Boolean")
    .setCheck("Number")
    .setCheck("String")
    .setCheck("Array")
    .setCheck("CUSTOM")
    .setCheck(["Boolean", "Number"])
 
  this.setInputsInline(false);
  this.setOutput(true, TYPE);
  this.setPreviousStatement(true, TYPE);
  this.setNextStatement(true, TYPE);
  this.setColour(Blockly.Constants.MODULE.RGB);
  this.setTooltip(Blockly.Msg.MODULE_BLOCKNAME_TOOLTIP);
  this.setHelpUrl('');
 */

'use strict';

goog.provide('Blockly.Blocks.modules'); // Deprecated
goog.provide('Blockly.Constants.Modules');

goog.require('Blockly.Blocks');
goog.require('Blockly.Msg');

Blockly.Constants.Modules.RGB = '#58ce6a';
Blockly.Blocks.modules.RGB = Blockly.Constants.Modules.RGB;


Blockly.Constants.Modules.joystick = [
    ['Y', '"0"'],
    ['X', '"1"'],
    ['Btn', '"2"'],
];


Blockly.Blocks.modules_set_value = function(module) {
    return {
        init: function init() {
            this.appendValueInput("SIG")
                .setCheck(['Digital_Pin', 'PWM_Pin'])
                .appendField(Blockly.Msg['MODULES_' + module + '_SET_VALUE_TITLE1']);
            this.appendValueInput("value").setCheck(null).appendField(Blockly.Msg['MODULES_' + module + '_SET_VALUE_TITLE2']);
            this.setInputsInline(true);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(Blockly.Constants.Modules.RGB);
            this.setTooltip(Blockly.Msg['MODULES_' + module + '_SET_VALUE_TOOLTIP']);
            this.setHelpUrl('');
        }
    };
};

Blockly.Blocks.modules_get_value = function(_type, module) {
    return {
        init: function init() {
            this.appendValueInput("SIG")
                .setCheck(_type + '_Pin')
                .appendField(Blockly.Msg['MODULES_' + module + '_GET_VALUE_TITLE1']);
            this.appendDummyInput()
                .appendField(Blockly.Msg['MODULES_' + module + '_GET_VALUE_TITLE2']);
            this.setInputsInline(true);
            this.setOutput(true, null);
            this.setColour(Blockly.Constants.Modules.RGB);
            this.setTooltip(Blockly.Msg['MODULES_' + module + '_GET_VALUE_TOOLTIP']);
            this.setHelpUrl('');
        }
    };
};

Blockly.Blocks.modules_digital_set_value = function(module) {
    return Blockly.Blocks.modules_set_value(module);
};

Blockly.Blocks.modules_pwm_set_value = function(module) {
    return Blockly.Blocks.modules_set_value(module);
};

Blockly.Blocks.modules_digital_get_value = function(module) {
    return Blockly.Blocks.modules_get_value('Digital', module);
};

Blockly.Blocks.modules_analog_get_value = function(module) {
    return Blockly.Blocks.modules_get_value('Analog', module);
};


// Blockly.Blocks['modules_led_module_set_value'] = Blockly.Blocks.modules_digital_set_value('LED_MODULE');

Blockly.Blocks['modules_ledmodule_set_value'] = {
    init: function init() {
        this.appendValueInput("SIG")
            .setCheck(["PWM_Pin", "Digital_Pin"])
            .appendField(Blockly.Msg.MODULES_LEDMODULE_SET_VALUE_TITLE1);
        this.appendValueInput("value")
            .setCheck("Number")
            .appendField(Blockly.Msg.MODULES_LEDMODULE_SET_VALUE_TITLE2);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Constants.Modules.RGB);
        this.setTooltip(Blockly.Msg.MODULES_LEDMODULE_SET_VALUE_TOOLTIP);
        this.setHelpUrl('');
    }
};

Blockly.Blocks['modules_rgbled_set_value'] = {
    init: function() {
        this.appendValueInput("R")
            .setCheck(["PWM_Pin", "Digital_Pin"])
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.MODULES_RGBLED_SET_VALUE_TITLE1);
        this.appendValueInput("G")
            .setCheck(["PWM_Pin", "Digital_Pin"])
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.MODULES_RGBLED_SET_VALUE_TITLE2);
        this.appendValueInput("B")
            .setCheck(["PWM_Pin", "Digital_Pin"])
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.MODULES_RGBLED_SET_VALUE_TITLE3);
        this.appendValueInput("color")
            .setCheck(null)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.MODULES_RGBLED_SET_VALUE_TITLE4);
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Constants.Modules.RGB);
        this.setTooltip(Blockly.Msg.MODULES_RGBLED_SET_VALUE_TOOLTIP);
        this.setHelpUrl('');
    }
};

Blockly.Blocks['modules_button_get_value'] = Blockly.Blocks.modules_digital_get_value('BUTTON');

Blockly.Blocks['modules_tiltswitch_get_value'] = Blockly.Blocks.modules_digital_get_value('TILTSWITCH');

Blockly.Blocks['modules_vibrationswitch_get_value'] = Blockly.Blocks.modules_digital_get_value('VIBRATIONSWITCH');

Blockly.Blocks['modules_buzzer_set_value'] = {
    init: function init() {
        this.appendValueInput("SIG")
            .setAlign(Blockly.ALIGN_RIGHT)
            .setCheck("PWM_Pin")
            .appendField(Blockly.Msg.MODULES_BUZZER_SET_STATUS_TITLE1);
        this.appendValueInput("note")
            .setAlign(Blockly.ALIGN_RIGHT)
            .setCheck("Number")
            .appendField(Blockly.Msg.MODULES_BUZZER_SET_STATUS_TITLE2);
        this.appendValueInput("beat")
            .setAlign(Blockly.ALIGN_RIGHT)
            .setCheck("Number")
            .appendField(Blockly.Msg.MODULES_BUZZER_SET_STATUS_TITLE3);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Constants.Modules.RGB);
        this.setTooltip(Blockly.Msg.MODULES_BUZZER_SET_STATUS_TOOLTIP);
        this.setHelpUrl('');
    }
};

Blockly.Blocks['modules_joystick_get_value'] = {
    init: function init() {
        this.appendValueInput("X")
            .setAlign(Blockly.ALIGN_RIGHT)
            .setCheck("Analog_Pin")
            .appendField(Blockly.Msg.MODULES_JOYSTICK_GET_VALUE_TITLE1);
        this.appendValueInput("Y")
            .setAlign(Blockly.ALIGN_RIGHT)
            .setCheck("Analog_Pin")
            .appendField(Blockly.Msg.MODULES_JOYSTICK_GET_VALUE_TITLE2);
        this.appendValueInput("Btn")
            .setAlign(Blockly.ALIGN_RIGHT)
            .setCheck("Digital_Pin")
            .appendField(Blockly.Msg.MODULES_JOYSTICK_GET_VALUE_TITLE3);
        this.appendDummyInput()
            .appendField(Blockly.Msg.MODULES_JOYSTICK_GET_VALUE_TITLE4)
            .appendField(new Blockly.FieldDropdown(Blockly.Constants.Modules.joystick), 'joystick')
            .appendField(Blockly.Msg.MODULES_JOYSTICK_GET_VALUE_TITLE5);
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour(Blockly.Constants.Modules.RGB);
        this.setTooltip(Blockly.Msg.MODULES_JOYSTICK_GET_VALUE_TOOLTIP);
        this.setHelpUrl('');
    }
};

Blockly.Blocks['modules_joystick_get_status'] = {
    init: function init() {
        this.appendValueInput("X")
            .setAlign(Blockly.ALIGN_RIGHT)
            .setCheck("Analog_Pin")
            .appendField(Blockly.Msg.MODULES_JOYSTICK_GET_STATUS_TITLE1);
        this.appendValueInput("Y")
            .setAlign(Blockly.ALIGN_RIGHT)
            .setCheck("Analog_Pin")
            .appendField(Blockly.Msg.MODULES_JOYSTICK_GET_STATUS_TITLE2);
        this.appendValueInput("Btn")
            .setAlign(Blockly.ALIGN_RIGHT)
            .setCheck("Digital_Pin")
            .appendField(Blockly.Msg.MODULES_JOYSTICK_GET_STATUS_TITLE3);
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour(Blockly.Constants.Modules.RGB);
        this.setTooltip(Blockly.Msg.MODULES_JOYSTICK_GET_STATUS_TOOLTIP);
        this.setHelpUrl('');
    }
};

Blockly.Blocks['modules_potentiometer_get_value'] = Blockly.Blocks.modules_analog_get_value('POTENTIOMETER');

Blockly.Blocks['modules_soundsensor_get_value'] = Blockly.Blocks.modules_analog_get_value('SOUNDSENSOR');

Blockly.Blocks['modules_photoresistor_get_value'] = Blockly.Blocks.modules_analog_get_value('PHOTORESISTOR');

Blockly.Blocks['modules_touchswitch_get_value'] = Blockly.Blocks.modules_digital_get_value('TOUCHSWITCH');


Blockly.Blocks['modules_ultrasonic_get_value'] = {
    init: function init() {
        this.appendDummyInput().appendField(Blockly.Msg.MODULES_ULTRASONIC_GET_VALUE_TITLE1);
        this.appendValueInput("Trig")
            .setCheck("Digital_Pin")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.MODULES_ULTRASONIC_GET_VALUE_TITLE2);
        this.appendValueInput("Echo")
            .setCheck("Digital_Pin")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.MODULES_ULTRASONIC_GET_VALUE_TITLE3);
        this.setInputsInline(false);
        this.setOutput(true, null);
        this.setColour(Blockly.Constants.Modules.RGB);
        this.setTooltip(Blockly.Msg.MODULES_ULTRASONIC_VALUE_TOOLTIP);
        this.setHelpUrl('');
    }
};

Blockly.Blocks['modules_ds18b20_get_value'] = {
    init: function init() {
        this.appendValueInput("SIG")
            .setCheck("Digital_Pin")
            .appendField(Blockly.Msg.MODULES_DS18B20_GET_VALUE_TITLE1);
        this.appendDummyInput()
            .appendField(Blockly.Msg.MODULES_DS18B20_GET_VALUE_TITLE2);
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour(Blockly.Constants.Modules.RGB);
        this.setTooltip(Blockly.Msg.MODULES_DS18B20_GET_VALUE_TOOLTIP);
        this.setHelpUrl('');
    }
};

Blockly.Blocks['modules_servo_set_angle'] = {
    init: function init() {
        this.appendValueInput("SIG")
            .setCheck("PWM_Pin")
            .appendField(Blockly.Msg.MODULES_SERVO_SET_ANGLE_TITLE1);
        this.appendValueInput("angle")
            .setCheck(null)
            .appendField(Blockly.Msg.MODULES_SERVO_SET_ANGLE_TITLE2);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Constants.Modules.RGB);
        this.setTooltip(Blockly.Msg.MODULES_SERVO_SET_ANGLE_TOOLTIP);
        this.setHelpUrl('');
    }
};

Blockly.Blocks['modules_moisturesensor_get_value'] = {
    init: function init() {
        this.appendValueInput("SIG")
            .setCheck("Analog_Pin")
            .appendField(Blockly.Msg.MODULES_MOISTURESENSOR_GET_VALUE_TITLE1);
        this.appendDummyInput()
            .appendField(Blockly.Msg.MODULES_MOISTURESENSOR_GET_VALUE_TITLE2);
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour(Blockly.Constants.Modules.RGB);
        this.setTooltip(Blockly.Msg.MODULES_MOISTURESENSOR_GET_VALUE_TOOLTIP);
        this.setHelpUrl('');
    }
};

Blockly.Blocks['modules_adxl345_get_value'] = {
    init: function init() {
        this.appendDummyInput()
            .appendField(Blockly.Msg.MODULES_ADXL345_GET_VALUE_TITLE1);
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour(Blockly.Constants.Modules.RGB);
        this.setTooltip(Blockly.Msg.MODULES_ADXL345_GET_VALUE_TOOLTIP);
        this.setHelpUrl('');
    }
};

// Blockly.Blocks['modules_adxl345_get_value'] = {
//     init: function init() {
//         this.appendValueInput("pin")
//             .setCheck("Digital_Pin")
//             .appendField(Blockly.Msg.MODULES_ADXL345_GET_VALUE_TITLE1);
//         this.appendDummyInput()
//             .appendField(Blockly.Msg.MODULES_ADXL345_GET_VALUE_TITLE2);
//         this.setInputsInline(true);
//         this.setOutput(true, null);
//         this.setColour(Blockly.Constants.Modules.RGB);
//         this.setTooltip(Blockly.Msg.MODULES_ADXL345_GET_VALUE_TOOLTIP);
//         this.setHelpUrl('');
//     }
// };