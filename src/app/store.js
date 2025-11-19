import { configureStore } from '@reduxjs/toolkit'
import cartReducer from "../features/cart/CartSlice"
import productReducer from "../features/Product/ProductSlice"
import skeletonReducer from "../features/Skeleton/SkeletonSlice"
import logger from 'redux-logger'
export const store = configureStore({
  reducer: {
    cartItems:cartReducer,
    products:productReducer,
    skeletonState:skeletonReducer
  },
    middleware: (getDefaultMiddleware) =>getDefaultMiddleware().concat(logger),
    
})