import React from 'react';
import { useSelector } from 'react-redux';
import CartItems from './CartItems';
import { Link } from "react-router-dom";
import products from './item.json'; 

const CartTab = () => {
  const carts = useSelector((store) => store.cart.items);

  const totalPrice = carts.reduce((acc, item) => {
    const product = products.find(p => p.id === item.productId); 
    return acc + (product.price * item.quantity); 
  }, 0);

  return (
    <div className="cart-tab">
      <h2 className="shopping-cart-title">Shopping Cart</h2>

      <div className="cart-items-container">
        {carts.map((item, key) => (
          <CartItems key={key} data={item} />
        ))}
      </div>

      <div className="total-price-container">
        <h3>Total Price: {totalPrice}₨</h3>
      </div>

      <div className="button-container">
        <Link to='/'><button className="btn close-btn" style={{height: '60px', width: '200px'}}>CLOSE</button></Link>

        {totalPrice === 0 ? (
          <button className="btn checkout-btn" id='checkout-btn-0' style={{height: '60px', width: '200px'}}>CHECKOUT</button>
        ) : (
          <Link to='/Checkout'><button className="btn checkout-btn" style={{height: '60px', width: '200px'}}>CHECKOUT</button></Link>
        )}
      </div>
    </div>
  );
};

export default CartTab;
