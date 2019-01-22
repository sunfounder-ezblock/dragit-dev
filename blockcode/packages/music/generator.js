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
 * For output: return [code, Blockly.Python.ORDER_ATOMIC]
 */

'use strict';

goog.provide('Blockly.Python.music');

goog.require('Blockly.Python');

Blockly.Python['music_notes'] = function (block) {
    var note = Blockly.Python.statementToCode(block, 'note');

    // Blockly.Python.definitions_['define_music_tempo'] = '__MUSIC_TEMPO__ = 120';
    Blockly.Python.definitions_['define_music_beat'] = '__MUSIC_BEAT__ = 500';

    var code = '';
    code += note;
    return [code, Blockly.Python.ORDER_ATOMIC]
};

Blockly.Python['music_beat'] = function (block) {
    var beat = Blockly.Python.statementToCode(block, 'beat');

    // Blockly.Python.definitions_['define_music_tempo'] = '__MUSIC_TEMPO__ = 120';
    Blockly.Python.definitions_['define_music_beat'] = '__MUSIC_BEAT__ = 500';

    var code = '';
    code += beat + " * __MUSIC_BEAT__";
    return [code, Blockly.Python.ORDER_ATOMIC]
};

Blockly.Python['music_set_tempo'] = function (block) {
    var tempo = Blockly.Python.statementToCode(block, 'tempo');

    Blockly.Python.definitions_['define_music_beat'] = '__MUSIC_BEAT__ = 500';

    var code = '';
    code += "__MUSIC_BEAT__ = 60 / " + tempo + " * 100\n";
    return code
};
