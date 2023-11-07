/**
 * @module Checkout.jsx
 *
 * @description
 *
 * @since 0.1.0
 *
 * @exports Checkout
 */

import React, { useState } from "react";
import styles from "./Checkout.module.scss";
import { ImCancelCircle } from "react-icons/im";

/**
 * @component Checkout
 *
 * @description
 *
 * @returns {JSX.Element}
 */
const Checkout = () => {
    const [cartItems, setCartItems] = useState(0);
    return (
        <div className={styles.checkout}>
            <header>
                <h1>Your Shopping Cart</h1>
                <p>You have 0 items in your shopping cart</p>
            </header>

            <div className={styles.subtotal}>
                <p>Subtotal: $0.00</p>
            </div>
        </div>
    );
};

const CheckoutItem = () => {
    const [quantity, setQuantity] = useState(1);

    const handleIncrement = () => {
        setQuantity(quantity + 1);
    };

    const handleDecrement = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <div className={styles.checkoutItem}>
            <section>
                <p>Picture</p>
                <div className={styles.grouped}>
                    <p>Title</p>
                    <p>Description</p>
                </div>
                <p>Type</p>

                <div className={styles.quantityControl}>
                    <button type="button" onClick={handleIncrement}>
                        +
                    </button>
                    <p>{quantity}</p>
                    <button type="button" onClick={handleDecrement}>
                        -
                    </button>
                </div>

                <p>Price: $750.00</p>

                <button className={styles.removeButton}>
                    <ImCancelCircle />
                </button>
            </section>
        </div>
    );
};

export default Checkout;
