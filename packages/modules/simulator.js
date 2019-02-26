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

goog.provide('Blockly.JavaScript.modules');

goog.require('Blockly.JavaScript');


Blockly.JavaScript['modules_ledmodule_set_value'] = function(block) {
    var pin = Blockly.JavaScript.valueToCode(block, 'SIG', Blockly.JavaScript.ORDER_ATOMIC);
    var value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_ATOMIC);

    var code = '';
    code += 'LEDModule_set_value(' + pin + ', ' + value + ')\n';
    return code;
};

Modules.simulator.LEDModule_set_value = function(pin, value) {
    pin = pin.toString();
    value = parseInt(value);
    if (pin.slice(0, 1) == "D") {
        pin = Pin(pin)
        pin.value(value)
    } else if (pin.slice(0, 1) == "P") {
        // value = 4095 - value
        pin = PWM(pin)
        pin.pulse_width(value)
    }
}

Simulator.interpreterFunctions['LEDModule_set_value'] = {
    name: "LEDModule_set_value",
    type: "createNativeFunction",
    func: function(pin, value) {
        Modules.simulator.LEDModule_set_value(pin, value);
    },
}

Blockly.JavaScript['modules_rgbled_set_value'] = function(block) {
    var pin_r = Blockly.JavaScript.valueToCode(block, 'R', Blockly.JavaScript.ORDER_ATOMIC);
    var pin_g = Blockly.JavaScript.valueToCode(block, 'G', Blockly.JavaScript.ORDER_ATOMIC);
    var pin_b = Blockly.JavaScript.valueToCode(block, 'B', Blockly.JavaScript.ORDER_ATOMIC);
    var color = Blockly.JavaScript.valueToCode(block, 'color', Blockly.JavaScript.ORDER_ATOMIC);

    var code = '';
    code += 'RGBLED_set_value(' + pin_r + ', ' + pin_g + ', ' + pin_b + ', ' + color + ')\n';
    return code;
};

Modules.simulator.RGBLED_set_value = function(Rpin, Gpin, Bpin, color, common) {
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
    if (common == 1) { // common anode
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
    func: function(Rpin, Gpin, Bpin, color, common) {
        Modules.simulator.RGBLED_set_value(Rpin, Gpin, Bpin, color, common);
    },
}


Blockly.JavaScript['modules_button_get_value'] = function(block) {
    var pin = Blockly.JavaScript.valueToCode(block, 'SIG', Blockly.JavaScript.ORDER_ATOMIC);

    var code = '';
    code += 'Button_get_value(' + pin + ')';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Modules.simulator.Button_get_value = function(pin) {
    pin = pin.toString();

    pin = Pin(pin)
    var result = pin.value()
    return result
}

Simulator.interpreterFunctions['Button_get_value'] = {
    name: "Button_get_value",
    type: "createNativeFunction",
    func: function(pin) {
        return Modules.simulator.Button_get_value(pin);
    },
}


Blockly.JavaScript['modules_tiltswitch_get_value'] = function(block) {
    var pin = Blockly.JavaScript.valueToCode(block, 'SIG', Blockly.JavaScript.ORDER_ATOMIC);

    var code = '';
    code += 'TiltSwitch_get_value(' + pin + ')';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
Modules.simulator.TiltSwitch_get_value = function(pin) {
    pin = pin.toString();
    pin = Pin(pin);
    var value = pin.value();
    return value;
};

Simulator.interpreterFunctions['TiltSwitch_get_value'] = {
    name: "TiltSwitch_get_value",
    type: "createNativeFunction",
    func: function(pin) {
        return Modules.simulator.TiltSwitch_get_value(pin);
    },
}


Blockly.JavaScript['modules_vibrationswitch_get_value'] = function(block) {
    var pin = Blockly.JavaScript.valueToCode(block, 'SIG', Blockly.JavaScript.ORDER_ATOMIC);

    var code = '';
    code += 'VibrationSwitch_get_value(' + pin + ')';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Modules.simulator.VibrationSwitch_get_value = function(pin) {
    pin = pin.toString();
    pin = Pin(pin);
    var value = pin.value();
    return value;
}

Simulator.interpreterFunctions['VibrationSwitch_get_value'] = {
    name: "VibrationSwitch_get_value",
    type: "createNativeFunction",
    func: function(pin) {
        return Modules.simulator.VibrationSwitch_get_value(pin);
    },
}


Blockly.JavaScript['modules_buzzer_set_value'] = function(block) {
    //digital pin number
    var SIG = Blockly.JavaScript.valueToCode(block, 'SIG', Blockly.JavaScript.ORDER_ATOMIC);
    var note = Blockly.JavaScript.valueToCode(block, 'note', Blockly.JavaScript.ORDER_ATOMIC);
    var beat = Blockly.JavaScript.valueToCode(block, 'beat', Blockly.JavaScript.ORDER_ATOMIC);


    var code = '';
    code += 'Buzzer_play(' + SIG + ', ' + note + ', ' + beat + ')\n';
    return code;
};

Modules.simulator.Buzzer_play = function(pin, note, beat) {
    async function play() {
        pin = pin.toString();
        note = note.toString();
        beat = parseInt(beat);
        var pwm = PWM(pin);
        pwm.freq(note);
        pwm.pulse_width_percentage(50);
        await Simulator.delay(beat);
        pwm.freq(0);
        pwm.pulse_width_percentage(0);
        await Simulator.delay(beat);
    }
    return play()
}

Simulator.interpreterFunctions['Buzzer_play'] = {
    name: "Buzzer_play",
    type: "createAsyncFunction",
    func: function(pin, note, beat, callback) {
        Modules.simulator.Buzzer_play(pin, note, beat).then(callback);
    },
}


Blockly.JavaScript['modules_joystick_get_value'] = function(block) {
    var Xpin = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC);
    var Ypin = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC);
    var BTnpin = Blockly.JavaScript.valueToCode(block, 'Btn', Blockly.JavaScript.ORDER_ATOMIC);
    var joystick = block.getFieldValue('joystick');

    var code = '';
    code += 'Joystick_get_value(' + Xpin + ', ' + Ypin + ', ' + BTnpin + ', ' + joystick + ')';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Modules.simulator.Joystick_get_value = function(Xpin, Ypin, Btpin, pin_select) {
    Xpin = Xpin.toString();
    Ypin = Ypin.toString();
    Btpin = Btpin.toString();
    pin_select = parseInt(pin_select);
    var array = [Xpin, Ypin, Btpin];
    var pin = array[pin_select];
    if (pin_select == 2) {
        var pin = Pin(pin)
        var value = pin.value()
    } else {
        var adc = ADC(pin);
        var value = adc.read();
    };
    return value;
};

Simulator.interpreterFunctions['Joystick_get_value'] = {
    name: "Joystick_get_value",
    type: "createNativeFunction",
    func: function(Xpin, Ypin, Btpin, pin_select) {
        return Modules.simulator.Joystick_get_value(Xpin, Ypin, Btpin, pin_select);
    },
}

Blockly.JavaScript['modules_joystick_get_status'] = function(block) {
    var Xpin = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC);
    var Ypin = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC);
    var BTnpin = Blockly.JavaScript.valueToCode(block, 'Btn', Blockly.JavaScript.ORDER_ATOMIC);

    var code = '';
    code += 'Joystick_get_status(' + Xpin + ', ' + Ypin + ', ' + BTnpin + ')';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Modules.simulator.Joystick_get_status = function(Xpin, Ypin, Btpin) {
    Xpin = Xpin.toString();
    Ypin = Ypin.toString();
    Btpin = Btpin.toString();
    var X = ADC(Xpin);
    var Y = ADC(Ypin);
    var Bt = Pin(Btpin);
    var state = ['home', 'up', 'down', 'left', 'right', 'pressed'];
    var i = 0;
    if (X.read() <= 1024) {
        i = 1; //up
    } else if (X.read() >= 3072) {
        i = 2; //down
    } else if (Y.read() <= 1024) {
        i = 3; //right
    } else if (Y.read() >= 3072) {
        i = 4; //left
    } else if (Bt.value() == 0) {
        i = 5; // Button pressed
    }
    if (read() > 1024 && X.read() < 3072 &&
        Y.read() > 1024 && Y.read() < 3072 &&
        Bt.value() == 1) {
        i = 0;
    }
    return state[i];
};

Simulator.interpreterFunctions['Joystick_get_status'] = {
    name: "Joystick_get_status",
    type: "createNativeFunction",
    func: function(Xpin, Ypin, Btpin) {
        return Modules.simulator.Joystick_get_status(Xpin, Ypin, Btpin);
    },
}


Blockly.JavaScript['modules_potentiometer_get_value'] = function(block) {
    var pin = Blockly.JavaScript.valueToCode(block, 'SIG', Blockly.JavaScript.ORDER_ATOMIC);

    var code = '';
    code += 'Potentiometer_get_value(' + pin + ')';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Modules.simulator.Potentiometer_get_value = function(pin) {
    pin = pin.toString();
    var adc = ADC(pin);
    var value = adc.read();
    return value;
}

Simulator.interpreterFunctions['Potentiometer_get_value'] = {
    name: "Potentiometer_get_value",
    type: "createNativeFunction",
    func: function(pin) {
        return Modules.simulator.Potentiometer_get_value(pin);
    },
}



Blockly.JavaScript['modules_soundsensor_get_value'] = function(block) {
    var pin = Blockly.JavaScript.valueToCode(block, 'SIG', Blockly.JavaScript.ORDER_ATOMIC);

    var code = '';
    code += 'SoundSensor_get_value(' + pin + ')';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Modules.simulator.SoundSensor_get_value = function(pin) {
    pin = pin.toString();
    var adc = ADC(pin);
    var value_list = [];
    var sum = 0;
    for (i = 0; i < 50; i++) {
        var value = adc.read();
        value_list.push(value);
    }
    value_list.forEach(function(item) {
        sum += parseInt(item);
    })
    value = sum / 50.0;
    return value;
}

Simulator.interpreterFunctions['SoundSensor_get_value'] = {
    name: "SoundSensor_get_value",
    type: "createNativeFunction",
    func: function(pin) {
        return Modules.simulator.SoundSensor_get_value(pin);
    },
}


Blockly.JavaScript['modules_photoresistor_get_value'] = function(block) {
    var pin = Blockly.JavaScript.valueToCode(block, 'SIG', Blockly.JavaScript.ORDER_ATOMIC);

    var code = '';
    code += 'Photoresistor_get_value(' + pin + ')';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Modules.simulator.Photoresistor_get_value = function(pin) {
    pin = pin.toString();
    var adc = ADC(pin);
    var value = adc.read();
    return value;
}

Simulator.interpreterFunctions['Photoresistor_get_value'] = {
    name: "Photoresistor_get_value",
    type: "createNativeFunction",
    func: function(pin) {
        return Modules.simulator.Photoresistor_get_value(pin);
    },
}


Blockly.JavaScript['modules_touchswitch_get_value'] = function(block) {
    var pin = Blockly.JavaScript.valueToCode(block, 'SIG', Blockly.JavaScript.ORDER_ATOMIC);

    var code = '';
    code += 'TouchSwitch_get_value(' + pin + ')';
    return [code, Blockly.JavaScript.ORDER_NONE];
};
Modules.simulator.TouchSwitch_get_value = function(pin) {
    pin = pin.toString();
    pin = Pin(pin);
    var value = pin.value();
    return value;
};

Simulator.interpreterFunctions['TouchSwitch_get_value'] = {
    name: "TouchSwitch_get_value",
    type: "createNativeFunction",
    func: function(pin) {
        return Modules.simulator.TouchSwitch_get_value(pin);
    },
}


Blockly.JavaScript['modules_ultrasonic_get_value'] = function(block) {
    var pin_trig = Blockly.JavaScript.valueToCode(block, 'Trig', Blockly.JavaScript.ORDER_ATOMIC);
    var pin_echo = Blockly.JavaScript.valueToCode(block, 'Echo', Blockly.JavaScript.ORDER_ATOMIC);

    var code = '';
    var code = 'UltrasonicSensor_get_value(' + pin_trig + ', ' + pin_echo + ')';
    return [code, Blockly.JavaScript.ORDER_NONE];
};

// Modules.simulator.UltrasonicSensor_get_value = function(trig, echo, timeout) {
//     trig = trig.toString();
//     echo = trig.toString();
//     if (timeout === undefined) {
//         timeout = 0.02;
//     } else {
//         timeout = parseFloat(timeout);
//     }
//     trig = Pin(trig);
//     echo = Pin(echo);
//     trig.low();
//     time.sleep(0.01);
//     trig.high();
//     time.sleep(0.00001);
//     trig.low();
//     var pulse_end = 0;
//     var timeout_start = time.time();
//     while (echo.value() == 0) {
//         var pulse_start = time.time();
//         if (pulse_start - timeout_start > timeout) {
//             return -1;
//         }
//     }
//     while (echo.value() == 1) {
//         var pulse_end = time.time();
//         if (pulse_end - timeout_start > timeout) {
//             return -1;
//         }
//     }
//     var during = pulse_end - pulse_start;
//     return during * 340 / 2 * 100;
// };

Modules.simulator.UltrasonicSensor_get_value = function(trig) {
    trig = trig.toString();
    pin = Pin(trig);
    var value = pin.value();
    value = value / 5.0 * 700
    return value + 'mm';
};

Simulator.interpreterFunctions['UltrasonicSensor_get_value'] = {
    name: "UltrasonicSensor_get_value",
    type: "createNativeFunction",
    func: function(trig) {
        return Modules.simulator.UltrasonicSensor_get_value(trig);
    },
}

Blockly.JavaScript['modules_ds18b20_get_value'] = function(block) {
    var pin = Blockly.JavaScript.valueToCode(block, 'SIG', Blockly.JavaScript.ORDER_ATOMIC);

    var code = '';
    code += 'DS18B20_get_value(' + pin + ')';
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Modules.simulator.DS18B20_get_value = function(pin) {
    pin = pin.toString();
    var adc = ADC(pin);
    var value = adc.read();
    // value = value / 5.0 * 180 - 55
    return value + '℃';
};



Simulator.interpreterFunctions['DS18B20_get_value'] = {
    name: "DS18B20_get_value",
    type: "createNativeFunction",
    func: function(pin) {
        return Modules.simulator.DS18B20_get_value(pin);
    },
}

Blockly.JavaScript['modules_servo_set_angle'] = function(block) {
    var pin = Blockly.JavaScript.valueToCode(block, 'SIG', Blockly.JavaScript.ORDER_ATOMIC);
    var angle = Blockly.JavaScript.valueToCode(block, 'angle', Blockly.JavaScript.ORDER_ATOMIC);

    var code = '';
    code += 'Servo_set_value(' + pin + ', ' + angle + ')\n';
    return code;
};

Modules.simulator.Servo_set_value = function(pin, angle) {
    pin = pin.toString();
    angle = parseInt(angle);
    var MIN_PW = 500;
    var MAX_PW = 2500;
    var p_out = PWM(pin);
    if (angle < -90) {
        angle = -90;
    }
    if (angle > 90) {
        angle = 90;
    }
    var High_level_time = (angle - (-90)) * (MAX_PW - MIN_PW) / (90 - (-90)) + MIN_PW;
    var pwr = High_level_time / 20000;
    var value = parseInt(pwr * 4095);
    p_out.pulse_width(value);
};

Simulator.interpreterFunctions['Servo_set_value'] = {
    name: "Servo_set_value",
    type: "createNativeFunction",
    func: function(pin, angle) {
        return Modules.simulator.Servo_set_value(pin, angle);
    },
}

Blockly.JavaScript['modules_moisturesensor_get_value'] = function(block) {
    var pin = Blockly.JavaScript.valueToCode(block, 'SIG', Blockly.JavaScript.ORDER_ATOMIC);

    var code = '';
    code += 'MoistureSensor_get_value(' + pin + ')';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Modules.simulator.MoistureSensor_get_value = function(pin) {
    pin = pin.toString();
    var adc = ADC(pin);
    var value = adc.read();
    return value;
}

Simulator.interpreterFunctions['MoistureSensor_get_value'] = {
    name: "MoistureSensor_get_value",
    type: "createNativeFunction",
    func: function(pin) {
        return Modules.simulator.MoistureSensor_get_value(pin);
    },
}



Blockly.JavaScript['modules_adxl345_get_value'] = function(block) {

    var code = '';
    code += 'ADXL345_get_value()';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Modules.simulator.ADXL345_get_value = function() {};

Simulator.interpreterFunctions['ADXL345_get_value'] = {
    name: "ADXL345_get_value",
    type: "createNativeFunction",
    func: function() {
        return Modules.simulator.ADXL345_get_value();
    },
}