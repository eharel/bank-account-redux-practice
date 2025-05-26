import { createSlice } from "@reduxjs/toolkit";
/*
 * Allows 'mutation' of state in a more readable way
 * while still keeping the immutability of Redux state.
 * This is a more modern approach compared to the traditional reducer pattern.
 * 'Opinionated' way to handle state in Redux.
 */

const initialState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
  isLoading: false,
  error: null,
};

// Create a slice of the Redux state
// Accepts an object of options
// The options include the name of the slice, the initial state, and the reducers
// Each reducer is a function that takes the current state and an action, and returns a new state
// The action creators are automatically generated based on the reducers
const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    deposit: (state, action) => {
      state.balance += action.payload;
      state.isLoading = false;
    },
    withdraw: (state, action) => {
      state.balance -= action.payload;
      state.isLoading = false;
    },
    requestLoan: {
      // This is a 'builder' function that allows us to define the action creator
      prepare(amount, purpose) {
        return {
          payload: {
            amount,
            purpose,
          },
        };
      },
      reducer(state, action) {
        if (state.loan > 0) {
          alert("You already have a loan");
          return;
        }
        state.loan = action.payload.amount;
        state.balance += action.payload.amount;
        state.loanPurpose = action.payload.purpose;
        state.isLoading = false;
      },
    },
    payLoan: (state) => {
      // Since we are mutating the state directly,
      // the order of operations matters.
      state.balance -= state.loan;
      state.loan = 0;
      state.loanPurpose = "";
      state.isLoading = false;
    },
    convertCurrency: (state) => {
      state.isLoading = true;
    },
    loading: (state) => {
      state.isLoading = true;
    },
  },
});

export default accountSlice.reducer;
export const {
  deposit,
  withdraw,
  requestLoan,
  payLoan,
  convertCurrency,
  loading,
} = accountSlice.actions;

// OLD VERSION USING SWITCH CASES
// export default function accountReducer(state = initialState, action) {
//   const { type, payload } = action;
//   switch (type) {
//     case ACCOUNT_ACTIONS.DEPOSIT:
//       return {
//         ...state,
//         balance: state.balance + payload,
//         isLoading: false,
//       };
//     case ACCOUNT_ACTIONS.WITHDRAW:
//       return {
//         ...state,
//         balance: state.balance - payload,
//         isLoading: false,
//       };
//     case ACCOUNT_ACTIONS.REQUEST_LOAN:
//       if (state.loan > 0) {
//         alert("You already have a loan");
//         return state;
//       }
//       return {
//         ...state,
//         loan: payload.amount,
//         balance: state.balance + payload.amount,
//         loanPurpose: payload.purpose,
//         isLoading: false,
//       };
//     case ACCOUNT_ACTIONS.PAY_LOAN:
//       return {
//         ...state,
//         loan: 0,
//         balance: state.balance - state.loan,
//         loanPurpose: "",
//         isLoading: false,
//       };
//     case ACCOUNT_ACTIONS.CONVERT_CURRENCY:
//       return {
//         ...state,
//         isLoading: true,
//       };
//     case ACCOUNT_ACTIONS.LOADING:
//       return {
//         ...state,
//         isLoading: true,
//       };
//     default:
//       return state;
//   }
// }
