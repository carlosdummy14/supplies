const ACTIONS_ITEMS = {
  GET_ALL: '@items/get_all',
  ADD_ITEM: '@items/add_item'
}

export const itemsReducer = (state = [], action) => {
  switch (action.type) {
    case ACTIONS_ITEMS.GET_ALL:
      return action.payload

    case ACTIONS_ITEMS.ADD_ITEM:
    {
      const newState = [
        ...state,
        action.payload
      ]

      console.log({ newState })

      return newState
    }

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

export const addItem = (item) => {
  return {
    type: ACTIONS_ITEMS.ADD_ITEM,
    payload: item
  }
}
