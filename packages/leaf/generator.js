'use strict';

goog.provide('Blockly.Python.leaf');

goog.require('Blockly.Python');

//#################################################
// class Pin – control I/O pins
//#################################################
// ---- leaf constants generator ---- //
Blockly.Python['leaf_digital_pin'] = function(block) {//digital pin number
  var pin = block.getFieldValue('pin');

  Blockly.Python.definitions_['import_pin'] = 'from leaf import Pin';

  var code = '';
  code += pin;
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['leaf_analog_pin'] = function(block) {// analog pin number
  var pin = block.getFieldValue('pin');

  Blockly.Python.definitions_['import_adc'] = 'from leaf import ADC';

  var code = '';
  code += pin;
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['leaf_device_pin'] = function (block) {// analog pin number
  var pin = block.getFieldValue('pin');

  Blockly.Python.definitions_['import_pin'] = 'from leaf import Pin';

  var code = '';
  code += pin;
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['leaf_servo_pin'] = function(block) {// analog pin number
  var pin = block.getFieldValue('pin');

  var code = '';
  code += pin;
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['leaf_pin_pull'] = function(block) {
  var value_pin_pull = block.getFieldValue('pin_pull');

  Blockly.Python.definitions_['import_pin'] = 'from leaf import Pin';

  var code = '';
  code += value_pin_pull;

  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['leaf_pin_irq_trigger'] = function(block) {
  var value_trigger = block.getFieldValue('irq_trigger');

  Blockly.Python.definitions_['import_extint'] = 'from leaf import ExtInt';

  var code = '';
  code += value_trigger;

  return [code, Blockly.Python.ORDER_NONE];
};

// ---- Pin functions generator ---- //
Blockly.Python['leaf_pin_set_value'] = function(block) {
  var value_pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);
  var value_value = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_ATOMIC);

  var code ='Pin(' + value_pin + ', Pin.OUT_PP)' + '.value('+value_value+')\n';
  return code;
};

Blockly.Python['leaf_pin_get_value'] = function(block) {
  var value_pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);

  var code = 'Pin(' + value_pin + ')' + '.value()\n';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['leaf_pin_on'] = function(block) {
  var value_pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);

  var code ='Pin(' + value_pin + ', Pin.OUT_PP)' + '.on()\n';

  return code;
};

Blockly.Python['leaf_pin_off'] = function(block) {
  var value_pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);

  var code ='Pin(' + value_pin + ', Pin.OUT_PP)' + '.off()\n';

  return code;
};

Blockly.Python['leaf_pin_irq'] = function(block) {
  var value_pin      = Blockly.Python.valueToCode(block, 'irq_pin', Blockly.Python.ORDER_ATOMIC);
  var value_mode     = Blockly.Python.valueToCode(block, 'irq_mode', Blockly.Python.ORDER_ATOMIC);
  var value_pull     = Blockly.Python.valueToCode(block, 'pin_pull', Blockly.Python.ORDER_ATOMIC);
  var statements_irq_handler = Blockly.Python.statementToCode(block, 'irq_handler');

  Blockly.Python.definitions_['import_extint'] = 'from leaf import ExtInt';

  var code = 'def callback():\n';;
  code += statements_irq_handler;
  code += 'ExtInt(pin='+value_pin+', mode='+value_mode+', pull='+value_pull+',callback=callback())\n';

  return code;
};


//#################################################
// class ADC – analog to digital conversion
//#################################################
// ---- ADC functions generator ---- //
Blockly.Python['leaf_adc_read'] = function(block) {
  var value_pin = Blockly.Python.valueToCode(block, 'analog_pin', Blockly.Python.ORDER_ATOMIC);

  Blockly.Python.definitions_['import_adc'] = 'from leaf import ADC';

  var code = 'ADC('+value_pin+').read()';

  return [code, Blockly.Python.ORDER_NONE];
};


//#################################################
// class DAC – digital to analog conversion
//#################################################
// ---- DAC functions generator ---- //
Blockly.Python['leaf_dac_write'] = function(block) {
  var value_pin   = Blockly.Python.valueToCode(block, 'analog_pin', Blockly.Python.ORDER_ATOMIC);
  var value_write = Blockly.Python.valueToCode(block, 'analog_value', Blockly.Python.ORDER_ATOMIC);

  Blockly.Python.definitions_['import_dac'] = 'from leaf import DAC';

  var code = 'DAC('+value_pin+').write('+value_write+')';

  return code;
};


//#################################################
// class Servo  - 3-wire hobby servo driver
// pins X1 through X4 are the signal pins,
//       and next to them are 4 sets of power and ground pins.
//#################################################
// ---- Servo functions generator ---- //
Blockly.Python['leaf_servo_get_angle'] = function(block) {
  var value_pin   = Blockly.Python.valueToCode(block, 'servo_pin', Blockly.Python.ORDER_ATOMIC);

  Blockly.Python.definitions_['import_servo'] = 'from leaf import Servo';

  var code = 'Servo('+value_pin+').angle()\n';

  return [code, Blockly.Python.ORDER_NONE];
};


Blockly.Python['leaf_servo_set_angle'] = function(block) {
  var value_pin   = Blockly.Python.valueToCode(block, 'servo_pin', Blockly.Python.ORDER_ATOMIC);
  var value_angle = Blockly.Python.valueToCode(block, 'angle', Blockly.Python.ORDER_ATOMIC);
  var value_time  = Blockly.Python.valueToCode(block, 'time', Blockly.Python.ORDER_ATOMIC);

  Blockly.Python.definitions_['import_servo'] = 'from leaf import Servo';

  var code = 'Servo(' + value_pin + ').angle(' + value_angle + ', ' + value_time +')\n';

  return code;
};

Blockly.Python['leaf_servo_get_speed'] = function(block) {
  var value_pin   = Blockly.Python.valueToCode(block, 'servo_pin', Blockly.Python.ORDER_ATOMIC);

  Blockly.Python.definitions_['import_servo'] = 'from leaf import Servo';

  var code = 'Servo('+value_pin+').speed()';

  return [code, Blockly.Python.ORDER_NONE];
};


Blockly.Python['leaf_servo_set_speed'] = function(block) {
  var value_pin   = Blockly.Python.valueToCode(block, 'servo_pin', Blockly.Python.ORDER_ATOMIC);
  var value_speed = Blockly.Python.valueToCode(block, 'speed', Blockly.Python.ORDER_ATOMIC);
  var value_time  = Blockly.Python.valueToCode(block, 'time', Blockly.Python.ORDER_ATOMIC);

  Blockly.Python.definitions_['import_servo'] = 'from leaf import Servo';

  var code = 'Servo(' + value_pin + ').speed(' + value_speed + ', ' + value_time +')\n';

  return code;
};

Blockly.Python['leaf_servo_get_calibration'] = function(block) {
  var value_pin   = Blockly.Python.valueToCode(block, 'servo_pin', Blockly.Python.ORDER_ATOMIC);

  Blockly.Python.definitions_['import_servo'] = 'from leaf import Servo';

  var code = 'Servo('+value_pin+').calibration()';

  return [code, Blockly.Python.ORDER_NONE];
};


Blockly.Python['leaf_servo_set_calibration'] = function(block) {
  var value_pin       = Blockly.Python.valueToCode(block, 'servo_pin', Blockly.Python.ORDER_ATOMIC);
  var value_min       = Blockly.Python.valueToCode(block, 'pulse_min', Blockly.Python.ORDER_ATOMIC);
  var value_max       = Blockly.Python.valueToCode(block, 'pulse_max', Blockly.Python.ORDER_ATOMIC);
  var value_centre    = Blockly.Python.valueToCode(block, 'pulse_centre', Blockly.Python.ORDER_ATOMIC);
  var value_angle_90  = Blockly.Python.valueToCode(block, 'pulse_angle_90', Blockly.Python.ORDER_ATOMIC);
  var value_speed_100 = Blockly.Python.valueToCode(block, 'pulse_speed_100', Blockly.Python.ORDER_ATOMIC);

  Blockly.Python.definitions_['import_servo'] = 'from leaf import Servo';

  var code = 'Servo('+value_pin+').calibration('+value_min+', '+value_max+', '+value_centre+', '+value_angle_90+', '+value_speed_100+')\n';

  return code;
};
