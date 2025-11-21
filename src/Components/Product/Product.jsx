import React, { useEffect, useState } from 'react'
import "./product.css"
import Button from '@mui/material/Button';
import FlashOnIcon from '@mui/icons-material/FlashOn';
// import { green } from '@mui/material/colors';
// import "./App.css"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import Typography from '@mui/material/Typography';
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../features/cart/CartSlice';
import { Rating } from '@mui/material';
import ProdTabs from '../Product Tabs/ProdTabs';
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import {PRIMARY_COLOR,SECONDARY_COLOR} from "../../Constants/Colors"

const Product = () => {

    const cartItems = useSelector((state) => state.cartItems.value)
    const [isPresentInCart, setIsPresentInCart] = useState(false);
    
    useEffect(() => {
        const isAlreadyPresent = cartItems.filter((ele) => ele.id == obj.id);
        (isAlreadyPresent.length == 0) ? setIsPresentInCart(false) : setIsPresentInCart(true);
    }, [cartItems]);

    const location = useLocation();
    const { obj, price, originalPrice, percentOff } = location.state;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleAdd = () => {
        if (!isPresentInCart) {

            console.log(`User added "${obj.title}" to the cart.`)
            dispatch(addToCart(obj));
        }
        else {

            console.log("User clicked on the cart")
            navigate('/cart')
        }
    }


    const num = Math.floor(obj.price * 88)
    const handleBuy = () => {

        console.log(`User clicked on the buy button of "${obj.title}" product`)
        navigate('/buy', { state: { obj, price: num } });
    }

    return (
        <>
            <div className='productContainer'>
                <div className="previewContainer">
                    {
                        (obj.images.length > 1 && obj.images.map((item, index) => {
                            return <div className='previewImgContainer'>
                                 <PhotoProvider speed={() => 800}
  easing={(type) => (type === 2 ? 'cubic-bezier(0.36, 0, 0.66, -0.56)' : 'cubic-bezier(0.34, 1.56, 0.64, 1)')} maskOpacity={0.8}>
                                <PhotoView key={index} src={item}>
                                    <img src={item} alt="" className='previewImg'/>
                                </PhotoView>
                                </PhotoProvider>
                            </div>
                        }))

                    }
                </div>
                <div className="media">
                    <div>
                        <img src={obj["images"][0]} alt="" />
                    </div>
                    <div className='btns'>
                        <Button variant="contained" sx={{ backgroundColor: `${SECONDARY_COLOR}`, fontWeight: "bold", paddingLeft: 1, color: "#2774AE", width: "230px", height: "50px" }} size="large" onClick={handleAdd}><ShoppingCartIcon sx={{ marginRight: 1 }} />
                            {(isPresentInCart == true) ? "GO TO CART" : "ADD TO CART"}
                        </Button>


                        <Button variant="contained" sx={{ backgroundColor: `${PRIMARY_COLOR}`, fontWeight: "bold", paddingLeft: 1, width: "230px", height: "50px" }} size="large" onClick={handleBuy}><FlashOnIcon sx={{ marginRight: 1, marginLeft: 0 }} />BUY NOW </Button>
                    </div>
                </div>

                <div className="descContainer">
                    <h1 className='prodTitle'>{obj.title}</h1>
                    <p className='prodDes'>{obj.description}</p>

                    <div className='prodPrice'>
                        <Typography variant="h4" sx={{ fontWeight: "600" }}>
                            &#8377;{price}
                        </Typography>
                        <Typography variant="h6" className='discount' >
                            &#8377;{originalPrice}
                        </Typography>
                        <Typography variant="h6" className='discountPercent' >
                            {percentOff}% off
                        </Typography>
                    </div>
                    <div className='prodRating'>
                        <Rating name="read-only" value={obj.rating} readOnly />
                        <p>({obj.reviews.length} Reviews)</p>
                    </div>



                    <div className="offer">
                        <Typography variant="h6" sx={{ marginLeft: 1 }} >
                            Available offers

                        </Typography>
                        <ul>
                            <li>
                                <LocalOfferIcon color='success' sx={{ marginRight: 1 }} />

                                <b>Special price </b>
                                Get extra 38% off <span className='tc'>T&C</span>
                            </li>
                            <li>
                                <LocalOfferIcon color='success' sx={{ marginRight: 1 }} />

                                <b>Bank offer </b>
                                5% cashback on Axis Bank Flipkart Debit Card up to ₹750 <span className='tc'>T&C</span>
                            </li>
                            <li>
                                <LocalOfferIcon color='success' sx={{ marginRight: 1 }} />

                                <b>Bank offer </b>
                                10% cashback on Flipkart Credit Card upto ₹4,000 per calendar quarter <span className='tc'>T&C</span>
                            </li>
                            <li>
                                <LocalOfferIcon color='success' sx={{ marginRight: 1 }} />

                                <b>Bank offer </b>
                                7% cashback on HDFC Bank Flipkart Debit Card up to ₹1000 <span className='tc'>T&C</span>
                            </li>

                        </ul>

                    </div>

                    <ProdTabs obj={obj} />



                </div>

            </div>
        </>
    )
}

export default Product
