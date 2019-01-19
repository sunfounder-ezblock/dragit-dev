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
 * For output: return [code, Blockly.JavaScript.ORDER_ATOMIC];
 */

'use strict';

goog.provide('Blockly.JavaScript.sensorkit');

goog.require('Blockly.JavaScript');


Blockly.JavaScript['sensorkit_led_module_set_value'] = function (block) {
    var pin = Blockly.JavaScript.valueToCode(block, 'SIG', Blockly.JavaScript.ORDER_ATOMIC);
    var value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_ATOMIC);

    var code = '';
    code += 'LEDModule_set_value(' + pin + ', ' + value + ')\n';
    return code;
};

SensorKit.simulator.LEDModule_set_value = function (pin, value) {
    pin = pin.toString();
    value = value.toInt();

    pin = Pin(pin)
    pin.value(value)
}

Simulator.interpreterFunctions['LEDModule_set_value'] = {
    name: "LEDModule_set_value",
    type: "createNativeFunction",
    func: function (pin, value) {
        SensorKit.simulator.LEDModule_set_value(pin, value);
    },
}


Blockly.JavaScript['sensorkit_rgb_set_value'] = function (block) {
    var pin_r = Blockly.JavaScript.valueToCode(block, 'R', Blockly.JavaScript.ORDER_ATOMIC);
    var pin_g = Blockly.JavaScript.valueToCode(block, 'G', Blockly.JavaScript.ORDER_ATOMIC);
    var pin_b = Blockly.JavaScript.valueToCode(block, 'B', Blockly.JavaScript.ORDER_ATOMIC);
    var color = Blockly.JavaScript.valueToCode(block, 'color', Blockly.JavaScript.ORDER_ATOMIC);

    var code = '';
    code += 'RGBLED_set_value(' + pin_r + ', ' + pin_g + ', ' + pin_b + ', ' + color + ')\n';
    return code;
};

SensorKit.simulator.RGBLED_set_value = function (Rpin, Gpin, Bpin, color, common) {
    Rpin = Rpin.toString();
    Gpin = Gpin.toString();
    Bpin = Bpin.toString();
    color = color.toString();
    if (common === undefined) {
        common = 1;
    } else {
        common = common.toString();
    }

    Rpin = PWM(Rpin);
    Gpin = PWM(Gpin);
    Bpin = PWM(Bpin);
    color = color.slice(1);
    var col = parseInt(color, 16);
    var R_val = (col & 0xff0000) >> 16;
    var G_val = (col & 0x00ff00) >> 8;
    var B_val = (col & 0x0000ff) >> 0;
    var val = [R_val, G_val, B_val];

    for (var i = 0; i < 3; i++) {
        val[i] = val[i] / 255.0 * 4095.0; // 0 - 255 map 0 - 4095
    }
    if (common == 1) {
        ; // common anode
        R_val = 4095 - val[0];
        G_val = 4095 - val[1];
        B_val = 4095 - val[2];
    }
    Rpin.pulse_width(R_val);
    Gpin.pulse_width(G_val);
    Bpin.pulse_width(B_val);
}

Simulator.interpreterFunctions['RGBLED_set_value'] = {
    name: "RGBLED_set_value",
    type: "createNativeFunction",
    func: function (Rpin, Gpin, Bpin, color, common) {
        SensorKit.simulator.RGBLED_set_value(Rpin, Gpin, Bpin, color, common);
    },
}


Blockly.JavaScript['sensorkit_button_get_value'] = function (block) {
    var pin = Blockly.JavaScript.valueToCode(block, 'SIG', Blockly.JavaScript.ORDER_ATOMIC);

    var code = '';
    code += 'Button_get_value(' + pin + ')';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

SensorKit.simulator.Button_get_value = function (pin) {
    pin = pin.toString();

    pin = Pin(pin)
    var result = pin.value()
    return result
}

Simulator.interpreterFunctions['Button_get_value'] = {
    name: "Button_get_value",
    type: "createNativeFunction",
    func: function (pin) {
        return SensorKit.simulator.Button_get_value(pin);
    },
}


Blockly.JavaScript['sensorkit_tiltswitch_get_value'] = function (block) {
    var pin = Blockly.JavaScript.valueToCode(block, 'SIG', Blockly.JavaScript.ORDER_ATOMIC);

    var code = '';
    code += 'TiltSwitch_get_value(' + pin + ')';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['sensorkit_vibrationswitch_get_value'] = function (block) {
    var pin = Blockly.JavaScript.valueToCode(block, 'SIG', Blockly.JavaScript.ORDER_ATOMIC);

    var code = '';
    code += 'VibrationSwitch_get_value(' + pin + ')';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['sensorkit_buzzer_set_value'] = function (block) {
    //digital pin number
    var SIG = Blockly.JavaScript.valueToCode(block, 'SIG', Blockly.JavaScript.ORDER_ATOMIC);
    var note = Blockly.JavaScript.valueToCode(block, 'note', Blockly.JavaScript.ORDER_ATOMIC);
    var beat = Blockly.JavaScript.valueToCode(block, 'beat', Blockly.JavaScript.ORDER_ATOMIC);


    var code = '';
    code += 'Buzzer_play(' + SIG + ', ' + note + ', ' + beat + ')\n';
    return code;
};

Blockly.JavaScript['sensorkit_joystick_get_value'] = function (block) {
    var Xpin = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC);
    var Ypin = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC);
    var BTnpin = Blockly.JavaScript.valueToCode(block, 'Btn', Blockly.JavaScript.ORDER_ATOMIC);

    var code = '';
    code += 'Joystick_get_value(' + Xpin + ', ' + Ypin + ', ' + BTnpin + ')';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['sensorkit_joystick_get_status'] = function (block) {
    var Xpin = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC);
    var Ypin = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC);
    var BTnpin = Blockly.JavaScript.valueToCode(block, 'Btn', Blockly.JavaScript.ORDER_ATOMIC);

    var code = '';
    code += 'Joystick_get_status(' + Xpin + ', ' + Ypin + ', ' + BTnpin + ')';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['sensorkit_potentiometer_get_value'] = function (block) {
    var pin = Blockly.JavaScript.valueToCode(block, 'SIG', Blockly.JavaScript.ORDER_ATOMIC);

    var code = '';
    code += 'Potentiometer_get_value(' + pin + ')';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['sensorkit_soundsensor_get_value'] = function (block) {
    var pin = Blockly.JavaScript.valueToCode(block, 'SIG', Blockly.JavaScript.ORDER_ATOMIC);

    var code = '';
    code += 'SoundSensor_get_value(' + pin + ')';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['sensorkit_photoresistor_get_value'] = function (block) {
    var pin = Blockly.JavaScript.valueToCode(block, 'SIG', Blockly.JavaScript.ORDER_ATOMIC);

    var code = '';
    code += 'Photoresistor_get_value(' + pin + ')';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['sensorkit_touchswitch_get_value'] = function (block) {
    var pin = Blockly.JavaScript.valueToCode(block, 'SIG', Blockly.JavaScript.ORDER_ATOMIC);

    var code = '';
    code += 'TouchSwitch_get_value(' + pin + ')';
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['sensorkit_ultrasonic_get_value'] = function (block) {
    var pin_trig = Blockly.JavaScript.valueToCode(block, 'Trig', Blockly.JavaScript.ORDER_ATOMIC);
    var pin_echo = Blockly.JavaScript.valueToCode(block, 'Echo', Blockly.JavaScript.ORDER_ATOMIC);

    var code = '';
    var code = 'UltrasonicSensor_get_value(' + pin_trig + ', ' + pin_echo + ')';
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['sensorkit_ds18b20_get_value'] = function (block) {
    var pin = Blockly.JavaScript.valueToCode(block, 'SIG', Blockly.JavaScript.ORDER_ATOMIC);

    var code = '';
    code += 'DS18B20_get_value(' + pin + ')';
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['sensorkit_servo_set_angle'] = function (block) {
    var pin = Blockly.JavaScript.valueToCode(block, 'SIG', Blockly.JavaScript.ORDER_ATOMIC);
    var angle = Blockly.JavaScript.valueToCode(block, 'angle', Blockly.JavaScript.ORDER_ATOMIC);

    var code = '';
    code += 'Servo_set_value(' + pin + ', ' + angle + ')\n';
    return code;
};

Blockly.JavaScript['sensorkit_moisture_sensor_get_value'] = function (block) {
    var pin = Blockly.JavaScript.valueToCode(block, 'SIG', Blockly.JavaScript.ORDER_ATOMIC);

    var code = '';
    code += 'MoistureSensor_get_value(' + pin + ')';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['sensorkit_adxl345_get_value'] = function (block) {

    var code = '';
    code += 'ADXL345_get_value()';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

/*
function Button_get_value(pin){
	pin = Pin(pin)
	var value = pin.value()
	if (value == 1){
        value = 0
    }
	else{
        value = 1
    }
	return value
};

function Buzzer_play(pin, note, beat){
    import time
    pwm = PWM(pin)
	pwm.freq(note)
	pwm.pulse_width_percentage(50)
	delay(beat)
	pwm.pulse_width_percentage(0)
}

function TiltSwitch_get_value(pin){
	pin = Pin(pin)
	var value = pin.value()
	if (value == 1){
        value = 0
    }
	else{
        value = 1
    }
	return value
};

function MoistureSensor_get_value(pin){
	adc = ADC(pin)
	value = adc.read()
	return value
}
*/