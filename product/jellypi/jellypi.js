/**
 * create a object of JellyPi and contain it's id and name
 */
var JellyPi = {};
JellyPi.id = 'jellypi';
JellyPi.series = 'raspberrypi';
JellyPi.seriesClass = 'jellyPiSeries';
JellyPi.kits = {
    'jelly': Jelly,
}
JellyPi.name = "Jelly Pi";
JellyPi.nameEn = "Jelly Pi";
JellyPi.width = 96;
JellyPi.height = 72;
JellyPi.pinWidth = 8;
JellyPi.pinHeight = 8;
JellyPi.active = 'active';

JellyPi.functions = [
    "routing",
    "play",
    "iot",
    "remote",
    "bluetooth",
] 

JellyPi.routingOffset = {
    x: 2.3,
    y: 2.2,
}

JellyPi.pins = [{
        'id': 1,
        'name': 'OUT0',
        'x': 53 + JellyPi.routingOffset.x,
        'y': 20 + JellyPi.routingOffset.y,
        'width':JellyPi.pinWidth,
        'height':JellyPi.pinHeight,
        'isSource': false,
        'property': ["pwm"],
        'type': 'pwm',
    },
    {
        'id': 2,
        'name': 'OUT1',
        'x': 47 + JellyPi.routingOffset.x,
        'y': 20 + JellyPi.routingOffset.y,
        'width':JellyPi.pinWidth,
        'height':JellyPi.pinHeight,
        'isSource': false,
        'property': ["pwm"],
        'type': 'pwm',
    },
    {
        'id': 3,
        'name': 'OUT2',
        'x': 40.7 + JellyPi.routingOffset.x,
        'y': 20 + JellyPi.routingOffset.y,
        'width':JellyPi.pinWidth,
        'height':JellyPi.pinHeight,
        'isSource': false,
        'property': ["pwm"],
        'type': 'pwm',
    },
    {
        'id': 4,
        'name': 'OUT3',
        'x': 34.7 + JellyPi.routingOffset.x,
        'y': 20 + JellyPi.routingOffset.y,
        'width':JellyPi.pinWidth,
        'height':JellyPi.pinHeight,
        'isSource': false,
        'property': ["pwm"],
        'type': 'pwm',
    },
    {
        'id': 5,
        'name': 'I2C0',
        'x': 34.7 + JellyPi.routingOffset.x,
        'y': 30.8 + JellyPi.routingOffset.y,
        'width':JellyPi.pinWidth,
        'height':JellyPi.pinHeight,
        'isSource': false,
        'property': ["i2c"],
        'type': 'com',
    },
    {
        'id': 6,
        'name': 'I2C1',
        'x': 34.7 + JellyPi.routingOffset.x,
        'y': 41.2 + JellyPi.routingOffset.y,
        'width':JellyPi.pinWidth,
        'height':JellyPi.pinHeight,
        'isSource': false,
        'property': ["i2c"],
        'type': 'com',
    },
    {
        'id': 7,
        'name': 'IN3',
        'x': 34.7 + JellyPi.routingOffset.x,
        'y': 52.3 + JellyPi.routingOffset.y,
        'width':JellyPi.pinWidth,
        'height':JellyPi.pinHeight,
        'isSource': false,
        'property': ["ain"],
        'type': 'analog',
    },
    {
        'id': 8,
        'name': 'IN2',
        'x': 40.7 + JellyPi.routingOffset.x,
        'y': 52.3 + JellyPi.routingOffset.y,
        'width':JellyPi.pinWidth,
        'height':JellyPi.pinHeight,
        'isSource': false,
        'property': ["ain"],
        'type': 'analog',
    },
    {
        'id': 9,
        'name': 'IN1',
        'x': 47 + JellyPi.routingOffset.x,
        'y': 52.3 + JellyPi.routingOffset.y,
        'width':JellyPi.pinWidth,
        'height':JellyPi.pinHeight,
        'isSource': false,
        'property': ["ain"],
        'type': 'analog',
    },
    {
        'id': 10,
        'name': 'IN0',
        'x': 53 + JellyPi.routingOffset.x,
        'y': 52.3 + JellyPi.routingOffset.y,
        'width':JellyPi.pinWidth,
        'height':JellyPi.pinHeight,
        'isSource': false,
        'property': ["ain"],
        'type': 'analog',
    },
]

JellyPi.init = function() {
    JellyPi.name = MSG.catJellyPi;
    JellyPi.description = MSG.jellypi_description;
}

// JellyPi.ab2str = function (buf) {
// 	return String.fromCharGUI.apply(null, new Uint8Array(buf));
// }

// JellyPi.str2ab = function (str) {
// 	var buf = new ArrayBuffer(str.length); // 2 bytes for each char
// 	var bufView = new Uint8Array(buf);
// 	for (var i = 0, strLen = str.length; i < strLen; i++) {
// 		bufView[i] = str.charGUIAt(i);
// 	}
// 	return bufView;
// }