'use strict';

var SensorKit = {
    'name': 'Sensor Kit',
    'id': 'sensorkit',
    'simulator': {},
    'modules': {
<<<<<<< HEAD
        "led-module": Modules["led-module"],
        "rgb-led": Modules["rgb-led"],
        "button": Modules["button"],
        "tilt-switch": Modules["tilt-switch"],
        "vibration-switch": Modules["vibration-switch"],
        "buzzer": Modules["buzzer"],
        "joystick": Modules["joystick"],
        "potentiometer": Modules["potentiometer"],
        "sound-sensor": Modules["sound-sensor"],
        "photoresistor": Modules["photoresistor"],
        "touch-switch": Modules["touch-switch"],
        "ultrasonic": Modules["ultrasonic-ranging-module"],
        "ds18b20": Modules["ds18b20"],
        "servo": Modules["servo"],
        "moisture-sensor": Modules["moisture-sensor"],
        "adxl345": Modules["adxl345"],
    }
};
=======
        "led-module": {
            'id': 0,
            'name': 'LED Module',
            'blocks': [
                '<block type="sensorkit_led_module_set_value"> ' +
                '  <value name="value"> ' +
                '    <shadow type="math_number"> ' +
                '    </shadow> ' +
                '  </value> ' +
                '</block> '
            ],
            'img': 'led-module.png',
            'simulator': {
                "type": "ValueOutput",
                "onHigh": "module-led_on.png",
                "onLow": "module-led_off.png",
                "pin": "SIG",
                "mode": "opacity",
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
        },
        "rgb-led": {
            'id': 1,
            'name': 'RGB LED',
            'blocks': ['<block type="sensorkit_rgb_set_value"> ' +
                '<value name="color"> ' +
                '<shadow type="colour_led_picker"> ' +
                '   <field name="COLOUR">#ff0000</field> ' +
                '</shadow> ' +
                '</value> ' +
                '</block>'
            ],
            'img': 'rgb-led.png',
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
        },
        "button": {
            'id': 5,
            'name': 'Button',
            'blocks': ['<block type="sensorkit_button_get_value"></block> '],
            'img': 'button.png',
            'simulator': {
                "type": "ValueInput",
                // "onHigh": "module-button-on.png",
                // "onLow": "module-button-off.png",
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
        },
        "tilt-switch": {
            'id': 6,
            'name': 'Tilt Switch',
            'blocks': ['<block type="sensorkit_tiltswitch_get_value"> </block> '],
            'img': 'tilt-switch.png',
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
        },
        "vibration-switch": {
            'id': 7,
            'name': 'Vibration Switch',
            'blocks': ['<block type="sensorkit_vibrationswitch_get_value"> </block> '],
            'img': 'vibration-switch.png',
            'pins': [{
                'id': 0,
                'name': 'SIG',
                'x': 0.3,
                'y': 1,
                'isSource': true,
                'property': ['din'],
                'type': 'digital'
            }, {
                'id': 1,
                'name': 'VCC',
                'x': 0.5,
                'y': 1,
                'isSource': true,
                'property': ['3V3'],
                'type': 'power'
            }, {
                'id': 2,
                'name': 'GND',
                'x': 0.7,
                'y': 1,
                'isSource': true,
                'property': ['GND'],
                'type': 'ground'
            }]
        },
        "buzzer": {
            'id': 10,
            'name': 'Buzzer',
            'blocks': [
                '<block type="sensorkit_buzzer_set_value">' +
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
            'img': 'buzzer.png',
            'pins': [{
                'id': 0,
                'name': 'SIG',
                'x': 0.3,
                'y': 1,
                'isSource': true,
                'property': ['pwm'],
                'type': 'pwm'
            }, {
                'id': 1,
                'name': 'VCC',
                'x': 0.5,
                'y': 1,
                'isSource': true,
                'property': ['3V3'],
                'type': 'power'
            }, {
                'id': 2,
                'name': 'GND',
                'x': 0.7,
                'y': 1,
                'isSource': true,
                'property': ['GND'],
                'type': 'ground'
            }]
        },
        "joystick": {
            'id': 14,
            'name': 'Joystick',
            'blocks': ['<block type="sensorkit_joystick_get_status"> </block>', '<block type="sensorkit_joystick_get_value"> </block>'],
            'img': 'joystick.png',
            'pins': [{
                    'id': 0,
                    'name': 'Y',
                    'x': 0.1,
                    'y': 1,
                    'isSource': true,
                    'property': ['ain'],
                    'type': 'analog',
                }, {
                    'id': 1,
                    'name': 'X',
                    'x': 0.3,
                    'y': 1,
                    'isSource': true,
                    'property': ['ain'],
                    'type': 'analog',
                },
>>>>>>> 7f200292de77a8c4dd0cb95f639fcc70f5cded1e

SensorKit.functions = [
    "routing",
    "play",
]

SensorKit.init = function() {
    SensorKit.name = MSG.catSensorkit;
    SensorKit.description = MSG.sensorkit_description;
    Blockly.Blocks.sensorkit = {};
    Blockly.Blocks.sensorkit.RGB = Blockly.Blocks.modules.RGB;
}
