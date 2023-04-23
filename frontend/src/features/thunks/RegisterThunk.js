// importing createThunk from redux toolkits
import React from 'react';

// importing axios 
import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = 'http://127.0.0.1:8000/'

// register thunk
export const registerUser = createAsyncThunk(
    'userSlice/registerUser' , async (credentials) => {
        const url = BASE_URL + 'register/'
        console.log('url : ' , url)
        console.log('credentials : ' , credentials)
        const response = await axios.post(url , credentials)
        console.log(response.data)
        return response?.data
    }
)

export const loginUser = createAsyncThunk(
    'userSlice/loginUser' , async (credentials) => {
        let email = credentials.email
        let password = credentials.password

        const url = BASE_URL + 'signin/?email=' + email + '&password=' + password
        console.log('url : ' , url)

        const response = await axios.get(url)
        console.log(response.data)
        return (await response?.data)
    }
)

