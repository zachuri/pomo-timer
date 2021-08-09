import React from 'react';

class Timer extends React.Component{
	constructor() {
		super();

		this.state = {
			isSession: true,
			timerSecond: 0
		}
	}

	render() {
		return(
			<section>
				<section>
					<h4>{this.state.isSession === true ? "Session" : "Break"}</h4>
				</section>

				<span>{this.props.timerMinute}</span>
				<span>:</span>
				<span>{this.props.timerSecond}</span>

			</section>
		);
	}
}

export default Timer;