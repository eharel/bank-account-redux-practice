import { CUSTOMER_ACTIONS } from "./actionTypes";
export function createCustomer(fullName, nationalId) {
  return {
    type: CUSTOMER_ACTIONS.CREATE_CUSTOMER,
    payload: {
      fullName,
      nationalId,
      createdAt: new Date().toISOString(), // side effect, keep out of the reducer
    },
  };
}

export function updateFullName(fullName) {
  return {
    type: CUSTOMER_ACTIONS.CUSTOMER_UPDATE_FULL_NAME,
    payload: fullName,
  };
}
