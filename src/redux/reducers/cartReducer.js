import {DELETE_CART_BY_ID, GET_CART, POST_CART} from '../actions/actionTypes';

const initialState = {
  cart: []
}

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_CART:
      return {
        ...state,
        cart: action.payload
      }
    case POST_CART:
      return {
        ...state,
        cart: [
          ...state.cart,
          action.payload
        ]
      }
    case DELETE_CART_BY_ID:
      return {
        ...state,
        cart: [
          ...state.cart.filter(element => element.id !== action.payload)
        ]
      }
    default:
      return state;
  }
}