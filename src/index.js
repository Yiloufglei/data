import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router/routes';
import './static/css/main.scss';
import * as serviceWorker from './serviceWorker';

ReactDOM.render( <Router /> , document.getElementById('app'));

serviceWorker.register();
