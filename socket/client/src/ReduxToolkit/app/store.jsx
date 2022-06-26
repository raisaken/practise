import { configureStore } from '@reduxjs/toolkit'
import CounterReducer from '../features/posts/PostSlice'

const store = configureStore({

  reducer: {
    counter:CounterReducer
  },
  
})

export default store