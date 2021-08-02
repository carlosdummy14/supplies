const ACTIONS_ITEMS = {
  GET_ALL: '@items/get_all',
  ADD_ITEM: '@items/add_item',
  UPDATE_ITEMS: '@items/update_items'
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

      return newState
    }

    case ACTIONS_ITEMS.UPDATE_ITEMS:
    {
      const itemsToUpdate = action.payload.map((item) => {
        return {
          id: item.item.id,
          qty: item.qty
        }
      })

      const newState = state.map((item) => {
        const isUpdated = itemsToUpdate.filter(itemToUpdate => itemToUpdate.id === item.id)

        if (isUpdated.length !== 0) {
          return {
            ...item,
            stock: item.stock - isUpdated[0].qty
          }
        }

        return item
      })

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

export const updateStock = (items) => {
  return {
    type: ACTIONS_ITEMS.UPDATE_ITEMS,
    payload: items
  }
}
