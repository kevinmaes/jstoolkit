/* eslint react/prefer-stateless-function: "off" */
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import WelcomeComponent from './WelcomeComponent';

export class App extends React.Component {

  render() {
    return (
      <div>
        <WelcomeComponent id="un" placeholder="username" />
      </div>
    );
  }
}

App.propTypes = {
  status: PropTypes.number
};

export default connect()(App);
