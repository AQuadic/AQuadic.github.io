import {createSlice} from "@reduxjs/toolkit";

const init = {
    value: "EN",
    
};
const counterslice = createSlice({
    name: "dir",
    initialState: init,
    reducers: {
        c_dir: (state, actions) => {
            state.value = actions.payload;
        },
     
    },
});

export const counteraction = counterslice.actions;
export default counterslice.reducer;
