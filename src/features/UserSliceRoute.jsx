import {createSlice} from '@reduxjs/toolkit'


export const userSlice = createSlice ({

    name:'user',
    initialState:{
        value:{
            isLoggedIn: false,
            component: '/unauthorised'

        }   
    },

    reducers:{
        login: (state, action)=>{
            state.value = action.payload
        },

        logout: (state)=>{
            state.value = {
                isLoggedIn: false,
                component: '/unauthorised'
        }   

        }
    }

})


export const {login, logout} = userSlice.actions
export default userSlice.reducer