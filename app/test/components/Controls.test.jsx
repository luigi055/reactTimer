import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Controls from '../../components/Controls';

const expect = require('expect');
const $ = require('jQuery'); //just like we configured it in webpack.config
const TestUtils = require('react-addons-test-utils');

describe('Controls', () => {
    it('should exist', () => {
    expect(Controls).toExist();
  });
  describe('render', () => {
    it('should render pause when started', () => {
      const controls = TestUtils.renderIntoDocument(<Controls countdownStatus="started" />);
      const $el = $(ReactDOM.findDOMNode(controls));
      const $pauseButton = $el.find('button:contains(Pause)');

      expect($pauseButton.length).toBe(1);
    });

    it('should render start when is paused', () => {
      const controls = TestUtils.renderIntoDocument(<Controls countdownStatus="paused" />);
      const $el = $(ReactDOM.findDOMNode(controls));
      const $pauseButton = $el.find('button:contains(Start)');

      expect($pauseButton.length).toBe(1);
    });
  });
});

