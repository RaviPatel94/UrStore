import React, { useState } from "react";
import { useLocation } from 'react-router-dom';
import '../index.css';
import {useSelector, useDispatch} from 'react-redux';
import {addItem} from '../stores/cart_data'

export default function Description() {
    const carts = useSelector(store => store.cart.items);
    console.log(carts)
    const location = useLocation();
    const {id, title, image, rating, cost } = location.state || {};
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();
    const handleAddtoCart = () => {
        dispatch(addItem({
            productId: id,
            quantity: 1
        }));
    }

    return (
        <div className="product-container">

            <div className="product-content">
                <div className="product-image-gallery">
                    <img src={image} alt={title} className="main-image" />
                </div>

                <div className="product-details">
                    <h2>{title}</h2>
                    <div className="ratings">
                        <span>{rating} ★</span>
                        <span>2,500 Ratings</span>
                        <span>59+ bought this month</span>
                    </div>

                    <div className="price-section">
                        <span className="price">{cost} P</span>
                        <span className="discount">10% off</span>
                        <button className="add-to-cart" onClick={handleAddtoCart}>Add to cart</button>
                        <button className="wishlist">❤ Wishlist</button>
                    </div>

                    <div className="color-options">
                        <p>Colours:</p>
                        <span className="color black"></span>
                        <span className="color white"></span>
                        <span className="color gray"></span>
                    </div>

                    <div className="description">
                        <p>Capture stunning photos and high-definition videos with this versatile DSLR camera...</p>
                    </div>

                    <div className="offers">
                        <h4>Offers:</h4>
                        <ul>
                            <li>1st five orders have free delivery</li>
                            <li>10% off on your 1st order</li>
                        </ul>
                    </div>

                    <div className="warranty">
                        <p>Warranty: 6 months</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
