import React from 'react';
import ReactDom from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';


const root = ReactDom.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
    <App/>
    </React.StrictMode>
)

reportWebVitals();