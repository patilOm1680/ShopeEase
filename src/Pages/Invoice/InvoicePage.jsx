import React from 'react'
import { useSelector } from 'react-redux'
import "./InvoicePage.css"
import CartCard from '../../Components/Cart card/CartCard'
import MonetizationOnRoundedIcon from '@mui/icons-material/MonetizationOnRounded';
import { useReactToPrint } from "react-to-print";
import { useRef } from "react";

import Button from '@mui/material/Button';
import InvoiceCard from '../../Components/InvoiceCard/InvoiceCard';
import { useNavigate } from 'react-router-dom';
const InvoicePage = () => {
    const contentRef = useRef();
const reactToPrintFn = useReactToPrint({ contentRef });

    const total=useSelector((state)=>state.cartItems.total)
    const cartItems = useSelector((state) => state.cartItems.value)
    const date=new Date();
    const navigate=useNavigate();
    const handlePrint = () => {
      reactToPrintFn();
      navigate('/payment-success')
    }
    
    return (
        <>
        <div className='invoiceContainer' ref={contentRef}>
            <div className='invoiceTitle'>
                <p className='invoiceHeading'>INVOICE</p>
               <p><b>Date:</b> {date.toDateString()}</p>
               
            </div>
            
            <div style={{ marginLeft: "27px", borderBottom: "1px dotted #aeb0af", paddingBottom: "10px" }}>
                <table border={1}>
                <tr>
                    <th>Image</th>
                    <th>Product Name</th>
                    <th>Quantity</th>
                    <th>Amount</th>
                </tr>
                
                {cartItems.map((obj,index) => (
                    <InvoiceCard obj={obj} index={index} key={obj.id} />
                ))}

                <tr>
                    <td colSpan={3}>
                        Shipping Charges
                    </td>
                    <td>
                        &#8377;40
                    </td>
                </tr>
                <tr>
                    <td colSpan={3}>
                        Delivery Charges
                    </td>
                    <td>
                        &#8377;56
                    </td>
                </tr>

                <tr>
                    <td colSpan={3}>
                        Goods and Services Tax
                    </td>
                    <td>
                        &#8377;{Math.floor(total / 18)}
                    </td>
                </tr>
                
                <tr>
                    <td colSpan={4} className='totalTd'>
                        <b>Total:</b> <span>&#8377;{total + Math.floor(total / 18) + 56 +40}</span>
                    </td>
                </tr>

                </table>
                <div className='thanksContainer'>Thank You For Your Buissness !</div>

                {/* 
                <div>
                    <button onClick={reactToPrintFn}>Print</button>
                    <div ref={contentRef} className='sampleCon'>Content to print</div>
                </div> 
            */}

            </div>
        </div>
       
        <Button sx={{marginLeft:"1600px",marginTop:"30px"}} variant="contained" onClick={handlePrint}>Print</Button>

        </>
        
    )
}

export default InvoicePage
