/*
  to do:
  time:

 */
'use strict';

goog.provide('Blockly.Python.time');

goog.require('Blockly.Python');

//#################################################
// time - time related functions
//#################################################

// ---- time functions blocks ---- //
Blockly.Python['time_localtime'] = function (block) {
  var secs = Blockly.Python.valueToCode(block, 'secs', Blockly.Python.ORDER_ATOMIC);

  Blockly.Python.definitions_['import_time'] = 'import time';

  var code = "time.loacltime(" + secs + ")";
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['time_mktime'] = function (block) {
  // It’s argument is a full 8-tuple which expresses a time as per localtime
  var localtime = Blockly.Python.valueToCode(block, 'localtime', Blockly.Python.ORDER_ATOMIC);

  Blockly.Python.definitions_['import_time'] = 'import time';

  var code = "time.mktime(tuple(" + localtime + "))";
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['time_sleep'] = function (block) {
  var delay_secs = Blockly.Python.valueToCode(block, 'delay_secs', Blockly.Python.ORDER_ATOMIC);

  Blockly.Python.definitions_['import_time'] = 'import time';

  var code = "time.sleep(" + delay_secs + ")\n";
  return code;
};

Blockly.Python['time_sleep_ms'] = function (block) {
  var delay_secs = Blockly.Python.valueToCode(block, 'delay_secs', Blockly.Python.ORDER_ATOMIC);

  Blockly.Python.definitions_['import_time'] = 'import time';

  var code = "time.sleep_ms(" + delay_secs + ")\n";
  return code;
};

Blockly.Python['time_sleep_us'] = function (block) {
  var delay_secs = Blockly.Python.valueToCode(block, 'delay_secs', Blockly.Python.ORDER_ATOMIC);

  Blockly.Python.definitions_['import_time'] = 'import time';

  var code = "time.sleep_us(" + delay_secs + ")\n";
  return code;
};

Blockly.Python['time_ticks_ms'] = function (block) {

  Blockly.Python.definitions_['import_time'] = 'import time';

  var code = "time.ticks_ms()"
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['time_ticks_us'] = function (block) {

  Blockly.Python.definitions_['import_time'] = 'import time';

  var code = "time.ticks_us()"
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['time_ticks_cpu'] = function (block) {

  Blockly.Python.definitions_['import_time'] = 'import time';

  var code = "time.ticks_cpu()"
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['time_ticks_add'] = function (block) {
  var ticks = Blockly.Python.valueToCode(block, 'ticks', Blockly.Python.ORDER_ATOMIC);
  var delta = Blockly.Python.valueToCode(block, 'delta', Blockly.Python.ORDER_ATOMIC);

  Blockly.Python.definitions_['import_time'] = 'import time';

  var code = "time.ticks_add(" + ticks + ", " + delta + ")";

  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['time_ticks_diff'] = function (block) {
  var ticks1 = Blockly.Python.valueToCode(block, 'ticks1', Blockly.Python.ORDER_ATOMIC);
  var ticks2 = Blockly.Python.valueToCode(block, 'ticks2', Blockly.Python.ORDER_ATOMIC);

  Blockly.Python.definitions_['import_time'] = 'import time';

  var code = "time.ticks_diff(" + ticks1 + ", " + ticks2 + ")";

  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['time_time'] = function (block) {

  Blockly.Python.definitions_['import_time'] = 'import time';

  var code = "time.time()"
  return [code, Blockly.Python.ORDER_ATOMIC];
};
