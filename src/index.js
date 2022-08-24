import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { robots } from './robots';
import 'tachyons';
import reportWebVitals from './reportWebVitals';
import App from './App';


// ReactDOM.render(<Hello />,document.getElementById('root'));
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);

reportWebVitals();
