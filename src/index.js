import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import { BrowserRouter } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore'
import {Provider} from 'react-redux';


const store = configureStore();

ReactDOM.render(<Provider store={store}><BrowserRouter><App /></BrowserRouter></Provider>, document.getElementById('root'));
registerServiceWorker();