/* eslint no-undef: "off"*/
import { render } from 'react-dom';
import React from 'react';
import configureStore from './store/configureStore';
import Root from './components/containers/Root';

// Create the Redux store.
const store = configureStore();

render(<Root store={store} />, document.getElementById('app'));
