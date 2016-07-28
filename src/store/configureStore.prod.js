import { createStore, applyMiddleware, compose } from 'redux';
import reducer from '../reducers/';
// import plugins from './plugins';

const enhancer = compose(
  // applyMiddleware(plugins),
  window.devToolsExtension ? window.devToolsExtension() : undefined
);

export default (initialState) => createStore(reducer, initialState, enhancer);
