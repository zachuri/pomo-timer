import React from 'react';
import '../App.css';
import BreakInterval from './BreakInterval';
import SessionLength from './SessionLength';
import Timer from './Timer';


class App extends React.Component {

  constructor() {
    super();

    this.state = {
      breakLength: 5,
      sessionLength: 25,
      timerMinute: 25
    }
  }

  render() {
    return (
        <div className="App">
          <main>
            <h2>Pomodoro Clock</h2>
            <section className="interval-length-container">
              <BreakInterval breakInterval={this.state.breakLength}/>
              <SessionLength sessionLength={this.state.sessionLength}/>
            </section>

            <Timer timerMinute={this.state.timerMinute}/>
          </main>
        </div>
      );
  }
}

export default App;
