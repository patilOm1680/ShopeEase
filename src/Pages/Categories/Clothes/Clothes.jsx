import React, { useEffect, useState } from 'react'
import "./Clothes.css"
import { useDispatch, useSelector } from 'react-redux';
import CardComponent from '../../../Components/Cards/Card';
import CardSkeleton from '../../../Components/skeleton/CardSkeleton';
import { setClothesLoading } from '../../../features/Skeleton/SkeletonSlice';
const Clothes = () => {

  // const [loading, setLoading] = useState(false);//
const loading=useSelector((state)=>state.skeletonState.clothesLoading)
  // const data = useSelector((state) => state.products.value);
  // console.log(data)
  const clothes=useSelector((state)=>state.products.clothes)
  const dispatch=useDispatch();
  useEffect(() => {
      setTimeout(() => {
        dispatch(setClothesLoading())
      }, 1500)
      
    }, [loading]);
    
  // console.log(clothes)
  // useEffect(() => {
  //   // setTimeout(() => {
  //   //     setLoading(false)
  //   //   }, 1800);
  //   const allData = data;
  //   const temp = allData.filter((obj) => {
  //     if (obj.category == 'mens-shirts' ||
  //       obj.category == 'tops' ||
  //       obj.category == 'womens-dresses'
  //     ) return true;
  //     else return false;
  //   })
  //   setClothes(temp);
  //   console.log("User is on Clothes Page.")
  // }, [data]);


  // console.log(clothes)
  return (
    <>
      {(loading) ? <CardSkeleton /> : <div>
        <div className='clothesContainer'>
          {clothes.map((obj, index) => <CardComponent obj={obj} key={obj.id} />

          )}
        </div>
      </div>}
    </>
  )
}

export default Clothes
