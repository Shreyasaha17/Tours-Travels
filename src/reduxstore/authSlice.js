
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: null,
  isLogin: false,
  cart: []
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {

    register: (state, action) => {

      state.user = action.payload
      state.isLogin = false
    },

    login: (state, action) => { //login here is the action ,payload keeps the data 

      if (state.user.email === action.payload.email && state.user.password === action.payload.password) {
        state.isLogin = true
      }
      else {
        state.isLogin = false;
        return state
      }

    },
    addToCart: (state, action) => {
      //   state.reservation=action.payload
      state.cart.push(action.payload);

    },
    removeFromCart: (state, action) => {
      const tourTitle = action.payload;
      if (tourTitle) {
        state.cart = state.cart.filter(cart => cart.title !== tourTitle);
      }
      else {
        console.warn("No title provided for cancellation");
      }
    },

    // addtocart: (state,action)=>{
    //   state.cart = [...state.cart, action.payload];
    // }
    // addToCart: (state, action) => {
    //   if (!state.cart) {
    //     state.cart = []; // Ensure cart is initialized if undefined
    //   }
    //   state.cart.push(action.payload);
    // },
    // removeFromCart: (state, action) => {
    //   if (state.cart) {
    //     state.cart = state.cart.filter(item => item.title !== action.payload);
    // }},
    logout: (state) => {
      state.user = null
      state.isLogin = false
    },

  },
})

// Action creators are generated for each case reducer function
export const { login, logout, register,addToCart,removeFromCart } = authSlice.actions

export default authSlice.reducer//-->add this authslice to store
