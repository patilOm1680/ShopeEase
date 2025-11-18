import React from 'react'
import "./InvoiceCard.css"
import "../../Pages/Invoice/InvoicePage.css"
import { useSelector } from 'react-redux'
const InvoiceCard = ({ obj,index }) => {
    const quantityArr=useSelector((state)=>state.cartItems.quantity)
    return (
       
           
                
                <tr className='prodRow'>
                    <td  className='imageTd'>
                        <img src={obj.thumbnail} alt="" className='invoiceImg'/>
                    </td>
                    <td className='AllTd'>{obj.title}</td>
                    <td>{quantityArr[index]}</td>
                    <td>&#8377;{Math.floor(obj.price * 88)}</td>
                </tr>
                

    )
}

export default InvoiceCard
