import { combineReducers } from 'redux'
import music from './music.reducer'

const appReducer = combineReducers({
  music,
})

const rootReducer = (state, action) => {
  return appReducer(state, action)
}

export default rootReducer
