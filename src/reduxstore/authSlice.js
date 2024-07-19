import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: null,
    isLogin: false,
    reservation:null,
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
        addReservation:(state,action)=>{
            state.reservation=action.payload
            
        },
        cancelReservation:(state)=>{
        state.reservation=null
        },
        logout: (state) => {
           state.user = null
            state.isLogin = false
        },

    },
})

// Action creators are generated for each case reducer function
export const { login, logout, register,addReservation,cancelReservation } = authSlice.actions

export default authSlice.reducer//-->add this authslice to store


