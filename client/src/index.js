import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import reducers from './reducers';
import reduxThunk from 'redux-thunk';
// import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  // {},
  applyMiddleware(reduxThunk),
);

ReactDOM.render(
  <Provider store={store}><App/></Provider>,
  document.getElementById('root')
);
// registerServiceWorker();
