import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async (userData, thunkAPI) => {
    try {
      const response = await axios.post('https://reqres.in/api/register', userData);
      console.log(`Registration successful. Payload: ${JSON.stringify(response.data)}`);
      return response.data; // Assuming response.data contains user details including token and email
    } catch (error) {
      console.error('Error in registration:', error.response.data);
      return thunkAPI.rejectWithValue(error.response.data); // Returns error response data
    }
  }
);

export const loginUser = createAsyncThunk('auth/loginUser', async (userData, thunkAPI) => {
  try {
    const response = await axios.post('https://reqres.in/api/login', userData);
    console.log('Login successful. Payload:', response.data); // Log payload
    return response.data; // Assuming response.data contains user details including token and email
  } catch (error) {
    console.error('Error in login:', error.response.data);
    return thunkAPI.rejectWithValue(error.response.data); // Returns error response data
  }
});

export const logoutUser = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    email: null,
    token: null,
    loading: false,
    error: null,
    success: false,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      state.email = null;
      state.token = null;
      state.loading = false;
      state.error = null;
      state.success = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.token = action.payload.token;
        state.email = action.payload.email; // Store email in state
        state.success = true;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.success = false;
      })
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.token = action.payload.token;
        state.email = action.payload.email; // Store email in state
        state.success = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.success = false;
      });
  },
});

export const { logout } = logoutUser.actions;
export default logoutUser.reducer;
