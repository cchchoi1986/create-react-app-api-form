export const isLoading = () => dispatch => {
  dispatch({ type: 'IS_LOADING' })
}

export const isReady = () => dispatch => {
  dispatch({ type: 'IS_READY' })
}

export const addPhoneNumber = (o) => dispatch => {
  dispatch({
    type: 'ADD_PHONE_NUMBER',
    payload: o,
  })
}

export const addEmail = (e) => dispatch => {
  dispatch({
    type: 'ADD_EMAIL',
    payload: e,
  })
}
