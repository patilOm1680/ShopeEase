import React, { useEffect, useState } from 'react'
import Navbar from './Pages/Navbar/Navbar.jsx'
import Home from "./Pages/Home/Home.jsx"
import { Route, Routes } from "react-router-dom"
import Cart from "./Components/Cart/Cart.jsx"
import "./App.css"
import Product from './Components/Product/Product.jsx'
import Clothes from './Pages/Categories/Clothes/Clothes.jsx'
import Electronics from './Pages/Categories/Electronics/Electronics.jsx'
import Furniture from './Pages/Categories/Furniture/Furniture.jsx'
import BuyNow from './Components/Buy/BuyNow.jsx'
import PaymentForm from './Components/Payment/PaymentForm.jsx'
import SuccessOrder from './Components/SuccessOrder/SuccessOrder.jsx'
import SearchResultPage from './Pages/SearchResultPage/SearchResultPage.jsx'
import InvoicePage from './Pages/Invoice/InvoicePage.jsx'
import Footer from './Components/Footer/Footer.jsx'


const App = () => {

  // const dispatch = useDispatch();
  // useEffect(() => {
  //   async function fetchAllProducts() {
  //     await dispatch(fetchProducts());
  //     await dispatch(setCategories());

  //   }
  //   fetchAllProducts();

  // }, []);

  return (
    <div className='main'>
      <Navbar />
  
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product/:id' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/clothes' element={<Clothes />} />
        <Route path='/electronics' element={<Electronics />} />
        <Route path='/furniture' element={<Furniture />} />
        <Route path='/buy' element={<BuyNow />} />
        <Route path='/payment' element={<PaymentForm />} />
        <Route path='/payment-success' element={<SuccessOrder />} />
        <Route path='/searchResults' element={<SearchResultPage />} />
        <Route path='/invoice' element={<InvoicePage />} />
      </Routes>

      <Footer/>
    </div>
  )
}

export default App
