/*
 * var text_name = block.getFieldValue('NAME');
 * var number_name = block.getFieldValue('NAME');
 * var angle_name = block.getFieldValue('NAME');
 * var dropdown_name = block.getFieldValue('NAME');
 * var checkbox_name = block.getFieldValue('NAME') == 'TRUE';
 * var colour_name = block.getFieldValue('NAME');
 * var variable_name = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
 * var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
 * var statement_name = Blockly.JavaScript.statementToCode(block, 'statement');
 *
 * For statement: return code
 * For output: return [code, Blockly.JavaScript.ORDER_ATOMIC];
 */


'use strict';

goog.provide('Blockly.JavaScript.remote');

goog.require('Blockly.JavaScript');


Blockly.JavaScript['remote_start'] = function (block) {
  var statement = Blockly.JavaScript.statementToCode(block, 'statement');

  Blockly.JavaScript.definitions_['import_remote'] = 'from ' + device.id + ' import BLE\n__BLE_OBJECT__ = BLE()\n__BLE_REMOTE_VALUE__ = {}';

  var code = '';
  code += "def start_ble():\n"
  code += "  global __BLE_REMOTE_VALUE__\n"
  code += "  _ = __BLE_OBJECT__.read(60)\n";
  code += "  if _:\n";
  code += "    _ = _.decode('utf-8')\n";
  code += "    __DATA_TYPE__, _, __STATUS__ = __BLE_OBJECT__.verify(_)\n";
  code += "    if __STATUS__ and __DATA_TYPE__ == 'REMOTE':\n";
  code += '      _ = _.split("#")\n';
  code += "      __BUILDIN_DEVICE__ = _[0]\n";
  code += "      __BUILDIN_ID__ = _[1]\n";
  code += "      __BUILDIN_NAME__ = _[2]\n";
  code += "      __BUILDIN_VALUE__ = int(_[3])\n";
  code += "    __BLE_REMOTE_VALUE__[__BUILDIN_DEVICE__] = {__BUILDIN_ID__: {__BUILDIN_NAME__: __BUILDIN_VALUE__}}\n";
  code += statement;
  code += "start_ble()\n";

  return code;
};


Blockly.JavaScript['remote_joystick_get_value'] = function (block) {
  var id = block.getFieldValue('id');
  var coord = block.getFieldValue('coord');

  var code = '';
  code += '__BLE_REMOTE_VALUE__.get("JOYSTICK", {}).get("' + id + '", {}).get("' + coord + '", 0)';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['remote_slider_get_value'] = function (block) {
  var id = block.getFieldValue('id');

  var code = '';
  code += '__BLE_REMOTE_VALUE__.get("SLIDER", {}).get("' + id + '", {}).get("VALUE", 0)';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['remote_dpad_get_value'] = function (block) {//digital pin number
  var id = block.getFieldValue('id');
  var value = block.getFieldValue('direction');

  var code = '';
  code += '__BLE_REMOTE_VALUE__.get("DPAD", {}).get("' + id + '", {}).get("' + value + '", 0)';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};



Blockly.JavaScript['remote_button_get_value'] = function (block) {//digital pin number
  var id = block.getFieldValue('id');

  var code = '';
  code += '__BLE_REMOTE_VALUE__.get("BUTTON", {}).get("' + id + '", {}).get("VALUE", 0)';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};


