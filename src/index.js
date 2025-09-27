import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
let nav = 
{
  "Главная": "/index",
  "Новости": "/news",
  "О компании": "/about",
  "Магазин": "/shop",
  "Контакты": "/contacts"
};
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App navigation = {nav} />
  </React.StrictMode>
);