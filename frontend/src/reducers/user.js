//import { createSlice } from "@reduxjs/toolkit";

const user = createSlice({
    name:"user",
    initialState:{
        error: null,
        username: null,
        id: null,
        accessToken: null
    },
    reducers: {
        setUsername: (store, action) => {
            store.username = action.payload;
        },
        setError: (store, action) => {
            store.error = action.payload;
        },
        setId: (store, action) => {
            store.userId = action.payload;
        },
        setAccessToken: (store, action) => {
            store.accessToken = action.payload;
        }
    }
});

export default user;