import React from "react";

const SpecialOffers = () => {
    return (
        <div className="cart-page">
            <CartSummary />
            <CartItemDetails />
            <CheckoutForm />
            <PaymentInformation />
            <OrderSummary />
        </div>
    );
};

const CartSummary = () => {
    return (
        <div className="cart-summary">
            <h2>Your Cart</h2>
            <p>
                Items you have added to your cart are listed below. Adjust
                quantities or remove items before checkout.
            </p>
        </div>
    );
};

const CartItemDetails = () => {
    return (
        <div className="cart-item-details">
            <h3>Items in Cart</h3>
            {/* This would map over cart items, rendering each one */}
            <CartItem />
            {/* End of cart item map */}
            <div className="cart-controls">
                <button>Continue Shopping</button>
                <button>Update Cart</button>
            </div>
        </div>
    );
};

const CartItem = () => {
    // This would be mapped in CartItemDetails
    return (
        <div className="cart-item">
            <img src="item-image-url" alt="Item" />
            <div className="item-info">
                <h4>Item Name</h4>
                <p>Item Description</p>
                <p>Item Price</p>
                <input type="number" min="1" placeholder="Quantity" />
                <button>Remove</button>
            </div>
        </div>
    );
};

const CheckoutForm = () => {
    return (
        <form className="checkout-form">
            <h3>Shipping Details</h3>
            <input type="text" placeholder="Full Name" />
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Address" />
            <input type="text" placeholder="City" />
            <input type="text" placeholder="State/Province" />
            <input type="text" placeholder="Zip/Postal Code" />
            <input type="text" placeholder="Country" />
        </form>
    );
};

const PaymentInformation = () => {
    return (
        <div className="payment-information">
            <h3>Payment Information</h3>
            <input type="text" placeholder="Cardholder Name" />
            <input type="text" placeholder="Card Number" />
            <input type="text" placeholder="Expiration Date" />
            <input type="text" placeholder="CVV" />
        </div>
    );
};

const OrderSummary = () => {
    return (
        <div className="order-summary">
            <h3>Order Summary</h3>
            <p>Subtotal: $0.00</p>
            <p>Shipping: $0.00</p>
            <p>Taxes (Estimated): $0.00</p>
            <p>Total: $0.00</p>
            <button>Proceed to Checkout</button>
        </div>
    );
};

export default SpecialOffers;
