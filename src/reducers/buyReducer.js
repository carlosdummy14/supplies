const ACTIONS_BUY = {
  ADD_ITEM: '@buy/add_item',
  DELETE_ITEM: '@buy/delete_item',
  EMPTY_BUY: '@buy/empty_buy',
  INC_ITEM: '@buy/inc_item',
  DEC_ITEM: '@buy/dec_item'
}

export const buyReducer = (state = [], action) => {
  switch (action.type) {
    case ACTIONS_BUY.ADD_ITEM: {
      const isItemToBuy = state.find((item) => item.name === action.payload.name)
      let newBuy = []

      if (!isItemToBuy) {
        const newItem = {
          name: action.payload.name,
          qty: action.payload.quantity
        }

        newBuy = [...state, newItem]
      } else {
        newBuy = state.map((item) => {
          if (item.name === action.payload.name) {
            return {
              ...item,
              qty: item.qty + action.payload.quantity
            }
          }

          return item
        })
      }

      return newBuy
    }

    case ACTIONS_BUY.DELETE_ITEM: {
      return state.filter((item) => item.name !== action.payload.name)
    }

    case ACTIONS_BUY.EMPTY_BUY: {
      return []
    }

    case ACTIONS_BUY.INC_ITEM: {
      return state.map((item) => {
        if (item.name === action.payload.name) {
          return {
            ...item,
            qty: item.qty + 1
          }
        }

        return item
      })
    }

    case ACTIONS_BUY.DEC_ITEM: {
      return state.map((item) => {
        if (item.name === action.payload.name) {
          return {
            ...item,
            qty: item.qty - 1 < 1 ? 1 : item.qty - 1
          }
        }

        return item
      })
    }

    default:
      return state
  }
}

export const addItemToBuy = (item) => {
  return {
    type: ACTIONS_BUY.ADD_ITEM,
    payload: item
  }
}

export const deleteItemToBuy = (item) => {
  return {
    type: ACTIONS_BUY.DELETE_ITEM,
    payload: item
  }
}

export const incrementItem = (item) => {
  return {
    type: ACTIONS_BUY.INC_ITEM,
    payload: item
  }
}

export const decrementItem = (item) => {
  return {
    type: ACTIONS_BUY.DEC_ITEM,
    payload: item
  }
}

export const emptyBuy = () => {
  return {
    type: ACTIONS_BUY.EMPTY_BUY
  }
}
