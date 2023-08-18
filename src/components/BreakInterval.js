import React from 'react';

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

export default BreakInterval