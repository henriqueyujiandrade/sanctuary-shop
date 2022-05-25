import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {BrowserRouter} from 'react-router-dom'
import { ProductProvider } from './Providers/product';
import Providers from './Providers';




ReactDOM.render(
  <React.StrictMode>
    
    <BrowserRouter>
    <Providers>
    <App />
    </Providers>
    </BrowserRouter>
    
  </React.StrictMode>,
  document.getElementById('root')
);
