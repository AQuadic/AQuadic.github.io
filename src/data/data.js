import {createSlice} from "@reduxjs/toolkit";

const init = {
    value: "EN",
project :[],
};
const counterslice = createSlice({
    name: "dir",
    initialState: init,
    reducers: {
        c_dir: (state, actions) => {
            state.value = actions.payload;
        },
        targetProjecr:(state ,actions)=>{
state.project= actions.payload
        }


    },
});

export const counteraction = counterslice.actions;
export default counterslice.reducer;
