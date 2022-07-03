import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { levelOneCats, levelTwoCats, levelThreeCats } from './catData';
function App() {
	const [score, setScore] = useState(0);
	const [bestScore, setBestScore] = useState(0);
	const [cats, setCats] = useState(() => shuffleArray(levelOneCats));
	const [level, setLevel] = useState(0);
	/**
	 * initially, set cats to levelOneCats (6 cats)
	 * when score gets to 6, then add levelTwoCats (6 cats)
	 * when score gets to 12, add levelThreeCats(4 cats)
	 */
	// for different game levels
	useEffect(() => {
		if (score === 6) {
			setCats((oldCats) => shuffleArray([...oldCats, ...levelTwoCats]));
			setLevel(1);
		}
		if (score === 12) {
			setCats((oldCats) => shuffleArray([...oldCats, ...levelThreeCats]));
			setLevel(2);
		}
	}, [score]);

	const checkClicked = (cardID) => {
		let isClicked = false;
		cats.forEach((cat) => {
			if (cat.id === cardID && cat.isClicked) isClicked = true;
		});
		return isClicked;
	};

	const shuffleAndSetIsClicked = (cardID) => {
		setCats((oldCats) => shuffleArray(oldCats));
		setCats((oldCats) =>
			oldCats.map((cat) => {
				if (cat.id === cardID) return { ...cat, isClicked: true };
				return cat;
			}),
		);
	};

	const cardClickHandler = (cardID) => {
		const isAlreadyClicked = checkClicked(cardID);
		shuffleAndSetIsClicked(cardID);

		if (isAlreadyClicked) {
			if (score > bestScore) setBestScore(score);
			setScore(0);
			setCats((oldCats) =>
				oldCats.map((cat) => ({ ...cat, isClicked: false })),
			);
			setLevel(0);
		} else setScore(score + 1);
	};

	return (
		<div className='app-wrapper'>
			<Header score={score} bestScore={bestScore} />
			<Main cats={cats} cardClickHandler={cardClickHandler} level={level} />
			<Footer />
		</div>
	);
}

export default App;

function shuffleArray(array) {
	for (let i = array.length - 1; i > 0; i--) {
		const randomIndex = Math.floor(Math.random() * (i + 1));
		[array[i], array[randomIndex]] = [array[randomIndex], array[i]];
	}
	return array;
}
