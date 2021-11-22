import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ContextProviderMachine } from './context/ContextMachine';

ReactDOM.render(
  <React.StrictMode>
    <ContextProviderMachine>
      <App />
    </ContextProviderMachine>
  </React.StrictMode>,
  document.getElementById('root')
);
