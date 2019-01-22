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
goog.provide('Blockly.Blocks.basic'); // Deprecated
goog.provide('Blockly.Constants.Basic');

goog.require('Blockly.Blocks');
goog.require('Blockly.Msg');

Blockly.Constants.Basic.RGB = '#FFCB4A';
Blockly.Blocks.basic.RGB = Blockly.Constants.Basic.RGB;

Blockly.Blocks['basic_start'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.BASIC_START_TITLE1);
        this.appendStatementInput('statement');
        this.setColour(Blockly.Constants.Basic.RGB);
        this.setTooltip(Blockly.Msg.BASIC_START_TOOLTIP);
        this.setHelpUrl('');
    }
};

Blockly.Blocks['basic_forever'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.BASIC_FOREVER_TITLE1);
        this.appendStatementInput('statement');
        this.setColour(Blockly.Constants.Basic.RGB);
        this.setTooltip(Blockly.Msg.BASIC_FOREVER_TOOLTIP);
        this.setHelpUrl('');
    }
};

Blockly.Blocks['basic_print'] = {
    init: function () {
        this.appendValueInput("msg")
            .setCheck(null)
            .appendField(Blockly.Msg.BASIC_PRINT_TITLE1);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Constants.Basic.RGB);
        this.setTooltip(Blockly.Msg.BASIC_PRINT_TOOLTIP);
        this.setHelpUrl('');
    }
};

Blockly.Blocks['basic_delay'] = {
    init: function () {
        this.appendValueInput("ms")
            .setCheck("Number")
            .appendField(Blockly.Msg.BASIC_DELAY_TITLE1);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Constants.Basic.RGB);
        this.setTooltip(Blockly.Msg.BASIC_DELAY_TOOLTIP);
        this.setHelpUrl('');
    }
};

// for other blocks

// Math:
Blockly.Blocks['math_hex'] = {
    init: function () {
        var hex_digit = "0123456789ABCDEF";
        var hex_field = new Blockly.FieldTextInput("", function (a) {
            a = a.toUpperCase();
            for (i in a) {
                if (hex_digit.indexOf(a[i]) == -1) {
                    return "0"
                }
            }
            return a
        })
        this.appendDummyInput()
            .appendField("0x")
            .appendField(hex_field, "NUM");
        this.setOutput(true, null);
        this.setColour(Blockly.Msg.MATH_HUE);
        this.setTooltip('Create hex value');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['math_mapping'] = {
    init: function () {
        this.appendValueInput("in_value")
            .setCheck(null)
            .appendField("map value")
            .setAlign(Blockly.ALIGN_RIGHT);
        this.appendValueInput("in_min")
            .setCheck(null)
            .appendField("from min")
            .setAlign(Blockly.ALIGN_RIGHT);
        this.appendValueInput("in_max")
            .setCheck(null)
            .appendField("from max")
            .setAlign(Blockly.ALIGN_RIGHT);
        this.appendValueInput("out_min")
            .setCheck(null)
            .appendField("to min")
            .setAlign(Blockly.ALIGN_RIGHT);
        this.appendValueInput("out_max")
            .setCheck(null)
            .appendField("to max")
            .setAlign(Blockly.ALIGN_RIGHT);
        this.setInputsInline(false);
        this.setOutput(true, null);
        this.setColour(Blockly.Msg.MATH_HUE);
        this.setTooltip('map value from [aaa, bbb] to [ccc, ddd]');
        this.setHelpUrl('');
    }
};