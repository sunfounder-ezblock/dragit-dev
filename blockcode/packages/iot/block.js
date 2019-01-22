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
goog.provide('Blockly.Blocks.iot');
goog.provide('Blockly.Constants.IOT');

goog.require('Blockly.Blocks');
goog.require('Blockly.Msg');

Blockly.Constants.IOT.RGB = '#58ce6a';
Blockly.Blocks.iot.RGB = Blockly.Constants.IOT.RGB;


Blockly.Constants.IOT.ActuatorsID = [
    ["Temperature", "0"],
    ["Actuators", "1"],
    ["Default", "2"],
];
Blockly.Constants.IOT.SensorsID = [
    ["Button", "0"],
    ["Switch", "1"],
    ["Slider", "2"],
    ["Default", "3"],
];





//set modules
Blockly.Blocks['iot_get_value'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(Blockly.Msg.IOT_GET_VALUE_TITLE1)
            .appendField(new Blockly.FieldDropdown(Blockly.Constants.IOT.ActuatorsID), "sensorname")
            .appendField(Blockly.Msg.IOT_GET_VALUE_TITLE2);
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour(Blockly.Constants.IOT.RGB);
        this.setTooltip(Blockly.Msg.IOT_GET_VALUE_TOOLIP);
        this.setHelpUrl('');
    }
};

Blockly.Blocks['iot_post_value'] = {
    init: function() {
        this.appendValueInput("value")
            .setCheck(null)
            .appendField(Blockly.Msg.IOT_POST_VALUE_TITLE)
            .appendField(new Blockly.FieldDropdown(Blockly.Constants.IOT.SensorsID), "sensorname");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Constants.IOT.RGB);
        this.setTooltip(Blockly.Msg.IOT_POST_VALUE_TOOLIP);
        this.setHelpUrl('');
    }
};