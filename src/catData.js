import images from './importImages';
const cats = [];
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
	let id = cats.length + 1;
	let name = `cat-${id}.png`;
	let url = images[name];
	cats.push({
		id: id,
		url: url,
		name: names[i],
		isClicked: false,
	});
}

const levelOneCats = cats.slice(0, 6);
const levelTwoCats = cats.slice(6, 12);
const levelThreeCats = cats.slice(12);

export { levelOneCats, levelTwoCats, levelThreeCats };
