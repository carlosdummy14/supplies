const ACTIONS_CART = {
  ADD_ITEM: '@cart/add_item',
  DELETE_ITEM: '@cart/delete_item',
  EMPTY_CART: '@cart/empty_car',
  INC_ITEM: '@cart/inc_item',
  DEC_ITEM: '@cart/dec_item',
  SET_OUT_OF_STOCK: '@cart/set_out_of_stock'
}

export const cartReducer = (state = [], action) => {
  switch (action.type) {
    case ACTIONS_CART.ADD_ITEM: {
      const isItemInCart = state.find((item) => item.item.id === action.payload.id)
      let newCart = []

      if (!isItemInCart) {
        const newItem = {
          item: action.payload,
          qty: 1
        }

        newCart = [...state, newItem]
      } else {
        newCart = state.map((item) => {
          if (item.item.id === action.payload.id) {
            return {
              ...item,
              qty: item.qty + 1
            }
          }

          return item
        })
      }

      return newCart
    }

    case ACTIONS_CART.DELETE_ITEM: {
      return state.filter((item) => item.item.id !== action.payload.id)
    }

    case ACTIONS_CART.EMPTY_CART: {
      return []
    }

    case ACTIONS_CART.INC_ITEM: {
      return state.map((item) => {
        if (item.item.id === action.payload.id) {
          return {
            ...item,
            qty: item.qty + 1
          }
        }

        return item
      })
    }

    case ACTIONS_CART.DEC_ITEM: {
      return state.map((item) => {
        if (item.item.id === action.payload.id) {
          return {
            ...item,
            qty: item.qty - 1 < 1 ? 1 : item.qty - 1
          }
        }

        return item
      })
    }

    case ACTIONS_CART.SET_OUT_OF_STOCK: {
      return state.map((item) => {
        if (action.payload.includes(item.item.name)) {
          return {
            ...item,
            outOfStock: true
          }
        }

        return {
          ...item,
          outOfStock: false
        }
      })
    }

    default:
      return state
  }
}

export const addItemCarAction = (item) => {
  return {
    type: ACTIONS_CART.ADD_ITEM,
    payload: item
  }
}

export const deleteItemCarAction = (item) => {
  return {
    type: ACTIONS_CART.DELETE_ITEM,
    payload: item
  }
}

export const incrementItem = (item) => {
  return {
    type: ACTIONS_CART.INC_ITEM,
    payload: item
  }
}

export const decrementItem = (item) => {
  return {
    type: ACTIONS_CART.DEC_ITEM,
    payload: item
  }
}

export const emptyCart = () => {
  return {
    type: ACTIONS_CART.EMPTY_CART
  }
}

export const setOutOfStock = (itemsOutOfStock) => {
  return {
    type: ACTIONS_CART.SET_OUT_OF_STOCK,
    payload: itemsOutOfStock
  }
}
