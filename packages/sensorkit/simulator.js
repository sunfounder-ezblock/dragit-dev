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


Blockly.JavaScript['sensorkit_led_module_set_value'] = function(block) {
    var pin = Blockly.JavaScript.valueToCode(block, 'SIG', Blockly.JavaScript.ORDER_ATOMIC);
    var value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_ATOMIC);

    var code = '';
    code += 'LEDModule_set_value(' + pin + ', ' + value + ')\n';
    return code;
};

Blockly.JavaScript['sensorkit_rgb_set_value'] = function(block) {
    var pin_r = Blockly.JavaScript.valueToCode(block, 'R', Blockly.JavaScript.ORDER_ATOMIC);
    var pin_g = Blockly.JavaScript.valueToCode(block, 'G', Blockly.JavaScript.ORDER_ATOMIC);
    var pin_b = Blockly.JavaScript.valueToCode(block, 'B', Blockly.JavaScript.ORDER_ATOMIC);
    var color = Blockly.JavaScript.valueToCode(block, 'color', Blockly.JavaScript.ORDER_ATOMIC);

    var code = '';
    code += 'RGBLED_set_value(' + pin_r + ', ' + pin_g + ', ' + pin_b + ', ' + color + ')\n';
    return code;
};

Blockly.JavaScript['sensorkit_button_get_value'] = function(block) {
    var pin = Blockly.JavaScript.valueToCode(block, 'SIG', Blockly.JavaScript.ORDER_ATOMIC);

    var code = '';
    code += 'Button_get_value(' + pin + ')';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['sensorkit_tiltswitch_get_value'] = function(block) {
    var pin = Blockly.JavaScript.valueToCode(block, 'SIG', Blockly.JavaScript.ORDER_ATOMIC);

    var code = '';
    code += 'TiltSwitch_get_value(' + pin + ')';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['sensorkit_vibrationswitch_get_value'] = function(block) {
    var pin = Blockly.JavaScript.valueToCode(block, 'SIG', Blockly.JavaScript.ORDER_ATOMIC);

    var code = '';
    code += 'VibrationSwitch_get_value(' + pin + ')';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['sensorkit_buzzer_set_value'] = function(block) {
    //digital pin number
    var SIG = Blockly.JavaScript.valueToCode(block, 'SIG', Blockly.JavaScript.ORDER_ATOMIC);
    var note = Blockly.JavaScript.valueToCode(block, 'note', Blockly.JavaScript.ORDER_ATOMIC);
    var beat = Blockly.JavaScript.valueToCode(block, 'beat', Blockly.JavaScript.ORDER_ATOMIC);


    var code = '';
    code += 'Buzzer_play(' + SIG + ', ' + note + ', ' + beat + ')\n';
    return code;
};

Blockly.JavaScript['sensorkit_joystick_get_value'] = function(block) {
    var Xpin = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC);
    var Ypin = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC);
    var BTnpin = Blockly.JavaScript.valueToCode(block, 'Btn', Blockly.JavaScript.ORDER_ATOMIC);

    var code = '';
    code += 'Joystick_get_value(' + Xpin + ', ' + Ypin + ', ' + BTnpin + ')';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['sensorkit_joystick_get_status'] = function(block) {
    var Xpin = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC);
    var Ypin = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC);
    var BTnpin = Blockly.JavaScript.valueToCode(block, 'Btn', Blockly.JavaScript.ORDER_ATOMIC);

    var code = '';
    code += 'Joystick_get_status(' + Xpin + ', ' + Ypin + ', ' + BTnpin + ')';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['sensorkit_potentiometer_get_value'] = function(block) {
    var pin = Blockly.JavaScript.valueToCode(block, 'SIG', Blockly.JavaScript.ORDER_ATOMIC);

    var code = '';
    code += 'Potentiometer_get_value(' + pin + ')';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['sensorkit_soundsensor_get_value'] = function(block) {
    var pin = Blockly.JavaScript.valueToCode(block, 'SIG', Blockly.JavaScript.ORDER_ATOMIC);

    var code = '';
    code += 'SoundSensor_get_value(' + pin + ')';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['sensorkit_photoresistor_get_value'] = function(block) {
    var pin = Blockly.JavaScript.valueToCode(block, 'SIG', Blockly.JavaScript.ORDER_ATOMIC);

    var code = '';
    code += 'Photoresistor_get_value(' + pin + ')';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['sensorkit_touchswitch_get_value'] = function(block) {
    var pin = Blockly.JavaScript.valueToCode(block, 'SIG', Blockly.JavaScript.ORDER_ATOMIC);

    var code = '';
    code += 'TouchSwitch_get_value(' + pin + ')';
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['sensorkit_ultrasonic_get_value'] = function(block) {
    var pin_trig = Blockly.JavaScript.valueToCode(block, 'Trig', Blockly.JavaScript.ORDER_ATOMIC);
    var pin_echo = Blockly.JavaScript.valueToCode(block, 'Echo', Blockly.JavaScript.ORDER_ATOMIC);

    var code = '';
    var code = 'UltrasonicSensor_get_value(' + pin_trig + ', ' + pin_echo + ')';
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['sensorkit_ds18b20_get_value'] = function(block) {
    var pin = Blockly.JavaScript.valueToCode(block, 'SIG', Blockly.JavaScript.ORDER_ATOMIC);

    var code = '';
    code += 'DS18B20_get_value(' + pin + ')';
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['sensorkit_servo_set_angle'] = function(block) {
    var pin = Blockly.JavaScript.valueToCode(block, 'SIG', Blockly.JavaScript.ORDER_ATOMIC);
    var angle = Blockly.JavaScript.valueToCode(block, 'angle', Blockly.JavaScript.ORDER_ATOMIC);

    var code = '';
    code += 'Servo_set_value(' + pin + ', ' + angle + ')\n';
    return code;
};

Blockly.JavaScript['sensorkit_moisture_sensor_get_value'] = function(block) {
    var pin = Blockly.JavaScript.valueToCode(block, 'SIG', Blockly.JavaScript.ORDER_ATOMIC);

    var code = '';
    code += 'MoistureSensor_get_value(' + pin + ')';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['sensorkit_adxl345_get_value'] = function(block) {

    var code = '';
    code += 'ADXL345_get_value()';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

function RGBLED_set_value(Rpin, Gpin, Bpin, color, common = 1) {
    Rpin = PWM(Rpin)
    Gpin = PWM(Gpin)
    Bpin = PWM(Bpin)
    color = color.slice(1)
    var col = parseInt(color, 16)
    var R_val = (col & 0xff0000) >> 16
    var G_val = (col & 0x00ff00) >> 8
    var B_val = (col & 0x0000ff) >> 0
    var val = [R_val, G_val, B_val]

    for (var i = 0; i < 3; i++) {
        val[i] = val[i] / 255.0 * 4095.0 // 0 - 255 map 0 - 4095
    }
    if (common == 1) { // common anode
        R_val = 4095 - val[0]
        G_val = 4095 - val[1]
        B_val = 4095 - val[2]
    }
    Rpin.pulse_width(R_val)
    Gpin.pulse_width(G_val)
    Bpin.pulse_width(B_val)
}

/*
function LEDModule_set_value(pin, value) {
    pin = Pin(pin)
	pin.value(value)
}

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
    var pwm = PWM(pin)
	var pwm.freq(note)
	var pwm.pulse_width_percentage(50)
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
	var adc = ADC(pin)
	value = adc.read()
	return value
}

function Potentiometer_get_value(pin) {
	var adc = ADC(pin)
	value = adc.read()
	return value
}

function UltrasonicSensor_get_value(trig, echo, timeout=0.02){
	trig = Pin(trig)
	echo = Pin(echo)
	trig.low()
	time.sleep(0.01)
	trig.high()
	time.sleep(0.00001)
	trig.low()
	var pulse_end = 0
	var timeout_start = time.time()
	while (echo.value()==0){
		var pulse_start = time.time()
		if (pulse_start - timeout_start > timeout){
            return -1
        }
    }
	while (echo.value()==1){
		pulse_end = time.time()
		if (pulse_end - timeout_start > timeout){
            return -1
        }
    }
    var during = (((pulse_end - pulse_start) * 340) / 2) * 100
    
	return during
}

function SoundSensor_get_value(pin){
	var adc = ADC(pin)
	var value_list = []
	for (var i=0; i<50; i++){
		var value = adc.read()
        value_list.append(value)
    }
	value = sum(value_list)/50.0
	return value
}

function Photoresistor_get_value(pin){
	var adc = ADC(pin)
	var value = adc.read()
	return value
}

function VibrationSwitch_get_value(pin){
	pin = Pin(pin)
	var value = pin.value()
	return value
}

function Joystick_get_value()
*/