import { configureStore, createSlice } from '@reduxjs/toolkit';

const messageSlice = createSlice({
  name: "messageSlice",
  initialState: {message: "hello world"},
  reducers: {
    changeMessageValue (state=initialState, action) {
      (action.payload===undefined || action.payload==="") ?
      state.message="hello world" : state.message=action.payload;
    }
  }
});


const counterSlice = createSlice({
    name: "counterSlice",
    initialState: { count:0, test:{test:"test", test2:"test2"} },
    reducers: {
      increment(state=this.initialState, action) {
        action.payload===undefined ? 
        state.count++ : state.count += action.payload;
      },
      decrement(state=this.initialState, action) {
        action.payload===undefined ? 
        state.count-- : state.count -= action.payload;
      }
    }
});

//If you are curious about them, go ahead. It might not make that much sense tough.
//console.log(counterSlice.reducer)
//console.log(counterSlice)


export const counterActions = counterSlice.actions;
export const messageActions = messageSlice.actions;
export const store = configureStore({
  reducer: {
    //Note that it is not reducers, it is reducer
    counter: counterSlice.reducer,
    messenger: messageSlice.reducer
  }
});