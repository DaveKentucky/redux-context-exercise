import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';

import CartProvider from './providers/cart/cart.provider';
import ShopProvider from './providers/shop/shop.provider';

import './index.css';
import App from './App';

ReactDOM.render(
  <ShopProvider>
    <CartProvider>
      <HashRouter>
        <App />
      </HashRouter>
    </CartProvider>
  </ShopProvider>,
  document.getElementById('root')
);