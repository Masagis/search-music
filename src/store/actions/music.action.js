import axios from 'axios'
import { actionTypes } from '../actionsTypes'

export function getSearchResult(params) {
  return (dispatch) => {
    dispatch({ type: actionTypes.NGMUSIC_REQUEST })
    return axios
      .get(`https://itunes.apple.com/search?term=${params}`)
      .then((response) => {
        dispatch({
          type: actionTypes.NGMUSIC_SUCCESS,
          payload: response.data.results,
        })
        return response.data
      })
      .catch((err) => {
        dispatch({ type: actionTypes.NGMUSIC_FAILED })
        throw err.response
      })
  }
}
