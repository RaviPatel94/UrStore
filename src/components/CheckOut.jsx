import React, { useState } from "react";
import CartItems from "./CartItems";
import { useSelector } from 'react-redux';
import products from './item.json';

export default function CheckOut() {
    const carts = useSelector((store) => store.cart.items);
    const [isConfirmed, setIsConfirmed] = useState(false); // Track checkout state

    // Calculate total price
    const totalPrice = carts.reduce((acc, item) => {
        const product = products.find(p => p.id === item.productId); 
        return acc + (product.price * item.quantity); 
    }, 0);

    // Function to handle checkout confirmation
    const checkout_confirm = () => {
        setIsConfirmed(true); // Mark checkout as confirmed
    };

    return (
        <div className="CheckOut-container">
            {!isConfirmed ? ( // Show checkout form if not confirmed
                <>
                    <div className="Checkout-cart-container">
                        {carts.map((item, key) => (
                            <CartItems key={key} data={item} isDisabled={isConfirmed} /> 
                        ))}
                    </div>
                    <div className="user-info">
                        <div className="total-price-container">
                            <h3>Total Price: {totalPrice}₨</h3>
                        </div>
                        <div className="user-name">
                            <label htmlFor="user-name">Name: </label>
                            <input type="text" name="user-name" id="user-name" />
                        </div>
                        <div className="user-address">
                            <label htmlFor="user-add">Address: </label>
                            <input type="text" name="user-add" id="user-add" />
                        </div>
                        <button type="submit" onClick={checkout_confirm} className="checkout-confirm">
                            Confirm Your Checkout
                        </button>
                    </div>
                </>
            ) : ( // Show track products message if confirmed
                <>
                <div className="Checkout-cart-container">
                        {carts.map((item, key) => (
                            <CartItems key={key} data={item} isDisabled={isConfirmed} /> 
                        ))}
                </div>
                <div className="track-products-container">
                    <h3>Track Your Products</h3>
                    <p>Your order is confirmed. You will be able to track your products shortly.</p>
                </div>
                </>
            )}
        </div>
    );
}
