const ACTIONS_CAR = {
  ADD_ITEM: '@car/add_item'
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
