import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';


// Routeların çalışması için <App /> öğesini düzenlemeniz gerekir

ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    document.getElementById('root'),
  );