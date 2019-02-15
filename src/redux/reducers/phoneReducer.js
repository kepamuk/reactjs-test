import {FETCH_FILTER, FETCH_PHONE, FETCH_PHONES, FETCH_PHONES_ALL, FETCH_SEARCH} from '../actions/actionTypes';

const initialState = {
  phones: [],
  phonesAll: [],
  phone: {},
  search: false,
  filter: false
}

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_PHONES:
      return {
        ...state,
        phones: action.payload,
        search: false,
        filter: false
      }
    case FETCH_PHONES_ALL:
      return {
        ...state,
        phonesAll: action.payload
      }
    case FETCH_PHONE:
      return {
        ...state,
        phone: action.payload
      }
    case FETCH_SEARCH:
      return {
        ...state,
        phones: action.payload,
        search: true
      }
    case FETCH_FILTER:
      return {
        ...state,
        phones: action.payload,
        filter: true
      }
    default:
      return state;
  }
}