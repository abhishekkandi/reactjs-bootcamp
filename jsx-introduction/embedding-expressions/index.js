function getRandomMood() {
	const moods = [ 'Angry', 'Hungry', 'Silly', 'Quiet', 'Paranoid' ];
	return moods[Math.floor(Math.random() * moods.length)];
}

class JSXDemo extends React.Component {
	render() {
		return (
			<div>
				<h1>My Current Mood is: {getRandomMood()}</h1>
			</div>
		);
	}
}

ReactDOM.render(<JSXDemo />, document.getElementById('root'));
