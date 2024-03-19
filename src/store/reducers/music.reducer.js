import { actionTypes } from '../actionsTypes'

const initState = {
  isLoading: false,
  musicsList: null,
}

const musics = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.NGMUSIC_REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    case actionTypes.NGMUSIC_SUCCESS:
      return {
        ...state,
        isLoading: false,
        musicsList: action.payload || null,
      }
    case actionTypes.NGMUSIC_FAILED:
      return {
        ...state,
        isLoading: false,
        message: action.message,
      }

    default:
      return state
  }
}

export default musics
