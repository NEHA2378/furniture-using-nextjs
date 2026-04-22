import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

var loginToken = Cookies.get('user_login');

const initialState = {
    userLogin: loginToken ?? 0
}

export const userSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        login_register: (state, action) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.userLogin = action.payload
        },
        logout: (state) => {
            state.value -= 1
        }
    },
})

// Action creators are generated for each case reducer function
export const { login_register, logout } = userSlice.actions

export default userSlice.reducer