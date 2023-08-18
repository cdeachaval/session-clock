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
        <h4>Session Length</h4>
        <div class="interval-setter">
          <button onClick={decreaseSession}>Down</button>
          <p class="time-length">{props.sessionLength}</p>
          <button onClick={increaseSession}>Up</button>
        </div>
      </main>
    )
  }

export default SessionLength