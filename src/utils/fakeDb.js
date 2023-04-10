// add data to local storage

const addDb = (id) => {
  let shoppingCart = {}
  //get previous shopping data for stoarge
  const storedCart = localStorage.getItem("shopping-cart")
  if (storedCart) {
    // shoppingCart= JSON.parse(storedCart)
    shoppingCart = JSON.parse(storedCart)
  }
  // add quanTity products
  const quanTity = shoppingCart[id]
  if (quanTity) {
    const newQuantity = quanTity + 1
    shoppingCart[id]=newQuantity
  } else {
    shoppingCart[id] = 1
  }
  localStorage.setItem('shopping-cart',JSON.stringify(shoppingCart))
}


const getStoredCart = () => {
  let shoppingCart = {}
  //get previous shopping data for stoarge
  const storedCart = localStorage.getItem("shopping-cart")
  if (storedCart) {
    shoppingCart=JSON.parse(storedCart)
  }
  return shoppingCart
}


export { addDb, getStoredCart}
