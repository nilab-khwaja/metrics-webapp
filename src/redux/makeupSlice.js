// import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import axios from 'axios';

// const initialState = {
//   makeups: [],
//   status: 'idle',
//   error: null,
// };

// export const fetchMakeup = createAsyncThunk('makeup/fetchMakeup', async () => {
//   const response = await axios.get('https://makeup-api.herokuapp.com/api/v1/products.json');

//   const filteredData = response.data
//     .filter((makeup) => (
//     // Filter out products with broken image links
//       makeup.image_link
//           && makeup.image_link !== ''
//           && makeup.image_link !== 'N/A'
//           && makeup.image_link !== 'null'
//     ));
//   return filteredData.map((makeup) => ({
//     id: makeup.id,
//     product_type: makeup.product_type,
//     brand: makeup.brand,
//     name: makeup.name,
//     image_link: makeup.image_link,
//     price: makeup.price,
//     price_sign: makeup.price_sign,
//     description: makeup.description,
//     product_colors: makeup.product_colors,
//   }));
// });

// const makeupReducer = createSlice({
//   name: 'makeup',
//   initialState,
//   reducers: {},

//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchMakeup.pending, (state) => {
//         state.status = 'loading';
//       })

//       .addCase(fetchMakeup.fulfilled, (state, action) => {
//         state.makeups = action.payload;
//         state.status = 'succeeded';
//       })

//       .addCase(fetchMakeup.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.error.message;
//       });
//   },
// });

// export default makeupReducer.reducer;


import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  makeups: [],
  status: 'idle',
  error: null,
};

// Function to update image links to use HTTPS
const updateImageLinksToHttps = (makeupData) => {
  return makeupData.map((makeup) => ({
    ...makeup,
    image_link: makeup.image_link.replace('http://', 'https://'),
  }));
};

export const fetchMakeup = createAsyncThunk('makeup/fetchMakeup', async () => {
  try {
    const response = await axios.get('https://makeup-api.herokuapp.com/api/v1/products.json');

    const filteredData = response.data.filter((makeup) => (
      makeup.image_link
      && makeup.image_link !== ''
      && makeup.image_link !== 'N/A'
      && makeup.image_link !== 'null'
    ));

    const makeupsWithHttpsImages = updateImageLinksToHttps(filteredData);

    return makeupsWithHttpsImages;
  } catch (error) {
    throw error;
  }
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