import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import 'semantic-ui-css/semantic.min.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { createStore } from 'redux'
import rootReducer from './redux/reducers/shared'
import { Provider } from 'react-redux'
import middleware from './redux/middleware/index'
const store = createStore(rootReducer,middleware)

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


  // <React.StrictMode>
  // </React.StrictMode>