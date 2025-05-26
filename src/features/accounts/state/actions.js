import { ACCOUNT_ACTIONS } from "./actionTypes";

export function deposit(amount, currency = "USD") {
  console.log(currency);
  if (currency === "USD") {
    return {
      type: ACCOUNT_ACTIONS.DEPOSIT,
      payload: amount,
    };
  }

  return async function (dispatch, getState) {
    dispatch(convertingCurrency());
    const targetCurrency = "USD";

    const res = await fetch(
      `https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=${targetCurrency}`
    );

    const data = await res.json();

    dispatch({
      type: ACCOUNT_ACTIONS.DEPOSIT,
      payload: data.rates.USD,
    });
  };
}

export function convertingCurrency() {
  return {
    type: ACCOUNT_ACTIONS.CONVERT_CURRENCY,
  };
}

export function withdraw(amount) {
  return {
    type: ACCOUNT_ACTIONS.WITHDRAW,
    payload: amount,
  };
}

export function loanRequest(amount, purpose) {
  return {
    // Check if the loan amount is greater than 0
    type: ACCOUNT_ACTIONS.REQUEST_LOAN,
    payload: {
      amount,
      purpose,
    },
  };
}

export function loanPayback() {
  return {
    // Check if the loan amount is greater than 0
    type: ACCOUNT_ACTIONS.PAY_LOAN,
  };
}

export function loading() {
  return {
    type: ACCOUNT_ACTIONS.LOADING,
  };
}
