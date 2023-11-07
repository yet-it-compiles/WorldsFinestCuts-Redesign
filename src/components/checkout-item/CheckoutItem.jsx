/**
 * @module CheckoutItem.jsx
 *
 * @description
 *
 * @since 0.1.0
 *
 * @exports CheckoutItem
 */

import { React, useState } from "react";
import styles from "./checkOutItem.module.scss";
import { ImCancelCircle } from "react-icons/im";

/**
 * @component CheckoutItem
 *
 * @description
 *
 * @returns {JSX.Element}
 */
const CheckoutItem = () => {
    const [quantity, setQuantity] = useState(1);

    const handleIncrement = () => {
        setQuantity(quantity + 1);
    };

    const handleDecrement = () => {
        setQuantity(quantity - 1);
    };

    return (
        <article className={styles.checkoutItem}>
            <section>
                <div className={styles.productImageWrapper}>
                    <img src="" alt="Product" className={styles.productImage} />

                    <div>
                        <h3 className={styles.itemTitle}>Product Title</h3>
                        <p className={styles.itemDescription}>
                            Short description of the product...
                        </p>
                    </div>
                </div>

                <div className={styles.quantityControl}>
                    <button
                        type="button"
                        onClick={handleDecrement}
                        className={styles.decrementButton}
                    >
                        −
                    </button>
                    <span className={styles.quantity}>{quantity}</span>
                    <button
                        type="button"
                        onClick={handleIncrement}
                        className={styles.incrementButton}
                    >
                        +
                    </button>
                </div>

                <div className={styles.priceWrapper}>
                    <p className={styles.price}>$750.00</p>
                    <button className={styles.removeButton}>
                        <ImCancelCircle />
                    </button>
                </div>
            </section>
        </article>
    );
};

export default CheckoutItem;
