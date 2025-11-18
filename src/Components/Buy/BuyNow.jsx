import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./BuyNow.css"
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../features/cart/CartSlice";
const BuyNow = () => {
  const navigate=useNavigate();
  const location = useLocation();
  const { obj, price } = location.state;

  const [quantity, setQuantity] = useState(1);
  // const quantityArr = useSelector((state) => state.cartItems.quantity);
  // const cartItems = useSelector((state) => state.cartItems.value);

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };
  const total = Math.floor(obj.price * 88 * quantity);
  const dispatch=useDispatch();
  const handleBuyClick = () => {
    dispatch(addToCart(obj));
    navigate('/cart')
    // console.log(total, quantity)
  };

  return (
    <div className="buyWrapper">
      <div
        className="buyContainer" >
        <img
          src={obj["thumbnail"]}
          alt={obj.title}
        />

        <h1 className="title">{obj.title}</h1>
        <p className="des">{obj.description}</p>

        <h3 className="price"> ₹ {price.toLocaleString('en-US')}</h3>

        <div className="btns">
          <button
            onClick={decreaseQuantity}
            className="btn"
          >
            -
          </button>
          <span className="quantity">{quantity}</span>
          <button
            onClick={increaseQuantity}
            className="btn"
          >
            +
          </button>
        </div>

        <h4 className="total">
          Total : ₹ {total.toLocaleString('en-US')}
        </h4>

        <button
          onClick={handleBuyClick}
          className="buyBtn"
        >
          BUY NOW
        </button>


      </div>
    </div>

  );
};

export default BuyNow;