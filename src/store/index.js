import {configureStore, createSlice} from "@reduxjs/toolkit";

const initialState = {
    hotelDetails: {},
    minDate: null,
    maxDate: null
}

const bookingSlice = createSlice({
    name: 'Booking',
    initialState: initialState,
    reducers: {
        book(state, action) {
            state.hotelDetails = action.payload.hotelDetails;
            state.minDate = action.payload.minDate;
            state.maxDate = action.payload.maxDate;
        },
        bookingClear(state) {
            state.hotelDetails = {};
            state.minDate = null;
            state.maxDate = null
        }
    }
})


const store = configureStore({
    reducer: {book: bookingSlice.reducer}
})

const bookingActions = bookingSlice.actions;

export {bookingActions};

export default store;
