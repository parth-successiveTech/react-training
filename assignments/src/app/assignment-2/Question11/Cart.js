'use client'
import React, { useContext } from 'react';
import { CartContext } from '@/app/Context/CartContext';

const Cart = () => {
  const { cartItems, removeFromCart, totalPrice } = useContext(CartContext);

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map(item => (
            <li key={item.id}>
              {item.name} x {item.quantity} - ${item.price.toFixed(2)} each
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      <h3>Total: ${totalPrice.toFixed(2)}</h3>
    </div>
  );
};

export default Cart;