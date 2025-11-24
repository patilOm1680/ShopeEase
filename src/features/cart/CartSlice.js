import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [...(JSON.parse(localStorage.getItem("cartItems"))) || []],
  quantity: [...(JSON.parse(localStorage.getItem("quantity"))) || []] ,
  total: (JSON.parse(localStorage.getItem("totalCartAmount"))) || 0
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
      localStorage.setItem("cartItems", JSON.stringify(state.value))


      state.quantity = newQuanity;
      localStorage.setItem("quantity", JSON.stringify(state.quantity))

      state.total += Math.floor(action.payload.price * 88);
      localStorage.setItem("totalCartAmount", JSON.stringify(state.total))
    },
    removeFromCart: (state, action) => {
      const index = state.value.findIndex(ele => ele.id === action.payload.id);

      if (index !== -1) {
        const valueToRemove = (state.quantity[index] * (action.payload.price * 88));
        state.value = state.value.filter((ele) => ele.id !== action.payload.id);
        localStorage.setItem("cartItems", JSON.stringify(state.value))


        state.quantity = state.quantity.filter((_, i) => i !== index);
        localStorage.setItem("quantity", JSON.stringify(state.quantity))

        state.total -= Math.floor(valueToRemove);
        localStorage.setItem("totalCartAmount", JSON.stringify(state.total))
      }


    },
    increaseQuantity: (state, action) => {
      const index = state.value.findIndex(ele => ele.id === action.payload.id);
      if (index !== -1) {
        state.quantity[index] += 1;
        localStorage.setItem("quantity", JSON.stringify(state.quantity))

        state.total += Math.floor(action.payload.price * 88);
        localStorage.setItem("totalCartAmount", JSON.stringify(state.total))
      }

    },
    clearCartItems: (state, action) => {
      state.value = [];
      localStorage.setItem("cartItems", JSON.stringify(state.value))


      state.quantity = [];
      localStorage.setItem("quantity", JSON.stringify(state.quantity))


      state.total = 0;
      localStorage.setItem("totalCartAmount", JSON.stringify(state.total))
    },

    decreaseQuantity: (state, action) => {
      const index = state.value.findIndex(ele => ele.id === action.payload.id);
      if (index !== -1 && state.quantity[index] >= 2) {
        state.quantity[index] -= 1;
        localStorage.removeItem("quantity");
        localStorage.setItem("quantity", JSON.stringify(state.quantity))

        state.total -= Math.floor(action.payload.price * 88);
        localStorage.removeItem("totalCartAmount");
        localStorage.setItem("totalCartAmount", JSON.stringify(state.total))
      }
    },
  },
})

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity, clearCartItems } = counterSlice.actions

export default counterSlice.reducer