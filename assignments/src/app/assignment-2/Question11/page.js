'use react'
import React from 'react';
import { CartProvider } from '@/app/Context/CartContext';
import ProductList from './ProductList';
import Cart from './Cart';

const App = () => {
  return (
    <CartProvider>
      <div style={{ display: 'flex', gap: '2rem' }}>
        <ProductList />
        <Cart />
      </div>
    </CartProvider>
  );
};

export default App;