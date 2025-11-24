import { useEffect, useState } from 'react';
import CartCard from '../Cart card/CartCard.jsx';
import { useSelector } from 'react-redux';
import noItems from '../../assets/cart/noItems.png';
import './cart.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import OrderSummary from '../OrderSummary/OrderSummary.jsx';
import AddressForm from '../Form/AddressForm.jsx';
import { useNavigate } from 'react-router-dom';
import MonetizationOnRoundedIcon from '@mui/icons-material/MonetizationOnRounded';
import { useReactToPrint } from "react-to-print";
import { useRef } from "react";

const steps = ['Confirm Products', 'Order Summary', 'Delivery Details'];

const Cart = () => {

  useEffect(() => {
    console.log("User is on Cart Page.")
  }, []);
  const total = useSelector((state) => state.cartItems.total)
  const cartItems = useSelector((state) => state.cartItems.value);
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());


  const isStepSkipped = (step) => {
    return skipped.has(step);
  };
  const navigate = useNavigate()
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    if (activeStep === steps.length - 1) {
      navigate('/payment')
      return;
    }

    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  // console.log(total)
  const contentRef = useRef();
  const reactToPrintFn = useReactToPrint({ contentRef });
  const getStepContent = (stepIndex) => {
    switch (stepIndex) {
      case 0:
        return (

          <div className="cartWrapperContainer">
            {cartItems.map((obj) => (
              <CartCard obj={obj} cartItems={cartItems} key={obj.id} />
            ))}
            <div className='parentTotalAmountContainer'>
              <p className='totalAmountContainer'><MonetizationOnRoundedIcon fontSize="large" sx={{ marginRight: "5px", color: '#2774AE' }} /><b>Total:</b> <span>&#8377;{total}</span></p>
            </div>


            {/* 
                <div>
                    <button onClick={reactToPrintFn}>Print</button>
                    <div ref={contentRef} className='sampleCon'>Content to print</div>
                </div> 
            */}

          </div>
        );
      case 1:
        return <div className='orderSummaryContainer'><OrderSummary /></div>
      case 2:
        return <div className="addressContainer"><AddressForm /></div>
      default:
        return <Typography>Unknown stepIndex</Typography>;
    }
  };

  return (
    <>
      {cartItems.length !== 0 ? (
        <div className="cartOuter">
          <div className="cartContainer">


            <Box sx={{ width: '100%', marginTop: "30px", paddingTop: "20px" }}>
              <Stepper activeStep={activeStep}>
                {steps.map((label, index) => {
                  const stepProps = {};
                  const labelProps = {};
                  if (isStepSkipped(index)) {
                    stepProps.completed = false;
                  }
                  return (
                    <Step key={label} {...stepProps} >
                      <StepLabel {...labelProps} sx={{
                        ".MuiStepLabel-label": {
                          fontSize: {xs:"1rem", md:"1.4rem"},
                        }
                      }}>{label}</StepLabel>
                    </Step>
                  );
                })}
              </Stepper>
              {activeStep === steps.length ? (
                <React.Fragment>
                  <Typography sx={{ mt: 2, mb: 1 }}>
                    All steps completed - you&apos;re finished
                  </Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                    <Box sx={{ flex: '1 1 auto' }} />
                    <Button onClick={handleReset}>Reset</Button>
                  </Box>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <Typography component="div" sx={{ mt: 2, mb: 1 }}>
                    {getStepContent(activeStep)}
                  </Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                    {activeStep !== 0 &&
                      <Button
                        // color="white"

                        onClick={handleBack}

                        sx={{ mr: 1, color: "white", backgroundColor: "grey", width: "12px" }}
                      >
                        Back
                      </Button>
                    }

                    <Box sx={{ flex: '1 1 auto' }} />

                    <Button onClick={handleNext} sx={{ color: "white", backgroundColor: "#2774AE", width: "auto" }}>
                      {activeStep === steps.length - 1 ? 'Continue to Payment' : 'Next'}
                    </Button>
                  </Box>
                </React.Fragment>
              )}

            </Box>

          </div>
        </div>
      ) : (
        <div className="noItemsContainer">
          <img src={noItems} alt="No items in cart" />
        </div>
      )}
    </>
  );
};

export default Cart;
