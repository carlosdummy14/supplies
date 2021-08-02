const ACTIONS_CAR = {
  ADD_ITEM: '@car/add_item',
  DELETE_ITEM: '@car/delete_item',
  EMPTY_CAR: '@car/empty_car',
  INC_ITEM: '@car/inc_item',
  DEC_ITEM: '@car/dec_item'
}

export const carReducer = (state = [], action) => {
  switch (action.type) {
    case ACTIONS_CAR.ADD_ITEM: {
      const isItemInCar = state.find((item) => item.item.id === action.payload.id)
      let newCar = []

      if (!isItemInCar) {
        const newItem = {
          item: action.payload,
          qty: 1
        }

        newCar = [...state, newItem]
      } else {
        newCar = state.map((item) => {
          if (item.item.id === action.payload.id) {
            return {
              ...item,
              qty: item.qty + 1
            }
          }

          return item
        })
      }

      return newCar
    }

    case ACTIONS_CAR.DELETE_ITEM: {
      return state.filter((item) => item.item.id !== action.payload.id)
    }

    case ACTIONS_CAR.EMPTY_CAR: {
      return []
    }

    case ACTIONS_CAR.INC_ITEM: {
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

    case ACTIONS_CAR.DEC_ITEM: {
      return state.map((item) => {
        if (item.item.id === action.payload.id) {
          return {
            ...item,
            // incDec === INC_DEC.DECREMENT && setQuantity(quantity => { return Number(quantity) - 1 < 0 ? 0 : Number(quantity) - 1 })
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

export const addItemCarAction = (item) => {
  return {
    type: ACTIONS_CAR.ADD_ITEM,
    payload: item
  }
}

export const deleteItemCarAction = (item) => {
  return {
    type: ACTIONS_CAR.DELETE_ITEM,
    payload: item
  }
}

export const incrementItem = (item) => {
  return {
    type: ACTIONS_CAR.INC_ITEM,
    payload: item
  }
}

export const decrementItem = (item) => {
  return {
    type: ACTIONS_CAR.DEC_ITEM,
    payload: item
  }
}

export const emptyCar = () => {
  return {
    type: ACTIONS_CAR.EMPTY_CAR
  }
}
