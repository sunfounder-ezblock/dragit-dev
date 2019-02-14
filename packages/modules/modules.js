'use strict';

var  Module = function (obj) {
    // 小写名称
    this.sname = obj.sname;
    this.name = "";
    this.img = `${this.sname}.png`;
    this.blocks = obj.blocks;
    this.simulator = obj.simulator;
    this.pins = obj.pins;
    Object.defineProperty(this, 'name', {
        get: () => {
            var upperName = this.sname.toUpperCase().replace(/-+/g, "")
            return MSG[`MODULES_${upperName}_NAME`];
        },
    });
}

var Modules = {
    simulator: {},
    init: ()=>{},
};

Modules["led-module"] = new Module({
    'sname':'led-module',
    'blocks': [
        '<block type="modules_ledmodule_set_value"> ' +
        '  <value name="value"> ' +
        '    <shadow type="math_number"> ' +
        '    </shadow> ' +
        '  </value> ' +
        '</block> '
    ],
    'simulator': {
        "type": "ValueOutput",
        "onHigh": "module-led_on.png",
        "onLow": "module-led_off.png"
    },
    'pins': {
        "SIG": {
            'id': 0,
            'name': 'SIG',
            'x': 0.3,
            'y': 1,
            'isSource': true,
            'property': ['din', 'pwm'],
            'type': 'digital',
        },
        "VCC": {
            'id': 1,
            'name': 'VCC',
            'x': 0.5,
            'y': 1,
            'isSource': true,
            'property': ['3V3'],
            'type': 'power',
        },
        "GND": {
            'id': 2,
            'name': 'GND',
            'x': 0.7,
            'y': 1,
            'isSource': true,
            'property': ['GND'],
            'type': 'ground',
        }
    }
})

Modules["rgb-led"] = new Module({
    'sname':'rgb-led',
    'blocks': [
        '<block type="modules_rgbled_set_value"> ' +
            '<value name="color"> ' +
                '<shadow type="colour_led_picker"> ' +
                    '<field name="COLOUR">#ff0000</field> ' +
                '</shadow> ' +
            '</value> ' +
        '</block>'
    ],
    "simulator": {
        "type": "ModuleRGB",
        "R": 'R',
        "G": "G",
        "B": "B",
        "initValue": 0
    },
    'pins': {
        'VCC': {
            'id': 0,
            'name': 'VCC',
            'x': 0.2,
            'y': 1,
            'isSource': true,
            'property': ['3V3'],
            'type': 'power',
        },
        'R': {
            'id': 1,
            'name': 'R',
            'x': 0.4,
            'y': 1,
            'isSource': true,
            'property': ['pwm'],
            'type': 'pwm',
        },
        'G': {
            'id': 2,
            'name': 'G',
            'x': 0.6,
            'y': 1,
            'isSource': true,
            'property': ['pwm'],
            'type': 'pwm',
        },
        'B': {
            'id': 3,
            'name': 'B',
            'x': 0.8,
            'y': 1,
            'isSource': true,
            'property': ['pwm'],
            'type': 'pwm',
        }
    }
})

Modules["button"] = new Module({
    'sname':'button',
    'blocks': ['<block type="modules_button_get_value"></block> '],
    'simulator': {
        "type": "ValueInput",
        "mode": 'toggle',
        "initValue": 1,
        "pin": "SIG",
    },
    'pins': {
        'SIG': {
            'id': 0,
            'name': 'SIG',
            'x': 0.3,
            'y': 1,
            'isSource': true,
            'property': ['din'],
            'type': 'digital'
        },
        'VCC': {
            'id': 1,
            'name': 'VCC',
            'x': 0.5,
            'y': 1,
            'isSource': true,
            'property': ['3V3'],
            'type': 'power'
        },
        'GND': {
            'id': 2,
            'name': 'GND',
            'x': 0.7,
            'y': 1,
            'isSource': true,
            'property': ['GND'],
            'type': 'ground'
        }
    }
})

Modules["tilt-switch"] = new Module({
    'sname':'tilt-switch',
    'blocks': ['<block type="modules_tiltswitch_get_value"> </block> '],
    'simulator': {
        "type": "ValueInput",
        "pin": 'SIG',
        "mode": 'click',
        "initValue": 0
    },
    'pins': {
        'SIG': {
            'id': 0,
            'name': 'SIG',
            'x': 0.3,
            'y': 1,
            'isSource': true,
            'property': ['din'],
            'type': 'digital',
        },
        'VCC': {
            'id': 1,
            'name': 'VCC',
            'x': 0.5,
            'y': 1,
            'isSource': true,
            'property': ['3V3'],
            'type': 'power',

        },
        'GND': {
            'id': 2,
            'name': 'GND',
            'x': 0.7,
            'y': 1,
            'isSource': true,
            'property': ['GND'],
            'type': 'ground',
        }
    }
})

Modules["vibration-switch"] = new Module({
    'sname':'vibration-switch',
    'blocks': ['<block type="modules_vibrationswitch_get_value"> </block> '],
    'pins': {
        "SIG": {
            'id': 0,
            'name': 'SIG',
            'x': 0.3,
            'y': 1,
            'isSource': true,
            'property': ['din'],
            'type': 'digital'
        },
        "VCC": {
            'id': 1,
            'name': 'VCC',
            'x': 0.5,
            'y': 1,
            'isSource': true,
            'property': ['3V3'],
            'type': 'power'
        },
        "GND": {
            'id': 2,
            'name': 'GND',
            'x': 0.7,
            'y': 1,
            'isSource': true,
            'property': ['GND'],
            'type': 'ground'
        }
    }
})

Modules["buzzer"] = new Module({
    'sname':'buzzer',
    'blocks': [
        '<block type="modules_buzzer_set_value">' +
        '<value name="note"> ' +
        '<shadow type="music_notes"> ' +
        '</shadow> ' +
        '</value> ' +
        '<value name="beat"> ' +
        '<shadow type="music_beat"> ' +
        '</shadow> ' +
        '</value> ' +
        '</block>'
    ],
    'pins': {
        "SIG": {
            'id': 0,
            'name': 'SIG',
            'x': 0.3,
            'y': 1,
            'isSource': true,
            'property': ['pwm'],
            'type': 'pwm'
        },
        "VCC": {
            'id': 1,
            'name': 'VCC',
            'x': 0.5,
            'y': 1,
            'isSource': true,
            'property': ['3V3'],
            'type': 'power'
        },
        "GND": {
            'id': 2,
            'name': 'GND',
            'x': 0.7,
            'y': 1,
            'isSource': true,
            'property': ['GND'],
            'type': 'ground'
        }
    }
})

Modules["joystick"] = new Module({
    'sname':'joystick',
    'blocks': ['<block type="modules_joystick_get_status"> </block>', '<block type="modules_joystick_get_value"> </block>'],
    'pins': {
        "Y": {
            'id': 0,
            'name': 'Y',
            'x': 0.1,
            'y': 1,
            'isSource': true,
            'property': ['ain'],
            'type': 'analog',
        },
        "X": {
            'id': 1,
            'name': 'X',
            'x': 0.3,
            'y': 1,
            'isSource': true,
            'property': ['ain'],
            'type': 'analog',
        },

        "Btn": {
            'id': 2,
            'name': 'Btn',
            'x': 0.5,
            'y': 1,
            'isSource': true,
            'property': ['din'],
            'type': 'digital',
        },
        "VCC": {
            'id': 3,
            'name': 'VCC',
            'x': 0.7,
            'y': 1,
            'isSource': true,
            'property': ['3V3'],
            'type': 'power',
        },
        "GND": {
            'id': 4,
            'name': 'GND',
            'x': 0.9,
            'y': 1,
            'isSource': true,
            'property': ['GND'],
            'type': 'ground',
        }
    }
})

Modules["potentiometer"] = new Module({
    'sname':'potentiometer',
    'blocks': ['<block type="modules_potentiometer_get_value"> </block> '],
    'simulator': {
        "type": "ValueInput",
        "pin": "SIG",
        "mode": "slider",
        "initValue": 0
    },
    'pins': {
        "SIG": {
            'id': 0,
            'name': 'SIG',
            'x': 0.3,
            'y': 1,
            'isSource': true,
            'property': ['ain'],
            'type': 'analog'
        },
        "VCC": {
            'id': 1,
            'name': 'VCC',
            'x': 0.5,
            'y': 1,
            'isSource': true,
            'property': ['3V3'],
            'type': 'power'
        },
        "GND": {
            'id': 2,
            'name': 'GND',
            'x': 0.7,
            'y': 1,
            'isSource': true,
            'property': ['GND'],
            'type': 'ground'
        }
    }
})

Modules["sound-sensor"] = new Module({
    'sname':'sound-sensor',
    'blocks': ['<block type="modules_soundsensor_get_value"> </block> '],
    'simulator': {
        "type": "ValueInput",
        "pin": "SIG",
        "mode": "slider",
        "initValue": 0
    },
    'pins': {
        "SIG": {
            'id': 0,
            'name': 'SIG',
            'x': 0.3,
            'y': 1,
            'isSource': true,
            'property': ['ain'],
            'type': 'analog'
        },
        "VCC": {
            'id': 1,
            'name': 'VCC',
            'x': 0.5,
            'y': 1,
            'isSource': true,
            'property': ['3V3'],
            'type': 'power'
        },
        "GND": {
            'id': 2,
            'name': 'GND',
            'x': 0.7,
            'y': 1,
            'isSource': true,
            'property': ['GND'],
            'type': 'ground'
        }
    }
})

Modules["photoresistor"] = new Module({
    'sname':'photoresistor',
    'blocks': ['<block type="modules_photoresistor_get_value"></block> '],
    'simulator': {
        "type": "ValueInput",
        "pin": "SIG",
        "mode": "slider",
        "initValue": 0
    },
    'pins': {
        'SIG': {
            'id': 0,
            'name': 'SIG',
            'x': 0.3,
            'y': 1,
            'isSource': true,
            'property': ['ain'],
            'type': 'analog',
        },
        'VCC': {
            'id': 1,
            'name': 'VCC',
            'x': 0.5,
            'y': 1,
            'isSource': true,
            'property': ['3V3'],
            'type': 'power',

        },
        'GND': {
            'id': 2,
            'name': 'GND',
            'x': 0.7,
            'y': 1,
            'isSource': true,
            'property': ['GND'],
            'type': 'ground',
        }
    }
})

Modules["touch-switch"] = new Module({
    'sname':"touch-switch",
    'blocks': ['<block type="modules_touchswitch_get_value"></block> '],
    'simulator': {
        "type": "ValueInput",
        "pin": 'SIG',
        "mode": 'click',
        "initValue": 0
    },
    'pins': {
        "SIG": {
            'id': 0,
            'name': 'SIG',
            'x': 0.3,
            'y': 1,
            'isSource': true,
            'property': ['din'],
            'type': 'digital'
        },
        "VCC": {
            'id': 1,
            'name': 'VCC',
            'x': 0.5,
            'y': 1,
            'isSource': true,
            'property': ['3V3'],
            'type': 'power'
        },
        "GND": {
            'id': 2,
            'name': 'GND',
            'x': 0.7,
            'y': 1,
            'isSource': true,
            'property': ['GND'],
            'type': 'ground'
        }
    }
})

Modules["ultrasonic-ranging-module"] = new Module({
    'sname':'ultrasonic-ranging-module',
    'blocks': ['<block type="modules_ultrasonic_get_value"></block> '],
    'pins': {
        "Trig": {
            'id': 0,
            'name': 'Trig',
            'x': 0.2,
            'y': 1,
            'isSource': true,
            'property': ['din'],
            'type': 'digital'
        },
        "Echo": {
            'id': 1,
            'name': 'Echo',
            'x': 0.4,
            'y': 1,
            'isSource': true,
            'property': ['din'],
            'type': 'digital'
        },
        "VCC": {
            'id': 2,
            'name': 'VCC',
            'x': 0.6,
            'y': 1,
            'isSource': true,
            'property': ['3V3'],
            'type': 'power'
        },
        "GND": {
            'id': 3,
            'name': 'GND',
            'x': 0.8,
            'y': 1,
            'isSource': true,
            'property': ['GND'],
            'type': 'ground'
        }
    }
})

Modules["ds18b20"] = new Module({
    'sname':"ds18b20",
    'blocks': ['<block type="modules_ds18b20_get_value"></block> '],
    'pins': {
        "SIG": {
            'id': 0,
            'name': 'SIG',
            'x': 0.3,
            'y': 1,
            'isSource': true,
            'property': ['1wire'],
            'type': 'digital'
        },
        "VCC": {
            'id': 1,
            'name': 'VCC',
            'x': 0.5,
            'y': 1,
            'isSource': true,
            'property': ['5V'],
            'type': 'power'
        },
        "GND": {
            'id': 2,
            'name': 'GND',
            'x': 0.7,
            'y': 1,
            'isSource': true,
            'property': ['GND'],
            'type': 'ground'
        }
    }
})

Modules["servo"] = new Module({
    'sname':'servo',
    'blocks': [
        '<block type="modules_servo_set_angle"> ' +
        '<value name="angle"> ' +
        '   <shadow type="math_number"> ' +
        '   </shadow> ' +
        '</value> ' +
        '</block> '
    ],
    'simulator': {
        "type": "ValueOutput",
        "mode": 'rotation',
        "inputRange": '102=511',
        "outputRange": '-90=90',
        "pin": "SIG",
    },
    'pins': {
        "SIG": {
            'id': 0,
            'name': 'SIG',
            'x': 0.3,
            'y': 1,
            'isSource': true,
            'property': ['pwm'],
            'type': 'pwm'
        },
        "VCC": {
            'id': 1,
            'name': 'VCC',
            'x': 0.5,
            'y': 1,
            'isSource': true,
            'property': ['5V'],
            'type': 'power'
        },
        "GND": {
            'id': 2,
            'name': 'GND',
            'x': 0.7,
            'y': 1,
            'isSource': true,
            'property': ['GND'],
            'type': 'ground'
        }
    }
})

Modules["moisture-sensor"] = new Module({
    'sname':'moisture-sensor',
    'blocks': ['<block type="modules_moisture_sensor_get_value"> </block>'],
    'pins': {
        "SIG": {
            'id': 0,
            'name': 'SIG',
            'x': 0.3,
            'y': 1,
            'isSource': true,
            'property': ['din'],
            'type': 'analog'
        },
        "VCC": {
            'id': 1,
            'name': 'VCC',
            'x': 0.5,
            'y': 1,
            'isSource': true,
            'property': ['3V3'],
            'type': 'power'
        },
        "GND": {
            'id': 2,
            'name': 'GND',
            'x': 0.7,
            'y': 1,
            'isSource': true,
            'property': ['GND'],
            'type': 'ground'
        }
    }
})

Modules["adxl345"] = new Module({
    'sname':'adxl345',
    'blocks': ['<block type="modules_adxl345_get_value"> </block> '],
    'pins': {
        "GND": {
            'id': 0,
            'name': 'GND',
            'x': 0.15,
            'y': 1,
            'isSource': true,
            'property': ['GND'],
            'type': 'ground'
        },
        "3V3": {
            'id': 1,
            'name': '3V3',
            'x': 0.3,
            'y': 1,
            'isSource': true,
            'property': ['3V3'],
            'type': 'power'
        },
        "SCL": {
            'id': 2,
            'name': 'SCL',
            'x': 0.45,
            'y': 1,
            'isSource': true,
            'property': ['SCL'],
            'type': 'com'
        },
        "SDA": {
            'id': 3,
            'name': 'SDA',
            'x': 0.6,
            'y': 1,
            'isSource': true,
            'property': ['SDA'],
            'type': 'com'
        },
        "CS": {
            'id': 4,
            'name': 'CS',
            'x': 0.75,
            'y': 1,
            'isSource': true,
            'property': ['3V3'],
            'type': 'com'
        },
        "SDO": {
            'id': 5,
            'name': 'SDO',
            'x': 0.9,
            'y': 1,
            'isSource': true,
            'property': ['GND'],
            'type': 'ground'
        }
    }
})