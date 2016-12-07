import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Countdown from '../../components/Countdown';

const expect = require('expect');
const TestUtils = require('react-addons-test-utils');
const $ = require('jQuery');

describe('Countdown', () => {
  it('should exist', () => {
    expect(Countdown).toExist();
  });
  describe('handleSetCountdown', () => {
    it('should set state to started and countdown', (done) => {
      const countdown = TestUtils.renderIntoDocument(<Countdown />);
      countdown.handleSetCountdown(10);

      expect(countdown.state.count).toBe(10);
      expect(countdown.state.countdownStatus).toBe('started');

      setTimeout(() => {
        expect(countdown.state.count).toBe(9);
        done();
      }, 1001);
    });

    it('should never set count when less than zero', (done) => {
      const countdown = TestUtils.renderIntoDocument(<Countdown />);
      countdown.handleSetCountdown(1);

      setTimeout(() => {
        expect(countdown.state.count).toBe(0);
        done();
      }, 3001);
    });
  });
});
