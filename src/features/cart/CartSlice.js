import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
  quantity: [],
  total: 0
}

export const counterSlice = createSlice({
  name: 'cartItem',
  initialState,
  reducers: {
    addToCart: (state, action) => {

      const updated = [...state.value];
      const newQuanity = [...state.quantity]
      const isAlreadyPresent = updated.filter((obj) => obj.id == action.payload.id);
      if (isAlreadyPresent.length == 0) {
        updated.push(action.payload);
        newQuanity.push(1);
      }
      state.value = updated;
      state.quantity = newQuanity;
      state.total += Math.floor(action.payload.price * 88);
    },
    removeFromCart: (state, action) => {
      const index = state.value.findIndex(ele => ele.id === action.payload.id);

      if (index !== -1) {
        const valueToRemove = (state.quantity[index] * (action.payload.price * 88));
        state.value = state.value.filter((ele) => ele.id !== action.payload.id);
        state.quantity = state.quantity.filter((_, i) => i !== index);

        state.total -= Math.floor(valueToRemove);
      }


    },
    increaseQuantity: (state, action) => {
      const index = state.value.findIndex(ele => ele.id === action.payload.id);
      if (index !== -1) {
        state.quantity[index] += 1;
        state.total += Math.floor(action.payload.price * 88);
      }

    },
    clearCartItems: (state, action) => {
      state.value=[];
      state.quantity=[];
      state.total=0;
    },
    
    decreaseQuantity: (state, action) => {
      const index = state.value.findIndex(ele => ele.id === action.payload.id);
      if (index !== -1 && state.quantity[index] >= 2) {
        state.quantity[index] -= 1;
        state.total -= Math.floor(action.payload.price * 88);
      }
    },
  },
})

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity,clearCartItems } = counterSlice.actions

export default counterSlice.reducer