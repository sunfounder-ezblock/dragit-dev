var PiMobile = {}
PiMobile.id = 'pimobile';
PiMobile.list = {
    "device": "RobotHat",
    "Modules": [
        "ultrasonic",
        // "2ch-line-follower",
    ],
}

PiMobile.name = '';

PiMobile.init = function() {
    PiMobile.name = MSG.catPiMobile;
    PiMobile.description = MSG.pimobile_description;
}