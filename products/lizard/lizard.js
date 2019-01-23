var Lizard = {};
Lizard.id = 'lizard';
Lizard.name = 'Lizard';
Lizard.nameEn = 'Lizard';
Lizard.series = 'leaf';
Lizard.seriesClass = 'lizardSeries';
Lizard.kits = {}

Lizard.active = 'active';
Lizard.functions = [
	"remote",
	"bluetooth",
]

Lizard.libs = [
	'lizard==v0.1',
	'pw==v0.1',
	'robot==v0.1',
];

Lizard.init = function () {
	Lizard.name = MSG.catLizard;
	Lizard.description = MSG.lizard_description;
}
