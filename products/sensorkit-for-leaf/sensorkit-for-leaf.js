/**
 * create a object of SensorKitForLeaf and contain it's id and name
 */
var SensorKitForLeaf = {}
SensorKitForLeaf.id = 'sensorkit-for-leaf';
SensorKitForLeaf.list = {
    "device": "Leaf",
    "kits": [
        "SensorKit",
    ],
}

SensorKitForLeaf.name = '';

SensorKitForLeaf.init = function() {
    SensorKitForLeaf.name = MSG.catSensorKitForLeaf;
    SensorKitForLeaf.description = MSG.sensorkitforleaf_description;
}