import React, { useEffect, useState } from 'react'
import "./Electronics.css"
import { useDispatch, useSelector } from 'react-redux';
import CardComponent from '../../../Components/Cards/Card';
import CardSkeleton from '../../../Components/skeleton/CardSkeleton';
import { setElectronicsLoading } from '../../../features/Skeleton/SkeletonSlice';
const Electronics = () => {
  // const [loading,setLoading]=useState(false);
  const loading=useSelector((state)=>state.skeletonState.electronicsLoading)
  const dispatch=useDispatch();
  useEffect(() => {
      setTimeout(() => {
        dispatch(setElectronicsLoading())
      }, 1500)
      
    }, [loading]);

  const elecProd=useSelector((state)=>state.products.electronics)
  // const data=useSelector((state)=>state.products.value);
  // console.log(data)
  // const [elecProd,setElecProd]=useState([]);
  // useEffect(() => {
  //   setTimeout(() => {
  //       setLoading(false)
  //     }, 2000);
  //    const allData=data;
  // const temp=allData.filter((obj)=>{
  //   if(obj.category=='laptops' ||
  //     obj.category=='smartphones' ||
  //     obj.category=='tablets' ||
  //     obj.category=='mobile-accessories'
  //    )return true;
  //    else return false;
  // })
  // setElecProd(temp);
  // console.log("User is on electronics Page.")
  // }, [data]);
  
 
  // console.log(clothes)
  return (
    <div>
      {(loading)?<CardSkeleton/>:<div className='electronicsContainer'>
        {elecProd.map((obj, index) => <CardComponent obj={obj} key={obj.id} />
          
        )}
      </div>}
      
    </div>
  )
}

export default Electronics
