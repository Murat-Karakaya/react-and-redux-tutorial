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
    initialState: { count:0 },
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


/*Remember, counterSlice is not this:
{
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
}

It is an object returned from createSlice(). 
*/
//console.log(counterSlice) //Now go check it out


//If you are curious about counterSlice.reducer, go ahead. It might not make that much sense tough.
//console.log(counterSlice.reducer)


export const counterActions = counterSlice.actions; // I know right? We haven't passed actions! 
//Well, counterSlice is not something you might expect. So console log it to lear what it is



export const messageActions = messageSlice.actions;
export const store = configureStore({
  reducer: {
    //Note that it is not reducers, it is reducer
    counter: counterSlice.reducer,
    messenger: messageSlice.reducer
  }
});