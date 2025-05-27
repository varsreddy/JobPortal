import { createSlice } from "@reduxjs/toolkit";

const applicationSlice = createSlice({
    name: "application",
    initialState: {
        applicants: [],
        // singleApplication: null,
        // searchApplicationByText: "",
    },
    reducers: {
        setAllApplications: (state, action) => {
            state.applicants = action.payload;
        },
        // setSingleApplication: (state, action) => {
        //     state.singleApplication = action.payload;
        // },
        // setSearchApplicationByText: (state, action) => {
        //     state.searchApplicationByText = action.payload;
        // },
    },
});


export const { setAllApplications, 
    // setSingleApplication, 
    // setSearchApplicationByText
 } = applicationSlice.actions;
export default applicationSlice.reducer;