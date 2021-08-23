const checkItemsOutStock = (items = [], cart = []) => {
  let acumItemsOutOfStock = []

  cart.forEach(itemCart => {
    const {
      item: { id: cartItemId },
      qty: cartItemQty
    } = itemCart

    const itemOutOfStock = items.find(
      (item) => item.id === cartItemId && cartItemQty > item.stock
    )

    if (itemOutOfStock) {
      acumItemsOutOfStock = [
        ...acumItemsOutOfStock,
        itemOutOfStock.name
      ]
    }
  })

  return acumItemsOutOfStock
}

export default checkItemsOutStock
