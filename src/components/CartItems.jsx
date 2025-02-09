import React, { useState, useEffect } from "react";
import products from './item.json';
import { useDispatch } from "react-redux";
import {changeQuantity} from '../stores/cart_data';
import { Link} from "react-router-dom";

export default function CartItems(props) { 
    const { productId, quantity, isDisabled } = props.data;
    const [detail, setDetail] = useState(null); 
    const dispatch = useDispatch();

    useEffect(() => {
        const findDetail = products.find(product => product.id === productId);
        setDetail(findDetail);
    }, [productId]);

    const handleMinusQuantity = () => {
        if (!isDisabled) {
            dispatch(changeQuantity({
                productId: productId,
                quantity: quantity - 1
            }));
        }
    };

    const handlePlusQuantity = () => {
        if (!isDisabled) {
            dispatch(changeQuantity({
                productId: productId,
                quantity: quantity + 1
            }));
        }
    };

    if (!detail) {
        return <div>Loading...</div>; 
    }


    return (
        <div className="cartItems-container">
            <Link
          to="/description"
          state={{
            id: detail.id,
            title: detail.title,
            image: detail.image,
            rating: detail.rating,
            cost: detail.cost,
          }}
          className="prduct_description_by-cart"
        >
            <img src={detail.image} className="cart-image" alt={detail.title} />
            <h3 className="cart-title">{detail.title}</h3>
        </Link>
            <p className="cart-price">price = {detail.price * quantity}₨</p>
            <div className="addToCart-buttons">
                <button onClick={handleMinusQuantity} className="addbutton-menu"  disabled={isDisabled}>-</button>
                <span>{quantity}</span>
                <button onClick={handlePlusQuantity} className="subbutton-menu"  disabled={isDisabled}>+</button>
            </div>
        </div>
    );
}
