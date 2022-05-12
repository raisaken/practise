import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchTodo = createAsyncThunk("todos", async () => {
  return fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
  .then(
    (res) => res.json()
  );  
});

const CounterSlice = createSlice({
  name: "counter",
  initialState: {
    currentState: "loading",
    todos: [],
  },
  reducers: {
    increment(state, action) {
      state.value = state.value + 1;
    },
    incrementByValue(state, action) {
      state.value += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTodo.fulfilled, (state, action) => {
      state.status = "fulfilled";
      state.todos = action.payload;
    });
  },
});

export const { increment, decrement, incrementByValue } = CounterSlice.actions;

export default CounterSlice.reducer;
