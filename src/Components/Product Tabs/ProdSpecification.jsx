import React from 'react'
import "./ProdSpecification.css"
const ProdSpecification = ({ obj }) => {
    return (
        <div className='prodSpecContainer'>
            <ul>
                
                    {
                        (obj.brand) && <li><p><b>Brand : </b>{obj.brand}</p></li>
                    }
                
              
                    {
                        (obj.category) && <li><p><b>Category : </b>{obj.category}</p></li>
                    }
                
                    {
                        (obj.warrantyInformation) && <li><p><b>Warrenty : </b>{obj.warrantyInformation}</p></li>
                    }
               
                
                    {
                        (obj.shippingInformation) && <li><p><b>Shipping Information : </b>{obj.shippingInformation}</p></li>
                    }
                
               
                    {
                        (obj.returnPolicy) && <li><p><b>Return Policy : </b>{obj.returnPolicy}</p></li>
                    }
                
                
                    {
                        (obj.dimensions.height) && <li><p><b>Height : </b>{obj.dimensions.height}</p></li>
                    }
                
                
                    {
                        (obj.dimensions.width) && <li><p><b>Width : </b>{obj.dimensions.width}</p></li>
                    }
                
            </ul>

        </div>
    )
}

export default ProdSpecification
