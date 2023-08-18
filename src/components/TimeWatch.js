import React from 'react';

class TimeWatch extends React.Component {
    constructor() {
        super();

        this.state = {
            isSession: true,
            timerSeconds: 0,
            intervalId: 0,
        };

        this.playTimer = this.playTimer.bind(this);
        this.stopTimer = this.stopTimer.bind(this);
        this.resetTimer = this.resetTimer.bind(this);
        this.decreaseTimer = this.decreaseTimer.bind(this);
    }

    playTimer() {
        const intervalId = setInterval(this.decreaseTimer, 999);
        this.props.onPlayStopTimer(true)
        this.setState({
            intervalId: intervalId
        })
    };

    decreaseTimer() {
        switch (this.state.timerSeconds) {
            case 0:
                if (this.props.timerMinutes === 0) {
                    if (this.state.isSession) {
                        this.setState({
                            isSession: false
                        });

                        this.props.toggleInterval(this.state.isSession);
                    } else {
                        this.setState({
                            isSession: true
                        });

                        this.props.toggleInterval(this.state.isSession);
                    }
                } else {
                    this.props.updateTimerMinutes()
                    this.setState({
                        timerSeconds: 59
                    })
                }
                break;
            default:
                this.setState((prevState) => {
                    return {
                        timerSeconds: prevState.timerSeconds - 1
                    }
                })
                break;
        }
    }

    stopTimer() {
        clearInterval(this.state.intervalId);
        this.props.onPlayStopTimer(false)
    };

    resetTimer() {
        this.stopTimer();
        this.props.resetTimer();
        this.props.onPlayStopTimer(false)
        this.setState({
            timerSeconds: 0,
            isSession: true
        })
    };

    render() {
        return (
            <main>
                <section className="timer-container">
                    <h4 id="timer-label" >{this.state.isSession === true ? "Session" : "Break"}</h4>
                    <span id="time-left">
                        <span className="timer">{this.props.timerMinutes}</span>
                        <span className="timer">:</span>
                        <span className="timer">{this.state.timerSeconds === 0 ? "00" :
                            this.state.timerSeconds < 10 ? "0" + this.state.timerSeconds :
                                this.state.timerSeconds
                        } </span>
                    </span>
                </section>
                <section className="timer-actions">
                    <button id="start_stop" onClick={this.playTimer}>Play</button>
                    <button id="stop" onClick={this.stopTimer}>Stop</button>
                    <button id="reset" onClick={this.resetTimer}>Reset</button>
                </section>
            </main>
        )
    }
}

export default TimeWatch;