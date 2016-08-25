// import { createStore, applyMiddleware } from 'redux';
import { createStore } from 'redux';
import reducer from '../reducers/';
import ReduxDevTools from '../components/ReduxDevTools';

// nitro is an array of middleware which can be concatenated to other arrays
// of middleware (non nitro) before being passed to applyMiddleware using apply().
// const enhancer = compose(
//   applyMiddleware(),
//   ReduxDevTools.instrument()
// );

export default (initialState = {}) => {
  // const store = createStore(reducer, initialState, enhancer);
  const store = createStore(reducer, initialState, ReduxDevTools.instrument());

  // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
  if (module.hot) {
    module.hot.accept('../reducers', () =>
      store.replaceReducer(reducer/* .default if you use Babel 6+ */)
    );
  }
  return store;
};
