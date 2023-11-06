import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { IndexProvider } from './lib/context/IndexProvider';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <IndexProvider>
    <App />
  </IndexProvider>,
);

reportWebVitals();
serviceWorkerRegistration.register();
