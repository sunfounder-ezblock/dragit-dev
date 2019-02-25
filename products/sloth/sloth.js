var Sloth = {}
Sloth.id = 'sloth';
Sloth.list = {
    "device": "RobotShield",
    "Modules": [
        "ultrasonic",
        // "2ch-line-follower",
    ],
}

Sloth.name = '';

Sloth.init = function() {
    Sloth.name = MSG.catSloth;
    Sloth.description = MSG.sloth_description;
}