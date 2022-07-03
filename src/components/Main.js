import React, { useEffect, useState } from 'react';
import Card from './Card';

function Main({ cats, cardClickHandler }) {
	return (
		<div className='cards-wrapper'>
			{cats.map((cat) => (
				<Card
					url={cat.url}
					name={cat.name}
					key={cat.id}
					id={cat.id}
					cardClickHandler={cardClickHandler}
				/>
			))}
		</div>
	);
}

export default Main;
