import { configureStore } from '@reduxjs/toolkit'
import studentsReducer from './reducers/studentsReducer'

export default configureStore({
  reducer: { 
		studentsReducer,
	}
})