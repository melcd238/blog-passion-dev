import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { initReduxStore } from './blog-passion-dev/store/reduxStore';
import { wireDependencies } from './blog-passion-dev/adapters/primary/dependenciesWiring';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement);

const store = initReduxStore(wireDependencies());  
root.render(
  <React.StrictMode>
     <Provider store={store}>
        <App />
      </Provider>
  </React.StrictMode>
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
