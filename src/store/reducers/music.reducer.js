import { actionTypes } from '../actionsTypes'

const initState = {
  isLoading: false,
  musicsList: null,
  params: {
    term: '',
    limit: 10,
  },
}

const musics = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.NGMUSIC_REQUEST:
      return {
        ...state,
        isLoading: true,
        params: action.payload,
      }
    case actionTypes.NGMUSIC_SUCCESS:
      return {
        ...state,
        isLoading: false,
        musicsList: action.payload,
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
