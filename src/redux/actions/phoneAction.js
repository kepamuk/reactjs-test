import axios from 'axios';

import {FETCH_FILTER, FETCH_PHONE, FETCH_PHONES, FETCH_PHONES_ALL, FETCH_SEARCH} from './actionTypes';

export const fetchPhonesAll = () => dispatch => {
  axios('http://localhost:3000/phones')
    .then(res => dispatch({
        type: FETCH_PHONES_ALL,
        payload: res.data
      })
    )
}

export const fetchPhone = (id) => dispatch => {
  axios('http://localhost:3000/phones/' + id)
    .then(res => dispatch({
        type: FETCH_PHONE,
        payload: res.data
      })
    )
}

export const searchPhone = (input) => dispatch => {
  axios('http://localhost:3000/phones?q=' + input)
    .then(res => {
        dispatch({
          type: FETCH_SEARCH,
          payload: res.data
        })
      }
    )
}

export const fetchPhones = (limit) => dispatch => {
  axios('http://localhost:3000/phones?_limit=' + limit)
    .then(res => dispatch({
        type: FETCH_PHONES,
        payload: res.data
      })
    )
}

export const filterPhones = (filter) => dispatch => {
  axios('http://localhost:3000/phones?' + filter)
    .then(res => dispatch({
        type: FETCH_FILTER,
        payload: res.data
      })
    )
}
