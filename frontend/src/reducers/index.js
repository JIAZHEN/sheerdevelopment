import { combineReducers } from 'redux'
import posts from './post-reducer'

const rootReducer = combineReducers({
  posts,
})

export default rootReducer
