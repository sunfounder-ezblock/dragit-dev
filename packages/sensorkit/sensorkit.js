'use strict';

var SensorKit = {
    'name': 'Sensor Kit',
    'id': 'sensorkit',
    'simulator': {},
    'modules': {
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
