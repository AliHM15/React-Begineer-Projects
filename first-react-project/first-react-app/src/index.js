import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import reportWebVitals from './reportWebVitals';

const navbar =(
  <div>
    <h2>Hello World</h2>
  </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(navbar,
  <div>
    <h1>ali here</h1>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
