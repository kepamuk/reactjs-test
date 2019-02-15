import axios from 'axios';
import {DELETE_CART_BY_ID, GET_CART, POST_CART} from './actionTypes';

export const postCart = (good) => dispatch => {
  axios.post('http://localhost:3000/cart', good)
    .then(res => dispatch({
        type: POST_CART,
        payload: res.data
      })
    )
}

export const getCart = () => dispatch => {
  axios('http://localhost:3000/cart')
    .then(res => dispatch({
        type: GET_CART,
        payload: res.data
      })
    )
}

export const deleteCartById = (id) => dispatch => {
  axios.delete('http://localhost:3000/cart/' + id)
    .then(res => {
        dispatch({
          type: DELETE_CART_BY_ID,
          payload: id
        })
      }
    )
}
