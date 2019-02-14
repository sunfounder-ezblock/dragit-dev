/*
  to do:
  leaf:
     --<>
     --<>
     --<>


 */
'use strict';

goog.provide('Blockly.JavaScript.leaf');

goog.require('Blockly.JavaScript');

//#################################################
// class Pin – control I/O pins
//#################################################
// ---- leaf constants generator ---- //
Blockly.JavaScript['leaf_digital_pin'] = function (block) {//digital pin number
  var pin = block.getFieldValue('pin');

  var code = '';
  code += 'Pin(' + pin + ')';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['leaf_analog_pin'] = function (block) {// analog pin number
  var pin = block.getFieldValue('pin');

  var code = '';
  code += 'ADC(' + pin + ')';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['leaf_device_pin'] = function (block) {// analog pin number
  var pin = block.getFieldValue('pin');

  var code = '';
  code += 'Pin(' + pin + ')';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['leaf_servo_pin'] = function (block) {// analog pin number
  var pin = block.getFieldValue('pin');

  var code = '';
  code += pin;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['leaf_pin_pull'] = function (block) {
  var value_pin_pull = block.getFieldValue('pin_pull');

  var code = '';
  code += value_pin_pull;

  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['leaf_pin_irq_trigger'] = function (block) {
  var value_trigger = block.getFieldValue('irq_trigger');

  var code = '';
  code += value_trigger;

  return [code, Blockly.JavaScript.ORDER_NONE];
};

// ---- Pin functions generator ---- //
Blockly.JavaScript['leaf_pin_set_value'] = function (block) {
  var value_pin = Blockly.JavaScript.valueToCode(block, 'pin', Blockly.JavaScript.ORDER_ATOMIC);
  var value_value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_ATOMIC);

  var code = value_pin + '.value(' + value_value + ')\n';
  return code;
};

Blockly.JavaScript['leaf_pin_get_value'] = function (block) {
  var value_pin = Blockly.JavaScript.valueToCode(block, 'pin', Blockly.JavaScript.ORDER_ATOMIC);

  var code = value_pin + '.value()';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['leaf_pin_on'] = function (block) {
  var value_pin = Blockly.JavaScript.valueToCode(block, 'pin', Blockly.JavaScript.ORDER_ATOMIC);

  var code = value_pin + '.on()\n';

  return code;
};

Blockly.JavaScript['leaf_pin_off'] = function (block) {
  var value_pin = Blockly.JavaScript.valueToCode(block, 'pin', Blockly.JavaScript.ORDER_ATOMIC);

  var code = value_pin + '.off()\n';

  return code;
};

Blockly.JavaScript['leaf_pin_irq'] = function (block) {
  var value_pin = Blockly.JavaScript.valueToCode(block, 'irq_pin', Blockly.JavaScript.ORDER_ATOMIC);
  var value_mode = Blockly.JavaScript.valueToCode(block, 'irq_mode', Blockly.JavaScript.ORDER_ATOMIC);
  var value_pull = Blockly.JavaScript.valueToCode(block, 'pin_pull', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_irq_handler = Blockly.JavaScript.statementToCode(block, 'irq_handler');

  var code = 'ExtInt(pin=' + value_pin + ', mode=' + value_mode + ', pull=' + value_pull + ', lambda e:' + statements_irq_handler + ')\n';

  return code;
};


//#################################################
// class ADC – analog to digital conversion
//#################################################
// ---- ADC functions generator ---- //
Blockly.JavaScript['leaf_adc_read'] = function (block) {
  var value_pin = Blockly.JavaScript.valueToCode(block, 'analog_pin', Blockly.JavaScript.ORDER_ATOMIC);

  var code = 'ADC(' + value_pin + ').read()';

  return [code, Blockly.JavaScript.ORDER_NONE];
};


//#################################################
// class DAC – digital to analog conversion
//#################################################
// ---- DAC functions generator ---- //
Blockly.JavaScript['leaf_dac_write'] = function (block) {
  var value_pin = Blockly.JavaScript.valueToCode(block, 'analog_pin', Blockly.JavaScript.ORDER_ATOMIC);
  var value_write = Blockly.JavaScript.valueToCode(block, 'analog_value', Blockly.JavaScript.ORDER_ATOMIC);

  var code = 'DAC(' + value_pin + ').write(' + value_write + ')';

  return code;
};


//#################################################
// class Servo  - 3-wire hobby servo driver
// pins X1 through X4 are the signal pins,
//       and next to them are 4 sets of power and ground pins.
//#################################################
// ---- Servo functions generator ---- //
Blockly.JavaScript['leaf_servo_get_angle'] = function (block) {
  var value_pin = Blockly.JavaScript.valueToCode(block, 'servo_pin', Blockly.JavaScript.ORDER_ATOMIC);

  var code = 'Servo(' + value_pin + ').angle()\n';

  return [code, Blockly.JavaScript.ORDER_NONE];
};


Blockly.JavaScript['leaf_servo_set_angle'] = function (block) {
  var value_pin = Blockly.JavaScript.valueToCode(block, 'servo_pin', Blockly.JavaScript.ORDER_ATOMIC);
  var value_angle = Blockly.JavaScript.valueToCode(block, 'angle', Blockly.JavaScript.ORDER_ATOMIC);
  var value_time = Blockly.JavaScript.valueToCode(block, 'time', Blockly.JavaScript.ORDER_ATOMIC);

  var code = 'Servo(' + value_pin + ').angle(' + value_angle + ', ' + value_time + ')\n';

  return code;
};

Blockly.JavaScript['leaf_servo_get_speed'] = function (block) {
  var value_pin = Blockly.JavaScript.valueToCode(block, 'servo_pin', Blockly.JavaScript.ORDER_ATOMIC);

  var code = 'Servo(' + value_pin + ').speed()';

  return [code, Blockly.JavaScript.ORDER_NONE];
};


Blockly.JavaScript['leaf_servo_set_speed'] = function (block) {
  var value_pin = Blockly.JavaScript.valueToCode(block, 'servo_pin', Blockly.JavaScript.ORDER_ATOMIC);
  var value_speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_ATOMIC);
  var value_time = Blockly.JavaScript.valueToCode(block, 'time', Blockly.JavaScript.ORDER_ATOMIC);

  var code = 'Servo(' + value_pin + ').speed(' + value_speed + ', ' + value_time + ')\n';

  return code;
};

Blockly.JavaScript['leaf_servo_get_calibration'] = function (block) {
  var value_pin = Blockly.JavaScript.valueToCode(block, 'servo_pin', Blockly.JavaScript.ORDER_ATOMIC);

  var code = 'Servo(' + value_pin + ').calibration()';

  return [code, Blockly.JavaScript.ORDER_NONE];
};


Blockly.JavaScript['leaf_servo_set_calibration'] = function (block) {
  var value_pin = Blockly.JavaScript.valueToCode(block, 'servo_pin', Blockly.JavaScript.ORDER_ATOMIC);
  var value_min = Blockly.JavaScript.valueToCode(block, 'pulse_min', Blockly.JavaScript.ORDER_ATOMIC);
  var value_max = Blockly.JavaScript.valueToCode(block, 'pulse_max', Blockly.JavaScript.ORDER_ATOMIC);
  var value_centre = Blockly.JavaScript.valueToCode(block, 'pulse_centre', Blockly.JavaScript.ORDER_ATOMIC);
  var value_angle_90 = Blockly.JavaScript.valueToCode(block, 'pulse_angle_90', Blockly.JavaScript.ORDER_ATOMIC);
  var value_speed_100 = Blockly.JavaScript.valueToCode(block, 'pulse_speed_100', Blockly.JavaScript.ORDER_ATOMIC);

  var code = 'Servo(' + value_pin + ').calibration(' + value_min + ', ' + value_max + ', ' + value_centre + ', ' + value_angle_90 + ', ' + value_speed_100 + ')\n';

  return code;
};
