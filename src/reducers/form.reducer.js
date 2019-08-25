export default (state = { phoneNumbers: [], emails: [], selectPhone: '', selectEmail: '', loading: false }, action) => {
  switch (action.type) {
    case 'IS_LOADING':
      return {
        ...state,
        loading: true,
      }
    case 'IS_READY':
      return {
        ...state,
        loading: false,
      }
    case 'ADD_PHONE_NUMBER':
      return {
        ...state,
        phoneNumbers: [
          ...state.phoneNumbers,
          action.payload,
        ],
      }
    case 'ADD_EMAIL':
      return {
        ...state,
        emails: [
          ...state.emails,
          action.payload,
        ],
      }
    default:
      return state
  }
}
