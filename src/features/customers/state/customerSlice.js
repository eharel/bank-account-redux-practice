import { createSlice } from "@reduxjs/toolkit";
// import { CUSTOMER_ACTIONS } from "./actionTypes";

const initialState = {
  fullName: "",
  nationalId: "",
};

const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    createCustomer: {
      prepare(fullName, nationalId) {
        return {
          payload: {
            fullName,
            nationalId,
            createdAt: new Date().toISOString(),
          },
        };
      },
      reducer(state, action) {
        state.fullName = action.payload.fullName;
        state.nationalId = action.payload.nationalId;
        state.createdAt = action.payload.createdAt;
      },
    },
    updateFullName(state, action) {
      state.fullName = action.payload;
    },
  },
});

export const { createCustomer, customerUpdateFullName } = customerSlice.actions;
export default customerSlice.reducer;

// This is the original code that was commented out

// export default function customerReducer(state = initialState, action) {
//   const { type, payload } = action;
//   switch (type) {
//     case CUSTOMER_ACTIONS.CREATE_CUSTOMER:
//       return {
//         ...state,
//         fullName: payload.fullName,
//         nationalId: payload.nationalId,
//         createdAt: payload.createdAt,
//       };
//     case CUSTOMER_ACTIONS.CUSTOMER_UPDATE_FULL_NAME:
//       return {
//         ...state,
//         fullName: payload,
//       };
//     default:
//       return state;
//   }
// }
