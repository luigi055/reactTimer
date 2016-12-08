import React, { Component } from 'react';
import Clock from './Clock';
import CountdownForm from './CountdownForm';
import Controls from './Controls';

class Countdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      countdownStatus: 'stopped'
    };
    this.handleSetCountdown = this.handleSetCountdown.bind(this);
    this.handleStatusChange = this.handleStatusChange.bind(this);
  }
  // this will fire right after theres an update within the app either from
  // its props or from its states
  componentDidUpdate(prevProps, prevState) {
    if (this.state.countdownStatus !== prevState.countdownStatus) {
      switch (this.state.countdownStatus) {
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
  // componentWillUpdate will fired before changes in props or states
  // componentWillUpdate(nextProps, nextState) {

  // }
  // This will execute exactly before dom render
  // componentWillMount always get fire first
  componentWillMount() {
    console.log('componentWillMount');
  }
  // And then when the dom rendered componentDidMount executes
  componentDidMount() {
    console.log('componentDidMount');
  }
  // When the render component unmount
  componentWillUnmount() {
    console.log('componentDidUnmount');
    clearInterval(this.timer);
    this.timer = null;
  }

  startTimer() {
    this.timer = setInterval(() => {
      const newCount = this.state.count -1;
      this.setState({
        count: newCount >= 0 ? newCount : 0
      });

      if (newCount === 0) {
        this.setState({
          countdownStatus: 'stopped'
        });
      }
    }, 1000);
  }
  handleSetCountdown(seconds) {
    this.setState({
      count: seconds,
      countdownStatus: 'started'
    });
  }
  handleStatusChange(newStatus) {
    this.setState({
      countdownStatus: newStatus
    });
  }
  render() {
    const { count, countdownStatus } = this.state;
    const renderControlArea = () => {
      if (countdownStatus !== 'stopped') {
        return (
          <Controls 
            countdownStatus={countdownStatus} 
            onStatusChange={this.handleStatusChange} 
          />
        );
      }
      return <CountdownForm onSetCountdown={this.handleSetCountdown} />;
    };
    return (
      <div>
        <h1 className="page-title">Countdown App</h1>
        <Clock totalSeconds={count} />
        {renderControlArea()}
      </div>
    );
  } 
};

export default Countdown;
