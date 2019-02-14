var PiMobile = {}
PiMobile.id = 'pimobile';
PiMobile.list = {
    "device": "RobotHat",
    "Modules": [
        "ultrasonic-ranging-module",
        "2ch-line-follower",
    ],
}

PiMobile.name = '';

PiMobile.init = function() {
    PiMobile.name = MSG.catPiMobileForPi;
    PiMobile.description = MSG.pimobile_description;
}