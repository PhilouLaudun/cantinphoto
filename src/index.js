import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./style/index.scss";
import { BrowserRouter } from 'react-router-dom';


 /*Mise en place du système de navigation*/
ReactDOM.render(
  
    <BrowserRouter>
    <App />
    </BrowserRouter>,

  document.getElementById('root')
);

