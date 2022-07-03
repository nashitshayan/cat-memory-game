import React from 'react';

function Card({ id, url, name, cardClickHandler }) {
	return (
		<div className='card-wrapper' onClick={() => cardClickHandler(id)}>
			<div className='cat-img-wrapper'>
				<img src={url} alt='cat-img-sunglasses' className='cat-img' />
			</div>
			<div className='cat-name'>{name}</div>
		</div>
	);
}

export default Card;
