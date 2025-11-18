import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  homeLoading: true,
  clothesLoading: true,
  electronicsLoading: true,
  furnitureLoading: true
}



export const SkeletonSlice = createSlice({
  name: 'SkeletonSlice',
  initialState,
  reducers: {
    setHomeLoading: (state, action) => {

      state.homeLoading = false;
    },
    setClothesLoading: (state, action) => {

      state.clothesLoading = false;
    },
    setFurnitureLoading: (state, action) => {

      state.furnitureLoading = false;
    },
    setElectronicsLoading: (state, action) => {

      state.electronicsLoading = false;
    },


  },
})

export const { setHomeLoading, setElectronicsLoading, setClothesLoading, setFurnitureLoading } = SkeletonSlice.actions

export default SkeletonSlice.reducer