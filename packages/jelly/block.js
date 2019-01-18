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

goog.provide('Blockly.Blocks.jelly'); // Deprecated
goog.provide('Blockly.Constants.Jelly');

goog.require('Blockly.Blocks');
goog.require('Blockly.Msg');

Blockly.Constants.Jelly.RGB = '#58ce6a';
Blockly.Blocks.jelly.RGB = Blockly.Constants.Jelly.RGB;

Blockly.Constants.Jelly.Note = [
    ["Low C", "LC"],
    ["Low C#", "LC#"],
    ["Low D", "LD"],
    ["Low D#", "LD#"],
    ["Low E", "LE"],
    ["Low E#", "LE#"],
    ["Low F", "LF"],
    ["Low G", "LG"],
    ["Low G#", "LG#"],
    ["Low A", "LA"],
    ["Low A#", "LA#"],
    ["Low B", "LB"],

    ["Middle C", "MC"],
    ["Middle C#", "MC#"],
    ["Middle D", "MD"],
    ["Middle D#", "MD#"],
    ["Middle E", "ME"],
    ["Middle E#", "ME#"],
    ["Middle F", "MF"],
    ["Middle G", "MG"],
    ["Middle G#", "MG#"],
    ["Middle A", "MA"],
    ["Middle A#", "MA#"],
    ["Middle B", "MB"],

    ["High C", "HC"],
    ["High C#", "HC#"],
    ["High D", "HD"],
    ["High D#", "HD#"],
    ["High E", "HE"],
    ["High E#", "HE#"],
    ["High F", "HF"],
    ["High G", "HG"],
    ["High G#", "HG#"],
    ["High A", "HA"],
    ["High A#", "HA#"],
    ["High B", "HB"],
]

Blockly.Blocks["jelly_note"] = {
    init: function init() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown(Blockly.Constants.Jelly.Note), "NAME");
        this.setOutput(true, "Jelly_Note");
        this.setColour(Blockly.Constants.Jelly.RGB);
        this.setTooltip(Blockly.Msg['JELLY_NOTE_TOOLTIP']);
        this.setHelpUrl('');
    }
};

Blockly.Blocks.jelly_set_value = function(module, check) {
    if (check === undefined)
        check = null;

    return {
        init: function init() {
            this.appendValueInput("port")
                .setCheck('Jelly_Output_Port')
                .appendField(Blockly.Msg['JELLY_' + module + '_TITLE1']);
            this.appendValueInput("value")
                .setCheck(check)
                .appendField(Blockly.Msg['JELLY_' + module + '_TITLE2']);
            this.setInputsInline(true);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(Blockly.Constants.Jelly.RGB);
            this.setTooltip(Blockly.Msg['JELLY_' + module + '_TOOLTIP']);
            this.setHelpUrl('');
        }
    };
};

Blockly.Blocks.jelly_get_value = function(module) {
    return {
        init: function init() {
            this.appendValueInput("port")
                .setCheck('Jelly_Input_Port')
                .appendField(Blockly.Msg['JELLY_' + module + '_TITLE1']);
            this.appendDummyInput()
                .appendField(Blockly.Msg['JELLY_' + module + '_TITLE2']);
            this.setInputsInline(true);
            this.setOutput(true, null);
            this.setColour(Blockly.Constants.Jelly.RGB);
            this.setTooltip(Blockly.Msg['JELLY_' + module + '_TOOLTIP']);
            this.setHelpUrl('');
        }
    };
};

Blockly.Blocks['jelly_distance_sensor_get_value'] = Blockly.Blocks.jelly_get_value('DISTANCE_SENSOR');
Blockly.Blocks['jelly_sound_sensor_get_value'] = Blockly.Blocks.jelly_get_value('SOUND_SENSOR');
Blockly.Blocks['jelly_light_sensor_get_value'] = Blockly.Blocks.jelly_get_value('LIGHT_SENSOR');
Blockly.Blocks['jelly_slider_get_value'] = Blockly.Blocks.jelly_get_value('SLIDER');
Blockly.Blocks['jelly_button_get_value'] = Blockly.Blocks.jelly_get_value('BUTTON');

Blockly.Blocks['jelly_led_set_value'] = Blockly.Blocks.jelly_set_value('LED');
Blockly.Blocks['jelly_led_bar_set_value'] = Blockly.Blocks.jelly_set_value('LED_BAR');
Blockly.Blocks['jelly_motor_set_value'] = Blockly.Blocks.jelly_set_value('MOTOR');
Blockly.Blocks['jelly_servo_set_value'] = Blockly.Blocks.jelly_set_value('SERVO');
Blockly.Blocks['jelly_rgb_set_value'] = Blockly.Blocks.jelly_set_value('RGB', "colour");
Blockly.Blocks['jelly_buzzer_set_value'] = Blockly.Blocks.jelly_set_value('BUZZER', "Jelly_Note");