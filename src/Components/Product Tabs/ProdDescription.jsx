import React from 'react'
import "./ProdDescription.css"
const ProdDescription = ({ obj }) => {
    return (
        <div className='prodDescContainer'>


            <p>{obj.title}</p>
            <p>{obj.description}</p>
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
               
                
            </ul>





           
        </div>
    )
}

export default ProdDescription
