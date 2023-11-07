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
import CheckoutItem from "../../components/checkout-item/CheckoutItem";

/**
 * @component Checkout
 *
 * @description
 *
 * @returns {JSX.Element}
 */
const CheckoutPage = () => {
    return (
        <div className={styles.checkout}>
            <header>
                <h1>Your Shopping Cart</h1>
                <p>You have 0 items in your shopping cart</p>
                <p>Adjust quantities or remove items before checkout.</p>
            </header>

            <nav>
                <ul>
                    <li>Product</li>
                    <div className={styles.aaa}>
                        <li>Quantity</li>
                        <li>Total Price</li>
                    </div>
                </ul>
                <div className={styles.separator}></div>
            </nav>

            <CheckoutItem />

            <div className={styles.cartCostWrapper}>
                <p>
                    Subtotal: <span>$0.00</span>
                </p>
                <p>
                    Shipping: <span>FREE</span>
                </p>
                <p>
                    Total: <span>$0.00</span>
                </p>
            </div>
        </div>
    );
};

export default CheckoutPage;
