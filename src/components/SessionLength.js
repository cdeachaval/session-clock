import React from 'react';

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
        <h4 id="session-label" >Session Length</h4>
        <div class="interval-setter">
          <button disabled={props.isPlay ? "disabled" : ""} onClick={decreaseSession} id="session-decrement">Down</button>
          <p class="time-length" id="session-length" >{props.sessionLength}</p>
          <button disabled={props.isPlay ? "disabled" : ""} onClick={increaseSession} id="session-increment">Up</button>
        </div>
      </main>
    )
  }

export default SessionLength