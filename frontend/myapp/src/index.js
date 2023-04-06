import React from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import{Provider} from 'react-redux';
import { store } from './store';
axios.defaults.baseURL="http://localhost:5000"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
    
    </BrowserRouter>
  </React.StrictMode>
);


