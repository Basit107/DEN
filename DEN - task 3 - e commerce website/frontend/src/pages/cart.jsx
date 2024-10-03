import React from 'react';
import './CSS/cart.css';
// import { CartContext } from '../context/CartContext'; // Assuming you have a context for cart data
import CartItems from '../components/cartItems/CartItems'

const Cart = () => {
    // const { cartItems, removeItem, incrementQuantity, decrementQuantity } = useContext(CartContext);

    // const calculateTotal = () => {
    //     return cartItems.reduce((acc, item) => acc + item.new_price * item.quantity, 0).toFixed(2);
    // };

    return (
        <div className="cart">
            <h1>Your Cart</h1>
            <CartItems />
            {/* {cartItems.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <div className="cart-items">
                    {cartItems.map((item, i) => (
                        <div className="cart-item" key={i}>
                            <img src={item.image} alt={item.name} className="cart-item-image" />
                            <div className="cart-item-details">
                                <h3>{item.name}</h3>
                                <p>Price: ${item.new_price.toFixed(2)}</p>
                                <div className="cart-item-quantity">
                                    <button onClick={() => decrementQuantity(item.id)}>-</button>
                                    <span>{item.quantity}</span>
                                    <button onClick={() => incrementQuantity(item.id)}>+</button>
                                </div>
                                <p>Total: ${(item.new_price * item.quantity).toFixed(2)}</p>
                            </div>
                            <button className="cart-remove" onClick={() => removeItem(item.id)}>Remove</button>
                        </div>
                    ))}
                </div>
            )}
            <div className="cart-total">
                <h2>Total Amount: ${calculateTotal()}</h2>
                <button className="checkout-btn">Proceed to Checkout</button>
            </div> */}
        </div>
    );
}

export default Cart;

