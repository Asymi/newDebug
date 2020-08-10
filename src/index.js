import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, BrowserRouter } from 'react-router-dom';

import store from './store';

import './styles/index.css';

ReactDOM.render(
        <BrowserRouter>
            <App />
        </BrowserRouter>,
        document.getElementById("root"));