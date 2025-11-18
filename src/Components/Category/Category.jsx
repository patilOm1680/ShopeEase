import React from 'react'
import "./category.css"
import clothes from "../../assets/category/clothes.png"
import furniture from "../../assets/category/furniture.png"
import electronics from "../../assets/category/electronics.jpg"
import shoes from "../../assets/category/shoes.avif"
import tv from "../../assets/category/tv.jpeg"
import aeroplane from "../../assets/category/aeroplane.webp"
import { useNavigate } from 'react-router-dom'

const Category = () => {
  const navigate=useNavigate();

  const handleClothesClick = () => {
    navigate('/clothes')
  }
  const handleElectronicsClick = () => {
    navigate('/electronics')
  }
  const handleFurnitureClick = () => {
    navigate('/furniture')
  }

  
  
  return (
    <>
    <div className='categoryContainer'>
      <div className="category" onClick={handleClothesClick}>
        <img src={clothes} alt="" />
        <h2 className='heading'>Clothes</h2>
      </div>
      <div className="category" onClick={handleElectronicsClick}>
        <img src={electronics} alt="" />
        <h2 className='heading'>Electronics</h2>
      </div>
      <div className="category" onClick={handleFurnitureClick}>
        <img src={furniture} alt="" />
        <h2 className='heading'>Home &  Furniture</h2>
      </div>
      <div className="category">
        <img src={shoes} alt="" />
        <h2 className='heading'>Shoes</h2>
      </div>
      <div className="category">
        <img src={tv} alt="" />
        <h2 className='heading'>Tv & Appliances</h2>
      </div>
      <div className="category">
        <img src={aeroplane} alt="" />
        <h2 className='heading'>Flight Booking</h2>
      </div>
    </div>
    </>
  )
}

export default Category
