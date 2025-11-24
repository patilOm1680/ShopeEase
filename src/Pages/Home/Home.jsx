import React, { useEffect, useState } from 'react';
import CardComponent from '../../Components/Cards/Card.jsx';
import "./Home.css";
import CarouselCom from '../../Components/Carousel/CarouselCom.jsx';
import Category from '../../Components/Category/Category.jsx';
import { fetchProduct } from '../../features/Product/ProductSlice.js';
import { useDispatch, useSelector } from 'react-redux';
import Clothes from "../Categories/Clothes/Clothes.jsx"
import HomeSkeleton from '../../Components/skeleton/HomeSkeleton.jsx';
import Footer from '../../Components/Footer/Footer.jsx';
import { setHomeLoading } from '../../features/Skeleton/SkeletonSlice.js';

const Home = () => {

  const dispatch = useDispatch()
  // const [data, setData] = useState([]);
  const data = useSelector((state) => state.products.value);

  const loading = useSelector((state) => state.skeletonState.homeLoading)
  // const dispatch=useDispatch();
  useEffect(() => {
    setTimeout(() => {
      dispatch(setHomeLoading())
    }, 1500)

  }, [loading]);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false)
  //   }, 1800);

  // }, [data]);


  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const response = await fetch('https://dummyjson.com/products?limit=200');
  //       const tempData = await response.json();
  //       // setData(data.products);
  //       dispatch(fetchProduct(tempData.products))
  //     } catch (error) {
  //       console.error("Error", error);
  //     } finally {
  //       console.log("Successfully fetched the data from API.")
  //       setLoading(false);
  //     }

  //   }
  //   fetchData();
  //   console.log("User is on Home page")
  // }, []);



  return (
    <>
      {
        loading ? <HomeSkeleton /> : <div>
          <CarouselCom />
          {/* <div className='shopByCategoryHeading'>Shop By Category</div> */}
          <Category />
          <div className='homeContainer'>
            {data.map((obj, index) => {
              if (obj.images.length>1) return <CardComponent obj={obj} key={obj.id} />;
              return null;
            })}
          </div>
          {/* <Footer /> */}
        </div>
      }


      {/* <div>
        Clothes section
         <Clothes/>
      </div> */}

    </>
  );
}

export default Home;
