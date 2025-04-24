// reducers/rootReducer.js

import { combineReducers } from '@reduxjs/toolkit';
import userReducer from './userReducer';
import wishlistReducer from './wishlistReducer';
import cartReducer from './cartReducer';
import currentProductReducer from './currentProductReducer';
import searchReducer from './searchReducer'; 

const rootReducer = combineReducers({
  user: userReducer,
  wishlist: wishlistReducer,
  cart: cartReducer,
  currentProduct: currentProductReducer,
  search: searchReducer, 
});

export default rootReducer;
