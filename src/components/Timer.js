import React from 'react';
import Countdown from 'react-countdown';
import './Timer.css'; // Optional: for additional styling

const Timer = ({ timeLimit, onComplete }) => {
  return (
    <div className="timer-container">
      <Countdown
        date={Date.now() + timeLimit}
        onComplete={onComplete}
        renderer={({ minutes, seconds, completed }) => {
          if (completed) {
            return <span>Time's up!</span>;
          } else {
            return (
              <span>
                {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
              </span>
            );
          }
        }}
      />
    </div>
  );
};

export default Timer;
