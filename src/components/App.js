import React from 'react'
import '../App.css';
import BreakInterval from './BreakInterval'
import SessionLength from './SessionLength'
import TimeWatch from './TimeWatch'

class App extends React.Component {
  constructor() {
    super();
    this.state = { //what we need to keep track of
      breakLength: 5,
      sessionLength: 25,
      timerMinutes: 25,
    }
    this.onIncreaseBreakLength = this.onIncreaseBreakLength.bind(this);
    this.onDecreaseBreakLength = this.onDecreaseBreakLength.bind(this);
    this.onDecreaseSessionLength = this.onDecreaseSessionLength.bind(this);
    this.onIncreaseSessionLength = this.onIncreaseSessionLength.bind(this);
    this.onUpdateTimerMinutes = this.onUpdateTimerMinutes.bind(this);
    this.onToggleInterval = this.onToggleInterval.bind(this);
  }
  onIncreaseBreakLength() {
    this.setState((prevState) => {
      return {
        breakLength: prevState.breakLength + 1
      };
    });
  }
  onDecreaseBreakLength() {
    this.setState((prevState) => {
      return {
        breakLength: prevState.breakLength - 1
      };
    });
  }
  onIncreaseSessionLength() {
    this.setState((prevState) => {
      return {
        sessionLength: prevState.sessionLength + 1,
        timerMinutes: prevState.timerMinutes + 1
      };
    });
  }
  onDecreaseSessionLength() {
    this.setState((prevState) => {
      return {
        sessionLength: prevState.sessionLength - 1,
        timerMinutes: prevState.timerMinutes - 1
      };
    });
  }
  onUpdateTimerMinutes() {
    this.setState((prevState) => {
      return {
        timerMinutes: prevState.timerMinutes - 1
      };
    });
  }
  onToggleInterval(isSession) {
    if(isSession) {
      this.setState({
        timerMinutes: this.state.sessionLength
      })
    } else {
      this.setState({
        counterMinutes: this.state.breakInterval
      })
    }
  }
  render() {
    return (
      <div className="App">
        <h2>Session Timer</h2>
        <section className="interval-container">
          <BreakInterval 
            breakInterval={this.state.breakLength}
            increaseBreak={this.onIncreaseBreakLength}
            decreaseBreak={this.onDecreaseBreakLength}
          />
          <SessionLength sessionLength={this.state.sessionLength} 
          increaseSession={this.onIncreaseSessionLength}
          decreaseSession={this.onDecreaseSessionLength}
          />
        </section>
        <TimeWatch timerMinutes={this.state.timerMinutes}
          timerSeconds={this.state.timerSeconds}
          isSession={this.state.isSession}
          breakLength={this.state.breakLength}
          updateTimerMinutes={this.onUpdateTimerMinutes}
          onToggleInterval={this.onToggleInterval} />
      </div>
    );
  };
}

export default App;