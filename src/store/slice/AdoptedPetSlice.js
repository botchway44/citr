import { createSlice } from "@reduxjs/toolkit";

const adoptedPetSlice = createSlice({
  name : "adoptedPet",
  initialState : {
    value : null
  },

  reducers : {
    adopt : (state, action) =>{
      state.value = action.payload;
    },
    unAdopt : (state)=>{
      state.value = null;
    }
  }
});


export const {adopt} = adoptedPetSlice.actions;
export default adoptedPetSlice.reducer;