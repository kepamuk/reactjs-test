import {combineReducers} from 'redux';

import phoneReducer from './phoneReducer';
import cartReducer from './cartReducer';

export default combineReducers({
  phones: phoneReducer,
  cart: cartReducer
})