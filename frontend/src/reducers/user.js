import { createSlice } from "@reduxjs/toolkit";

export const user = createSlice({
    name: "user",
    initialState: {
        error: null,
        username: null,
        id: null,
        accessToken: null,
        presentation: "",
        age: null,
        email: "",
        instagram: "",
        facebook: "",
        bookmark: ""
    },
    reducers: {
        setUsername: (store, action) => {
            store.username = action.payload;
        },
        setError: (store, action) => {
            store.error = action.payload;
        },
        setId: (store, action) => {
            store.id = action.payload;
        },
        setAccessToken: (store, action) => {
            store.accessToken = action.payload;
        },
        setEmail: (store, action) => {
            store.email = action.payload;
        },
        setName: (store, action) => {
            store.name = action.payload;
        },
        setAge: (store, action) => {
            store.age = action.payload;
        },
        setPresentation: (store, action) => {
            store.presentation = action.payload;
        },
        setFacebook: (store, action) => {
            store.facebook = action.payload;
        },
        setInstagram: (store, action) => {
            store.instagram = action.payload;
        },
        setBookmark: (store, action) => {
            store.bookmark = action.payload
        }
    }
});

export default user;