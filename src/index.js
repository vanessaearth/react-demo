import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './views/App';
import store from './store/index.js'
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './static/css/index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

