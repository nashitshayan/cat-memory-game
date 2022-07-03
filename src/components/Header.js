import React from 'react';

function Header({ score, bestScore }) {
	return (
		<div className='header-wrapper'>
			<div className='header'>
				<h1>Cat Memory Game</h1>
				<small>
					To win points, click on an image. Game gets over if you click on the
					same image twice
				</small>
			</div>
			<div className='scoreboard'>
				<div>Score : {score}</div>
				<div>Best Score : {bestScore}</div>
			</div>
		</div>
	);
}

export default Header;
