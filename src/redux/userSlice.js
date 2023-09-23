import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: [],
  carDetails: [],
  carValue: [],
  driverBio: [],
  carValueDetail: []
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, {payload}) => {
             state.user.push(payload);
    },
    getCarDetails: (state, {payload}) => {
             state.carDetails.push(payload)
    },
    getCarValue: (state, {payload}) => {
      state.carValue.push(payload)
    },
    getCarValueDetail: (state, {payload}) => {
      state.carValueDetail.push(payload)
    },
    getDriverBio: (state, {payload}) => {
      state.driverBio.push(payload)
    }
   
  },
});

// Action creators are generated for each case reducer function
export const { addUser, getCarDetails, getCarValue, getCarValueDetail, getDriverBio } = userSlice.actions;

export default userSlice.reducer;
