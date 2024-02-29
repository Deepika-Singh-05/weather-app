// redux/weatherSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API_KEY = process.env.NEXT_PUBLIC_WEATHER_KEY; // Replace with your API key
const API_URL = "https://api.openweathermap.org/data/2.5/weather";

export const fetchWeather = createAsyncThunk(
  "weather/fetchWeather",
  async (city, thunkAPI) => {
    try {
      const response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue({
        error: "Failed to fetch weather data",
      });
    }
  }
);

const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    data: null,
    loading: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.loading = "loading";
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.payload.error;
      });
  },
});

export default weatherSlice.reducer;
