// src/store/reducers.js
import { SET_DATA } from "./action";

const initialState = {
  Qty: "Qty",
  ticket: "Ticket Type",
  seating_layout: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA:
      return {
        ...state,
        seating_layout: action.seating_layout,
      };
    case "Qty":
      return {
        ...state,
        Qty: action.Qty,
      };
    case "ticket":
      return {
        ...state,
        ticket: action.ticket,
      };
      case "seatselect":
        return {
          ...state,
          seating_layout: action.seating_layout,
        };
        case "removeseat":
          return {
            ...state,
            seating_layout: action.seating_layout,
          };
          case "submit":
            return {
              ...state,
              seating_layout: action.seating_layout,
            };
    default:
      return state;
  }
};

export default rootReducer;
