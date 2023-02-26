import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {Provider} from 'react-redux';
import {store} from './store';
import {BrowserRouter} from 'react-router-dom';
import {getToken} from './services/token';
import {logIn} from './store/user-process/user-process';
import {fetchHotels} from './store/app-process/app-process';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const token = getToken();

if (token) {
  store.dispatch(logIn(token));
  store.dispatch(fetchHotels());
}

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ToastContainer />
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
