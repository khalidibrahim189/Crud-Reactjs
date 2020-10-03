import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
// import StateProps from './StateProps'
// import Map from './Map'
// import Lifecycle from './Lifecycle'
import 'bootstrap/dist/css/bootstrap.min.css';
import Crud from './crud'

ReactDOM.render(
  <React.StrictMode>
    <Crud />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
