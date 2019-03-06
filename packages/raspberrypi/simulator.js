'use strict';

goog.provide('Blockly.JavaScript.raspberrypi');

goog.require('Blockly.JavaScript');

//#################################################
// class Pin – control I/O pins
//#################################################
// ---- raspberrypi constants generator ---- //

// digital pin number
Blockly.JavaScript['raspberrypi_digital_pin'] = function(block) {
    var pin = block.getFieldValue('pin');

    'from raspberrypi import Pin';

    var code = '';
    code += pin;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
// analog pin number
Blockly.JavaScript['raspberrypi_analog_pin'] = function(block) {
    var pin = block.getFieldValue('pin');

    'from raspberrypi import ADC';

    var code = '';
    code += pin;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// device pin number
Blockly.JavaScript['raspberrypi_device_pin'] = function(block) {
    var pin = block.getFieldValue('pin');

    var code = '';
    code += pin;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
// pwm pin number
Blockly.JavaScript['raspberrypi_pwm_pin'] = function(block) {
    var pin = block.getFieldValue('pin');

    var code = '';
    code += pin;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['raspberrypi_pin_irq_trigger'] = function(block) {
    var trigger = block.getFieldValue('irq_trigger');

    var code = '';
    code += trigger;

    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// ---- Pin functions generator ---- //
Blockly.JavaScript['raspberrypi_pin_set_value'] = function(block) {
    var pin = Blockly.JavaScript.valueToCode(block, 'pin', Blockly.JavaScript.ORDER_ATOMIC);
    var value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_ATOMIC);

    if (pin.startsWith('"D') || (pin in ['LED', 'SW'])) {
        var obj = 'Pin(' + pin + ')';
        var setValue = 'value';
    } else if (pin.startsWith('"P')) {
        var obj = 'PWM(' + pin + ')';
        var setValue = 'pulse_width';
    }

    var code = '';
    var code = obj + '.' + setValue + '(' + value + ')\n';
    return code;
};

Blockly.JavaScript['raspberrypi_pin_get_value'] = function(block) {
    var pin =
        Blockly.JavaScript.valueToCode(block, 'pin', Blockly.JavaScript.ORDER_ATOMIC);

    if (pin.startsWith('"D') || (pin in ['LED', 'SW'])) {
        var obj = 'Pin(' + pin + ')';
        var getValue = 'value';
    } else if (pin.startsWith('"A')) {
        var obj = 'ADC(' + pin + ')';
        var getValue = 'read';
    }

    var code = '';
    code += obj + '.' + getValue + '()\n';
    return [code, Blockly.JavaScript.ORDER_NONE];
};


Blockly.JavaScript['raspberrypi_pin_on'] = function(block) {
    var pin = Blockly.JavaScript.valueToCode(block, 'pin', Blockly.JavaScript.ORDER_ATOMIC);


    var code = 'Pin(' + pin + ').on()\n';

    return code;
};

Blockly.JavaScript['raspberrypi_pin_off'] = function(block) {
    var pin = Blockly.JavaScript.valueToCode(block, 'pin', Blockly.JavaScript.ORDER_ATOMIC);


    var code = 'Pin(' + pin + ').off()\n';

    return code;
};

Blockly.JavaScript['raspberrypi_pin_irq'] = function(block) {
    var pin = Blockly.JavaScript.valueToCode(block, 'irq_pin', Blockly.JavaScript.ORDER_ATOMIC);
    var trigger = Blockly.JavaScript.valueToCode(block, 'irq_trigger', Blockly.JavaScript.ORDER_ATOMIC);
    var statements_irq_handler = Blockly.JavaScript.statementToCode(block, 'irq_handler');

    var callback_function = 'callback_' + pin.replace('(', '').replace(')', '');

    var code = '';
    code += 'def ' + callback_function + '(chn):\n';
    code += statements_irq_handler + '\n';
    code += 'Pin(' + pin + ').irq(' + callback_function + ', ' + trigger + ')\n';

    return code;
};

Blockly.JavaScript['raspberrypi_servo_set_angle'] = function(block) {
    var value_pin = Blockly.JavaScript.valueToCode(block, 'servo_pin', Blockly.JavaScript.ORDER_ATOMIC);
    var value_angle = Blockly.JavaScript.valueToCode(block, 'angle', Blockly.JavaScript.ORDER_ATOMIC);


    var code = 'Servo(' + value_pin + ').angle(' + value_angle + ')\n';

    return code;
};


Blockly.JavaScript['raspberrypi_taskmgr'] = function(block) {
    var taskmgr = block.getFieldValue('taskmgr');

    var code = '';
    code += 'Taskmgr().' + taskmgr + '()\n';
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['raspberrypi_connect_wifi'] = function(block) {
    var country = Blockly.JavaScript.valueToCode(block, 'country', Blockly.JavaScript.ORDER_ATOMIC);
    var ssid = Blockly.JavaScript.valueToCode(block, 'ssid', Blockly.JavaScript.ORDER_ATOMIC);
    var password = Blockly.JavaScript.valueToCode(block, 'password', Blockly.JavaScript.ORDER_ATOMIC);


    var code = '';
    var code = 'WiFi(' + country + ', ' + ssid + '，' + password + ').write()\n';
    return code;
};

// I2C  SPI
Blockly.JavaScript['raspberrypi_write_i2c'] = function(block) {
    var address = Blockly.JavaScript.valueToCode(block, 'address', Blockly.JavaScript.ORDER_ATOMIC);
    var Register_address = Blockly.JavaScript.valueToCode(block, 'Register_address', Blockly.JavaScript.ORDER_ATOMIC);

    var code = '';
    var code = 'I2C().send(' + address + ', ' + Register_address + ')\n';
    return code;
};

// Blockly.JavaScript['raspberrypi_write_i2c'] = function(block) {
//     var  = Blockly.JavaScript.valueToCode(block, 'address',
//     Blockly.JavaScript.ORDER_ATOMIC); var Register_address =
//     Blockly.JavaScript.valueToCode(block, 'Register_address',
//     Blockly.JavaScript.ORDER_ATOMIC); var data =
//     Blockly.JavaScript.valueToCode(block, '', Blockly.JavaScript.ORDER_ATOMIC);

//     var code = '';
//     var code = 'I2C().send(' + Register_address + ', ' + address + ')\n';
//     return code;
// };

Blockly.JavaScript['raspberrypi_read_i2c'] = function(block) {
    var data = Blockly.JavaScript.valueToCode(block, 'data', Blockly.JavaScript.ORDER_ATOMIC);

    var code = '';
    var code = 'I2C().recv(' + data + ')\n';
    return code;
};

Blockly.JavaScript['raspberrypi_spi'] = function(block) {
    var bus = Blockly.JavaScript.valueToCode(block, 'bus', Blockly.JavaScript.ORDER_ATOMIC);
    var device = Blockly.JavaScript.valueToCode(block, 'device', Blockly.JavaScript.ORDER_ATOMIC);

    var code = '';
    var code = 'SPI(' + bus + ', ' + device + ')\n';
    return code;
};



Blockly.JavaScript['raspberrypi_i2c_is_ready'] = function(block) {
    var address = Blockly.JavaScript.valueToCode(block, 'address', Blockly.JavaScript.ORDER_ATOMIC);

    var code = '';
    var code = 'I2C().is_ready(' + address + ')\n';
    return [code, Blockly.JavaScript.ORDER_NONE];
};


Blockly.JavaScript['raspberrypi_i2c_scan'] = function(block) {
    var code = '';
    var code = 'I2C().scan()\n';
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['raspberrypi_i2c_send'] = function(block) {
    var send = Blockly.JavaScript.valueToCode(block, 'send', Blockly.JavaScript.ORDER_ATOMIC);
    var addr = Blockly.JavaScript.valueToCode(block, 'addr', Blockly.JavaScript.ORDER_ATOMIC);

    var code = '';
    var code = 'I2C().send(' + send + ', ' + addr + ')\n';
    return code;
};


Blockly.JavaScript['raspberrypi_i2c_recv'] = function(block) {
    var recv = Blockly.JavaScript.valueToCode(block, 'recv', Blockly.JavaScript.ORDER_ATOMIC);
    var addr = Blockly.JavaScript.valueToCode(block, 'addr', Blockly.JavaScript.ORDER_ATOMIC);

    var code = '';
    var code = 'I2C().recv(' + recv + ', ' + addr + ')\n';
    return [code, Blockly.JavaScript.ORDER_NONE];
};


Blockly.JavaScript['raspberrypi_i2c_mem_write'] = function(block) {
    var data = Blockly.JavaScript.valueToCode(block, 'data', Blockly.JavaScript.ORDER_ATOMIC);
    var addr = Blockly.JavaScript.valueToCode(block, 'addr', Blockly.JavaScript.ORDER_ATOMIC);
    var memaddr = Blockly.JavaScript.valueToCode(block, 'memaddr', Blockly.JavaScript.ORDER_ATOMIC);

    var code = '';
    var code = 'I2C().mem_write(' + data + ', ' + addr + ', ' + memaddr + ')\n';
    return code;
};


Blockly.JavaScript['raspberrypi_i2c_mem_read'] = function(block) {
    var data = Blockly.JavaScript.valueToCode(block, 'data', Blockly.JavaScript.ORDER_ATOMIC);
    var addr = Blockly.JavaScript.valueToCode(block, 'addr', Blockly.JavaScript.ORDER_ATOMIC);
    var memaddr = Blockly.JavaScript.valueToCode(block, 'memaddr', Blockly.JavaScript.ORDER_ATOMIC);

    var code = '';
    var code = 'I2C().mem_read(' + data + ', ' + addr + ', ' + memaddr + ')\n';
    return [code, Blockly.JavaScript.ORDER_NONE];
};



// PWM
Blockly.JavaScript['raspberrypi_pwm_pulse_width'] = function(block) {
    var value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_ATOMIC);
    var code = '';
    var code = 'pulse_width(' + value + ')\n';
    return code
};


Blockly.JavaScript['raspberrypi_pwm_pulse_width_percentage'] = function(block) {
    var value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_ATOMIC);
    var code = '';
    var code = 'pulse_width_percentage(' + value + ')\n';
    return code
}