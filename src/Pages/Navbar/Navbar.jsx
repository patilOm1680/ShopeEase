import React, { useEffect, useState } from "react";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {AppBar,Typography,IconButton,Badge,Drawer,List,ListItem,Toolbar,ListItemText,Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { useSelector } from "react-redux";
import SearchBar from "../../Components/SearchBar/SearchBar";

const Navbar = () => {
  const cartItems=useSelector((state)=>state.cartItems.value)
  const [count,setCount]=useState(0);
  useEffect(() => {
    setCount(cartItems.length)
  }, [cartItems]);

    const navigate=useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  const handleCartClick = () => {
    navigate('/cart');
  }
  
  
  const shopeEaseHandler = () => {
    navigate('/')
  }
  
  const navItems = [
    { label: "Home", path: "/" },
    { label: "Fashion", path: "/clothes" },
    { label: "Electronics", path: "/electronics" },
    { label: "Furniture", path: "/furniture" }
  ];

  const drawer = (
    <Box onClick={handleDrawerToggle} className="drawer-box">
      <IconButton className="close-icon">
        <CloseIcon />
      </IconButton>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} onClick={handleDrawerToggle}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `drawer-item ${isActive ? "drawer-active" : ""}`
              }
            >
              <ListItemText primary={item.label} />
            </NavLink>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="fixed" className="navbar" >
        <Toolbar className="toolbar" >
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            className="menuButton"
            onClick={handleDrawerToggle}
          >
            <MenuIcon />

          </IconButton>

          <Typography variant="h6" component="div" className="logo" sx={{cursor:"pointer",
            fontSize:"30px"
          }} onClick={shopeEaseHandler} id="logoHeading">
            <ShoppingCartOutlinedIcon fontSize="large" sx={{mb:1,mr:1, display:{sm:"inline",xs:"none"}}}/>
            ShopEase
          </Typography>

          <Box className="navLinks">
            {navItems.map((item) => (
              <NavLink
                key={item.label}
                to={item.path}
                className={({ isActive }) =>
                  `navButton ${isActive ? "active" : ""}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </Box>

          <Box className="iconGroup">
          
            <SearchIcon sx={{display:{sm:"inline",xs:"none"}}}/>
            <div className="navSearchBarContainer"><SearchBar/></div>
            
            <IconButton color="inherit" onClick={handleCartClick}>
              <Badge badgeContent={count} color="primary">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>

          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        className="mobileDrawer"
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar;