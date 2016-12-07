import React, { Component } from 'react';

class Controls extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { countdownStatus } = this.props;
    const renderStartStopButton = () => {
      if (countdownStatus === 'started') {
        return <button className="button secondary">Pause</button>;
      } else if (countdownStatus === 'paused') {
        return <button className="button primary">Start</button>;
      }
    };

    return (
      <div>
        {renderStartStopButton()}
        <button className="button alert hollow">Clear</button>  
      </div>
    );
  }
}
Controls.propTypes = {
  countdownStatus: React.PropTypes.string.isRequired
};

export default Controls;
