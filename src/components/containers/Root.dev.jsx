import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import App from '../App';
import ReduxDevTools from '../ReduxDevTools';

const Root = ({ store }) => (
  <Provider store={store}>
    <div>
      <App />
      <ReduxDevTools />
    </div>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired
};

Root.defaultProps = {
  store: {}
};

export default Root;
