import React, { useEffect, useState } from "react";
import "./PaymentForm.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearCartItems } from "../../features/cart/CartSlice";

const PaymentForm = () => {

    useEffect(() => {
        console.log("User is on payment page and ready to make payment");
    }, []);

    const amount = useSelector((state) => state.cartItems.total);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handlePayClick = () => {
        console.log(`User paid Rs.${amount}`)
        console.log(`User successfully purchased the products.`)
        dispatch(clearCartItems());
        navigate('/payment-success')
    }

    return (
        <div className="page-wrapPayment">
            <div className="PaymentcardForm">
                <div className="card-header">
                    <h1 className="title">Payment Details</h1>
                </div>

                <form className="form">
                    <label className="label">Payment method</label>

                    <div className="payment-options">
                        <label className="option active">
                            <input type="radio" name="payment" defaultChecked />
                            <span className="radio" />
                            <div>
                                <div className="option-title">Credit/Debit Card</div>
                                <div className="option-subtitle">
                                    Pay with your credit or debit card
                                </div>
                            </div>
                        </label>

                        <label className="option">
                            <input type="radio" name="payment" />
                            <span className="radio" />
                            <div>
                                <div className="option-title">PayPal</div>
                                <div className="option-subtitle">
                                    Check out via your PayPal account
                                </div>
                            </div>
                        </label>

                        <label className="option">
                            <input type="radio" name="payment" />
                            <span className="radio" />
                            <div>
                                <div className="option-title">Google Pay</div>
                                <div className="option-subtitle">
                                    Pay securely with your saved Google account
                                </div>
                            </div>
                        </label>
                    </div>

                    <label className="label">Cardholder Name</label>
                    <input className="input" placeholder="John Doe" />

                    <label className="label">Card Number</label>
                    <div className="input-with-icon">
                        <input className="input" placeholder="0000 0000 0000 0000" />
                        <span className="icon">💳</span>
                    </div>

                    <div className="row two-cols">
                        <div className="col">
                            <label className="label">Expiration Date</label>
                            <input className="input" placeholder="MM / YY" id="exp" />
                        </div>

                        <div className="col">
                            <label className="label">
                                CVV <span className="info">ⓘ</span>
                            </label>
                            <input className="input" placeholder="123" id="cvv" />
                        </div>
                    </div>

                    <button type="button" className="pay-btn" onClick={handlePayClick}>
                        Pay &#8377;{amount + 56 + 40 + Math.floor(amount / 18)}
                        {/* {obj.price} */}
                    </button>

                    <div className="ssl">
                        🔒 Secure SSL Encrypted Payment
                    </div>
                </form>
            </div>
        </div>
    );
}
export default PaymentForm