import { configureStore } from '@reduxjs/toolkit'
import workflowReducer from './slice/workSlice'

const reducer = {
    workflow: workflowReducer,
  }

const store = configureStore({
    reducer: reducer,
    devTools: true,
  })
  
export default store;