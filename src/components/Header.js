import React from 'react';

function Header() {
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
				<div>Score : 0</div>
				<div>Best Score : 0</div>
			</div>
		</div>
	);
}

export default Header;
