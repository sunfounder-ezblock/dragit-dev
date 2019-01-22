/*
  to do:
  time:

 */
'use strict';

goog.provide('Blockly.JavaScript.time');

goog.require('Blockly.JavaScript');

//#################################################
// time - time related functions
//#################################################

// ---- time functions blocks ---- //
Blockly.JavaScript['time_localtime'] = function (block) {
  var secs = Blockly.JavaScript.valueToCode(block, 'secs', Blockly.JavaScript.ORDER_ATOMIC);

  var code = "time.loacltime(" + secs + ")";
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['time_mktime'] = function (block) {
  // It’s argument is a full 8-tuple which expresses a time as per localtime
  var localtime = Blockly.JavaScript.valueToCode(block, 'localtime', Blockly.JavaScript.ORDER_ATOMIC);

  var code = "time.mktime(tuple(" + localtime + "))";
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['time_sleep'] = function (block) {
  var delay_secs = Blockly.JavaScript.valueToCode(block, 'delay_secs', Blockly.JavaScript.ORDER_ATOMIC);

  var code = "time.sleep(" + delay_secs + ")\n";
  return code;
};

Blockly.JavaScript['time_sleep_ms'] = function (block) {
  var delay_secs = Blockly.JavaScript.valueToCode(block, 'delay_secs', Blockly.JavaScript.ORDER_ATOMIC);

  var code = "time.sleep_ms(" + delay_secs + ")\n";
  return code;
};

Blockly.JavaScript['time_sleep_us'] = function (block) {
  var delay_secs = Blockly.JavaScript.valueToCode(block, 'delay_secs', Blockly.JavaScript.ORDER_ATOMIC);

  var code = "time.sleep_us(" + delay_secs + ")\n";
  return code;
};

Blockly.JavaScript['time_ticks_ms'] = function (block) {

  var code = "time.ticks_ms()"
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['time_ticks_us'] = function (block) {

  var code = "time.ticks_us()"
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['time_ticks_cpu'] = function (block) {

  var code = "time.ticks_cpu()"
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['time_ticks_add'] = function (block) {
  var ticks = Blockly.JavaScript.valueToCode(block, 'ticks', Blockly.JavaScript.ORDER_ATOMIC);
  var delta = Blockly.JavaScript.valueToCode(block, 'delta', Blockly.JavaScript.ORDER_ATOMIC);

  var code = "time.ticks_add(" + ticks + ", " + delta + ")";

  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['time_ticks_diff'] = function (block) {
  var ticks1 = Blockly.JavaScript.valueToCode(block, 'ticks1', Blockly.JavaScript.ORDER_ATOMIC);
  var ticks2 = Blockly.JavaScript.valueToCode(block, 'ticks2', Blockly.JavaScript.ORDER_ATOMIC);

  var code = "time.ticks_diff(" + ticks1 + ", " + ticks2 + ")";

  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['time_time'] = function (block) {

  var code = "time.time()"
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
