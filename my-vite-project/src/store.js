import { configureStore } from '@reduxjs/toolkit';
import dishReducer from './Components/DishSlice';
import categoryReducer from './Components/CategorySlice'

//this creates the redux store and contains the slices made in CartSlice.jsx
//It's then exported so that the store and reducer functions in the slice can be used


const store = configureStore({
  reducer: {
    dishes: dishReducer,
    categories: categoryReducer,
  },
});

export default store;