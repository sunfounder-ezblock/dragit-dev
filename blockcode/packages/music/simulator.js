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
 * For output: return [code, Blockly.JavaScript.ORDER_ATOMIC]
 */

'use strict';

goog.provide('Blockly.JavaScript.music');

goog.require('Blockly.JavaScript');

Blockly.JavaScript['music_notes'] = function (block) {
    var note = Blockly.JavaScript.statementToCode(block, 'note');

    Blockly.JavaScript.definitions_['define_music_beat'] = 'let __MUSIC_BEAT__ = 500';

    var code = '';
    code += note;
    return [code, Blockly.JavaScript.ORDER_ATOMIC]
};

Blockly.JavaScript['music_beat'] = function (block) {
    var beat = Blockly.JavaScript.statementToCode(block, 'beat');

    Blockly.JavaScript.definitions_['define_music_beat'] = 'let __MUSIC_BEAT__ = 500';

    var code = '';
    code += beat + " * __MUSIC_BEAT__";
    return [code, Blockly.JavaScript.ORDER_ATOMIC]
};

Blockly.JavaScript['music_set_tempo'] = function (block) {
    var tempo = Blockly.JavaScript.statementToCode(block, 'tempo');

    Blockly.JavaScript.definitions_['define_music_beat'] = 'let __MUSIC_BEAT__ = 500';

    var code = '';
    code += "__MUSIC_BEAT__ = 60 / " + tempo + " * 100\n";
    return code
};
