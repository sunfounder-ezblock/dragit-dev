/*
  to do:
  time:


 */
'use strict';
goog.provide('Blockly.Blocks.time');  // Deprecated
goog.provide('Blockly.Constants.TIME');

goog.require('Blockly.Blocks');
goog.require('Blockly.Msg');

Blockly.Constants.TIME.HUE = 292;
Blockly.Blocks.time.HUE = Blockly.Constants.TIME.HUE;

//#################################################
// time - time related functions
//#################################################
// ---- time constants list ---- //

// ---- time constants blocks ---- //

// ---- time functions blocks ---- //
Blockly.Blocks['time_localtime'] = {
  init: function () {
    this.appendValueInput("secs")
      .appendField(Blockly.Msg.TIME_LOCALTIME_TITLE1);
    this.appendDummyInput()
      .appendField(Blockly.Msg.TIME_LOCALTIME_TITLE2);
    this.setColour(Blockly.Constants.TIME.HUE);
    this.setOutput(true, null);
    this.setTooltip(Blockly.Msg.TIME_LOCALTIME_TOOLTIP);
    this.setHelpUrl('');
  }
};

Blockly.Blocks['time_mktime'] = {
  init: function () {
    this.appendValueInput("localtime")
      .appendField(Blockly.Msg.TIME_MKTIME_TITLE1);
    this.appendDummyInput()
      .appendField(Blockly.Msg.TIME_MKTIME_TITLE2);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(Blockly.Constants.TIME.HUE);
    this.setTooltip(Blockly.Msg.TIME_MKTIME_TOOLTIP);
    this.setHelpUrl('');
  }
};

Blockly.Blocks['time_sleep'] = {
  init: function () {
    this.appendValueInput("delay_secs")
      .appendField(Blockly.Msg.TIME_SLEEP_TITLE1);
    this.appendDummyInput()
      .appendField(Blockly.Msg.TIME_SLEEP_TITLE2);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Constants.TIME.HUE);
    this.setTooltip(Blockly.Msg.TIME_SLEEP_TOOLTIP);
    this.setHelpUrl('');
  }
}

Blockly.Blocks['time_sleep_ms'] = {
  init: function () {
    this.appendValueInput("delay_secs")
      .appendField(Blockly.Msg.TIME_SLEEP_MS_TITLE1);
    this.appendDummyInput()
      .appendField(Blockly.Msg.TIME_SLEEP_MS_TITLE2);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Constants.TIME.HUE);
    this.setTooltip(Blockly.Msg.TIME_SLEEP_MS_TOOLTIP);
    this.setHelpUrl('');
  }
}

Blockly.Blocks['time_sleep_us'] = {
  init: function () {
    this.appendValueInput("delay_secs")
      .appendField(Blockly.Msg.TIME_SLEEP_US_TITLE1);
    this.appendDummyInput()
      .appendField(Blockly.Msg.TIME_SLEEP_US_TITLE2);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Constants.TIME.HUE);
    this.setTooltip(Blockly.Msg.TIME_SLEEP_US_TOOLTIP);
    this.setHelpUrl('');
  }
}

Blockly.Blocks['time_ticks_ms'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.TIME_TICKS_MS_TITLE);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(Blockly.Constants.TIME.HUE);
    this.setTooltip(Blockly.Msg.TIME_TICKS_MS_TOOLTIP);
    this.setHelpUrl('');
  }
}

Blockly.Blocks['time_ticks_us'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.TIME_TICKS_US_TITLE);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(Blockly.Constants.TIME.HUE);
    this.setTooltip(Blockly.Msg.TIME_TICKS_US_TOOLTIP);
    this.setHelpUrl('');
  }
}

Blockly.Blocks['time_ticks_cpu'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.TIME_TICKS_CPU_TITLE);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(Blockly.Constants.TIME.HUE);
    this.setTooltip(Blockly.Msg.TIME_TICKS_CPU_TOOLTIP);
    this.setHelpUrl('');
  }
}

Blockly.Blocks['time_ticks_add'] = {
  init: function () {
    this.appendValueInput("ticks")
      .appendField(Blockly.Msg.TIME_TICKS_ADD_TITLE1);
    this.appendValueInput("delta")
      .appendField(Blockly.Msg.TIME_TICKS_ADD_TITLE2);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(Blockly.Constants.TIME.HUE);
    this.setTooltip(Blockly.Msg.TIME_TICKS_ADD_TOOLTIP);
    this.setHelpUrl('');
  }
}

Blockly.Blocks['time_ticks_diff'] = {
  init: function () {
    this.appendValueInput("ticks1")
      .appendField(Blockly.Msg.TIME_TICKS_DIFF_TITLE1);
    this.appendValueInput("ticks2")
      .appendField(Blockly.Msg.TIME_TICKS_DIFF_TITLE2);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(Blockly.Constants.TIME.HUE);
    this.setTooltip(Blockly.Msg.TIME_TICKS_DIFF_TOOLTIP);
    this.setHelpUrl('');
  }
}

Blockly.Blocks['time_time'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.TIME_TIME_TITLE);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(Blockly.Constants.TIME.HUE);
    this.setTooltip(Blockly.Msg.TIME_TIME_TOOLTIP);
    this.setHelpUrl('');
  }
}