import { createSlice } from "@reduxjs/toolkit";

export const AdminSlice = createSlice({
    name: "admin",
    initialState: {
        id: 0,
        nama: "",
        email: "",
        role: "",
        token: ""
    },
    reducers:{
        login: (state, action) =>{
            state.id = action.payload.id;
            state.nama = action.payload.nama;
            state.email = action.payload.email;
            state.role = action.payload.role;
            state.token = action.payload.token
        },
        logout: (state) => {
            state.id = 0;
            state.nama = "";
            state.email = "";
            state.role = "";
            state.token = ""
        },
    },
});

export const { login, logout } = AdminSlice.actions;
export default AdminSlice.reducer