import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FlashOnIcon from '@mui/icons-material/FlashOn';
// import { green } from '@mui/material/colors';
// import "./App.css"

import {PRIMARY_COLOR,SECONDARY_COLOR} from "../../Constants/Colors"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "./card.css"
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import { addToCart } from '../../features/cart/CartSlice';
import { useDispatch, useSelector } from 'react-redux';


const CardComponent = ({ obj }) => {
  const cartItems = useSelector((state) => state.cartItems.value)
  const [isPresentInCart, setIsPresentInCart] = useState(false);

  useEffect(() => {
    const isAlreadyPresent = cartItems.filter((ele) => ele.id == obj.id);
    (isAlreadyPresent.length == 0) ? setIsPresentInCart(false) : setIsPresentInCart(true);
  }, [cartItems]);


  const navigate = useNavigate();

  const handleCardClick = () => {
    console.log(`User clicked on the "${obj.title}" product`)
    navigate('/product', { state: { obj, price, originalPrice, percentOff } });
  };
  // function randomNumberGenerate(min, max) {
  //   return Math.floor(Math.random() * (max - min + 1) + min);
  // }
  const num = Math.floor(obj.price * 88);
  const price = num.toLocaleString('en-US');
  const percentOff = Math.floor(obj.discountPercentage);
  const originalPrice = Math.floor((num * 100) / (100 - percentOff));
  const dispatch = useDispatch()
  const handleAddToCart = () => {
    // event.stopPropagation();
    if (!isPresentInCart) {
      console.log(`User added "${obj.title}" to the cart.`)
      dispatch(addToCart(obj))
    }
    else{
      console.log("User clicked on the cart")
      navigate('/cart')
    } 

    // navigate('/add', { state: { obj:obj, price:price } });

  }

  const handleBuyClick = () => {
    console.log(`User clicked on the buy button of "${obj.title}" product`)
    navigate('/buy', { state: { obj, price } })
  }

  // console.log(cartItems);
  return (
    <>
      {/* {console.log(obj)} */}
      <Card sx={{ maxWidth: 345, borderRadius: 2, cursor: "pointer", boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px', padding: "7px", boxSizing: "content-box", transition: "all 0.8s ease" }} className='card'>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image={obj["thumbnail"]}
          // sx={{height:"330px", objectFit:"cover"}}
          onClick={handleCardClick}
        />
        <CardContent sx={{ paddingBottom: 1 }} className='cardContent' onClick={handleCardClick}>
          <Typography gutterBottom variant="h5" component="div" className='cardTitle'>
            {obj.title}
          </Typography>
          <Typography className='CardDes' variant="body2" sx={{ color: 'text.secondary' }}>
            {obj.description}
          </Typography>
          <div className='priceContainer'>
            <Typography variant="h5" sx={{ fontWeight: "550" }} >
              &#8377;
              {price}
            </Typography>
            <Typography variant="h6" className='discount' >
              &#8377;
              {originalPrice}
            </Typography>
            <Typography variant="h6" className='discountPercent' >
              {percentOff}% off
            </Typography>
          </div>

        </CardContent>
        <CardActions>
          <Button variant="contained" sx={{ backgroundColor: `${SECONDARY_COLOR}`, fontWeight: "bold", paddingLeft: 1, width: "50%", color: "#2774AE", border: "1px solid #2774AE" }} onClick={handleAddToCart}><ShoppingCartIcon sx={{ marginRight: 1, display: { sm: "inline", xs: "none" } }} />
            {(isPresentInCart == true) ? "GO TO CART" : "ADD TO CART"}
          </Button>


          <Button variant="contained" sx={{ backgroundColor: `${PRIMARY_COLOR}`, fontWeight: "bold", paddingLeft: 1, width: "50%" }} onClick={handleBuyClick}><FlashOnIcon sx={{ marginRight: 1, marginLeft: 0 }} />BUY NOW </Button>

        </CardActions>
      </Card>
    </>


  );
}

export default CardComponent