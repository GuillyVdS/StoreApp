import React from 'react';
import ReactDOM from 'react-dom/client';
import './app/layout/styles.css';
//import App from './app/layout/App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider } from 'react-router-dom';
import { router } from './app/router/Routes';
import { Provider } from 'react-redux';
import { store } from './app/store/configureStore';
//import { fetchProductsAsync } from './features/catalog/catalogSlice';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

//store.dispatch(fetchProductsAsync());

root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
