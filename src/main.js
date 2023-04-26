import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import './index.css';
ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(Provider, { store: store },
    React.createElement(React.StrictMode, null,
        React.createElement(BrowserRouter, null,
            React.createElement(App, null)))));
