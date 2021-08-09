import React from 'react';

function BreakInterval(props) {

	return (
		<section>
			<h4>Break Length</h4>
			
			<section className="interval-container">
				<button>Down</button>
				<p className="interval-length">{props.breakInterval}</p>
				<button>Up</button>
			</section>
		</section>

	)
}

export default BreakInterval;