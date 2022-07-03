import Card from './Card';

function Main({ cats, cardClickHandler, level }) {
	return (
		<main>
			<h2 className='game-level'>Level : {level}</h2>
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
		</main>
	);
}

export default Main;
