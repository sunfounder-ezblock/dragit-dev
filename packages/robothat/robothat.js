/**
 * create a object of RobotHat and contain it's id and name
 */
var RobotHat = {};
RobotHat.id = 'robothat';
RobotHat.kits = {}
RobotHat.series = "raspberrypi";
RobotHat.nameEn = "RobotHat";
RobotHat.type = "raspberrypi";
RobotHat.libPath = "./packages/robothat/lib"

RobotHat.functions = [
    "remote",
    "routing",
    "bluetooth",
    "play",
]

RobotHat.libs = [
    'robothat==v0.2',
];

RobotHat.init = function() {
    RobotHat.name = MSG.catRobothat;
    RobotHat.description = MSG.robothat_description;
}