import images from './importImages';
const catData = [];
const names = [
	'Mudpie',
	'Midnight',
	'Ashy',
	'Sansa',
	'Brownie',
	'Moochie',
	'Cookie',
	'Poochie',
	'Tobby',
	'Greg',
	'Elisha',
	'Honey',
	'Fred',
	'Floof',
	'Sparkle',
	'Sushi',
];

for (let i = 0; i < 16; i++) {
	let id = catData.length + 1;
	let name = `cat-${id}.png`;
	let url = images[name];
	catData.push({
		id: id,
		url: url,
		name: names[i],
		isClicked: false,
	});
}

export { catData };
