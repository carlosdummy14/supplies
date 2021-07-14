const ACTIONS_ITEMS = {
  GET_ALL: '@items/get_all'
}

export const itemsReducer = (state = [], action) => {
  switch (action.type) {
    case ACTIONS_ITEMS.GET_ALL:
      return action.payload
    default:
      return state
  }
}

export const getAllItems = (items) => {
  return {
    type: ACTIONS_ITEMS.GET_ALL,
    payload: items
  }
}
