import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import {  pageLogin, signup } from '../api/authApi';

const initialState = {
    user: null,
    isLogin: false
}

export const register = createAsyncThunk(
    'auth/register',
    async (data, { rejectWithValue }) => {
        try {
            const response = await signup(data)
            delete data.password;
            return { ...response, ...data }
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)
export const login = createAsyncThunk(
    'auth/login',
    async (data, { rejectWithValue }) => {
        try {
            const response = await pageLogin(data)
           // delete data.password;
            return { ...response, ...data }
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {


        logout: (state) => {
           state.user = null
            state.isLogin = false
        },
    },
    extraReducers: (builder) => {
        builder
        .addCase(register.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(register.fulfilled, (state, action) => {
            state.user = action.payload
        })
        .addCase(register.rejected, (state) => {
            state.user = null
        })
        .addCase(login.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(login.fulfilled, (state, action) => {
            state.user = action.payload
            state.isLogin = true;
        })
        
    }

})

// Action creators are generated for each case reducer function
export const { logout} = authSlice.actions

export default authSlice.reducer//-->add this authslice to store



