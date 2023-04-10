import { getStoredCart } from "../utils/fakeDb"

export const productCartData = async () => {
  const productsData = await fetch("products.json")
  const products = await productsData.json()
  const saveCart = getStoredCart()
  let cartArray = []
  for (const id in saveCart) {
    const foundProduct = products.find(pd => pd.id === id)
    if (foundProduct) {
      foundProduct.quantity = saveCart[id]
      cartArray.push(foundProduct)
    }
  }
  return {cartArray, products}
}

