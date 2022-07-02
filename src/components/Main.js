import React, { useEffect, useState } from 'react';
import Card from './Card';
import { catData } from '../catData';
function Main() {
	return (
		<div className='cards-wrapper'>
			{catData.map((cat) => (
				<Card url={cat.url} name={cat.name} key={cat.id} />
			))}
		</div>
	);
}

export default Main;
