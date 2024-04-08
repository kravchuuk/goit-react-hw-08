import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { clearAuthHeader, setAuthHeader } from "../../api/api";

export const register = createAsyncThunk(
  "auth/register",
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.post("/users/signup", payload);
      setAuthHeader(data.token);

      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const logIn = createAsyncThunk(
  "auth/login",
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.post("/users/login", payload);
      setAuthHeader(data.token);

      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const logOut = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    const { data } = await axios.post("/users/logout");
    clearAuthHeader();

    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    try {
      const reduxState = thunkAPI.getState();
      const savedToken = reduxState.auth.token;

      setAuthHeader(savedToken);
      const response = await axios.get("/users/current");

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
  {
    condition: (_, { getState }) => {
      const reduxState = getState();
      const savedToken = reduxState.auth.token;

      return savedToken !== null;
    },
  }
);
