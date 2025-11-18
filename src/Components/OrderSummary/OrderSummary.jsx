import * as React from 'react';
import { useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useDispatch, useSelector } from 'react-redux';
import CartCard from '../Cart card/CartCard';
import "./OrderSummary.css";
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
}));


const OrderSummary = () => {
  useEffect(() => {
    console.log(`user confirmed the products to purchased and he is on order summary page.`, cartItems)
  }, []);
  const cartItems = useSelector((state) => state.cartItems.value);
  const total = useSelector((state) => state.cartItems.total);
  const [expanded, setExpanded] = React.useState(false);

  
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'flex-start' }}>
      <Card sx={{ width: 450, transition: 'width 0.3s ease' }}>
        <CardHeader
          action={
            <div style={{ display: 'flex', alignItems: 'center' }}>
              {/* <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton> */}
              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <KeyboardDoubleArrowRightIcon />
              </ExpandMore>
            </div>
          }
          title="Order Summary"
          subheader="November 14, 2025"
        />

        <CardMedia
          component="img"
          height="194"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0jNpBG17A9nVZiaRnttN7LSL6nu1706X4te56CLEGNsoJQAe6BwUY35LeFDVV61HbqEE&usqp=CAU"
          alt="Paella dish"
        />

        <CardContent sx={{ marginBottom: "0px", paddingBottom: "0px" }}>
          <Typography variant="h6" sx={{ color: 'text.secondary' }}>
            <div className='detailsContainer'>
              <p>Shipping Charges</p>
              <span style={{ fontWeight: "bold" }}>&#8377;40</span>
            </div>
            <div className='detailsContainer'>
              <p>Delivery Charges:</p>
              <span style={{ fontWeight: "bold" }}>&#8377;56</span>
            </div>
            <div className='detailsContainer'>
              <p>GST:</p>
              <span style={{ fontWeight: "bold" }}>&#8377;{Math.floor(total / 18)}</span>
            </div>
            <div className='detailsContainer'>
              <p>Total:</p>
              <span style={{ fontWeight: "bold" }}>&#8377;{(total + 56 + 40 + Math.floor(total / 18)).toLocaleString('en-US')}</span>
            </div>
          </Typography>
        </CardContent>
      </Card>

      <Collapse
        in={expanded}
        orientation="horizontal"
        timeout="auto"
        unmountOnExit
      >
        <Card sx={{ width: 700, marginLeft: 2 }}>
          <CardContent>
            <div className='imagesContainer'>
              {cartItems.map((obj) => (
                <div>
                  <img src={obj.thumbnail} alt="" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </Collapse>
    </div>
  );
}

export default OrderSummary