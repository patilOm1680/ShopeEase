import React, { useEffect, useState } from 'react'
import "./Furniture.css"
import { useDispatch, useSelector } from 'react-redux';
import CardComponent from '../../../Components/Cards/Card';
import CardSkeleton from '../../../Components/skeleton/CardSkeleton';
import { setFurnitureLoading } from '../../../features/Skeleton/SkeletonSlice';
const Furniture = () => {

  // const [loading,setLoading]=useState(false);

  const loading = useSelector((state) => state.skeletonState.furnitureLoading)
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      dispatch(setFurnitureLoading())
    }, 1500)

  }, [loading]);
  
  const furnitureItems = useSelector((state) => state.products.furniture)

  // const data=useSelector((state)=>state.products.value);
  // console.log(data)
  // const [furnitureItems,setFurnitureItems]=useState([]);
  // useEffect(() => {
  //   setTimeout(() => {
  //       setLoading(false)
  //     }, 2000);
  //    const allData=data;
  // const temp=allData.filter((obj)=>{
  //   if(obj.category=='furniture' ||
  //     obj.category=='home-decoration'
  //    )return true;
  //    else return false;
  // })
  // setFurnitureItems(temp);
  // console.log("User is on furniture Page.")
  // }, [data]);


  // console.log(clothes)
  return (
    <div>
      {(loading) ? <CardSkeleton /> : <div className='furnitureContainer'>
        {furnitureItems.map((obj, index) => <CardComponent obj={obj} key={obj.id} />

        )}
      </div>}

    </div>
  )
}

export default Furniture
