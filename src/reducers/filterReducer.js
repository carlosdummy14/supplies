const ACTIONS_FILTER = {
  SET_FILTER: '@filter/set_filter'
}

const initialState = {
  text: ''
}

export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS_FILTER.SET_FILTER:
      return { ...state, text: action.payload }
    default:
      return state
  }
}

export const setFilterAction = (text) => {
  return {
    type: ACTIONS_FILTER.SET_FILTER,
    payload: text
  }
}
