import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/store";

const initialState: number = 0;

export const countSlice = createSlice({
  name: "count",
  initialState,
  reducers: {
    increment: (state) => {
      state += 1;
      return state;
    },
    decrement: (state) => {
      state -= 1;
      return state;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state += action.payload;
      return state;
    },
  },
});

export const { increment, decrement, incrementByAmount } = countSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.count;

export default countSlice.reducer;
