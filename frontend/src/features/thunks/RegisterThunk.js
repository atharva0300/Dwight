// importing createThunk from redux toolkits
import React from 'react';

// importing axios 
import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = 'http://127.0.0.1:8000/'

// register thunk
export const registerUser = createAsyncThunk(
    'userSlice/registerUser' , async () => {
        const url = BASE_URL + 'register/'
        const response = await axios.post(url)
        console.log(response.data)
        return response?.data
    }
)

export const loginUser = createAsyncThunk(
    'userSlice/loginUser' , async () => {
        const url = BASE_URL + 'signin/'
        const response = await axios.post(url)
        console.log(response.data)
        return response?.data
    }
)