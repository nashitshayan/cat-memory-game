import React from 'react';

function Card({ url, name }) {
	return (
		<div className='card-wrapper'>
			<div className='cat-img-wrapper'>
				<img src={url} alt='cat-img-sunglasses' className='cat-img' />
			</div>
			<div className='cat-name'>{name}</div>
		</div>
	);
}

export default Card;
