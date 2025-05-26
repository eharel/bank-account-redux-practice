import { ACCOUNT_ACTIONS } from "./actionTypes";

const initialState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
  isLoading: false,
  error: null,
};

export default function accountReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ACCOUNT_ACTIONS.DEPOSIT:
      return {
        ...state,
        balance: state.balance + payload,
        isLoading: false,
      };
    case ACCOUNT_ACTIONS.WITHDRAW:
      return {
        ...state,
        balance: state.balance - payload,
        isLoading: false,
      };
    case ACCOUNT_ACTIONS.REQUEST_LOAN:
      if (state.loan > 0) {
        alert("You already have a loan");
        return state;
      }
      return {
        ...state,
        loan: payload.amount,
        balance: state.balance + payload.amount,
        loanPurpose: payload.purpose,
        isLoading: false,
      };
    case ACCOUNT_ACTIONS.PAY_LOAN:
      return {
        ...state,
        loan: 0,
        balance: state.balance - state.loan,
        loanPurpose: "",
        isLoading: false,
      };
    case ACCOUNT_ACTIONS.CONVERT_CURRENCY:
      return {
        ...state,
        isLoading: true,
      };
    case ACCOUNT_ACTIONS.LOADING:
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state;
  }
}
