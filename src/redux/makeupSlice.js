import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  makeups: [],
  status: 'idle',
  error: null,
};

// Function to update image links to use HTTPS
const updateImageLinksToHttps = (makeupData) => makeupData.map((makeup) => ({
  ...makeup,
  image_link: makeup.image_link.replace('http://', 'https://'),
}));

export const fetchMakeup = createAsyncThunk('makeup/fetchMakeup', async () => {
  const response = await axios.get('https://makeup-api.herokuapp.com/api/v1/products.json');

  const filteredData = response.data.filter((makeup) => (
    makeup.image_link
      && makeup.image_link !== ''
      && makeup.image_link !== 'N/A'
      && makeup.image_link !== 'null'
  ));

  const makeupsWithHttpsImages = updateImageLinksToHttps(filteredData);

  return makeupsWithHttpsImages;
});

const makeupReducer = createSlice({
  name: 'makeup',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchMakeup.pending, (state) => {
        state.status = 'loading';
      })

      .addCase(fetchMakeup.fulfilled, (state, action) => {
        state.makeups = action.payload;
        state.status = 'succeeded';
      })

      .addCase(fetchMakeup.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default makeupReducer.reducer;
