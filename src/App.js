import React from 'react'
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = { //what we need to keep track of
      breakLength: 5,
      sessionLength: 25,
      isSession: true,
      timerMinutes: 25,
      timerSeconds: 0,
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

function BreakInterval(props) {
  function decreaseCounter() {
    if (props.breakInterval === 1) {
      return;
    }
    props.decreaseBreak();
  }
  function increaseCounter() {
    if (props.breakInterval === 60) {
      return;
    }
    props.increaseBreak();
  }
  return (
    <div>
      <h4>Break Length</h4>
      <div class="interval-setter">
        <button onClick={decreaseCounter}>Down</button>
        <p class="time-length">{props.breakInterval}</p>
        <button onClick={increaseCounter}>Up</button>
      </div>
    </div>
  )
}

function SessionLength(props) {
  function decreaseSession() {
    if (props.sessionLength === 1) {
      return;
    }
    props.decreaseSession();
  }
  function increaseSession() {
    if (props.sessionLength === 60) {
      return;
    }
    props.increaseSession();
  }
  return (
    <main>
      <h4>Session Length</h4>
      <div class="interval-setter">
        <button onClick={decreaseSession}>Down</button>
        <p class="time-length">{props.sessionLength}</p>
        <button onClick={increaseSession}>Up</button>
      </div>
    </main>
  )
}

function TimeWatch(props) {

  return (
    <main>
      <section className="timer-container">
        <h4>{props.isSession === true ? "Session" : "Break"}</h4>
        <span className="timer">{props.timerMinutes}</span>
        <span className="timer">:</span>
        <span className="timer">{props.timerSeconds === 0 ? "00" :
          props.timerSeconds < 10 ? "0" + props.timerSeconds :
            props.timerSeconds
        } </span>
      </section>
      <section className="timer-actions">
        <button>Play</button> 
        <button>Stop</button>
        <button>Reset</button>
      </section>
    </main>
  )
}

export default App;