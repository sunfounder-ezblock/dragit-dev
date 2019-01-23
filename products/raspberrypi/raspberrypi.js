/**
 * create a object of RaspberryPi and contain it's id and name
 */
var RaspberryPi = {};
RaspberryPi.id = 'raspberrypi';
RaspberryPi.series = 'raspberrypi';
RaspberryPi.seriesClass = 'rpiSeries';
RaspberryPi.kits = {
    // 'sensorkit': SensorKit,
    // 'switchbot': SwitchBot,
}
RaspberryPi.libs = [
    'sensorkit==v0.1',
];
RaspberryPi.name = 'Raspberry Pi';
RaspberryPi.kitName = 'SensorKit For Pi';
RaspberryPi.nameEn = 'Raspberry Pi';
RaspberryPi.width = 87;
RaspberryPi.height = 58;
RaspberryPi.pinWidth = 8;
RaspberryPi.pinHeight = 8;
RaspberryPi.examples = {};
RaspberryPi.examplesHasKit = {};
RaspberryPi.tutorials = {};
RaspberryPi.tutorialsHasKit = {};

RaspberryPi.VOLTAGE_LEVEL_THRESHOLD = 1.5;
RaspberryPi.pwmReference = 4095;
RaspberryPi.adcReference = 4095;

RaspberryPi.avalibleKits = {
    'sensorkit': SensorKit,
    'switchbot': SwitchBot,
}

RaspberryPi.functions = [
    "iot",
    "remote",
    // "routing",
    "bluetooth",
    // "play",
]

RaspberryPi.routingOffset = {
    x: 1.9,
    y: 2.2,
}

RaspberryPi.pins = [{
        'id': 1,
        'name': 'P0',
        'x': 76.73 + RaspberryPi.routingOffset.x,
        'y': 1.27 + RaspberryPi.routingOffset.y,
        'width': RaspberryPi.pinWidth,
        'height': RaspberryPi.pinHeight,
        'isSource': false,
        'property': ["pwm"],
        'type': 'pwm',
    },
    {
        'id': 2,
        'name': 'P1',
        'x': 74.19 + RaspberryPi.routingOffset.x,
        'y': 1.27 + RaspberryPi.routingOffset.y,
        'width': RaspberryPi.pinWidth,
        'height': RaspberryPi.pinHeight,
        'isSource': false,
        'property': ["pwm"],
        'type': 'pwm',
    },
    {
        'id': 3,
        'name': 'P2',
        'x': 71.65 + RaspberryPi.routingOffset.x,
        'y': 1.27 + RaspberryPi.routingOffset.y,
        'width': RaspberryPi.pinWidth,
        'height': RaspberryPi.pinHeight,
        'isSource': false,
        'property': ["pwm"],
        'type': 'pwm',
    },
    {
        'id': 4,
        'name': 'P3',
        'x': 69.11 + RaspberryPi.routingOffset.x,
        'y': 1.27 + RaspberryPi.routingOffset.y,
        'width': RaspberryPi.pinWidth,
        'height': RaspberryPi.pinHeight,
        'isSource': false,
        'property': ["pwm"],
        'type': 'pwm',
    },
    {
        'id': 5,
        'name': 'P4',
        'x': 66.57 + RaspberryPi.routingOffset.x,
        'y': 1.27 + RaspberryPi.routingOffset.y,
        'width': RaspberryPi.pinWidth,
        'height': RaspberryPi.pinHeight,
        'isSource': false,
        'property': ["pwm"],
        'type': 'pwm',
    },
    {
        'id': 6,
        'name': 'P5',
        'x': 64.03 + RaspberryPi.routingOffset.x,
        'y': 1.27 + RaspberryPi.routingOffset.y,
        'width': RaspberryPi.pinWidth,
        'height': RaspberryPi.pinHeight,
        'isSource': false,
        'property': ["pwm"],
        'type': 'pwm',
    },
    {
        'id': 7,
        'name': 'P6',
        'x': 61.49 + RaspberryPi.routingOffset.x,
        'y': 1.27 + RaspberryPi.routingOffset.y,
        'width': RaspberryPi.pinWidth,
        'height': RaspberryPi.pinHeight,
        'isSource': false,
        'property': ["pwm"],
        'type': 'pwm',
    },
    {
        'id': 8,
        'name': 'P7',
        'x': 58.95 + RaspberryPi.routingOffset.x,
        'y': 1.27 + RaspberryPi.routingOffset.y,
        'width': RaspberryPi.pinWidth,
        'height': RaspberryPi.pinHeight,
        'isSource': false,
        'property': ["pwm"],
        'type': 'pwm',
    },
    {
        'id': 9,
        'name': 'A0',
        'x': 56.41 + RaspberryPi.routingOffset.x,
        'y': 1.27 + RaspberryPi.routingOffset.y,
        'width': RaspberryPi.pinWidth,
        'height': RaspberryPi.pinHeight,
        'isSource': false,
        'property': ["ain"],
        'type': 'analog',
    },
    {
        'id': 10,
        'name': 'A1',
        'x': 53.87 + RaspberryPi.routingOffset.x,
        'y': 1.27 + RaspberryPi.routingOffset.y,
        'width': RaspberryPi.pinWidth,
        'height': RaspberryPi.pinHeight,
        'isSource': false,
        'property': ["ain"],
        'type': 'analog',
    },
    {
        'id': 11,
        'name': 'A2',
        'x': 51.33 + RaspberryPi.routingOffset.x,
        'y': 1.27 + RaspberryPi.routingOffset.y,
        'width': RaspberryPi.pinWidth,
        'height': RaspberryPi.pinHeight,
        'isSource': false,
        'property': ["ain"],
        'type': 'analog',
    },
    {
        'id': 12,
        'name': 'A3',
        'x': 48.79 + RaspberryPi.routingOffset.x,
        'y': 1.27 + RaspberryPi.routingOffset.y,
        'width': RaspberryPi.pinWidth,
        'height': RaspberryPi.pinHeight,
        'isSource': false,
        'property': ["ain"],
        'type': 'analog',
    },
    {
        'id': 13,
        'name': 'A4',
        'x': 46.25 + RaspberryPi.routingOffset.x,
        'y': 1.27 + RaspberryPi.routingOffset.y,
        'width': RaspberryPi.pinWidth,
        'height': RaspberryPi.pinHeight,
        'isSource': false,
        'property': ["ain"],
        'type': 'analog',
    },
    {
        'id': 14,
        'name': 'A5',
        'x': 43.71 + RaspberryPi.routingOffset.x,
        'y': 1.27 + RaspberryPi.routingOffset.y,
        'width': RaspberryPi.pinWidth,
        'height': RaspberryPi.pinHeight,
        'isSource': false,
        'property': ["ain"],
        'type': 'analog',
    },
    {
        'id': 15,
        'name': 'A6',
        'x': 41.17 + RaspberryPi.routingOffset.x,
        'y': 1.27 + RaspberryPi.routingOffset.y,
        'width': RaspberryPi.pinWidth,
        'height': RaspberryPi.pinHeight,
        'isSource': false,
        'property': ["ain"],
        'type': 'analog',
    },
    {
        'id': 16,
        'name': 'A7',
        'x': 38.63 + RaspberryPi.routingOffset.x,
        'y': 1.27 + RaspberryPi.routingOffset.y,
        'width': RaspberryPi.pinWidth,
        'height': RaspberryPi.pinHeight,
        'isSource': false,
        'property': ["ain"],
        'type': 'analog',
    },
    {
        'id': 17,
        'name': 'GND',
        'x': 36.09 + RaspberryPi.routingOffset.x,
        'y': 1.27 + RaspberryPi.routingOffset.y,
        'width': RaspberryPi.pinWidth,
        'height': RaspberryPi.pinHeight,
        'isSource': false,
        'property': ["GND"],
        'type': 'ground',
    },
    {
        'id': 18,
        'name': 'GND',
        'x': 33.55 + RaspberryPi.routingOffset.x,
        'y': 1.27 + RaspberryPi.routingOffset.y,
        'width': RaspberryPi.pinWidth,
        'height': RaspberryPi.pinHeight,
        'isSource': false,
        'property': ["GND"],
        'type': 'ground',
    },
    {
        'id': 19,
        'name': '5V',
        'x': 31.01 + RaspberryPi.routingOffset.x,
        'y': 1.27 + RaspberryPi.routingOffset.y,
        'width': RaspberryPi.pinWidth,
        'height': RaspberryPi.pinHeight,
        'isSource': false,
        'property': ["5V"],
        'type': 'power',
    },
    {
        'id': 20,
        'name': '5V',
        'x': 28.47 + RaspberryPi.routingOffset.x,
        'y': 1.27 + RaspberryPi.routingOffset.y,
        'width': RaspberryPi.pinWidth,
        'height': RaspberryPi.pinHeight,
        'isSource': false,
        'property': ["5V"],
        'type': 'power',
    },
    {
        'id': 21,
        'name': 'D0',
        'x': 76.73 + RaspberryPi.routingOffset.x,
        'y': 47.73 + RaspberryPi.routingOffset.y,
        'width': RaspberryPi.pinWidth,
        'height': RaspberryPi.pinHeight,
        'isSource': false,
        'property': ["din", "dout"],
        'type': 'digital',
    },
    {
        'id': 22,
        'name': 'D1',
        'x': 74.19 + RaspberryPi.routingOffset.x,
        'y': 47.73 + RaspberryPi.routingOffset.y,
        'width': RaspberryPi.pinWidth,
        'height': RaspberryPi.pinHeight,
        'isSource': false,
        'property': ["din", "dout"],
        'type': 'digital',
    },
    {
        'id': 23,
        'name': 'D2',
        'x': 71.65 + RaspberryPi.routingOffset.x,
        'y': 47.73 + RaspberryPi.routingOffset.y,
        'width': RaspberryPi.pinWidth,
        'height': RaspberryPi.pinHeight,
        'isSource': false,
        'property': ["din", "dout"],
        'type': 'digital',
    },
    {
        'id': 24,
        'name': 'D3',
        'x': 69.11 + RaspberryPi.routingOffset.x,
        'y': 47.73 + RaspberryPi.routingOffset.y,
        'width': RaspberryPi.pinWidth,
        'height': RaspberryPi.pinHeight,
        'isSource': false,
        'property': ["din", "dout"],
        'type': 'digital',
    },
    {
        'id': 25,
        'name': 'D4',
        'x': 66.57 + RaspberryPi.routingOffset.x,
        'y': 47.73 + RaspberryPi.routingOffset.y,
        'width': RaspberryPi.pinWidth,
        'height': RaspberryPi.pinHeight,
        'isSource': false,
        'property': ["din", "dout"],
        'type': 'digital',
    },
    {
        'id': 26,
        'name': 'D5',
        'x': 64.03 + RaspberryPi.routingOffset.x,
        'y': 47.73 + RaspberryPi.routingOffset.y,
        'width': RaspberryPi.pinWidth,
        'height': RaspberryPi.pinHeight,
        'isSource': false,
        'property': ["din", "dout"],
        'type': 'digital',
    },
    {
        'id': 27,
        'name': 'D6',
        'x': 61.49 + RaspberryPi.routingOffset.x,
        'y': 47.73 + RaspberryPi.routingOffset.y,
        'width': RaspberryPi.pinWidth,
        'height': RaspberryPi.pinHeight,
        'isSource': false,
        'property': ["din", "dout"],
        'type': 'digital',
    },
    {
        'id': 28,
        'name': 'D7',
        'x': 58.95 + RaspberryPi.routingOffset.x,
        'y': 47.73 + RaspberryPi.routingOffset.y,
        'width': RaspberryPi.pinWidth,
        'height': RaspberryPi.pinHeight,
        'isSource': false,
        'property': ["din", "dout", "1wire"],
        'type': 'digital',
    },
    {
        'id': 29,
        'name': 'D8',
        'x': 56.41 + RaspberryPi.routingOffset.x,
        'y': 47.73 + RaspberryPi.routingOffset.y,
        'width': RaspberryPi.pinWidth,
        'height': RaspberryPi.pinHeight,
        'isSource': false,
        'property': ["din", "dout"],
        'type': 'digital',
    },
    {
        'id': 30,
        'name': 'D9',
        'x': 53.87 + RaspberryPi.routingOffset.x,
        'y': 47.73 + RaspberryPi.routingOffset.y,
        'width': RaspberryPi.pinWidth,
        'height': RaspberryPi.pinHeight,
        'isSource': false,
        'property': ["din", "dout"],
        'type': 'digital',
    },
    {
        'id': 31,
        'name': 'SDA',
        'x': 51.33 + RaspberryPi.routingOffset.x,
        'y': 47.73 + RaspberryPi.routingOffset.y,
        'width': RaspberryPi.pinWidth,
        'height': RaspberryPi.pinHeight,
        'isSource': false,
        'property': ["SDA"],
        'type': 'com',
    },
    {
        'id': 32,
        'name': 'SCL',
        'x': 48.79 + RaspberryPi.routingOffset.x,
        'y': 47.73 + RaspberryPi.routingOffset.y,
        'width': RaspberryPi.pinWidth,
        'height': RaspberryPi.pinHeight,
        'isSource': false,
        'property': ["SCL"],
        'type': 'com',
    },
    {
        'id': 33,
        'name': 'MOSI',
        'x': 46.25 + RaspberryPi.routingOffset.x,
        'y': 47.73 + RaspberryPi.routingOffset.y,
        'width': RaspberryPi.pinWidth,
        'height': RaspberryPi.pinHeight,
        'isSource': false,
        'property': ["MOSI"],
        'type': 'com',
    },
    {
        'id': 34,
        'name': 'MISO',
        'x': 43.71 + RaspberryPi.routingOffset.x,
        'y': 47.73 + RaspberryPi.routingOffset.y,
        'width': RaspberryPi.pinWidth,
        'height': RaspberryPi.pinHeight,
        'isSource': false,
        'property': ["MISO"],
        'type': 'com',
    },
    {
        'id': 35,
        'name': 'SCLK',
        'x': 41.17 + RaspberryPi.routingOffset.x,
        'y': 47.73 + RaspberryPi.routingOffset.y,
        'width': RaspberryPi.pinWidth,
        'height': RaspberryPi.pinHeight,
        'isSource': false,
        'property': ["SCLK"],
        'type': 'com',
    },
    {
        'id': 36,
        'name': 'CE',
        'x': 38.63 + RaspberryPi.routingOffset.x,
        'y': 47.73 + RaspberryPi.routingOffset.y,
        'width': RaspberryPi.pinWidth,
        'height': RaspberryPi.pinHeight,
        'isSource': false,
        'property': ["CE"],
        'type': 'com',
    },
    {
        'id': 37,
        'name': 'GND',
        'x': 36.09 + RaspberryPi.routingOffset.x,
        'y': 47.73 + RaspberryPi.routingOffset.y,
        'width': RaspberryPi.pinWidth,
        'height': RaspberryPi.pinHeight,
        'isSource': false,
        'property': ["GND"],
        'type': 'ground',
    },
    {
        'id': 38,
        'name': 'GND',
        'x': 33.55 + RaspberryPi.routingOffset.x,
        'y': 47.73 + RaspberryPi.routingOffset.y,
        'width': RaspberryPi.pinWidth,
        'height': RaspberryPi.pinHeight,
        'isSource': false,
        'property': ["GND"],
        'type': 'ground',
    },
    {
        'id': 39,
        'name': '3V3',
        'x': 31.01 + RaspberryPi.routingOffset.x,
        'y': 47.73 + RaspberryPi.routingOffset.y,
        'width': RaspberryPi.pinWidth,
        'height': RaspberryPi.pinHeight,
        'isSource': false,
        'property': ["3V3"],
        'type': 'power',
    },
    {
        'id': 40,
        'name': '3V3',
        'x': 28.47 + RaspberryPi.routingOffset.x,
        'y': 47.73 + RaspberryPi.routingOffset.y,
        'width': RaspberryPi.pinWidth,
        'height': RaspberryPi.pinHeight,
        'isSource': false,
        'property': ["3V3"],
        'type': 'power',
    },
]

RaspberryPi.init = function() {
    RaspberryPi.name = MSG.catRaspberryPi;
    RaspberryPi.kitName = MSG.catSensorKitForPi;
    RaspberryPi.description = MSG.raspberrypi_description;
}