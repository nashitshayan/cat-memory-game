/**
 *
 *  Taken from here : https://stackoverflow.com/questions/42118296/dynamically-import-images-from-a-directory-using-webpack
 */

function importAll(r) {
	let imgs = {};
	r.keys().map((item) => (imgs[item.replace('./', '')] = r(item)));
	return imgs;
}
const images = importAll(
	require.context('./images', false, /\.(png|jpe?g|svg)$/),
);
export default images;
