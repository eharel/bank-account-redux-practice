import { CUSTOMER_ACTIONS } from "./actionTypes";

const initialState = {
  fullName: "",
  nationalId: "",
};

export default function customerReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case CUSTOMER_ACTIONS.CREATE_CUSTOMER:
      return {
        ...state,
        fullName: payload.fullName,
        nationalId: payload.nationalId,
        createdAt: payload.createdAt,
      };
    case CUSTOMER_ACTIONS.CUSTOMER_UPDATE_FULL_NAME:
      return {
        ...state,
        fullName: payload,
      };
    default:
      return state;
  }
}
