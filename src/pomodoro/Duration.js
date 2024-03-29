import React from "react";
import { minutesToDuration } from "../utils/duration";

function Duration({session, focusDuration, breakDuration, setFocusDuration, setBreakDuration }){
  return (
      <div className="row">
        <div className="col">
          <div className="input-group input-group-lg mb-2">
            <span className="input-group-text" data-testid="duration-focus">
              Focus Duration: {minutesToDuration(focusDuration)}
            </span>
            <div className="input-group-append">
            <button
                type="button"
                className="btn btn-secondary"
                data-testid="decrease-focus"
                changeType="decrease"
                onClick={() => {
            if (focusDuration > 5) {
              setFocusDuration(focusDuration => focusDuration - 5)
              session.timeRemaining -= 5*60}
            }}
              >
                <span className="oi oi-minus" />
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                data-testid="increase-focus"
                onClick={() => {
            if (focusDuration < 60) {
              setFocusDuration(focusDuration => focusDuration + 5)
              session.timeRemaining += 5*60
                                    }
            }}
              >
                <span className="oi oi-plus" />              </button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="float-right">
            <div className="input-group input-group-lg mb-2">
              <span className="input-group-text" data-testid="duration-break">
                Break Duration: {minutesToDuration(breakDuration)}
              </span>
              <div className="input-group-append">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-testid="decrease-break"
                  onClick={() => {
            if (breakDuration > 1) {
              setBreakDuration(breakDuration => breakDuration - 1)}
            }}
                >
                  <span className="oi oi-minus" />
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-testid="increase-break"
                  onClick={() => {
            if (breakDuration < 15) {setBreakDuration(breakDuration => breakDuration + 1)}
            }}
                >
                  <span className="oi oi-plus" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      
  )
}

export default Duration;