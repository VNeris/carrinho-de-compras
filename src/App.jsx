import React from "react"
import Header  from "./components/Header/Header.jsx"
import Products from "./components/products/products.jsx"
import Provider from "./context/Provider.jsx"
import Cart from "./components/Cart/Cart.jsx"

function App() {

  return (
    <Provider>
      <Header></Header>
      <Products></Products>
      <Cart></Cart>
    </Provider>
  )
}

export default App
