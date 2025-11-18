import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  value: [],
  clothes: [],
  electronics: [],
  furniture: []
}


export const fetchProducts = createAsyncThunk("fetchProducts", async () => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}`);
  const data = await response.json();
  return data.products.sort(() => Math.random() - 0.5);
})


export const ProductSlice = createSlice({
  name: 'products',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.value = action.payload;
    })
  },
  reducers: {
    fetchProduct: (state, action) => {

      state.value = action.payload;
    },
    setCategories: (state, action) => {
      //clothes
      const allData = state.value;
      const clothesProd = allData.filter((obj) => {
        if (obj.category == 'mens-shirts' ||
          obj.category == 'tops' ||
          obj.category == 'womens-dresses'
        ) return true;
        else return false;
      })
      state.clothes = clothesProd;

      //electronics
      const electronicsProd = allData.filter((obj) => {
        if (obj.category == 'laptops' ||
          obj.category == 'smartphones' ||
          obj.category == 'tablets' ||
          obj.category == 'mobile-accessories'
        ) return true;
        else return false;
      })
      state.electronics = electronicsProd;


      //furniture
      const furnitureProd = allData.filter((obj) => {
        if (obj.category == 'furniture' ||
          obj.category == 'home-decoration'
        ) return true;
        else return false;
      })
      state.furniture=furnitureProd;

    }


  },
})

export const { fetchProduct, setCategories } = ProductSlice.actions

export default ProductSlice.reducer