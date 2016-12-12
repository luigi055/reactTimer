import React, { Component } from 'react';
import Clock from './Clock';
import Controls from './Controls';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      timerStatus: 'stopped'
    };

    this.handleStatusChange = this.handleStatusChange.bind(this);
  }
  
  componentDidUpdate(prevProps, prevStates) {
    if (this.state.timerStatus !== prevStates.timerStatus) {
      switch (this.state.timerStatus) {
        case 'started':
          this.startTimer();
          break;
        case 'stopped':
          this.setState({
            count: 0
          });
        case 'paused':
          clearInterval(this.timer);
          this.timer = null;
          break;
      }
    }
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  startTimer() {
    this.timer = setInterval(() => {
    let newCount = this.state.count + 1;
      this.setState({
        count: newCount 
      });
    }, 1000);
  }
  
  handleStatusChange(newTimerStatus) {
    console.log(newTimerStatus);
    this.setState({
      timerStatus: newTimerStatus
    });
  }

  
  render() {
    const { count, timerStatus } = this.state;
    return (
      <div>
        <h1 className="page-title">Timer Section</h1>
        <Clock 
          totalSeconds={count} 
        />
        <Controls
          countdownStatus={timerStatus}
          onStatusChange={this.handleStatusChange}
        />
      </div>
    );
  }
}

export default Timer;
