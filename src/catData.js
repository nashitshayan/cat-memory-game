import images from './importImages';
const catDataLevelThree = [];
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
	let id = catDataLevelThree.length + 1;
	let name = `cat-${id}.png`;
	let url = images[name];
	catDataLevelThree.push({
		id: id,
		url: url,
		name: names[i],
		isClicked: false,
	});
}

const catDataLevelOne = catDataLevelThree.slice(0, 6);
const catDataLevelTwo = catDataLevelThree.slice(0, 12);

export { catDataLevelOne, catDataLevelTwo, catDataLevelThree };
