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
 * For output: return [code, Blockly.Python.ORDER_NONE];
 */


'use strict';

goog.provide('Blockly.Python.sloth');

goog.require('Blockly.Python');



Blockly.Python['sloth_do_action'] = function(block) {//digital pin number
  var action = block.getFieldValue('action');
  var step = Blockly.Python.valueToCode(block, 'step', Blockly.Python.ORDER_ATOMIC);
  var speed = Blockly.Python.valueToCode(block, 'speed', Blockly.Python.ORDER_ATOMIC);

  Blockly.Python.definitions_['import_sloth'] = 'from sloth import Sloth\n__SLOTH__ = Sloth([1,2,3,4])';

  var code = '';
  code += '__SLOTH__.do_action('+ action +', '+ step +', '+ speed +')\n'
  return code;
};

Blockly.Python['sloth_set_offset'] = function(block) {//digital pin number
  var angle1 = Blockly.Python.valueToCode(block, 'right_leg_angle', Blockly.Python.ORDER_ATOMIC);
  var angle2 = Blockly.Python.valueToCode(block, 'left_leg_angle', Blockly.Python.ORDER_ATOMIC);
  var angle3 = Blockly.Python.valueToCode(block, 'right_foot_angle', Blockly.Python.ORDER_ATOMIC);
  var angle4 = Blockly.Python.valueToCode(block, 'left_foot_angle', Blockly.Python.ORDER_ATOMIC);
  
  Blockly.Python.definitions_['import_sloth'] = 'from sloth import Sloth\n__SLOTH__ = Sloth([1,2,3,4])';


  var code = '';
  code += '__SLOTH__.set_offset(['+angle1+','+angle2+','+angle3+','+angle4+'])\n'
  return code;
};

