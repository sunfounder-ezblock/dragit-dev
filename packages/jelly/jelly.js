'use strict';

var Jelly = {
    'name': 'Jelly',
    'id': 'jelly',
    'modules': {
        "distance-sensor": {
            'id': 0,
            'name': 'Distance Sensor',
            'blocks': ['<block type="jelly_distance_sensor_get_value"><value name="port"><shadow type="jelly_port"></shadow></value></block >'],
            'img': 'distance_sensor.png',
            'pins': {
                "port": {
                    'id': 0,
                    'name': 'port',
                    'x': 0.5,
                    'y': 1,
                    'isSource': true,
                    'property': ['ain'],
                    'type': 'analog',
                },
            }
        },
        "sound-sensor": {
            'id': 1,
            'name': 'Sound Sensor',
            'blocks': ['<block type="jelly_sound_sensor_get_value"><value name="port"><shadow type="jelly_port"></shadow></value></block >'],
            'img': 'sound_sensor.png',
            'pins': {
                "port": {
                    'id': 0,
                    'name': 'port',
                    'x': 0.5,
                    'y': 1,
                    'isSource': true,
                    'property': ['ain'],
                    'type': 'analog',
                },
            }
        },
        "light-sensor": {
            'id': 2,
            'name': 'Light Sensor',
            'blocks': ['<block type="jelly_light_sensor_get_value"><value name="port"><shadow type="jelly_port"></shadow></value></block >'],
            'img': 'light_sensor.png',
            'pins': {
                "port": {
                    'id': 0,
                    'name': 'port',
                    'x': 0.5,
                    'y': 1,
                    'isSource': true,
                    'property': ['ain'],
                    'type': 'analog',
                },
            }
        },
        "slider": {
            'id': 3,
            'name': 'Slider',
            'blocks': ['<block type="jelly_slider_get_value"><value name="port"><shadow type="jelly_port"></shadow></value></block >'],
            'img': 'slider.png',
            'pins': {
                "port": {
                    'id': 0,
                    'name': 'port',
                    'x': 0.5,
                    'y': 1,
                    'isSource': true,
                    'property': ['ain'],
                    'type': 'analog',
                },
            }
        },
        "button": {
            'id': 4,
            'name': 'Button',
            'blocks': ['<block type="jelly_button_get_value"><value name="port"><shadow type="jelly_port"></shadow></value></block >'],
            'img': 'button.png',
            'pins': {
                "port": {
                    'id': 0,
                    'name': 'port',
                    'x': 0.5,
                    'y': 1,
                    'isSource': true,
                    'property': ['ain'],
                    'type': 'analog',
                },
            }
        },
        "servo": {
            'id': 5,
            'name': 'Servo',
            'blocks': ['<block type="jelly_servo_set_value"><value name="port"><shadow type="jelly_port"></shadow></value></block >'],
            'img': 'servo.png',
            'pins': {
                "port": {
                    'id': 0,
                    'name': 'port',
                    'x': 0.5,
                    'y': 1,
                    'isSource': true,
                    'property': ['pwm'],
                    'type': 'pwm',
                },
            }
        },
        "motor": {
            'id': 6,
            'name': 'Motor',
            'blocks': ['<block type="jelly_motor_set_value"><value name="port"><shadow type="jelly_port"></shadow></value></block >'],
            'img': 'motor.png',
            'pins': {
                "port": {
                    'id': 0,
                    'name': 'port',
                    'x': 0.5,
                    'y': 1,
                    'isSource': true,
                    'property': ['pwm'],
                    'type': 'pwm',
                },
            }
        },
        "led": {
            'id': 7,
            'name': 'LED',
            'blocks': ['<block type="jelly_led_set_value"><value name="port"><shadow type="jelly_port"></shadow></value></block >'],
            'img': 'led.png',
            'pins': {
                "port": {
                    'id': 0,
                    'name': 'port',
                    'x': 0.5,
                    'y': 1,
                    'isSource': true,
                    'property': ['pwm'],
                    'type': 'pwm',
                },
            }
        },
        "led-bar": {
            'id': 8,
            'name': 'LED Bar',
            'blocks': ['<block type="jelly_led_bar_set_value"><value name="port"><shadow type="jelly_port"></shadow></value></block >'],
            'img': 'led_bar.png',
            'pins': {
                "port": {
                    'id': 0,
                    'name': 'port',
                    'x': 0.5,
                    'y': 1,
                    'isSource': true,
                    'property': ['pwm'],
                    'type': 'pwm',
                },
            }
        },
        "rgb": {
            'id': 9,
            'name': 'RGB',
            'blocks': ['<block type="jelly_rgb_set_value"><value name="port"><shadow type="jelly_port"></shadow></value></block >'],
            'img': 'rgb.png',
            'pins': {
                "port": {
                    'id': 0,
                    'name': 'port',
                    'x': 0.5,
                    'y': 1,
                    'isSource': true,
                    'property': ['pwm'],
                    'type': 'pwm',
                },
            }
        },
        "buzzer": {
            'id': 10,
            'name': 'Buzzer',
            'blocks': ['<block type="jelly_buzzer_set_value"><value name="port"><shadow type="jelly_port"></shadow></value></block >'],
            'img': 'buzzer.png',
            'pins': {
                "port": {
                    'id': 0,
                    'name': 'port',
                    'x': 0.5,
                    'y': 1,
                    'isSource': true,
                    'property': ['pwm'],
                    'type': 'pwm',
                },
            }
        },
    }
};