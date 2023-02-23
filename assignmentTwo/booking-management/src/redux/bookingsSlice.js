import { createSlice } from '@reduxjs/toolkit';

const bookingsSlice = createSlice({
  name: 'bookings',
  initialState: {
    bookings: []
  },
  reducers: {
    addBooking: (state, action) => {
      if (state.bookings.length < 3) {
        state.bookings.push(action.payload);
      }
    },
    deleteBooking: (state, action) => {
      state.bookings.splice(action.payload, 1);
    }
  }
});

export const { addBooking, deleteBooking } = bookingsSlice.actions;
export default bookingsSlice.reducer;