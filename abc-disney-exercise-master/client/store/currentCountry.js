// Action Types
const SET_COUNTRY = 'SET_COUNTRY'

// Action Creators
const setCountry = country => ({ type: SET_COUNTRY, country })

// Thunks
export const selectCountry = country => {
  return (dispatch(setCountry(country)))
}

// Reducer (set current country based on URI)
const reducer = (country = null, action) => {
  switch (action.type) {
    case SET_COUNTRY:
      return action.country
    default:
      return country
  }
}

export default reducer
