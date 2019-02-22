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
  this.setColour(Blockly.Constants.MODULE.HUE);
  this.setTooltip(Blockly.Msg.MODULE_BLOCKNAME_TOOLTIP);
  this.setHelpUrl('');
 */

'use strict';
goog.provide('Blockly.Blocks.sloth');  // Deprecated
goog.provide('Blockly.Constants.Sloth');

goog.require('Blockly.Blocks');
goog.require('Blockly.Msg');

Blockly.Constants.Sloth.HUE = 50;
Blockly.Blocks.sloth.HUE = Blockly.Constants.Sloth.HUE;


Blockly.Constants.Sloth.ACTIONS = [
    // [Blockly.Msg.SLOTH_WALK_FORWARD_TITLE1, '"forward"'],
    // [Blockly.Msg.SLOTH_WALK_BACKWARD_TITLE1, '"backward"'],
    // [Blockly.Msg.SLOTH_TURN_LEFT_TITLE1, '"turn left"'],
    // [Blockly.Msg.SLOTH_TURN_RIGHT_TITLE1, '"turn right"'],
    ["forward", '"forward"'],
    ["backward", '"backward"'],
    ["turn left", '"turn left"'],
    ["turn right", '"turn right"'],
  ];

  Blockly.Blocks['sloth_do_action'] = {
    init: function() {
      this.appendValueInput('step')
          .appendField(new Blockly.FieldDropdown(Blockly.Constants.Sloth.ACTIONS), "action");
      this.appendValueInput('speed')
          .appendField(Blockly.Msg.SLOTH_WALK_FORWARD_TITLE2);
      this.appendDummyInput()
         // .appendField(new Blockly.FieldNumber(0, 0, 100), "NAME")
          .appendField(Blockly.Msg.SLOTH_WALK_FORWARD_TITLE3);
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(Blockly.Constants.Sloth.HUE);
      this.setTooltip(Blockly.Msg.SLOTH_WALK_FOEWARD_TOOLTIP);
      this.setHelpUrl('');
    }
  };
  Blockly.Blocks['sloth_set_offset'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(Blockly.Msg.SLOTH_SET_OFFSET_TITLE);
      this.appendValueInput('right_leg_angle')
          .appendField(Blockly.Msg.SLOTH_SET_OFFSET_TITLE1);
      this.appendValueInput('left_leg_angle')
          .appendField(Blockly.Msg.SLOTH_SET_OFFSET_TITLE2);
      this.appendValueInput('right_foot_angle')
          .appendField(Blockly.Msg.SLOTH_SET_OFFSET_TITLE3);
      this.appendValueInput('left_foot_angle')
          .appendField(Blockly.Msg.SLOTH_SET_OFFSET_TITLE4);
      
      this.setInputsInline(false);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(Blockly.Constants.Sloth.HUE);
      this.setTooltip(Blockly.Msg.SLOTH_WALK_BACKWARD_TITLE1);
      this.setHelpUrl('');
    }
  };

