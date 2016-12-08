import React, { Component } from 'react';

class Controls extends Component {
  constructor(props) {
    super(props);
    this.onStatusChange = this.onStatusChange.bind(this);
  }
  onStatusChange(newStatus) {
    return () => {
      this.props.onStatusChange(newStatus);
    };
  }
  
  componentWillReceiveProps(newProps) {
    console.log('componentWillReceiveProps', newProps.countdownStatus);
  }
  render() {
    const { countdownStatus } = this.props;
    const renderStartStopButton = () => {
      if (countdownStatus === 'started') {
        return (
          <button 
            onClick={this.onStatusChange('paused')} 
            className="button secondary"
          >Pause
          </button>);
      } else if (countdownStatus === 'paused') {
        return (
          <button 
            onClick={this.onStatusChange('started')} 
            className="button primary"
          >Start
          </button>);
      }
    };

    return (
      <div className="controls">
        {renderStartStopButton()}
        <button 
          onClick={this.onStatusChange('stopped')} 
          className="button alert hollow"
        >Clear
        </button>  
      </div>
    );
  }
}
Controls.propTypes = {
  countdownStatus: React.PropTypes.string.isRequired,
  onStatusChange: React.PropTypes.func.isRequired
};

export default Controls;
