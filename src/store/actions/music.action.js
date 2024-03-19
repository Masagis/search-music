import axios from 'axios'
import { actionTypes } from '../actionsTypes'

import { REACT_APP_API_URL } from 'src/configs/keys'

export function getSearchResult(params) {
  return (dispatch) => {
    dispatch({ type: actionTypes.NGMUSIC_REQUEST })
    return axios
      .get(`${REACT_APP_API_URL}search?term=${params}`)
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
