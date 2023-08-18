import React from 'react';

class TimeWatch extends React.Component {
    constructor() {
        super();

        this.state = {
            isSession: true,
            timerSeconds: 0
        }
    }
    render() {
        return(
            <main>
              <section className="timer-container">
                <h4>{this.state.isSession === true ? "Session" : "Break"}</h4>
                <span className="timer">{this.props.timerMinutes}</span>
                <span className="timer">:</span>
                <span className="timer">{this.state.timerSeconds === 0 ? "00" :
                  this.state.timerSeconds < 10 ? "0" + this.state.timerSeconds :
                    this.state.timerSeconds
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
}

export default TimeWatch;