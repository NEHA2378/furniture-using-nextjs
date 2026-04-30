import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

var loginToken = Cookies.get('user_login');

const initialState = {
    userLogin: loginToken ?? null
}

export const userSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        login_register: (state, action) => {
            state.userLogin = action.payload;
        },
        logout: (state) => {
            state.userLogin = null; //clear login state
        }
    },
})

export const { login_register, logout } = userSlice.actions;
export default userSlice.reducer;