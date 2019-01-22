'use strict';

goog.provide('Blockly.JavaScript.basic');

goog.require('Blockly.JavaScript');

Blockly.JavaScript['basic_start'] = function (block) {
  var statement = Blockly.JavaScript.statementToCode(block, 'statement');

  if (statement != '') {
    var statement_array = statement.split("\n");
    // result = []
    for (i in statement_array){
      statement_array[i] = statement_array[i].slice(2);
    }
    statement = statement_array.join("\n");
  }

  var code = '';
  // code += 'def start():\n';
  code += statement;
  return code;
};

Blockly.JavaScript['basic_forever'] = function (block) {
  var statement = Blockly.JavaScript.statementToCode(block, 'statement');

  var code = '';
  code += 'function forever(){\n';
  code += statement;
  code += '}\n';
  code += 'while(true){forever();delay(1)}';
  // code += "Simulator.forever = forever;";
  return code;
};

Blockly.JavaScript['basic_print'] = function (block) {
  var msg = Blockly.JavaScript.valueToCode(block, 'msg', Blockly.JavaScript.ORDER_ATOMIC);

  var code = '';
  code += 'print('+ msg + ');\n';
  return code;
};

Blockly.JavaScript['basic_delay'] = function (block) {
  var ms = Blockly.JavaScript.valueToCode(block, 'ms', Blockly.JavaScript.ORDER_ATOMIC);

  var code = '';
  code += 'delay(' + ms + ');\n';
  return code;
};

// Blockly.JavaScript['basic_delay'] = function(block) {
//   var seconds = Number(block.getFieldValue('SECONDS'));
//   var code = 'waitForSeconds(' + seconds + ');\n';
//   return code;
// };


// for other blocks

// Math:
Blockly.JavaScript['math_mapping'] = function (block) {
  var value_value = Blockly.JavaScript.valueToCode(block, 'in_value', Blockly.JavaScript.ORDER_ATOMIC);
  var value_in_min = Blockly.JavaScript.valueToCode(block, 'in_min', Blockly.JavaScript.ORDER_ATOMIC);
  var value_in_max = Blockly.JavaScript.valueToCode(block, 'in_max', Blockly.JavaScript.ORDER_ATOMIC);
  var value_out_min = Blockly.JavaScript.valueToCode(block, 'out_min', Blockly.JavaScript.ORDER_ATOMIC);
  var value_out_max = Blockly.JavaScript.valueToCode(block, 'out_max', Blockly.JavaScript.ORDER_ATOMIC);

  var code = "";
  code += "Simulator.mapping(" + value_value + ", " + value_in_min + ", " + value_in_max + ", " + value_out_min + ", " + value_out_max + ")"

  return [code, Blockly.JavaScript.ORDER_NONE];
};

// Procedure:
Blockly.JavaScript.procedures_defreturn = function(a) {
  var b = Blockly.JavaScript.variableDB_.getName(a.getFieldValue("NAME"), Blockly.Procedures.NAME_TYPE)
    , c = Blockly.JavaScript.statementToCode(a, "STACK");
  if (Blockly.JavaScript.STATEMENT_PREFIX) {
      var d = a.id.replace(/\$/g, "$$$$");
      c = Blockly.JavaScript.prefixLines(Blockly.JavaScript.STATEMENT_PREFIX.replace(/%1/g, "'" + d + "'"), Blockly.JavaScript.INDENT) + c
  }
  Blockly.JavaScript.INFINITE_LOOP_TRAP && (c = Blockly.JavaScript.INFINITE_LOOP_TRAP.replace(/%1/g, "'" + a.id + "'") + c);
  (d = Blockly.JavaScript.valueToCode(a, "RETURN", Blockly.JavaScript.ORDER_NONE) || "") && (d = Blockly.JavaScript.INDENT + "return " + d + ";\n");
  for (var e = [], f = 0; f < a.arguments_.length; f++)
      e[f] = Blockly.JavaScript.variableDB_.getName(a.arguments_[f], Blockly.Variables.NAME_TYPE);
  c = "Simulator."+ b +"=function " + "(" + e.join(", ") + ") {\n" + c + d + "}";
  c = Blockly.JavaScript.scrub_(a, c);
  Blockly.JavaScript.definitions_["%" + b] = c;
  return null
}

Blockly.JavaScript.procedures_defnoreturn = Blockly.JavaScript.procedures_defreturn;
Blockly.JavaScript.procedures_callreturn = function(a) {
  var b = Blockly.JavaScript.variableDB_.getName(a.getFieldValue("NAME"),Blockly.Procedures.NAME_TYPE);
  var c = [];
  for (var d = 0; d < a.arguments_.length; d++)
      c[d] = Blockly.JavaScript.valueToCode(a, "ARG" + d, Blockly.JavaScript.ORDER_COMMA) || "null";
  var code = "Simulator." + b + "(" + c.join(", ") + ")";
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL]
}

Blockly.JavaScript.procedures_callnoreturn = function(a) {
  var b = Blockly.JavaScript.variableDB_.getName(a.getFieldValue("NAME"), Blockly.Procedures.NAME_TYPE);
  var c = [];
  for (var d = 0; d < a.arguments_.length; d++)
      c[d] = Blockly.JavaScript.valueToCode(a, "ARG" + d, Blockly.JavaScript.ORDER_COMMA) || "null";
  var code = "Simulator." + b + "(" + c.join(", ") + ");\n";
  return code
}

Blockly.JavaScript.procedures_ifreturn = function(a) {
  var b = "if (" + (Blockly.JavaScript.valueToCode(a, "CONDITION", Blockly.JavaScript.ORDER_NONE) || "false") + ") {\n";
  a.hasReturnValue_ ? (a = Blockly.JavaScript.valueToCode(a, "VALUE", Blockly.JavaScript.ORDER_NONE) || "null",
  b += Blockly.JavaScript.INDENT + "return " + a + ";\n") : b += Blockly.JavaScript.INDENT + "return;\n";
  return b + "}\n"
}
