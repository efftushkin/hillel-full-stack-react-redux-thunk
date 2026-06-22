import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const createInitialTypeState = () => ({
  drinks: [],
  status: 'idle',
  error: null,
});

const emptyTypeState = createInitialTypeState();

const ensureTypeState = (state, type) => {
  if (!state[type]) {
    state[type] = createInitialTypeState();
  }

  return state[type];
};

export const fetchCoffeeByType = createAsyncThunk(
  'coffee/fetchByType',
  async (type, { rejectWithValue }) => {
    try {
      const response = await fetch(`https://api.sampleapis.com/coffee/${type}`);

      if (!response.ok) {
        throw new Error('Failed to fetch drinks');
      }

      const drinks = await response.json();

      return { type, drinks };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
  {
    condition: (type, { getState }) => {
      const typeState = getState().coffee[type];

      return typeState?.status !== 'loading' && typeState?.status !== 'succeeded';
    },
  },
);

const coffeeSlice = createSlice({
  name: 'coffee',
  initialState: {
    hot: createInitialTypeState(),
    iced: createInitialTypeState(),
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCoffeeByType.pending, (state, action) => {
        const typeState = ensureTypeState(state, action.meta.arg);

        typeState.status = 'loading';
        typeState.error = null;
      })
      .addCase(fetchCoffeeByType.fulfilled, (state, action) => {
        const { type, drinks } = action.payload;
        const typeState = ensureTypeState(state, type);

        typeState.drinks = drinks;
        typeState.status = 'succeeded';
        typeState.error = null;
      })
      .addCase(fetchCoffeeByType.rejected, (state, action) => {
        if (action.meta.condition) {
          return;
        }

        const typeState = ensureTypeState(state, action.meta.arg);

        typeState.status = 'failed';
        typeState.error = action.payload || action.error.message || 'Failed to fetch drinks';
      });
  },
});

export const selectCoffeeByType = (state, type) => state.coffee[type] || emptyTypeState;

export default coffeeSlice.reducer;
