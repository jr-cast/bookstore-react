import { Provider } from 'react-redux';
import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Categories from './pages/Categories';
import store from './redux/configureStore';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Provider store={store}><App /></Provider>} />
        <Route path="/categories" element={<Provider store={store}><Categories /></Provider>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
