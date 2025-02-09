import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const retrievesDishes = createAsyncThunk('dishes/retrievesDishes', async() => {
  const response =  await fetch('http://127.0.0.1:8000/members/dishes/', {
    method: 'GET',
    headers: {"Content-Type": "application/json"},
  })

  console.log("In the thunk")

  const dishes = await response.json();

  console.log(dishes.message);

  return dishes.message;

})

//this is the initial state of the slice
const initialState = {
    dishItems: [],
    status: 'idle',
    error: 'null'
  };

  const CartSlice = createSlice({
    name: 'dishes',
    initialState,
    reducers: {
      //each key-value pair represents a single slice reducer, key is the name of the function and value is the reducer function
  
      //The state contains the current state of the slice
      //The action has the dispatched action containing the payload
  
    },
    extraReducers: (builder) => {
      builder
      .addCase(retrievesDishes.pending, (state) => {
        state.status = "pending"
      })

      .addCase(retrievesDishes.fulfilled, (state, action) =>{
        // console.log("I'm in the fulfillment case: " + JSON.stringify(action.payload, null, 2))
        //I had to use JSON.stringify to be able to 
        state.dishItems = action.payload;
        state.status = "succeeded";
      })

      .addCase(retrievesDishes.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });

    }
  });
  
  //we export the object along with its functions to the redux store so we can use it throughout the application
  
  // export const {
  //   retrievesDishes,
  // } = CartSlice.actions;
  export default CartSlice.reducer;