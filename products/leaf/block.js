'use strict';
goog.provide('Blockly.Blocks.leaf');  // Deprecated
goog.provide('Blockly.Constants.Leaf');

goog.require('Blockly.Blocks');
goog.require('Blockly.Msg');

Blockly.Constants.Leaf.RGB = 80;
Blockly.Blocks.leaf.RGB = Blockly.Constants.Leaf.RGB;


//#################################################
// class Pin - control I/O pins
//#################################################
// ---- pin constants list ---- //
Blockly.Constants.Leaf.DIGITAL_PINS = [
  // leaf pin
  ["D0", '"D0"'],
  ["D1", '"D1"'],
  ["D2", '"D2"'],
  ["D3", '"D3"'],
  ["D4", '"D4"'],
  ["D5", '"D5"'],
  ["D6", '"D6"'],
  ["D7", '"D7"'],
  ["D8", '"D8"'],
  ["D9", '"D9"'],
  ["D10", '"D10"'],
  ["D11", '"D11"'],
  ["D12", '"D12"'],
  ["D13", '"D13"'],
];

Blockly.Constants.Leaf.ANALOG_PINS = [
  // leaf pin
  ["A0", '"A0"'],
  ["A1", '"A1"'],
  ["A2", '"A2"'],
  ["A3", '"A3"'],
  ["A4", '"A4"'],
  ["A5", '"A5"'],
  ["A6", '"A6"'],
  ["A7", '"A7"'],
  ["A8", '"A8"'],
  ["A9", '"A9"'],
  ["A10", '"A10"'],
  ["A11", '"A11"'],
  ["A12", '"A12"'],
  ["A13", '"A13"'],
];

Blockly.Constants.Leaf.DEVICE_PINS = [
  ["switch", '"SW"'],
  ["LED", '"LED"'],
];

Blockly.Constants.Leaf.SERVO_PINS = [
  ["S0", "1"],
  ["S1", "2"],
  ["S2", "3"],
  ["S3", "4"],
];

Blockly.Constants.Leaf.PIN_STATUS = [
  [Blockly.Msg.LEAF_PIN_OUTPUT, "Pin.OUT"],
  [Blockly.Msg.LEAF_PIN_INPUT, "Pin.IN"],
  [Blockly.Msg.LEAF_PIN_OPEN_DRAIN, "Pin.OPEN_DRAIN"],
];

Blockly.Constants.Leaf.PWM_PINS = [
  ['A0', '"A0"'],
  ['A1', '"A1"'],
  ['A2', '"A2"'],
  ['A3', '"A3"'],
  ['D4', '"D4"'],
  ['D5', '"D5"'],
  ['D6', '"D6"'],
  ['D7', '"D7"'],
];

Blockly.Constants.Leaf.PWM_PIN_DICT = {
  "A0":[2,1],
  "A1":[2,2],
  "A2":[2,3],
  "A3":[2,4],
  "D4":[4,1],
  "D5":[4,2],
  "D6":[4,3],
  "D7":[4,4]
}

Blockly.Constants.Leaf.PIN_PULL = [
  ["pull_up", "Pin.PULL_UP"],
  ["pull_down", "Pin.PULL_DOWN"],
  ["none", "Pin.PULL_NONE"],
];

Blockly.Constants.Leaf.IRQ_TRIGGER = [
  ["rising", "ExtInt.IRQ_RISING"],
  ["falling", "ExtInt.IRQ_FALLING"],
  ["rising_falling", "ExtInt.IRQ_RISING_FALLING"],
];

Blockly.Constants.Leaf.I2C_MODE = [
  ["master", "I2C.MASTER"],
  ["slave", "I2C.SLAVE"],
];

// ---- leaf constants blocks ---- //
Blockly.Blocks['leaf_digital_pin'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown(Blockly.Constants.Leaf.DIGITAL_PINS), "pin");
    this.setInputsInline(true);
    this.setOutput(true, "Digital_Pin");
    this.setColour(Blockly.Constants.Leaf.RGB);
    this.setTooltip(Blockly.Msg.LEAF_PIN_DIGITAL_PIN_TOOLTIP);
    this.setHelpUrl('');
  }
};

Blockly.Blocks['leaf_analog_pin'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown(Blockly.Constants.Leaf.ANALOG_PINS), "pin");
    this.setInputsInline(true);
    this.setOutput(true, "Analog_Pin");
    this.setColour(Blockly.Constants.Leaf.RGB);
    this.setTooltip(Blockly.Msg.LEAF_PIN_ANALOG_PIN_TOOLTIP);
    this.setHelpUrl('');
  }
};

Blockly.Blocks['leaf_device_pin'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown(Blockly.Constants.Leaf.DEVICE_PINS), "pin");
    this.setInputsInline(true);
    this.setOutput(true, "Device_Pin");
    this.setColour(Blockly.Constants.Leaf.RGB);
    this.setTooltip(Blockly.Msg.LEAF_PIN_DEVICE_PIN_TOOLTIP);
    this.setHelpUrl('');
  }
};

Blockly.Blocks['leaf_servo_pin'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown(Blockly.Constants.Leaf.SERVO_PINS), "pin");
    this.setInputsInline(true);
    this.setOutput(true, "Servo_Pin");
    this.setColour(Blockly.Constants.Leaf.RGB);
    this.setTooltip(Blockly.Msg.LEAF_PIN_SERVO_PIN_TOOLTIP);
    this.setHelpUrl('');
  }
};

Blockly.Blocks['leaf_pin_pull'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown(Blockly.Constants.Leaf.PIN_PULL), "pin_pull");
    this.setInputsInline(true);
    this.setOutput(true, "Pin_pull");
    this.setColour(Blockly.Constants.Leaf.RGB);
    this.setTooltip(Blockly.Msg.LEAF_PIN_PULL_TOOLTIP);
    this.setHelpUrl('');
  }
};

Blockly.Blocks['leaf_pin_irq_trigger'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.LEAF_PIN_IRQ_TRIGGER_TITLE);
    this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown(Blockly.Constants.Leaf.IRQ_TRIGGER), "irq_trigger");
    this.setInputsInline(true);
    this.setOutput(true, "Irq_trigger");
    this.setColour(Blockly.Constants.Leaf.RGB);
    this.setTooltip(Blockly.Msg.LEAF_PIN_IRQ_TRIGGER_TOOLTIP);
    this.setHelpUrl('');
  }
};

Blockly.Blocks['leaf_pwm_pin'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown(Blockly.Constants.Leaf.PWM_PINS), "pin");
    this.setInputsInline(true);
    this.setOutput(true, "Pwm_Pin");
    this.setColour(Blockly.Constants.Leaf.RGB);
    this.setTooltip(Blockly.Msg.LEAF_PWM_PIN_TOOLTIP);
    this.setHelpUrl('');
  }
};

// ---- Pin functions blocks ---- //

Blockly.Blocks['leaf_pin_set_value'] = {
  init: function () {
    this.appendValueInput("pin")
      .setCheck(["Digital_Pin", "Device_Pin", "Analog_Pin"])
      .appendField(Blockly.Msg.LEAF_PIN_SET_VALUE_TITLE1);
    this.appendValueInput("value")
      .setCheck("Number")
      .appendField(Blockly.Msg.LEAF_PIN_SET_VALUE_TITLE2);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Constants.Leaf.RGB);
    this.setTooltip(Blockly.Msg.LEAF_PIN_SET_VALUE_TOOLTIP);
    this.setHelpUrl('');
  }
};

Blockly.Blocks['leaf_pin_get_value'] = {
  init: function () {
    this.appendValueInput("pin")
      .setCheck(["Digital_Pin", "Device_Pin"])
      .appendField(Blockly.Msg.LEAF_PIN_GET_VALUE_TITLE1);
    this.appendDummyInput()
      .appendField(Blockly.Msg.LEAF_PIN_GET_VALUE_TITLE2);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(Blockly.Constants.Leaf.RGB);
    this.setTooltip(Blockly.Msg.LEAF_PIN_GET_VALUE_TOOLTIP);
    this.setHelpUrl('');
  }
};

Blockly.Blocks['leaf_pin_on'] = {
  init: function () {
    this.appendValueInput("pin")
      .setCheck(["Digital_Pin", "Device_Pin"])
      .appendField(Blockly.Msg.LEAF_PIN_ON_TITLE1);
    this.appendDummyInput()
      .appendField(Blockly.Msg.LEAF_PIN_ON_TITLE2);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Constants.Leaf.RGB);
    this.setTooltip(Blockly.Msg.LEAF_PIN_ON_TOOLTIP);
  }
};

Blockly.Blocks['leaf_pin_off'] = {
  init: function () {
    this.appendValueInput("pin")
      .setCheck(["Digital_Pin", "Device_Pin"])
      .appendField(Blockly.Msg.LEAF_PIN_OFF_TITLE1);
    this.appendDummyInput()
      .appendField(Blockly.Msg.LEAF_PIN_OFF_TITLE2);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Constants.Leaf.RGB);
    this.setTooltip(Blockly.Msg.LEAF_PIN_OFF_TOOLTIP);
  }
};

Blockly.Blocks['leaf_pin_irq'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.LEAF_PIN_IRQ_TITLE1);
    this.appendValueInput("irq_pin")
      .setCheck(["Digital_Pin", "Device_Pin"])
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.LEAF_PIN_IRQ_TITLE2);
    this.appendValueInput("irq_mode")
      .setCheck("Irq_trigger")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.LEAF_PIN_IRQ_TITLE3);
    this.appendValueInput("pin_pull")
      .setCheck("Pin_pull")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.LEAF_PIF_IRQ_TITLE4);
    this.appendStatementInput("irq_handler")
      .setCheck(null)
      .appendField(Blockly.Msg.LEAF_PIN_IRQ_TITLE5);
    this.setColour(Blockly.Constants.Leaf.RGB);
    //this.setOutput(true, null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.LEAF_PIN_IRQ_TOOLTIP);
    this.setHelpUrl('');
  }
};


//#################################################
// class ADC - analog to digital conversion
//#################################################
// ---- ADC functions blocks ---- //
Blockly.Blocks['leaf_adc_read'] = {
  init: function () {
    this.appendValueInput("analog_pin")
      .setCheck("Analog_Pin")
      .appendField(Blockly.Msg.LEAF_ADC_READ_TITLE1);
    this.appendDummyInput()
      .appendField(Blockly.Msg.LEAF_ADC_READ_TITLE2);
    this.setInputsInline(true);
    this.setOutput(true, 'Number');
    this.setColour(Blockly.Constants.Leaf.RGB);
    this.setTooltip(Blockly.Msg.LEAF_ADC_READ_TOOLTIP);
    this.setHelpUrl('');
  }
};


//#################################################
// class DAC - digital to analog conversion
//#################################################
// ---- DAC functions blocks ---- //
Blockly.Blocks['leaf_dac_write'] = {
  init: function () {
    this.appendValueInput("analog_pin")
      .setCheck("Analog_Pin")
      .appendField(Blockly.Msg.LEAF_DAC_WRITE_TITLE1);
    this.appendValueInput("analog_value")
      .setCheck("Number")
      .appendField(Blockly.Msg.LEAF_DAC_WRITE_TITLE2);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Constants.Leaf.RGB);
    this.setTooltip(Blockly.Msg.LEAF_DAC_WRITE_TOOLTIP);
    this.setHelpUrl('');
  }
};


//#################################################
// class Servo  - 3-wire hobby servo driver
// pins X1 through X4 are the signal pins,
//       and next to them are 4 sets of power and ground pins.
//#################################################
// ---- Servo functions blocks ---- //
Blockly.Blocks['leaf_servo_get_angle'] = {
  init: function () {
    this.appendValueInput("servo_pin")
      .setCheck("Servo_Pin")
      .appendField(Blockly.Msg.LEAF_SERVO_GET_ANGLE_TITLE1);
    this.appendDummyInput()
      .appendField(Blockly.Msg.LEAF_SERVO_GET_ANGLE_TITLE2);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(Blockly.Constants.Leaf.RGB);
    this.setTooltip(Blockly.Msg.LEAF_SERVO_GET_ANGLE_TOOLTIP);
    this.setHelpUrl('');
  }
};

Blockly.Blocks['leaf_servo_set_angle'] = {
  init: function () {
    this.appendValueInput("servo_pin")
      .setCheck("Servo_Pin")
      .appendField(Blockly.Msg.LEAF_SERVO_SET_ANGLE_TITLE1);
    this.appendValueInput("angle")
      .setCheck("Number")
      .appendField(Blockly.Msg.LEAF_SERVO_SET_ANGLE_TITLE2);
    this.appendValueInput("time")
      .setCheck("Number")
      .appendField(Blockly.Msg.LEAF_SERVO_SET_ANGLE_TITLE3);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Constants.Leaf.RGB);
    this.setTooltip(Blockly.Msg.LEAF_SERVO_SET_ANGLE_TOOLTIP);
    this.setHelpUrl('');
  }
};

Blockly.Blocks['leaf_servo_get_speed'] = {
  init: function () {
    this.appendValueInput("servo_pin")
      .setCheck("Servo_Pin")
      .appendField(Blockly.Msg.LEAF_SERVO_GET_SPEED_TITLE1);
    this.appendDummyInput()
      .appendField(Blockly.Msg.LEAF_SERVO_GET_SPEED_TITLE2);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(Blockly.Constants.Leaf.RGB);
    this.setTooltip(Blockly.Msg.LEAF_SERVO_GET_SPEED_TOOLTIP);
    this.setHelpUrl('');
  }
};

Blockly.Blocks['leaf_servo_set_speed'] = {
  init: function () {
    this.appendValueInput("servo_pin")
      .setCheck("Servo_Pin")
      .appendField(Blockly.Msg.LEAF_SERVO_SET_SPEED_TITLE1);
    this.appendValueInput("speed")
      .setCheck("Number")
      .appendField(Blockly.Msg.LEAF_SERVO_SET_SPEED_TITLE2);
    this.appendValueInput("time")
      .setCheck("Number")
      .appendField(Blockly.Msg.LEAF_SERVO_SET_SPEED_TITLE3);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Constants.Leaf.RGB);
    this.setTooltip(Blockly.Msg.LEAF_SERVO_SET_SPEED_TOOLTIP);
    this.setHelpUrl('');
  }
};

Blockly.Blocks['leaf_servo_get_calibration'] = {
  init: function () {
    this.appendValueInput("servo_pin")
      .setCheck("Servo_Pin")
      .appendField(Blockly.Msg.LEAF_SERVO_GET_CALIBRATION_TITLE1);
    this.appendDummyInput()
      .appendField(Blockly.Msg.LEAF_SERVO_GET_CALIBRATION_TITLE2);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(Blockly.Constants.Leaf.RGB);
    this.setTooltip(Blockly.Msg.LEAF_SERVO_GET_CALIBRATION_TOOLTIP);
    this.setHelpUrl('');
  }
};

Blockly.Blocks['leaf_servo_set_calibration'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.LEAF_SERVO_GET_CALIBRATION_TITLE1);
    this.appendValueInput("servo_pin")
      .setCheck("Servo_Pin")
      .appendField(Blockly.Msg.LEAF_SERVO_SET_CALIBRATION_TITLE2);
    this.appendValueInput("pulse_min")
      .setCheck("Number")
      .appendField(Blockly.Msg.LEAF_SERVO_SET_CALIBRATION_TITLE3);
    this.appendValueInput("pulse_max")
      .setCheck("Number")
      .appendField(Blockly.Msg.LEAF_SERVO_SET_CALIBRATION_TITLE4);
    this.appendValueInput("pulse_centre")
      .setCheck("Number")
      .appendField(Blockly.Msg.LEAF_SERVO_SET_CALIBRATION_TITLE5);
    this.appendValueInput("pulse_angle_90")
      .setCheck("Number")
      .appendField(Blockly.Msg.LEAF_SERVO_SET_CALIBRATION_TITLE6);
    this.appendValueInput("pulse_speed_100")
      .setCheck("Number")
      .appendField(Blockly.Msg.LEAF_SERVO_SET_CALIBRATION_TITLE7);
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Constants.Leaf.RGB);
    this.setTooltip(Blockly.Msg.LEAF_SERVO_SET_CALIBRATION_TOOLTIP);
    this.setHelpUrl('');
  }
};

Blockly.Blocks['leaf_pwm_pulse_width'] = {
  init: function () {
    this.appendValueInput("pwm_pin")
      .setCheck("Pwm_Pin")
      .appendField(Blockly.Msg.LEAF_PWM_PULSE_WIDTH_TITLE1);
    this.appendValueInput("analog_value")
      .setCheck("Number")
      .appendField(Blockly.Msg.LEAF_PWM_PULSE_WIDTH_TITLE2);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Constants.Leaf.RGB);
    this.setTooltip(Blockly.Msg.LEAF_PWM_PULSE_WIDTH_TOOLTIP);
    this.setHelpUrl('');
  }
};

Blockly.Blocks['leaf_pwm_pulse_width_precentage'] = {
  init: function () {
    this.appendValueInput("pwm_pin")
      .setCheck("Pwm_Pin")
      .appendField(Blockly.Msg.LEAF_PWM_PULSE_WIDTH_PRECENTAGE_TITLE1);
    this.appendValueInput("analog_value")
      .setCheck("Number")
      .appendField(Blockly.Msg.LEAF_PWM_PULSE_WIDTH_PRECENTAGE_TITLE2);
    this.appendDummyInput()
      .appendField(Blockly.Msg.LEAF_PWM_PULSE_WIDTH_PRECENTAGE_TITLE3);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Constants.Leaf.RGB);
    this.setTooltip(Blockly.Msg.LEAF_PWM_PULSE_WIDTH_PRECENTAGE_TOOLTIP);
    this.setHelpUrl('');
  }
};

Blockly.Blocks['leaf_freq'] = {
  init: function () {
    this.appendValueInput("pwm_pin")
      .setCheck("Pwm_Pin")
      .appendField(Blockly.Msg.LEAF_PWM_FREQ_TITLE1);
    this.appendValueInput("analog_value")
      .setCheck("Number")
      .appendField(Blockly.Msg.LEAF_PWM_FREQ_TITLE2);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Constants.Leaf.RGB);
    this.setTooltip(Blockly.Msg.LEAF_PWM_FREQ_TOOLTIP);
    this.setHelpUrl('');
  }
};

Blockly.Blocks['leaf_prescaler'] = {
  init: function () {
    this.appendValueInput("pwm_pin")
      .setCheck("Pwm_Pin")
      .appendField(Blockly.Msg.LEAF_PWM_PRESCALER_TITLE1);
    this.appendValueInput("analog_value")
      .setCheck("Number")
      .appendField(Blockly.Msg.LEAF_PWM_PRESCALER_TITLE2);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Constants.Leaf.RGB);
    this.setTooltip(Blockly.Msg.LEAF_PWM_PRESCALER_TOOLTIP);
    this.setHelpUrl('');
  }
};

Blockly.Blocks['leaf_period'] = {
  init: function () {
    this.appendValueInput("pwm_pin")
      .setCheck("Pwm_Pin")
      .appendField(Blockly.Msg.LEAF_PWM_PERIOD_TITLE1);
    this.appendValueInput("analog_value")
      .setCheck("Number")
      .appendField(Blockly.Msg.LEAF_PWM_PERIOD_TITLE2);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Constants.Leaf.RGB);
    this.setTooltip(Blockly.Msg.LEAF_PWM_PERIOD_TOOLTIP);
    this.setHelpUrl('');
  }
};
