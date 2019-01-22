/*
 * var text_name = block.getFieldValue('NAME');
 * var number_name = block.getFieldValue('NAME');
 * var angle_name = block.getFieldValue('NAME');
 * var dropdown_name = block.getFieldValue('NAME');
 * var checkbox_name = block.getFieldValue('NAME') == 'TRUE';
 * var colour_name = block.getFieldValue('NAME');
 * var variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
 * var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
 * var statement_name = Blockly.Python.statementToCode(block, 'statement');
 *
 * For statement: return code
 * For output: return [code, Blockly.Python.ORDER_ATOMIC];
 */


'use strict';

goog.provide('Blockly.Python.remote');

goog.require('Blockly.Python');


Blockly.Python['remote_read_from'] = function (block) {
  var statement = Blockly.Python.statementToCode(block, 'statement');

  Blockly.Python.definitions_['import_remote'] = 'from ' + device.series + ' import BLE\n__BLE_OBJECT__ = BLE()\n__BLE_REMOTE_VALUE__={}';

  var code = '';
  code += "def __READ_FROM_REMOTE__():\n";
  code += "  global __BLE_REMOTE_VALUE__\n";
  code += "  _ = __BLE_OBJECT__.read(60)\n";
  code += "  if _:\n";
  code += "    _ = _.decode('utf-8')\n";
  code += "    __DATA_TYPE__, _, __STATUS__ = __BLE_OBJECT__.verify(_)\n";
  code += "    if __STATUS__ and __DATA_TYPE__ == 'REMOTE':\n";
  code += '      _ = _.split("#")\n';
  code += "      __BUILDIN_DEVICE__ = _[0]\n";
  code += "      __BUILDIN_ID__ = _[1]\n";
  code += "      __BUILDIN_NAME__ = _[2]\n";
  code += "      __BUILDIN_VALUE__ = _[3]\n";
  code += "      __BLE_REMOTE_VALUE__[__BUILDIN_DEVICE__] = {__BUILDIN_ID__: {__BUILDIN_NAME__: __BUILDIN_VALUE__}}\n";
  code += "  def __GET_REMOTE_VALUE__(ctrl, id, name, raw=False):\n";
  code += "    result = __BLE_REMOTE_VALUE__.get(ctrl, {}).get(id, {}).get(name, 0)\n";
  code += "    if raw:\n";
  code += "      return result\n";
  code += "    else:\n";
  code += "      return int(result)\n";
  code += "  def __GET_JOYSTICK_VALUE__(id, name):\n";
  code += "    try:\n";
  code += "      coord = (__GET_REMOTE_VALUE__('JOYSTICK', id, 'VALUE', raw=True)).split('+')\n";
  code += "      if name == 'X':\n";
  code += "        return int(coord[0])\n";
  code += "      elif name == 'Y':\n";
  code += "        return int(coord[1])\n";
  code += "      else:\n";
  code += "        print('%s not found'%name, tag='[ERROR]')\n";
  code += "        return 0\n";
  code += "    except:\n";
  code += "      return 0\n";
  code += statement;
  code += "__READ_FROM_REMOTE__()\n";

  return code;
};

Blockly.Python['remote_joystick_get_value'] = function (block) {
  var id = block.getFieldValue('id');
  var coord = block.getFieldValue('coord');

  var code = '';
  code += '__GET_JOYSTICK_VALUE__("' + id + '", "' + coord + '")';

  return [code, Blockly.Python.ORDER_ATOMIC];
};

// Blockly.Python['remote_joystick_get_coord'] = function (block) {
//   var id = block.getFieldValue('id');

//   Blockly.Python.remote_def(block);

//   var code = '';
//   code += '__BLE_REMOTE_VALUE__["JOYSTICK"]["' + id + '"]["'+coord + '"]';
//   code += '__GET_REMOTE_VALUE__("JOYSTICK", "' + id + '", "VALUE").split("-")';
//   return [code, Blockly.Python.ORDER_ATOMIC];
// };

// Blockly.Python['remote_joystick_get_direction'] = function (block) {
//   var id = block.getFieldValue('id');
//   var dir = block.getFieldValue('dir');

//   Blockly.Python.remote_def(block);

//   var code = '';
//   code += '__GET_REMOTE_VALUE__("JOYSTICK", "' + id + '", "VALUE").split("-")';
//   return [code, Blockly.Python.ORDER_ATOMIC];
// };

Blockly.Python['remote_slider_get_value'] = function (block) {
  var id = block.getFieldValue('id');

  var code = '';
  code += '__GET_REMOTE_VALUE__("SLIDER", "' + id + '", "VALUE")';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['remote_dpad_get_value'] = function (block) {//digital pin number
  var id = block.getFieldValue('id');
  var value = block.getFieldValue('direction');

  var code = '';
  code += '__GET_REMOTE_VALUE__("DPAD", "' + id + '", "' + value + '")';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['remote_button_get_value'] = function (block) {//digital pin number
  var id = block.getFieldValue('id');

  var code = '';
  code += '__GET_REMOTE_VALUE__("BUTTON", "' + id + '", "VALUE")';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['remote_switch_get_value'] = function (block) {//digital pin number
  var id = block.getFieldValue('id');

  var code = '';
  code += '__GET_REMOTE_VALUE__("SWITCH", "' + id + '", "VALUE")';
  return [code, Blockly.Python.ORDER_ATOMIC];
};



