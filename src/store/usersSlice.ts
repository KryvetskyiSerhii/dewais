import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { apiUrls } from "../api/apiUrls";
import { StateInterface } from "../types/stateType";
import { User } from "../types/userTypes";

const initialState: StateInterface = {
  user: null,
  status: null,
};

export const fetchUser = createAsyncThunk(
  "user/fetchUser",
  async (userName: string) => {
    const response = await axios.get(`${apiUrls.getUser}/${userName}`);
    const userToReturn: User = {
      avatar_url: response.data.avatar_url,
      created_at: response.data.created_at,
      html_url: response.data.html_url,
      id: response.data.id,
      location: response.data.location,
      name: response.data.name,
      bio: response.data.bio ? response.data.bio : "",
    };
    return userToReturn;
  }
);

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<User>) {
      state.user = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.status = "pending";
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.status = "fullfiled";
        usersSlice.caseReducers.setUser(state, action);
      })
      .addCase(fetchUser.rejected, (state) => {
        state.status = "rejected";
      });
  },
});

export const {} = usersSlice.actions;

export default usersSlice.reducer;
