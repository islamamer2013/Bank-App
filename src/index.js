import React from 'react';
import './index.css';
import ReactDOM  from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import '@fortawesome/fontawesome-free/css/all.min.css'
import {  BrowserRouter } from 'react-router-dom';



ReactDOM.render(
  
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
  
  ,

  document.getElementById('root')
);

