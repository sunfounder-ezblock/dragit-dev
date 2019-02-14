/**
 * create a object of SensorKitForPi and contain it's id and name
 */
var SensorKitForPi = {}
SensorKitForPi.id = 'sensorkitforpi';
SensorKitForPi.list = {
    "device": "RaspberryPi",
    "kits": [
        "SensorKit",
    ],
}

SensorKitForPi.name = '';

SensorKitForPi.init = function () {
    SensorKitForPi.name = MSG.catSensorKitForPi;
    SensorKitForPi.description = MSG.sensorkitforpi_description;
}