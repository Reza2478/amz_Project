import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  users: [],
  error: "",
};

const fetchUsers = createAsyncThunk("users/fetchusers", async (thunkAPI) => {
  try {
    const response = await axios.get("https://fakestoreapi.com/users");
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers:{
    editUser:(state,action)=>{
      const userIndex=state.users.findIndex(item=>item.id===action.payload.id)
      const user=state.users[userIndex]
      user.name.firstname=action.payload.firstname;
      user.name.lastname=action.payload.lastname;
      user.phone=action.payload.phone;
      user.email=action.payload.email;

    },
    deleteUser:(state,action)=>{
      state.users=state.users.filter(item=>item.id!==action.payload.id)
    },
    addToTeams: (state, action) => {
      const userIndex= state.users.findIndex(item=>item.id===action.payload.id)
      state.users[userIndex]={...state.users[userIndex],added:true}
    },
    removeFromTeams: (state, action) => {
      const userIndex= state.users.findIndex(item=>item.id===action.payload.id)
      state.users[userIndex].added=false
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.users = [];
        state.error = "";
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
        state.error = "";
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.users = [];
        state.error = action.error.message;
      });
  },
});

export default usersSlice.reducer;
export const {deleteUser,editUser,addToTeams,removeFromTeams}=usersSlice.actions;
export { fetchUsers };
