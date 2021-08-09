import React from 'react';

function BreakInterval(props) {

	function decreaseCounter() {
		if (props.breakInterval === 1) {
			return;
		}

	}

	function increaseCounter() {
		if (props.breakInterval === 60) {
			return;
		}

		console.log("up button pressed")	
		props.increaseBreak();
	}


	return (
		<section>
			<h4>Break Length</h4>
			
			<section className="interval-container">
				<button onClick={decreaseCounter}>Down</button>
				<p className="interval-length">{props.breakInterval}</p>
				<button onClick={increaseCounter}>Up</button>
			</section>
		</section>

	)
}

export default BreakInterval;