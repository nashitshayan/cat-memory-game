import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { catDataLevelOne, catDataLevelTwo, catDataLevelThree } from './catData';
function App() {
	const [cats, setCats] = useState(() => shuffleArray(catDataLevelOne));
	const [score, setScore] = useState(0);
	const [bestScore, setBestScore] = useState(0);
	const [level, setLevel] = useState(0);
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
		} else setScore(score + 1);
	};

	// for different game levels
	useEffect(() => {
		if (score === 6) {
			setCats(shuffleArray(catDataLevelTwo));
			setLevel(1);
		}
		if (score === 12) {
			setCats(shuffleArray(catDataLevelThree));
			setLevel(2);
		}
	}, [score]);

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
