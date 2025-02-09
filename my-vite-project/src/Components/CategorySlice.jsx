import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const retrievesCategories = createAsyncThunk('categories/retrievesCategories', async() => {

    const response =  await fetch('http://127.0.0.1:8000/members/categories/', {
        method: 'GET',
        headers: {"Content-Type": "application/json"},
      })

      const categories = await response.json();

      console.log("I'm in thunk: " + categories.categories);
    
      return categories.categories;
})

export const retrievesDishCategories = createAsyncThunk('categories/retrievesDishCategories', async(category_fk) => {

    const response =  await fetch('http://127.0.0.1:8000/members/dishesByCategory?category_fk=' + category_fk, {
        method: 'GET',
        headers: {"Content-Type": "application/json"},
      })

      const category = await response.json();

      console.log("I'm in thunk: " + category);
    
      return {"message" : category.message, "category" : category.category, "categories" : category.listCategories};

})


const initialState = {
    categoryItems: [],
    status: 'idle',
    error: 'null'
  };

  const CategorySlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
      //each key-value pair represents a single slice reducer, key is the name of the function and value is the reducer function
  
      //The state contains the current state of the slice
      //The action has the dispatched action containing the payload
  
    },
    extraReducers: (builder) => {
      builder
      .addCase(retrievesCategories.pending, (state) => {
        state.status = "pending"
      })

      .addCase(retrievesCategories.fulfilled, (state, action) =>{
        console.log("Putting in the payload now: " + action.payload);
        state.categoryItems = action.payload;
        state.status = "succeeded";
      })

      .addCase(retrievesCategories.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })

      .addCase(retrievesDishCategories.pending, (state) => {
        state.status = "pending"
      })

      .addCase(retrievesDishCategories.fulfilled, (state, action) =>{
        console.log("Putting in the payload now: " + action.payload);
        state.categoryItems = action.payload;
        state.status = "succeeded";
      })

      .addCase(retrievesDishCategories.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })


    }
  });

  export default CategorySlice.reducer;