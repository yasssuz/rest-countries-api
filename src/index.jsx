import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from "./contexts/ThemeContext";
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
