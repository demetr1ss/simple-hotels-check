import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {Provider} from 'react-redux';
import {store} from './store';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import {getToken} from './services/token';
import {logIn} from './store/user-process/user-process';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const token = getToken();

if (token) {
  store.dispatch(logIn(token));
}

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
