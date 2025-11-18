import React, { useEffect, useState } from "react";
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import "./SuccessOrder.css";
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import { useNavigate } from "react-router-dom";
import Spinner from "../Payment/Spinner";

const SuccessOrder=()=> {
  const [loading,setLoading]=useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000)
    
  }, []);
  const navigate=useNavigate();
  const handleShopping = () => {
    navigate('/')
  }
  
  return (
    <>
    {(loading)? <Spinner/>:
      <div className="page-wrapSucess">
      <div className="successCard">
        <div className="icon-circle">
          <div className="checkmark">✔</div>
        </div>

        <h1 className="title">Thank You for Your Order!</h1>
        <p className="subtitle">
          Your order has been placed successfully. A confirmation email with all
          the details has been sent to your address.
        </p>

        <div className="order-box">
          <div className="order-info">
            <div className="label">Order Number</div>
            <div className="value">123-4567890</div>
          </div>
          <div className="divider" />
          <div className="order-info">
            <div className="label">Estimated Delivery</div>
            <div className="value">November 26–28, 2025</div>
          </div>
        </div>

        <div className="links">
          <a href="#" className="link">
            <LocalShippingIcon sx={{marginRight:"8px"}}/>  Track Your Order
          </a>
          <a href="#" className="link">
            <SupportAgentIcon sx={{marginRight:"8px"}}/> Customer Support
          </a>
        </div>

        <button className="btn" onClick={handleShopping}>Continue Shopping</button>
      </div>
    </div>
    }
    </>
    
  );
}

export default SuccessOrder