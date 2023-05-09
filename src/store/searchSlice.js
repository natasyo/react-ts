import { createSlice } from '@reduxjs/toolkit';
const searchSlice = createSlice({
    name: 'search',
    initialState: {
        searchString: '',
    },
    reducers: {
        setString(state, action) {
            state.searchString = action.payload;
        },
    },
});
export const { setString } = searchSlice.actions;
export default searchSlice.reducer;
