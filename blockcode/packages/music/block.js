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
goog.provide('Blockly.Blocks.music'); // Deprecated
goog.provide('Blockly.Constants.Music');

goog.require('Blockly.Blocks');
goog.require('Blockly.Msg');

Blockly.Constants.Music.RGB = '#A94AEC';
Blockly.Blocks.music.RGB = Blockly.Constants.Music.RGB;

Blockly.Constants.Music.NOTES = [
    ["Low C", "261.63"],
    ["Low C#", "277.18"],
    ["Low D", "293.66"],
    ["Low D#", "311.13"],
    ["Low E", "329.63"],
    ["Low F", "349.23"],
    ["Low F#", "369.99"],
    ["Low G", "392.00"],
    ["Low G#", "415.30"],
    ["Low A", "440.00"],
    ["Low A#", "466.16"],
    ["Low B", "493.88"],
    ["Middle C", "523.25"],
    ["Middle C#", "554.37"],
    ["Middle D", "587.33"],
    ["Middle D#", "622.25"],
    ["Middle E", "659.25"],
    ["Middle F", "698.46"],
    ["Middle F#", "739.99"],
    ["Middle G", "783.99"],
    ["Middle G#", "830.61"],
    ["Middle A", "880.00"],
    ["Middle A#", "932.33"],
    ["Middle B", "987.77"],
    ["High C", "1046.50"],
    ["High C#", "1108.73"],
    ["High D", "1174.66"],
    ["High D#", "1244.51"],
    ["High E", "1318.51"],
    ["High F", "1396.91"],
    ["High F#", "1479.98"],
    ["High G", "1567.98"],
    ["High G#", "1661.22"],
    ["High A", "1760.00"],
    ["High A#", "1864.66"],
    ["High B", "1975.53"],
];

Blockly.Constants.Music.BEATS = [
    ["1", "1"],
    ["1/2", "0.5"],
    ["1/4", "0.25"],
    ["1/8", "0.125"],
    ["1/16", "0.0625"],
    ["2", "2"],
    ["4", "4"],
];

Blockly.Blocks['music_notes'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown(Blockly.Constants.Music.NOTES), "note");
        this.setColour(Blockly.Constants.Music.RGB);
        this.setOutput(true, "Number");
        this.setTooltip(Blockly.Msg.MUSIC_NOTES_TOOLTIP);
        this.setHelpUrl('');
    }
};

Blockly.Blocks['music_beat'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown(Blockly.Constants.Music.BEATS), "beat")
            .appendField(Blockly.Msg.MUSIC_BEAT_TITLE1);
        this.setColour(Blockly.Constants.Music.RGB);
        this.setOutput(true, "Number");
        this.setTooltip(Blockly.Msg.MUSIC_BEAT_TOOLTIP);
        this.setHelpUrl('');
    }
};

Blockly.Blocks['music_set_tempo'] = {
    init: function () {
        this.appendValueInput("tempo")
            .setCheck("Number")
            .appendField(Blockly.Msg.MUSIC_SET_TEMPO_TITLE1);
        this.appendDummyInput()
            .appendField(Blockly.Msg.MUSIC_SET_TEMPO_TITLE2);
        this.setColour(Blockly.Constants.Music.RGB);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.Msg.MUSIC_SET_TEMPO_TOOLTIP);
        this.setHelpUrl('');
    }
};