import axios from 'axios'
import { actionTypes } from '../actionsTypes'

import { REACT_APP_API_URL } from 'src/config/keys'

export function getSearchResult(params) {
  return (dispatch) => {
    dispatch({ type: actionTypes.NGMUSIC_REQUEST, payload: params })
    return axios
      .get(`${REACT_APP_API_URL}search`, { params })
      .then((response) => {
        dispatch({
          type: actionTypes.NGMUSIC_SUCCESS,
          payload: response?.data?.results,
        })
        return response.data
      })
      .catch((err) => {
        dispatch({ type: actionTypes.NGMUSIC_FAILED })
        throw err.response
      })
  }
}
