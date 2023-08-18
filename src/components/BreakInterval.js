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
        <h4 id="break-label" >Break Length</h4>
        <div class="interval-setter">
          <button disabled={props.isPlay ? "disabled" : ""} onClick={decreaseCounter} id="break-decrement" >Down</button>
          <p class="time-length" id="break-length" >{props.breakInterval}</p>
          <button disabled={props.isPlay ? "disabled" : ""} onClick={increaseCounter} id="break-increment">Up</button>
        </div>
      </div>
    )
  }

export default BreakInterval