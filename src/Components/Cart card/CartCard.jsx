import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Typography from '@mui/material/Typography';
import FlashOnIcon from '@mui/icons-material/FlashOn';
// import { green } from '@mui/material/colors';
// import "./App.css"
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "./CartCard.css"
import IndeterminateCheckBoxRoundedIcon from '@mui/icons-material/IndeterminateCheckBoxRounded';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import { decreaseQuantity, increaseQuantity, removeFromCart } from '../../features/cart/CartSlice';
import { useDispatch, useSelector } from 'react-redux';

const CartCard=({ obj })=> {
  const [quantity, setQuantity] = useState(1);
  const quantityArr = useSelector((state) => state.cartItems.quantity);
  const cartItems = useSelector((state) => state.cartItems.value);

  useEffect(() => {
    let idx;
    cartItems.forEach((element, index) => {
      if (element.id == obj.id) {
        idx = index;
      }
    });
    if (idx !== undefined && quantityArr[idx] !== undefined) {
      setQuantity(quantityArr[idx]);
    }
  }, [cartItems, obj.id, quantityArr]);


  //   const [isPresentInCart,setIsPresentInCart]=useState(false);

  // useEffect(() => {

  // }, [cartItem]);


  const increaseQuantityHandler = () => {
    console.log(`User increased the quantity of "${obj.title}" product.`)
    dispatch(increaseQuantity(obj));
    setQuantity((q) => q + 1);
  }
  const decreaseQuantityHandler = () => {
    if (quantity >= 2) {
      console.log(`User decreased the quantity of "${obj.title}" product.`)
      dispatch(decreaseQuantity(obj));
      setQuantity((q) => q - 1);
    }

  };

  const navigate = useNavigate();

  const handleCardClick = () => {
    console.log(`User opened the "${obj.title}" product from cart.`)
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
  const handleRemoveItem = (event) => {
    // event.stopPropagation();
    console.log(`User removed "${obj.title}" product from the cart.`)
    dispatch(removeFromCart(obj))

    // navigate('/add', { state: { obj:obj, price:price } });
    // setIsPresentInCart(!isPresentInCart);
  }
  //   console.log(cartItems);
  return (
    <>
      {/* {console.log(obj)} */}
      <Card sx={{ maxWidth: 1400, borderRadius: 2, display: "flex", flexDirection: "row", height: 200, padding: "10px", transition: "all 0.8s ease" }} className='Cartcard'>
        <CardMedia
          component="img"
          alt="green iguana"
          height={40}
          image={obj["thumbnail"]}
          sx={{ height: "200px", width: "200px", objectFit: "contain" ,cursor:"pointer"}}
          onClick={handleCardClick}
        />
        <CardContent sx={{ paddingBottom: 1,cursor:"pointer" }} className='cardContent' onClick={handleCardClick}>
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
        <div className="btns">
          <button
            onClick={decreaseQuantityHandler}
            className="btn"
          >
            <IndeterminateCheckBoxRoundedIcon sx={{ color: "grey", cursor: "pointer" }} />
          </button>
          <span className="quantity">{quantity}</span>
          <button
            onClick={increaseQuantityHandler}
            className="btn"
          >
            <AddBoxRoundedIcon sx={{ color: "grey", cursor: "pointer" }} />
          </button>
        </div>
        <CardActions>
          <Button variant="contained" sx={{ backgroundColor: "red", fontWeight: "bold", width: "170px" }} onClick={handleRemoveItem}><DeleteForeverIcon sx={{ marginRight: 1 }} />
            REMOVE ITEM
          </Button>

        </CardActions>

      </Card>
    </>


  );
}
export default CartCard