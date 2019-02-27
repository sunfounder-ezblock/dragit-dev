/**
 * create a object of SensorKitForPi and contain it's id and name
 */
var SensorKitForPi = {}
SensorKitForPi.id = 'sensorkit-for-pi';
SensorKitForPi.list = {
    "device": "RaspberryPi",
    "kits": [
        "SensorKit",
    ],
}

SensorKitForPi.name = '';

SensorKitForPi.tutorials = {};

SensorKitForPi.init = function() {
    SensorKitForPi.name = MSG.catSensorKitForPi;
    SensorKitForPi.description = MSG.sensorkitforpi_description;
}