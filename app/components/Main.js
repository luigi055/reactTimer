import React, { Component } from 'react';
import Nav from './Nav';


const Main = props => {
  return (
    <main>
      <Nav />
      <div className="row">
        <div className="medium-6 large-4 small-centered columns">
          {props.children}
        </div>
      </div>
    </main>
  );
};

export default Main;
